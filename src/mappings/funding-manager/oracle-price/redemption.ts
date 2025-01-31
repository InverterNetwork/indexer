import { FM_PC_ExternalPrice_Redeeming_v1, BigDecimal } from 'generated'

import { updateOraclePrice, updatePaymentOrder } from '../../../utils'

FM_PC_ExternalPrice_Redeeming_v1.RedemptionAmountUpdated.handler(
  async ({ event, context }) => {
    await updateOraclePrice({
      context,
      event,
      properties: {
        pendingRedemptionCOL: BigDecimal(
          event.params._openRedemptionAmount.toString()
        ),
      },
    })
  }
)

FM_PC_ExternalPrice_Redeeming_v1.RedemptionOrderCreated.handler(
  async ({ event, context }) => {
    const oraclePriceFM_id = `${event.chainId}-${event.params.paymentClient_}`

    await updatePaymentOrder({
      context,
      event,
      properties: {
        oraclePriceFM_id,
        orderId: event.params.orderId_,

        seller: event.params.seller_,
        exchangeRate: BigDecimal(event.params.exchangeRate_.toString()),
        feePercentage: BigDecimal(event.params.feePercentage_.toString()),
        fee: BigDecimal(event.params.feeAmount_.toString()),
        amount: BigDecimal(event.params.finalRedemptionAmount_.toString()),
      },
    })
  }
)
