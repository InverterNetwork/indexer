import { generateQueryOp } from './gen'
import type {
  query_rootGenqlSelection,
  QueryResult,
  subscription_rootGenqlSelection,
} from './gen'
import { Client } from './client'
import { SubscriptionManager } from './utils'

export type GraphQLQueryArgs = query_rootGenqlSelection & { __name?: string }
export type GraphQLQueryResult<T extends GraphQLQueryArgs> = QueryResult<T>

export const query = async <T extends GraphQLQueryArgs>(
  fields: T
): Promise<GraphQLQueryResult<T>> => {
  const { query, variables } = generateQueryOp(fields)

  const client = Client.get()

  const data = await client.query(query, variables)

  return data.data
}

export type GraphQLSubscriptionArgs = subscription_rootGenqlSelection & {
  __name?: string
}
export type GraphQLSubscriptionResult<T extends GraphQLSubscriptionArgs> =
  SubscriptionManager<T>

export const subscription = async <T extends GraphQLSubscriptionArgs>(
  fields: T
): Promise<GraphQLSubscriptionResult<T>> => {
  const subscriptionManager = SubscriptionManager.getInstance(fields)

  return subscriptionManager
}

export * from './constants'
export { Client }
