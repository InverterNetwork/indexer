import { ERC20Issuance_Blacklist_v1 } from 'generated'
import {
  updateBlacklistIssuanceToken,
  updateBlacklistedAccount,
  updateBlacklistedManager,
} from '../../utils/token'

// AddedToBlacklist
// ----------------------------------------------------------------------------

ERC20Issuance_Blacklist_v1.AddedToBlacklist.handler(
  async ({ event, context }) => {
    const blacklistedTokenIdId = `${event.chainId}-${event.srcAddress}`

    await updateBlacklistedAccount({
      event,
      context,
      properties: {
        token_id: blacklistedTokenIdId,
        recipient: event.params.account_,
        initiator: event.params.blacklistManager_,
        status: 'GRANTED',
      },
    })

    const historicalId = `${blacklistedTokenIdId}-${event.transaction.hash}`
    context.HistoricalRole.set({
      id: historicalId,
      historyType: 'BLACKLIST',
      relatedId: blacklistedTokenIdId,
      initiator: event.params.blacklistManager_,
      recipient: event.params.account_,
      role: 'BLACKLIST',
      status: 'GRANTED',
      timestamp: event.block.timestamp,
      txHash: event.block.hash,
    })
  }
)

// RemovedFromBlacklist
// ----------------------------------------------------------------------------

ERC20Issuance_Blacklist_v1.RemovedFromBlacklist.handler(
  async ({ event, context }) => {
    const blacklistedTokenIdId = `${event.chainId}-${event.srcAddress}`

    await updateBlacklistedAccount({
      event,
      context,
      properties: {
        token_id: blacklistedTokenIdId,
        recipient: event.params.account_,
        initiator: event.params.blacklistManager_,
        status: 'REVOKED',
      },
    })

    const historicalId = `${blacklistedTokenIdId}-${event.transaction.hash}`
    context.HistoricalRole.set({
      id: historicalId,
      historyType: 'BLACKLIST',
      relatedId: blacklistedTokenIdId,
      initiator: event.params.blacklistManager_,
      recipient: event.params.account_,
      role: 'BLACKLIST',
      status: 'REVOKED',
      timestamp: event.block.timestamp,
      txHash: event.block.hash,
    })
  }
)

// BlacklistManagerUpdated
// ----------------------------------------------------------------------------

ERC20Issuance_Blacklist_v1.BlacklistManagerUpdated.handler(
  async ({ event, context }) => {
    const blacklistedTokenIdId = `${event.chainId}-${event.srcAddress}`

    await updateBlacklistedManager({
      event,
      context,
      properties: {
        token_id: blacklistedTokenIdId,
        recipient: event.params.account_,
        initiator: event.params.tokenOwner_,
        status: event.params.allowed_ ? 'GRANTED' : 'REVOKED',
      },
    })

    const historicalId = `${blacklistedTokenIdId}-${event.transaction.hash}`
    context.HistoricalRole.set({
      id: historicalId,
      historyType: 'BLACKLIST',
      relatedId: blacklistedTokenIdId,
      initiator: event.params.tokenOwner_,
      recipient: event.params.account_,
      role: 'BLACKLIST',
      status: event.params.allowed_ ? 'GRANTED' : 'REVOKED',
      timestamp: event.block.timestamp,
      txHash: event.block.hash,
    })
  }
)

// MinterSet
// ----------------------------------------------------------------------------

ERC20Issuance_Blacklist_v1.MinterSet.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`
  const blacklistIssuanceToken = (await context.BlacklistIssuanceToken.get(id))!

  const minterList = blacklistIssuanceToken.minter
  const allowed = event.params.allowed

  if (allowed) {
    minterList.push(event.params.minter)
  } else {
    minterList.splice(minterList.indexOf(event.params.minter), 1)
  }

  await updateBlacklistIssuanceToken({
    event,
    context,
    properties: {
      minter: minterList,
    },
  })
})

// OwnershipTransferred
// ----------------------------------------------------------------------------

ERC20Issuance_Blacklist_v1.OwnershipTransferred.handler(
  async ({ event, context }) => {
    await updateBlacklistIssuanceToken({
      event,
      context,
      properties: {
        owner: event.params.newOwner,
      },
    })
  }
)
