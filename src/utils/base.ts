import fs from 'fs'
import path from 'path'

import { formatUnits, keccak256 } from 'viem'
import { moduleTitles, ZERO_BD } from './constants'
import { BigDecimal } from 'generated'
import { MARKET_DEBUG } from './debug'

export function createDirIfNotExists(dir: string) {
  const fullPath = path.join(process.cwd(), dir)
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true })
  }

  return fullPath
}

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

export const formatUnitsToBD = (
  value: number | string | bigint,
  decimals?: number
) => {
  if (!decimals) return ZERO_BD

  const result = BigDecimal(formatUnits(BigInt(value), decimals))

  if (result.isNaN()) {
    MARKET_DEBUG()(
      `formatUnitsToBD is NaN -> value: ${value}, decimals: ${decimals}`
    )
  }

  return result
}
