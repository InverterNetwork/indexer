import { FM_DepositVault_v1 } from 'generated'

FM_DepositVault_v1.ModuleInitialized.handler(async ({ event, context }) => {
  context.DepositVault.set({
    id: event.srcAddress,
    chainId: event.chainId,
    workflow_id: event.params.parentOrchestrator,
    balance: 0n,
  })
})

FM_DepositVault_v1.Deposit.handler(async ({ event, context }) => {
  const depositVault = await context.DepositVault.get(event.srcAddress)
  if (!depositVault) return

  let currentBalance = depositVault.balance
  if (currentBalance === undefined) currentBalance = 0n

  context.DepositVault.set({
    ...depositVault,
    balance: currentBalance + event.params._amount,
  })

  context.Deposit.set({
    id: depositVault.id + '-' + event.logIndex,
    depositVault_id: event.srcAddress,
    amount: event.params._amount,
    depositor: event.params._from,
    blockTimestamp: event.block.timestamp,
  })
})

FM_DepositVault_v1.TransferOrchestratorToken.handler(
  async ({ event, context }) => {
    const depositVault = await context.DepositVault.get(event.srcAddress)
    if (!depositVault) return

    let currentBalance = depositVault.balance
    if (currentBalance === undefined) currentBalance = 0n

    context.DepositVault.set({
      ...depositVault,
      balance: currentBalance - event.params._amount,
    })

    context.Transfer.set({
      id: depositVault.id + '-' + event.logIndex,
      depositVault_id: event.srcAddress,
      amount: event.params._amount,
      recipient: event.params._to,
      blockTimestamp: event.block.timestamp,
    })
  }
)
