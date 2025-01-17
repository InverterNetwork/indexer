import { BigDecimal, FM_DepositVault_v1 } from 'generated'
import { formatUnits } from 'viem'
import { updateToken, ZERO_BD } from '../../utils'

// ============================================================================
// Module Initialization
// ============================================================================

FM_DepositVault_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const token_id = await updateToken({
    event,
    context,
    properties: {
      address: event.srcAddress,
    },
  })

  context.DepositVault.set({
    id: event.srcAddress,
    chainId: event.chainId,
    workflow_id: event.params.parentOrchestrator,
    balance: ZERO_BD,
    token_id,
  })
})

// ============================================================================
// Deposit Operations
// ============================================================================

FM_DepositVault_v1.Deposit.handler(async ({ event, context }) => {
  const depositVault = await context.DepositVault.get(event.srcAddress)
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
    id: `${depositVault.id}-${event.logIndex}`,
    depositVault_id: event.srcAddress,
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
    const depositVault = await context.DepositVault.get(event.srcAddress)
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
      id: `${depositVault.id}-${event.logIndex}`,
      depositVault_id: event.srcAddress,
      amount,
      recipient: event.params._to,
      blockTimestamp: event.block.timestamp,
    })
  }
)
