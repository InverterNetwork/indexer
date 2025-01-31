import { LM_ManualExternalPriceSetter_v1, BigDecimal } from 'generated'
import { ZERO_BD } from '../../utils'

LM_ManualExternalPriceSetter_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const workflow_id = `${event.params.parentOrchestrator}-${event.chainId}`

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
    const id = `${event.srcAddress}-${event.chainId}`
    const entity = await context.ExternalPriceSetter.get(id)

    context.ExternalPriceSetter.set({
      ...entity!,
      priceISS: BigDecimal(event.params.price_.toString()),
    })
  }
)

LM_ManualExternalPriceSetter_v1.RedemptionPriceSet.handler(
  async ({ event, context }) => {
    const id = `${event.srcAddress}-${event.chainId}`
    const entity = await context.ExternalPriceSetter.get(id)

    context.ExternalPriceSetter.set({
      ...entity!,
      priceCOL: BigDecimal(event.params.price_.toString()),
    })
  }
)
