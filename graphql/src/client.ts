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

  private constructor() {}

  private static createClient(url: string): UrqlClient {
    const websocketUrl = url.replace('https', 'wss')
    const wsClient = createWSClient({
      url: websocketUrl,
    })

    return new UrqlClient({
      url: url,
      exchanges: [
        cacheExchange,
        fetchExchange,
        subscriptionExchange({
          forwardSubscription(request) {
            const input = { ...request, query: request.query || '' }
            return {
              subscribe(sink) {
                const unsubscribe = wsClient.subscribe(input, sink)
                return { unsubscribe }
              },
            }
          },
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
