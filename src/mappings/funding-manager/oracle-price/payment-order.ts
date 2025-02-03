import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'
import {
  createOraclePriceOrder,
  formatUnitsToBD,
  getIssPriceFromCol,
  ZERO_BD,
} from '../../../utils'

FM_PC_ExternalPrice_Redeeming_v1.PaymentOrderAdded.handler(
  async ({ event, context }) => {
    if (event.params.data.length == 0) {
      context.log.error(`Invalid payment order data`)
      return
    }

    const address = event.srcAddress
    const chainId = event.chainId
    const timestamp = event.block.timestamp
    const oraclePriceFM_id = `${chainId}-${address}`

    const oraclePriceFM = (await context.OraclePriceFM.get(oraclePriceFM_id))!
    const externalPriceSetter = (await context.ExternalPriceSetter.get(
      oraclePriceFM.externalPriceSetter_id!
    ))!

    if (!externalPriceSetter) {
      context.log.error(
        `ExternalPriceSetter not found. FM: ${oraclePriceFM_id}`
      )
      return
    }

    const orderId = Number(event.params.data.at(0)!.toString())
    const paymentTokenAddress = event.params.token
    const token_id = `${chainId}-${paymentTokenAddress}`

    const token = (await context.Token.get(token_id))!

    const priceISS = externalPriceSetter.priceISS
    const priceCOL = externalPriceSetter.priceCOL
    const priceUSD = getIssPriceFromCol(priceCOL, token.priceUSD)

    const amountCOL = formatUnitsToBD(event.params.amount, token.decimals)
    const amountUSD = amountCOL.times(token.priceUSD)
    let amountISS = amountCOL.times(priceISS.div(priceCOL)) // Calculate amount in ISS using the ratio of priceISS to priceCOL
    if (amountISS.isNaN()) amountISS = ZERO_BD

    const oraclePriceOrderId = `${oraclePriceFM_id}-${orderId}`

    await createOraclePriceOrder({
      event,
      context,
      id: oraclePriceOrderId,
      properties: {
        timestamp,
        orderId: BigInt(orderId),
        swapType: 'SELL',
        protocolFeeType: 'COLLATERAL',
        orderType: 'PAYMENT',
        state: 'PENDING',

        initiator: event.params.recipient,

        oraclePriceFM_id,

        targetChainId: Number(event.params.targetChainId),
        recipient: event.params.recipient,

        collateralToken_id: token_id,
        issuanceToken_id: oraclePriceFM.issuanceToken_id,

        priceCOL,
        priceUSD,

        amountCOL,
        amountISS,
        amountUSD,
      },
    })
  }
)
