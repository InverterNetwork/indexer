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
