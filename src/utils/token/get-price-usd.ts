import {
  getSimpleNetworksByNetworkTokenPriceByAddresses,
  setGeckotermAPIConfig,
  coinGeckoChainIds,
} from 'geckoterm'
import { BigDecimal } from 'generated'
import { getPublicClient } from '../rpc'

import type { simple_token_price } from 'geckoterm'
import { CacheContainer } from 'node-ts-cache'
import { NodeFsStorage } from 'node-ts-cache-storage-node-fs'
import { ZERO_BD } from '..'
import { createDirIfNotExists } from '../base'
const longTermCacheDir = createDirIfNotExists('.cache')

const midTermUsdPriceCache = new CacheContainer(
  new NodeFsStorage(`${longTermCacheDir}/usd-price.json`)
)

setGeckotermAPIConfig({
  baseUrl: 'https://api.geckoterminal.com/api/v2',
  // Replace with your API key / if you have one
  headers: {
    Authorization: `Bearer ${process.env.GECKOTERM_API_KEY}`,
  },
})

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
        addresses: address,
        network: chainLabel,
      },
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
      `Failed to get USD price for ${address} at ${chainLabel}:`,
      error?.message ?? error?.cause ?? error
    )
  }

  await midTermUsdPriceCache.setItem(cacheKey, usdPrice.toString(), {
    ttl: 10 * 60 * 1000, // 10 minutes
  })

  return usdPrice
}
