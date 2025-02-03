import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'

import { formatUnitsToBD, updateOraclePrice } from '../../../utils'

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
