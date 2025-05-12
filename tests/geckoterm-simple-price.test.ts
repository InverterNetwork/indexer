import { expect, describe, it } from 'bun:test'
import {
  coinGeckoChainIds,
  setGeckotermAPIConfig,
  getSimpleNetworksByNetworkTokenPriceByAddresses,
} from 'geckoterm'
import type { simple_token_price } from 'geckoterm'
import { BigDecimal, ZERO_BD } from './utils'

setGeckotermAPIConfig({
  baseUrl: 'https://api.geckoterminal.com/api/v2',
  // Replace with your API key / if you have one
  headers: {
    Authorization: `Bearer ${process.env.GECKOTERM_API_KEY}`,
  },
})

describe('#GECKOTERM_SIMPLE_PRICE', () => {
  it('Should fetch token price from Geckoterm API', async () => {
    const chainLabel = coinGeckoChainIds?.[137]
    const address = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    let usdPrice = ZERO_BD

    try {
      const result = await getSimpleNetworksByNetworkTokenPriceByAddresses({
        path: {
          addresses: address,
          network: chainLabel,
        },
      })

      console.log(`Result: ${JSON.stringify(result, null, 2)}`)

      if (result.error) {
        throw result.error
      }

      const singleToken = (
        result.data.data as unknown as simple_token_price | undefined
      )?.attributes?.token_prices?.[address] as string | undefined

      if (singleToken) {
        usdPrice = BigDecimal(singleToken)
      }
    } catch (error: any) {
      console.error(
        `Failed to get USD price for ${address} at ${chainLabel}:`,
        error?.message ?? error?.cause ?? error
      )
      throw error // Re-throw to fail the test
    }

    console.log(`USD price: ${usdPrice.toString()}`)

    // Assert that USD price is greater than zero
    expect(usdPrice.gt(ZERO_BD)).toBe(true)
  })
})
