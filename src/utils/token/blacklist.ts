import {
  BlacklistIssuanceToken_t,
  BlacklistRole_t,
} from 'generated/src/db/Entities.gen'
import { eventLog, handlerContext } from 'generated'
import { Writable } from 'type-fest'

export const initBlacklistIssuanceToken = async ({
  event,
  context,
  blacklistIssuanceTokenAddress,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  blacklistIssuanceTokenAddress: string
  properties: Partial<Omit<BlacklistIssuanceToken_t, 'id'>>
  prevData?: BlacklistIssuanceToken_t
}) => {
  const { chainId } = event

  const id = `${chainId}-${blacklistIssuanceTokenAddress}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.BlacklistIssuanceToken.get(
      id
    )) as Writable<BlacklistIssuanceToken_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      address: blacklistIssuanceTokenAddress,

      // workflow_id: properties?.workflow_id!,

      token_id: properties?.token_id!,
      oraclePriceFM_id: properties?.oraclePriceFM_id!,

      manager: properties?.manager || [],
      minter: properties?.minter || [],

      ...properties,
    } satisfies BlacklistIssuanceToken_t)

  // If required fields are present, update the blacklisted token
  if (data.token_id && data.oraclePriceFM_id) {
    context.BlacklistIssuanceToken.set({
      ...data,
      ...properties,
    })
  }
}

export const updateBlacklistIssuanceToken = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<BlacklistIssuanceToken_t, 'id'>>
  prevData?: BlacklistIssuanceToken_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${chainId}-${address}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.BlacklistIssuanceToken.get(
      id
    )) as Writable<BlacklistIssuanceToken_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      address,

      // workflow_id: properties?.workflow_id!,

      token_id: properties?.token_id!,
      oraclePriceFM_id: properties?.oraclePriceFM_id!,
      manager: properties?.manager!,
      minter: properties?.minter!,

      ...properties,
    } satisfies BlacklistIssuanceToken_t)

  // If required fields are present, update the blacklisted token
  if (data.token_id && data.oraclePriceFM_id) {
    context.BlacklistIssuanceToken.set({
      ...data,
      ...properties,
    })
  }
}

export const updateBlacklistedAccount = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<BlacklistRole_t, 'id'>>
  prevData?: BlacklistRole_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${chainId}-${address}-${event.params.account_}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.BlacklistRole.get(id)) as Writable<BlacklistRole_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      token_id: properties?.token_id!,
      recipient: properties?.recipient!,
      initiator: properties?.initiator!,
      status: 'REVOKED',
      timestamp: event.block.timestamp,
      txHash: event.block.hash,

      ...properties,
    } satisfies BlacklistRole_t)

  // If required fields are present, update the blacklisted account
  if (data.recipient && data.token_id) {
    context.BlacklistRole.set({
      ...data,
      ...properties,
    })
  }
}
