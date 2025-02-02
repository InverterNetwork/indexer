import {
  Client as UrqlClient,
  cacheExchange,
  fetchExchange,
  subscriptionExchange,
} from '@urql/core'
import { DEFAULT_GRAPHQL_URL } from './constants'
import { createClient as createWSClient } from 'graphql-ws'

export class Client {
  private static instance: UrqlClient | null = null
  private static currentUrl: string = DEFAULT_GRAPHQL_URL
  private static prevUrl: string = DEFAULT_GRAPHQL_URL
  private static wsClient: any = null

  private constructor() {}

  private static createClient(url: string): UrqlClient {
    const websocketUrl = url.replace('https', 'wss')

    this.wsClient = createWSClient({
      url: websocketUrl,
      retryAttempts: 5,
    })

    return new UrqlClient({
      url: url,
      exchanges: [
        cacheExchange,
        fetchExchange,
        subscriptionExchange({
          forwardSubscription: (operation) => this.wsClient.request(operation),
        }),
      ],
    })
  }

  public static get(): UrqlClient {
    if (!this.instance || this.currentUrl !== this.prevUrl) {
      this.instance = this.createClient(this.currentUrl)
      this.prevUrl = this.currentUrl
    }
    return this.instance
  }

  public static updateUrl(newUrl: string): UrqlClient {
    this.currentUrl = newUrl
    return this.get()
  }
}
