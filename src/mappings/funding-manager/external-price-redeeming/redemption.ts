import { FM_PC_ExternalPrice_Redeeming_v1, BigDecimal } from 'generated'

import {
  updateExternalPriceFundingManager,
  updateRedemptionOrder,
} from './update'

FM_PC_ExternalPrice_Redeeming_v1.RedemptionAmountUpdated.handler(
  async ({ event, context }) => {
    await updateExternalPriceFundingManager({
      context,
      event,
      properties: {
        redemptionAmount: BigDecimal(
          event.params._openRedemptionAmount.toString()
        ),
      },
    })
  }
)

FM_PC_ExternalPrice_Redeeming_v1.RedemptionOrderCreated.handler(
  async ({ event, context }) => {
    const chainId = event.chainId
    const fundingManagerAddress = event.params.paymentClient_
    const fundingManagerId = `${fundingManagerAddress}-${chainId}`
    const collateralToken_id = `${event.params.collateralToken_}-${chainId}`

    await updateRedemptionOrder({
      context,
      event,
      properties: {
        fundingManager_id: fundingManagerId,
        collateralToken_id: collateralToken_id,
        paymentOrderId: event.params.orderId_,
        seller: event.params.seller_,
        receiver: event.params.receiver_,
        sellAmount: BigDecimal(event.params.sellAmount_.toString()),
        exchangeRate: BigDecimal(event.params.exchangeRate_.toString()),
        feePercentage: BigDecimal(event.params.feePercentage_.toString()),
        feeAmount: BigDecimal(event.params.feeAmount_.toString()),
        finalRedemptionAmount: BigDecimal(
          event.params.finalRedemptionAmount_.toString()
        ),
        redemptionTimestamp: event.block.timestamp,
        executedTimestamp: 0,
        state: 'PENDING',
      },
    })
  }
)
