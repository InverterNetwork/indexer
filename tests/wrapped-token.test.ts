import { expect, describe, it } from 'bun:test'

import { deriveTokenAddress, getPublicClient } from '../src/utils'
import { parseAbiItem } from 'viem'

const address =
  '0x7E273aCbDF4b6Acb99dc1a3d3801E796E485a291'.toLowerCase() as `0x${string}`

const chainId = 11155111

const opPublicClient = getPublicClient(chainId)

describe('#DERIVE_TOKEN_ADDRESS', () => {
  it('1. Should derive a token address by running steps', async () => {
    const issuanceTokenAbi = [
      parseAbiItem('function issuanceToken() view returns (address)'),
    ]
    const getIssuanceTokenAbi = [
      parseAbiItem('function getIssuanceToken() view returns (address)'),
    ]

    const tokenAbi = [parseAbiItem('function token() view returns (address)')]

    let success = false

    try {
      if (!opPublicClient) {
        throw new Error('OP public client not found')
      }

      try {
        await opPublicClient.readContract({
          address: address,
          abi: issuanceTokenAbi,
          functionName: 'issuanceToken',
        })
        success = true
        console.info('FUNC FOUND: issuanceToken')
      } catch {
        console.error('FUNC NOT FOUND: issuanceToken')
      }

      try {
        await opPublicClient.readContract({
          address: address,
          abi: getIssuanceTokenAbi,
          functionName: 'getIssuanceToken',
        })
        success = true
        console.info('FUNC FOUND: getIssuanceToken')
      } catch {
        console.error('FUNC NOT FOUND: getIssuanceToken')
      }

      try {
        await opPublicClient.readContract({
          address: address,
          abi: tokenAbi,
          functionName: 'token',
        })
        success = true
        console.info('FUNC FOUND: token')
      } catch {
        console.error('FUNC NOT FOUND: token')
      }

      try {
        await opPublicClient.readContract({
          address: address,
          abi: [parseAbiItem('function decimals() view returns (uint8)')],
          functionName: 'decimals',
        })
        success = true
        console.info('FUNC FOUND: decimals')
      } catch {
        console.error('FUNC NOT FOUND: decimals')
      }

      try {
        await opPublicClient.readContract({
          address: address,
          abi: [parseAbiItem('function name() view returns (string)')],
          functionName: 'name',
        })
        success = true
        console.info('FUNC FOUND: name')
      } catch {
        console.error('FUNC NOT FOUND: name')
      }

      try {
        await opPublicClient.readContract({
          address: address,
          abi: [parseAbiItem('function symbol() view returns (string)')],
          functionName: 'symbol',
        })
        success = true
        console.info('FUNC FOUND: symbol')
      } catch {
        console.error('FUNC NOT FOUND: symbol')
      }

      try {
        await opPublicClient.readContract({
          address: address,
          abi: [parseAbiItem('function totalSupply() view returns (uint256)')],
          functionName: 'totalSupply',
        })
        success = true
        console.info('FUNC FOUND: totalSupply')
      } catch {
        console.error('FUNC NOT FOUND: totalSupply')
      }
    } catch (error: any) {
      console.error(error?.message ?? error?.cause ?? error)
    }

    expect(success).toBe(true)
  })

  it('2. Should derive a token address by using the derived token util', async () => {
    const { derivedAddress, derivedType } = await deriveTokenAddress({
      address,
      chainId,
      client: opPublicClient,
      //   singleType: 'issuance',
    })

    console.info('DERIVED ADDRESS: ', derivedAddress)
    console.info('DERIVED TYPE: ', derivedType)

    expect(derivedAddress.toLowerCase()).not.toBe(address)
  })
})
