import dotenv from 'dotenv'
import {
  getSimpleNetworksByNetworkTokenPriceByAddresses,
  setGeckotermAPIConfig,
  coinGeckoChainIds,
} from 'geckoterm'
import { BigDecimal } from 'generated'
import { getPublicClient } from '../rpc'
import * as nodeFetch from 'node-fetch'

import type { simple_token_price } from 'geckoterm'
import { CacheContainer } from 'node-ts-cache'
import { NodeFsStorage } from 'node-ts-cache-storage-node-fs'
import { ZERO_BD } from '..'
import { createDirIfNotExists } from '../base'

dotenv.config()

const longTermCacheDir = createDirIfNotExists('.cache')

const midTermUsdPriceCache = new CacheContainer(
  new NodeFsStorage(`${longTermCacheDir}/usd-price.json`)
)

const BASE_URL = 'https://api.geckoterminal.com/api/v2'

// Make sure we're using an absolute URL with protocol
setGeckotermAPIConfig({
  baseUrl: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.GECKOTERM_API_KEY || ''}`,
  },
})

/**
 * Ensures a URL is absolute by prepending the base URL if needed
 * @param url - URL or path to make absolute
 * @param baseUrl - Base URL to prepend if needed
 * @returns Absolute URL
 */
function ensureAbsoluteUrl(url: string, baseUrl: string): string {
  if (url.startsWith('http')) {
    return url
  }
  return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`
}

/**
 * Creates a fetch implementation that properly handles URL objects and ensures all URLs are absolute
 * This fixes issues with pnpm's node-fetch and relative URLs
 * @param baseUrl - Base URL to use for relative paths
 * @returns A fetch implementation compatible with the geckoterm API
 */
function createCompatibleFetch(baseUrl: string) {
  return async (
    url: string | Request,
    init?: RequestInit
  ): Promise<Response> => {
    // Extract the actual endpoint path
    let finalUrl: string

    if (typeof url === 'string') {
      finalUrl = ensureAbsoluteUrl(url, baseUrl)
    } else {
      // For Request objects, try to extract the intended URL
      const requestObj = url as any

      // Handle different request object structures
      if (requestObj.url) {
        finalUrl = ensureAbsoluteUrl(requestObj.url, baseUrl)
      } else if (requestObj.path) {
        finalUrl = ensureAbsoluteUrl(requestObj.path, baseUrl)
      } else {
        // Last resort, construct from base + toString
        const urlStr = requestObj.toString().replace('[object Request]', '')
        finalUrl = ensureAbsoluteUrl(urlStr, baseUrl)
      }
    }

    // Use the properly constructed URL with node-fetch
    const response = await nodeFetch.default(
      finalUrl,
      init as nodeFetch.RequestInit
    )

    // Convert node-fetch Response to standard Response
    return response as unknown as Response
  }
}

export async function getPriceUSD({
  address,
  chainId,
  client = getPublicClient(chainId),
}: {
  address: string
  chainId: number
  client?: ReturnType<typeof getPublicClient>
}): Promise<BigDecimal> {
  const cacheKey = `${address.toLowerCase()}-${chainId}`
  const chainLabel = coinGeckoChainIds?.[chainId]
  let usdPrice = ZERO_BD

  if (!client || !chainLabel || client.chain.testnet === true) {
    return usdPrice
  }

  const cachedUsdPrice = await midTermUsdPriceCache.getItem<string>(cacheKey)

  if (cachedUsdPrice) {
    return BigDecimal(cachedUsdPrice)
  }

  try {
    const result = await getSimpleNetworksByNetworkTokenPriceByAddresses({
      path: {
        addresses: address.toLowerCase(),
        network: chainLabel,
      },
      fetch: createCompatibleFetch(BASE_URL),
    })

    if (result.error) {
      throw result.error
    }

    const singleToken = (
      result.data.data as unknown as simple_token_price | undefined
    )?.attributes?.token_prices?.[address.toLowerCase()] as string | undefined

    if (singleToken) {
      usdPrice = BigDecimal(singleToken)
    }
  } catch (error: any) {
    console.error(
      `Failed to get USD price for ${address} at ${chainLabel}, API Key: ${process.env.GECKOTERM_API_KEY?.slice(0, 4)}...`,
      error
    )
  }

  await midTermUsdPriceCache.setItem(cacheKey, usdPrice.toString(), {
    ttl: 10 * 60 * 1000, // 10 minutes
  })

  return usdPrice
}
