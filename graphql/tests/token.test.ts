import { expect } from 'chai'
import { describe, it } from 'mocha'

import { query, Client, subscription } from '../src'
import type { Token } from '../src'

const url = 'http://localhost:8080/v1/graphql'

Client.updateUrl(url)

describe('#GET_TOKEN', () => {
  it('1. Should query for a token', async () => {
    const tokens = await query(fields)

    const token = tokens.Token.at(0)

    console.log(`Token query result: ${token}`)

    expect(token).to.have.keys(haveKeys)
  })

  it('2. Should subscribe to a token', async () => {
    const sub = subscription(fields)

    let token: Omit<
      Token,
      'db_write_timestamp' | 'id' | 'priceUSD' | 'marketCapUSD'
    > | null = null

    sub.addCallback((result) => {
      token = result.Token.at(0) ?? null
      console.log(`Token subscription result: ${token}`)
    })

    // wait for 100 ms
    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(token).to.have.keys(haveKeys)
  })
})

const fields = {
  Token: {
    __args: {
      where: {
        address: {
          _eq: '0x961bB3932A7efAa9aDcc7409e1fea090479E8312',
        },
        chainId: {
          _eq: 1101,
        },
      },
    },
    chainId: 1,
    address: 1,
    name: 1,
    decimals: 1,
    symbol: 1,
    totalSupply: 1,
    __typename: 1,
  },
} as const

const haveKeys = [
  'chainId',
  'address',
  'name',
  'decimals',
  'symbol',
  'totalSupply',
  '__typename',
]
