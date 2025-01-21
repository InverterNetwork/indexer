import { BigDecimal, FM_DepositVault_v1 } from 'generated'
import { formatUnits } from 'viem'
import { deriveTokenAddress, updateToken, ZERO_BD } from '../../utils'

// ============================================================================
// Module Initialization
// ============================================================================

FM_DepositVault_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const address = event.srcAddress
  const id = `${address}-${event.chainId}`

  const { derivedAddress } = await deriveTokenAddress({
    address,
    chainId: event.chainId,
    derivesTo: 'token',
  })

  const { id: token_id } = await updateToken({
    event,
    context,
    derivedType: 'token',
    properties: {
      address: derivedAddress,
    },
  })

  context.DepositVault.set({
    id,
    chainId: event.chainId,

    address,
    workflow_id: event.params.parentOrchestrator,
    balance: ZERO_BD,
    token_id,
  })
})

// ============================================================================
// Deposit Operations
// ============================================================================

FM_DepositVault_v1.Deposit.handler(async ({ event, context }) => {
  const id = `${event.srcAddress}-${event.chainId}`
  const depositVault = await context.DepositVault.get(id)
  if (!depositVault) return

  // Initialize balance if undefined
  let currentBalance = depositVault.balance
  if (currentBalance === undefined) currentBalance = ZERO_BD

  // TODO: Fetch the token decimals
  const amount = BigDecimal(formatUnits(event.params._amount, 18))

  // Update vault balance
  context.DepositVault.set({
    ...depositVault,
    balance: currentBalance.plus(amount),
  })

  // Create deposit record
  context.Deposit.set({
    id: `${id}-${event.logIndex}`,
    depositVault_id: id,
    amount,
    depositor: event.params._from,
    blockTimestamp: event.block.timestamp,
  })
})

// ============================================================================
// Transfer Operations
// ============================================================================

FM_DepositVault_v1.TransferOrchestratorToken.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const depositVault = await context.DepositVault.get(id)
    if (!depositVault) return

    // Initialize balance if undefined
    let currentBalance = depositVault.balance
    if (currentBalance === undefined) currentBalance = ZERO_BD

    // TODO: Fetch the token decimals
    const amount = BigDecimal(formatUnits(event.params._amount, 18))

    // Update vault balance
    context.DepositVault.set({
      ...depositVault,
      balance: currentBalance.minus(amount),
    })

    // Create transfer record
    context.Transfer.set({
      id: `${id}-${event.logIndex}`,
      depositVault_id: id,
      amount,
      recipient: event.params._to,
      blockTimestamp: event.block.timestamp,
    })
  }
)
