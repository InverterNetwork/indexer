import {
  FM_PC_ExternalPrice_Redeeming_v1,
  BigDecimal,
  RedemptionStatus,
} from 'generated'

import { updateExternalPriceFundingManager } from './update'

FM_PC_ExternalPrice_Redeeming_v1.RedemptionAmountUpdated.handler(
  async ({ event, context }) => {
    await updateExternalPriceFundingManager({
      context,
      event,
      properties: {
        redemptionAmount: event.params._openRedemptionAmount,
      },
    })
  }
)

FM_PC_ExternalPrice_Redeeming_v1.RedemptionOrderCreated.handler(
  async ({ event, context }) => {
    const chainId = event.chainId
    const fundingManagerAddress = event.params.creator_
    const fundingManagerId = `${fundingManagerAddress}-${chainId}`
    const collateralToken_id = `${event.params.collateralToken_}-${chainId}`

    context.RedemptionOrder.set({
      id: `${event.srcAddress}-${event.chainId}-${event.params.orderId_}`,
      chainId: event.chainId,
      fundingManager_id: fundingManagerId,
      paymentOrderId: event.params.orderId_,
      seller: event.params.seller_,
      recipient: event.params.receiver_,
      sellAmount: BigDecimal(event.params.sellAmount_.toString()),
      exchangeRate: BigDecimal(event.params.exchangeRate_.toString()),
      collateralAmount: BigDecimal(event.params.collateralAmount_.toString()),
      feePercentage: BigDecimal(event.params.feePercentage_.toString()),
      feeAmount: BigDecimal(event.params.feeAmount_.toString()),
      redemptionAmount: BigDecimal(event.params.redemptionAmount_.toString()),
      collateralToken_id: collateralToken_id,
      redemptionTimestamp: event.params.redemptionTime_,
      executedTimestamp: 0n,
      status: RedemptionStatus.PENDING,
    })
  }
)
