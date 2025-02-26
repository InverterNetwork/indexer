import {
  BlacklistIssuanceToken_t,
  BlacklistedAccount_t,
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
  properties: Partial<Omit<BlacklistedAccount_t, 'id'>>
  prevData?: BlacklistedAccount_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${chainId}-${address}-${event.params.account_}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.BlacklistedAccount.get(
      id
    )) as Writable<BlacklistedAccount_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      blacklistIssuanceToken_id: `${event.chainId}-${event.srcAddress}`,
      account: event.params.account_,
      // blacklistedBy: event.params.blacklistManager_,
      blacklisted: false,
      timestamp: event.block.timestamp,
      txHash: event.block.hash,

      ...properties,
    } satisfies BlacklistedAccount_t)

  // If required fields are present, update the blacklisted account
  if (data.account && data.blacklistIssuanceToken_id) {
    context.BlacklistedAccount.set({
      ...data,
      ...properties,
    })
  }
}
