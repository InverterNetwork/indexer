import { expect } from 'chai'
import { describe, it } from 'mocha'

import {
  coinGeckoChainIds,
  setGeckotermAPIConfig,
  getSimpleNetworksByNetworkTokenPriceByAddresses,
} from 'geckoterm'
import type { simple_token_price } from 'geckoterm'
import { ZERO_BD } from '../src/utils'
import { BigDecimal } from 'generated'

setGeckotermAPIConfig({
  baseUrl: 'https://api.geckoterminal.com/api/v2',
  // Replace with your API key / if you have one
  headers: {
    Authorization: `Bearer ${process.env.GECKOTERM_API_KEY}`,
  },
})

describe('#GET_GECKOTERM_SIMPLE_PRICE', () => {
  it('1. Should query for a token', async () => {
    const chainLabel = coinGeckoChainIds?.[1101]
    const address = '0x22B21BedDef74FE62F031D2c5c8F7a9F8a4b304D'.toLowerCase()
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
    }

    console.log(`USD price: ${usdPrice.toString()}`)

    expect(usdPrice.gt(ZERO_BD)).to.be.true
  })
})
