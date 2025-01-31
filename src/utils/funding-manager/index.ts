import { Swap_t, Token_t } from 'generated/src/db/Entities.gen'
import { eventLog, handlerContext } from 'generated'
import { ZERO_BD } from '../constants'
import { formatUnitsToBD } from '../base'
import { MARKET_DEBUG } from '../debug'

export * from './bonding-curve'
export * from './oracle-price'
export * from './fee'

export const getQtyAndPrice = (
  iss: bigint,
  coll: bigint,

  issuanceToken?: Token_t,
  collateralToken?: Token_t
) => {
  const cDecimals = collateralToken?.decimals
  const iDecimals = issuanceToken?.decimals

  const amountCOL = formatUnitsToBD(coll, cDecimals)
  const amountISS = formatUnitsToBD(iss, iDecimals)

  let priceCOL = amountCOL.div(amountISS)
  if (priceCOL.isNaN()) priceCOL = ZERO_BD

  if (amountCOL.isNaN() || amountISS.isNaN() || priceCOL.isNaN()) {
    MARKET_DEBUG()(
      `getQtyAndPrice has NaN -> amountCOL: ${amountCOL.toString()}, amountISS: ${amountISS.toString()}, priceCOL: ${priceCOL.toString()}`
    )
  }

  return { amountISS, amountCOL, priceCOL }
}

export const createSwap = async ({
  event,
  context,
  properties,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Omit<Swap_t, 'id' | 'chainId'>
}) => {
  const chainId = event.chainId
  const id = `${event.block.hash}-${event.logIndex}`

  const swap = { id, chainId, ...properties }

  context.Swap.set(swap)

  return swap
}
