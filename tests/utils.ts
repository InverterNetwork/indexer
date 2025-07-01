import BigNumber from 'bignumber.js'
import { createPublicClient, http, formatUnits } from 'viem'
import type { Chain } from 'viem'

import {
  optimismSepolia,
  polygonAmoy,
  baseSepolia,
  gnosisChiado,
  polygonZkEvm,
  polygonZkEvmCardona,
  sepolia,
  polygon,
} from 'viem/chains'

// Implementation of BigDecimal to avoid dependency on 'generated'
export const BigDecimal = (value: string | number | BigNumber): BigNumber => {
  return new BigNumber(value)
}

// Implementation of ZERO_BD to avoid dependency on '../src/utils'
export const ZERO_BD = BigDecimal('0')
export const ONE_BD = BigDecimal('1')

export const formatUnitsToBD = (
  value: number | string | bigint,
  decimals?: number
) => {
  if (!decimals) return ZERO_BD

  const result = BigDecimal(formatUnits(BigInt(value), decimals))

  return result
}

export const getIssPriceFromCol = (
  // @ts-expect-error - BigDecimal is not a number
  priceCOL?: BigDecimal | number,
  // @ts-expect-error - BigDecimal is not a number
  colPriceUSD?: BigDecimal | number
) => {
  if (typeof priceCOL === 'number') {
    priceCOL = BigDecimal(priceCOL)
  }

  if (typeof colPriceUSD === 'number') {
    colPriceUSD = BigDecimal(colPriceUSD)
  }

  return (priceCOL ?? ZERO_BD).times(colPriceUSD ?? ZERO_BD)
}

export const chains = [
  optimismSepolia,
  polygonAmoy,
  baseSepolia,
  gnosisChiado,
  polygonZkEvm,
  polygonZkEvmCardona,
  sepolia,
  polygon,
]

export const publicClients = chains.map((chain) =>
  createPublicClient({
    chain: chain as Chain,
    transport: http(`https://rpc.inverter.network/main/evm/${chain.id}`),
    batch: { multicall: true },
    cacheTime: 60 * 1000, // 1 minute
  })
)

export const getPublicClient = (chainId: number) =>
  publicClients.find((client) => client.chain.id === chainId)
