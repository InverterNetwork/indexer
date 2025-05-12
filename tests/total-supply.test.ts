import { expect, describe, it } from 'bun:test'
import { getPublicClient, getTotalSupply } from '../src/utils'

const address =
  '0xc530B75465Ce3c6286e718110A7B2e2B64Bdc860'.toLowerCase() as `0x${string}`

const chainId = 1101

const opPublicClient = getPublicClient(chainId)

describe('#TOTAL_SUPPLY', () => {
  it('1. Should get the total supply of the token', async () => {
    const totalSupply = await getTotalSupply({
      address,
      chainId,
      decimals: 18,
      client: opPublicClient,
    })

    console.log('totalSupply', totalSupply.toString())

    expect(totalSupply).toBeDefined()
  })
})
