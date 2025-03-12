import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

//===============================================================================
// CONSTANTS & CONFIGURATION
//===============================================================================

// Parse command line arguments
const isPre = process.argv[2] === 'pre'
const isDryRun = process.argv[3] === '--dry-run'

// File paths
const SCHEMA_PATH = path.join(__dirname, '../schema.graphql')
const BACKUP_PATH = path.join(__dirname, '../schema.graphql.bak')

//===============================================================================
// FILE OPERATIONS
//===============================================================================

/**
 * Reads the schema file from disk
 */
function readSchemaFile() {
  return fs.readFileSync(SCHEMA_PATH, 'utf8')
}

/**
 * Creates a backup of the original schema
 * @param schemaContent The schema content to backup
 */
function createBackup(schemaContent: string) {
  if (!isDryRun) {
    fs.writeFileSync(BACKUP_PATH, schemaContent, 'utf8')
    console.log('Backup created successfully')
  }
}

/**
 * Writes the expanded schema to disk
 * @param expandedSchema The processed schema to write
 */
function writeExpandedSchema(expandedSchema: string) {
  if (isDryRun) {
    console.log('Dry run - Schema would be expanded to:')
    console.log(expandedSchema)
  } else {
    fs.writeFileSync(SCHEMA_PATH, expandedSchema, 'utf8')
    console.log('Schema expanded successfully')
  }
}

/**
 * Restores the original schema from backup
 */
function restoreFromBackup() {
  fs.writeFileSync(SCHEMA_PATH, fs.readFileSync(BACKUP_PATH, 'utf8'), 'utf8')
  console.log('Original schema restored from backup')
}

/**
 * Removes the backup file
 */
function removeBackup() {
  if (!isDryRun) {
    fs.unlinkSync(BACKUP_PATH)
    console.log('Backup removed')
  }
}

//===============================================================================
// SCHEMA PROCESSING
//===============================================================================

/**
 * Extracts all type and interface definitions from the schema
 * @param schema The GraphQL schema as string
 * @returns Map of type names to their body content
 */
function extractTypeDefinitions(schema: string) {
  const typeDefinitions = new Map()
  // Match both type and interface definitions
  const typeRegex = /(type|interface)\s+(\w+)(?:\s+@entity)?\s*\{([^}]+)\}/gs
  let typeMatch

  while ((typeMatch = typeRegex.exec(schema)) !== null) {
    const typeKind = typeMatch[1] // 'type' or 'interface'
    const typeName = typeMatch[2] // The name of the type/interface
    const typeBody = typeMatch[3] // The body content between { }

    typeDefinitions.set(typeName, typeBody)
    console.log(`Found ${typeKind}: ${typeName}`)
  }

  return typeDefinitions
}

/**
 * Resolves all interface spreads within interface definitions
 * @param typeDefinitions Map of type names to their body content
 * @returns Updated map with resolved interface spreads
 */
function resolveInterfaceSpreads(typeDefinitions: Map<string, string>) {
  for (const [typeName, typeBody] of typeDefinitions.entries()) {
    if (typeBody.includes('...')) {
      console.log(`Resolving spreads within ${typeName}`)
      let resolvedBody = typeBody
      let previousBody = ''

      // Keep resolving spreads until no more changes occur
      while (previousBody !== resolvedBody) {
        previousBody = resolvedBody
        resolvedBody = resolvedBody.replace(
          /\.\.\.(\w+)/g,
          (match, spreadTypeName) => {
            console.log(
              `  Resolving spread of ${spreadTypeName} within ${typeName}`
            )
            const spreadTypeBody = typeDefinitions.get(spreadTypeName)
            if (!spreadTypeBody) {
              console.log(
                `  Warning: Type ${spreadTypeName} not found for spread replacement in ${typeName}`
              )
              return match
            }
            return spreadTypeBody
          }
        )
      }

      // Update the fully resolved interface in the typeDefinitions map
      typeDefinitions.set(typeName, resolvedBody)
      console.log(`Updated ${typeName} with resolved spreads`)
    }
  }

  return typeDefinitions
}

/**
 * Creates a function to replace all spread patterns in the schema
 * @param typeDefinitions Map of type names to their body content
 * @returns Function that replaces spreads in the provided schema
 */
