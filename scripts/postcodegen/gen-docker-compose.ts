import * as fs from 'fs'
import * as yaml from 'yaml'
import * as path from 'path'
import { merge } from 'lodash'

async function mergeDockerComposeFiles() {
  try {
    // Get current working directory
    const cwd = process.cwd()

    // Read the base docker-compose.yaml file
    const baseCompose = yaml.parse(
      fs.readFileSync(path.join(cwd, 'docker-compose.yaml'), 'utf8')
    ) as Record<string, any>

    // Read the generated docker-compose.yaml file
    const generatedCompose = yaml.parse(
      fs.readFileSync(path.join(cwd, 'generated/docker-compose.yaml'), 'utf8')
    ) as Record<string, any>

    // Merge only the services section
    const mergedServices = merge(
      {},
      generatedCompose.services || {},
      baseCompose.services || {}
    )

    // Create the final config, preserving other top-level keys from generated compose
    const mergedConfig = {
      ...generatedCompose,
      services: mergedServices,
    }

    // Write the merged configuration to the generated file
    fs.writeFileSync(
      path.join(cwd, 'generated/docker-compose.yaml'),
      yaml.stringify(mergedConfig, { indent: 2 })
    )

    console.log('Successfully merged docker-compose files')
  } catch (error) {
    console.error('Error merging docker-compose files:', error)
    process.exit(1)
  }
}

mergeDockerComposeFiles()
