import { FM_PC_ExternalPrice_Redeeming_v1, BigDecimal } from 'generated'

import {
  formatUnitsToBD,
  updateOraclePrice,
  updateRedemptionPaymentOrder,
} from '../../../utils'

FM_PC_ExternalPrice_Redeeming_v1.RedemptionAmountUpdated.handler(
  async ({ event, context }) => {
    const oraclePriceFM_id = `${event.chainId}-${event.srcAddress}`
    const entity = (await context.OraclePriceFM.get(oraclePriceFM_id))!
    const token = (await context.Token.get(entity.collateralToken_id))!

    const pendingRedemptionCOL = formatUnitsToBD(
      event.params._openRedemptionAmount,
      token.decimals
    )
    const pendingRedemptionUSD = pendingRedemptionCOL.times(token.priceUSD)

    await updateOraclePrice({
      context,
      event,
      properties: {
        pendingRedemptionCOL,
        pendingRedemptionUSD,
      },
    })
  }
)

FM_PC_ExternalPrice_Redeeming_v1.RedemptionOrderCreated.handler(
  async ({ event, context }) => {
    const oraclePriceFM_id = `${event.chainId}-${event.params.paymentClient_}`
    const token_id = `${event.chainId}-${event.params.collateralToken_}`

    const token = (await context.Token.get(token_id))!

    const amount = formatUnitsToBD(
      event.params.finalRedemptionAmount_,
      token.decimals
    )
    const amountUSD = amount.times(token.priceUSD)

    const fee = formatUnitsToBD(event.params.feeAmount_, token.decimals)
    const feeUSD = fee.times(token.priceUSD)

    await updateRedemptionPaymentOrder({
      context,
      event,
      properties: {
        oraclePriceFM_id,
        orderId: event.params.orderId_,
        source: 'COLLATERAL',

        seller: event.params.seller_,
        exchangeRate: event.params.exchangeRate_,
        feePercentage: event.params.feePercentage_,

        amount,
        amountUSD,

        fee,
        feeUSD,
      },
    })
  }
)
