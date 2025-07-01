import { describe, expect, it } from 'bun:test'
import { formatUnitsToBD, getIssPriceFromCol, getPublicClient } from './utils'
import { BigDecimal } from './utils'

describe('#GET_COLLATERAL_PRICE', () => {
  // CONSTANTS
  // --------------------------------------------------
  const POL_PRICE_USD = BigDecimal('0.176')
  const fm_address = '0x4b2502ad254855AC83990998695c6fD16c2CeeD9' as const

  const publicClient = getPublicClient(137)!

  const getStaticPriceForBuyingAbi = [
    {
      type: 'function',
      name: 'getStaticPriceForBuying',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
  ] as const

  // VARIABLES
  // --------------------------------------------------

  it(`1. Should get the collateral price in correct format`, async () => {
    const staticPriceForBuyingInPPM = await publicClient.readContract({
      address: fm_address,
      abi: getStaticPriceForBuyingAbi,
      functionName: 'getStaticPriceForBuying',
    })

    console.log(
      'staticPriceForBuyingInPPM',
      staticPriceForBuyingInPPM.toString()
    )

    const priceCOL = BigDecimal(`${staticPriceForBuyingInPPM}`).div(1000000)

    console.log('priceCOL', priceCOL.toString())

    const priceISS = getIssPriceFromCol(priceCOL, POL_PRICE_USD)

    console.log('priceISS', priceISS.toString())

    expect(priceISS.toNumber()).toBeGreaterThan(0.05)
  })
})
