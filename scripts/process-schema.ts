import fs from 'fs'
import { buildSchema, printSchema } from 'graphql'

// Define complete scalar types and directives
const commonDefs = `
  "Represents a large integer value"
  scalar BigInt

  "Represents a high-precision decimal value"
  scalar BigDecimal

  "Marks a type as an entity that should be stored"
  directive @entity on OBJECT

  "Defines a relationship field that is derived from another field"
  directive @derivedFrom(field: String!) on FIELD_DEFINITION
`

try {
  const schemaContent = fs.readFileSync('./schema.graphql', 'utf8')

  const typeDefs = `
    ${commonDefs}
    ${schemaContent}
  `

  const schema = buildSchema(typeDefs)

  // Write processed schema to a temporary file using printSchema
  fs.writeFileSync('./processed-schema.graphql', printSchema(schema))
} catch (error) {
  console.error('Error processing schema:', error)
  process.exit(1)
}