function createSpreadReplacer(typeDefinitions: Map<string, string>) {
  return (schema: string) => {
    // Find all instances of ...TypeName and replace with the actual fields
    return schema.replace(/\.\.\.(\w+)/g, (match: string, typeName: string) => {
      console.log(`Replacing spread of ${typeName}`)

      const typeBody = typeDefinitions.get(typeName)
      if (!typeBody) {
        console.log(
          `Warning: Type ${typeName} not found for spread replacement`
        )
        return match
      }

      // Find the indentation of the spread pattern
      const lines = schema.split('\n')
      const spreadLine = lines.findIndex((line) => line.includes(match))

      if (spreadLine === -1) return typeBody // Fallback if we can't find the line

      // Extract the indentation from the line containing the spread
      const lineText = lines[spreadLine]
      const indentMatch = lineText.match(/^\s+/)
      const indentation = indentMatch ? indentMatch[0] : '  '

      // Add proper indentation to each line of the type body
      return typeBody
        .split('\n')
        .map((line) => {
          if (line.trim().length === 0) return line // Keep empty lines as is
          return indentation + line.trim() // Add correct indentation to content
        })
        .join('\n')
    })
  }
}

/**
 * Repeatedly apply spread replacements until no changes are made
 * @param schema The GraphQL schema as string
 * @param replaceAllSpreads Function to replace spreads
 * @returns Expanded schema with all spreads replaced
 */
function replaceAllSpreadsUntilStable(
  schema: string,
  replaceAllSpreads: (schema: string) => string
) {
  let expandedSchema = schema
  let previousSchema = ''

  while (previousSchema !== expandedSchema) {
    previousSchema = expandedSchema
    expandedSchema = replaceAllSpreads(expandedSchema)
  }

  return expandedSchema
}

/**
 * Removes all interface definitions after spreads have been replaced
 * @param schema The GraphQL schema as string
 * @returns Schema without interface definitions
 */
function removeInterfaceDefinitions(schema: string) {
  const cleanedSchema = schema.replace(/interface\s+\w+\s*\{[^}]+\}/gs, '')
  console.log('Removed interface definitions from schema')
  return cleanedSchema
}

/**
 * Runs the envio codegen command
 * @returns True if successful, false if failed
 */
function runCodegen() {
  try {
    console.log('Running pnpm x envio codegen')
    execSync('pnpm exec envio codegen', { stdio: 'inherit' })
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

//===============================================================================
// MAIN HANDLERS
//===============================================================================

/**
 * Handles pre-codegen schema processing
 */
const handlePre = () => {
  // Read the original schema
  const orgSchema = readSchemaFile()

  // Create backup of original schema
  createBackup(orgSchema)

  try {
    // Extract all type and interface definitions
    const typeDefinitions = extractTypeDefinitions(orgSchema)

    // Resolve interface spreads within definitions
    const resolvedTypeDefinitions = resolveInterfaceSpreads(typeDefinitions)

    // Create function to replace spreads
    const replaceAllSpreads = createSpreadReplacer(resolvedTypeDefinitions)

    // Apply spread replacements until no more changes are made
    let expandedSchema = replaceAllSpreadsUntilStable(
      orgSchema,
      replaceAllSpreads
    )

    // Remove all interface definitions
    expandedSchema = removeInterfaceDefinitions(expandedSchema)

    // Write the expanded schema
    writeExpandedSchema(expandedSchema)

    // Run codegen if not in dry run mode
    if (!isDryRun) {
      const success = runCodegen()
      if (!success) {
        // Restore the original schema on failure
        restoreFromBackup()
        process.exit(1)
      }
    }
  } catch (error) {
    console.error('Error during schema processing:', error)
    if (!isDryRun) {
      restoreFromBackup()
    }
    process.exit(1)
  }
}

/**
 * Handles post-codegen cleanup
 */
const handlePost = () => {
  // Restore original schema and clean up
  restoreFromBackup()
  removeBackup()
}

//===============================================================================
// MAIN EXECUTION
//===============================================================================

if (isPre) {
  handlePre()
} else {
  handlePost()
}
