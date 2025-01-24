import dotenv from 'dotenv'
import { publicAggregationTables } from '../config'

dotenv.config()

const HASURA_ENDPOINT = 'http://localhost:8080/v1/metadata'
const HASURA_ADMIN_SECRET = process.env.HASURA_GRAPHQL_ADMIN_SECRET

async function grantSelectPermissions() {
  for (const table of publicAggregationTables) {
    try {
      // First, drop existing select permission
      await fetch(HASURA_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Hasura-Admin-Secret': HASURA_ADMIN_SECRET!,
        },
        body: JSON.stringify({
          type: 'pg_drop_select_permission',
          args: {
            table,
            source: 'default',
            role: 'public',
          },
        }),
      })

      // Then create new select permission
      const response = await fetch(HASURA_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Hasura-Admin-Secret': HASURA_ADMIN_SECRET!,
        },
        body: JSON.stringify({
          type: 'pg_create_select_permission',
          args: {
            source: 'default',
            table,
            role: 'public',
            permission: {
              columns: '*', // Allow all columns
              filter: {}, // No filter for public access
              allow_aggregations: true,
            },
          },
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      console.log(`Successfully granted permissions for table: ${table}`)
    } catch (error) {
      console.error(
        `Error granting permissions for table ${table}:`,
        error instanceof Error ? error.message : String(error)
      )
    }
  }
}

grantSelectPermissions().catch(console.error)
