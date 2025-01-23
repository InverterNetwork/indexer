import { existsSync, copyFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const cwd = process.cwd()
const sourceEnv = join(cwd, '.env')
const targetDir = join(cwd, 'generated')
const targetEnv = join(targetDir, '.env')

// Only copy if source .env exists
if (existsSync(sourceEnv)) {
  copyFileSync(sourceEnv, targetEnv)
}
