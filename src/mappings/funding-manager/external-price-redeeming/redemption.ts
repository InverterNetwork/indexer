import { FM_PC_ExternalPrice_Redeeming_v1, BigDecimal } from 'generated'

import { updateExternalPriceFundingManager } from './update'

import { updatePaymentOrder } from '../../../utils'

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
    const fundingManagerAddress = event.params.paymentClient_

    await updatePaymentOrder({
      context,
      event,
      properties: {
        client: fundingManagerAddress,
        orderId: event.params.orderId_,

        seller: event.params.seller_,
        exchangeRate: BigDecimal(event.params.exchangeRate_.toString()),
        feePercentage: BigDecimal(event.params.feePercentage_.toString()),
        feeAmount: BigDecimal(event.params.feeAmount_.toString()),
        finalRedemptionAmount: BigDecimal(
          event.params.finalRedemptionAmount_.toString()
        ),
      },
    })
  }
)
