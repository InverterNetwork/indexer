import { LM_ManualExternalPriceSetter_v1, BigDecimal } from 'generated'
import { ZERO_BD } from '../../utils'

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
    const entity = await context.ExternalPriceSetter.get(id)

    const priceCOL = BigDecimal(event.params.price_.toString())

    context.ExternalPriceSetter.set({
      ...entity!,
      priceCOL,
    })
  }
)
