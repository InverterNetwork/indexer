export * from './token'
export * from './interval-updates'
export * from './funding-manager'
export * from './constants'
export * from './factory'

import { keccak256 } from 'viem'
import { moduleTitles } from './constants'
import {
  Address,
  erc20Abi,
  erc20Abi_bytes32,
  createPublicClient,
  http,
  Chain,
} from 'viem'

import {
  optimismSepolia,
  polygonAmoy,
  baseSepolia,
  gnosisChiado,
  polygonZkEvm,
  polygonZkEvmCardona,
} from 'viem/chains'

export const getERC20Contract = (address: Address) => ({
  address: address as `0x${string}`,
  abi: erc20Abi,
})

export const getERC20BytesContract = (address: Address) => ({
  address: address as `0x${string}`,
  abi: erc20Abi_bytes32,
})

export const getModuleTitleFromId = (hash: `0x${string}`) =>
  moduleTitles.find((title) => keccak256(title as `0x${string}`) === hash)

export const NULL_ETH_HEX_STRING =
  '0x0000000000000000000000000000000000000000000000000000000000000001'

export function isNullEthValue(value: string): boolean {
  return value == NULL_ETH_HEX_STRING
}

export const getDayID = (timestamp: number) => Math.floor(timestamp / 86400) // rounded

export const getDayStartTimestamp = (dayID: number) => dayID * 86400

export const getHourIndex = (timestamp: number) => Math.floor(timestamp / 3600) // get unique hour within unix history

export const getHourStartUnix = (hourIndex: number) => hourIndex * 3600 // want the rounded effect

export const chains = [
  optimismSepolia,
  polygonAmoy,
  baseSepolia,
  gnosisChiado,
  polygonZkEvm,
  polygonZkEvmCardona,
]

export const publicClients = chains.map((chain) =>
  createPublicClient({
    chain: chain as Chain,
    transport: http(`https://inverter.web3no.de/main/evm/${chain.id}`),
    batch: { multicall: true },
  })
)

export const getPublicClient = (chainId: number) =>
  publicClients.find((client) => client.chain.id === chainId)
