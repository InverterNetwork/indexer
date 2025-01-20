import { expect } from 'chai'
import { describe, it } from 'mocha'

import { query, Client } from '../src'

const url = 'http://localhost:8080/v1/graphql'

Client.updateUrl(url)

describe('#GET_TOKEN', () => {
  it('1. should be a token', async () => {
    const tokens = await query({
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
        address: 1,
        name: 1,
        decimals: 1,
        symbol: 1,
        totalSupply: 1,
      },
    })

    const token = tokens.Token.at(0)

    console.log(token)

    expect(token).to.have.keys([
      'address',
      'name',
      'decimals',
      'symbol',
      'totalSupply',
      '__typename',
    ])
  })
})
