import {
  Client as UrqlClient,
  cacheExchange,
  fetchExchange,
  subscriptionExchange,
} from '@urql/core'
import { DEFAULT_GRAPHQL_URL } from './constants'
import { SubscriptionClient } from 'subscriptions-transport-ws'

export class Client {
  private static instance: UrqlClient | null = null
  private static currentUrl: string = DEFAULT_GRAPHQL_URL

  private constructor() {}

  private static createClient(url: string): UrqlClient {
    const websocketUrl = url.replace('https', 'wss')
    const subscriptionClient = new SubscriptionClient(websocketUrl, {})

    return new UrqlClient({
      url: url,
      exchanges: [
        cacheExchange,
        fetchExchange,
        subscriptionExchange({
          forwardSubscription: (operation) =>
            subscriptionClient.request(operation),
        }),
      ],
    })
  }

  public static get(url?: string): UrqlClient {
    // Only use provided URL if no custom URL was previously set
    const targetUrl =
      url && this.currentUrl === DEFAULT_GRAPHQL_URL ? url : this.currentUrl

    if (!this.instance || targetUrl !== this.currentUrl) {
      this.currentUrl = targetUrl
      this.instance = this.createClient(this.currentUrl)
    }
    return this.instance
  }

  public static updateUrl(newUrl: string): UrqlClient {
    return this.get(newUrl)
  }
}
