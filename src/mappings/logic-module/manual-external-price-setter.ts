import { LM_ManualExternalPriceSetter_v1, BigDecimal } from 'generated'
import { formatUnitsToBD, ZERO_BD } from '../../utils'

LM_ManualExternalPriceSetter_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`

    context.ExternalPriceSetter.set({
      id,
      workflow_id,
      chainId: event.chainId,
      address: event.srcAddress,

      priceISS: ZERO_BD,
      priceCOL: ZERO_BD,
      priceUSD: ZERO_BD,
    })
  }
)

LM_ManualExternalPriceSetter_v1.IssuancePriceSet.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const entity = await context.ExternalPriceSetter.get(id)

    const priceISS = BigDecimal(event.params.price_.toString())

    context.ExternalPriceSetter.set({
      ...entity!,
      priceISS,
    })
  }
)

LM_ManualExternalPriceSetter_v1.RedemptionPriceSet.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const entity = (await context.ExternalPriceSetter.get(id))!

    const workflow_id = entity.workflow_id
    const workflow = (await context.Workflow.get(workflow_id))!
    const oraclePriceFM = (await context.OraclePriceFM.get(
      workflow.fundingManager_id
    ))!

    const collateralToken = (await context.Token.get(
      `${event.chainId}-${oraclePriceFM.collateralToken_id}`
    ))!

    const priceCOL = formatUnitsToBD(
      event.params.price_,
      collateralToken.decimals
    )
    const priceUSD = priceCOL.times(collateralToken.priceUSD)

    context.ExternalPriceSetter.set({
      ...entity!,
      priceCOL,
      priceUSD,
    })
  }
)
