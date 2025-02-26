import { expect } from 'chai'
import { describe, it } from 'mocha'

import { query, Client } from '../src'

const url = 'https://indexer.dev.hyperindex.xyz/5b84e4c/v1/graphql'

Client.updateUrl(url)

describe('#GET_TOKEN', () => {
  it('1. Should query for sum of totalSupply', async () => {
    const tokens = await query({
      Token_aggregate: {
        aggregate: {
          avg: {
            totalSupply: 1,
          },
        },
      },
    })

    const totalSupply = tokens.Token_aggregate.aggregate?.avg?.totalSupply

    console.log(`Token totalSupply avg result: ${totalSupply}`)

    expect(totalSupply).to.not.be.undefined
  })
})
