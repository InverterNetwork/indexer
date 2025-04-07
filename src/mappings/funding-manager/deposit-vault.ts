import { FM_DepositVault_v1 } from 'generated'
import {
  deriveTokenAddress,
  updateToken,
  formatUnitsToBD,
  ZERO_BD,
  handlerErrorWrapper,
} from '../../utils'

// ============================================================================
// Module Initialization
// ============================================================================

FM_DepositVault_v1.ModuleInitialized.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const address = event.srcAddress
    const id = `${event.chainId}-${address}`
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`

    const { derivedAddress: tokenAddress } = await deriveTokenAddress({
      address,
      chainId: event.chainId,
      derivesTo: 'token',
    })

    const { id: token_id } = await updateToken({
      event,
      context,
      derivedType: 'token',
      properties: {
        address: tokenAddress,
      },
      triggerTotalSupply: true,
    })

    context.DepositVault.set({
      id,
      address,
      chainId: event.chainId,

      workflow_id,
      token_id,

      balance: ZERO_BD,
      balanceUSD: ZERO_BD,
    })
  })
)

// ============================================================================
// Deposit Operations
// ============================================================================

FM_DepositVault_v1.Deposit.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const depositVault = (await context.DepositVault.get(id))!

    // Metadata
    const collateralToken = await context.Token.get(depositVault.token_id)
    const decimals = collateralToken?.decimals

    // Balances
    const currentBalance = depositVault.balance ?? ZERO_BD
    const currentBalanceUSD = depositVault.balanceUSD ?? ZERO_BD

    // Amounts
    const amount = formatUnitsToBD(event.params._amount, decimals)
    const amountUSD = amount.times(collateralToken!.priceUSD)

    // Update vault balance
    context.DepositVault.set({
      ...depositVault,
      balance: currentBalance.plus(amount),
      balanceUSD: currentBalanceUSD.plus(amountUSD),
    })

    // Create deposit record
    context.Deposit.set({
      id: `${event.chainId}-${event.transaction.hash}`,
      depositVault_id: id,
      timestamp: event.block.timestamp,
      txHash: event.transaction.hash,

      amount,
      amountUSD,

      depositor: event.params._from,
    })
  })
)

// ============================================================================
// Transfer Operations
// ============================================================================

FM_DepositVault_v1.TransferOrchestratorToken.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const depositVault = (await context.DepositVault.get(id))!

    // Metadata
    const collateralToken = await context.Token.get(depositVault.token_id)
    const decimals = collateralToken?.decimals

    // Balances
    const currentBalance = depositVault.balance ?? ZERO_BD
    const currentBalanceUSD = depositVault.balanceUSD ?? ZERO_BD

    // Amounts
    const amount = formatUnitsToBD(event.params._amount, decimals)
    const amountUSD = amount.times(collateralToken!.priceUSD)

    // Update vault balance
    context.DepositVault.set({
      ...depositVault,
      balance: currentBalance.minus(amount),
      balanceUSD: currentBalanceUSD.minus(amountUSD),
    })

    // Create transfer record
    context.Transfer.set({
      id: `${event.chainId}-${event.transaction.hash}`,
      timestamp: event.block.timestamp,
      txHash: event.transaction.hash,

      depositVault_id: id,

      amount,
      amountUSD,

      recipient: event.params._to,
    })
  })
)
