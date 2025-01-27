import { expect } from 'chai'
import { describe, it } from 'mocha'

import { createPublicClient, http, parseAbiItem } from 'viem'
import { sepolia } from 'viem/chains'
import { getTotalSupply } from '../src/utils'

const address =
  '0xc530B75465Ce3c6286e718110A7B2e2B64Bdc860'.toLowerCase() as `0x${string}`

const chainId = 1101

const opPublicClient = createPublicClient({
  chain: sepolia,
  transport: http(`https://inverter.web3no.de/main/evm/${chainId}`),
  batch: { multicall: true },
  cacheTime: 60 * 1000, // 1 minute
})

describe('#TOTAL_SUPPLY', () => {
  it('1. Should get the total supply of the token', async () => {
    const totalSupply = await getTotalSupply({
      address,
      chainId,
      decimals: 18,
      client: opPublicClient,
    })

    console.log('totalSupply', totalSupply.toString())

    expect(totalSupply).to.be.not.undefined
  })
})
