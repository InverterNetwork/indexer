import { LM_ManualExternalPriceSetter_v1 } from 'generated'
import {
  deriveTokenAddress,
  formatUnitsToBD,
  TOKEN_DEBUG,
  updateToken,
  ZERO_BD,
  getIssPriceFromCol,
} from '../../utils'

LM_ManualExternalPriceSetter_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`
    const { fundingManager_id, token_id: collateralToken_id } =
      (await context.Workflow.get(workflow_id))!

    context.ExternalPriceSetter.set({
      id,
      workflow_id,
      chainId: event.chainId,
      address: event.srcAddress,

      collateralToken_id,

      priceISS: ZERO_BD,
      priceCOL: ZERO_BD,
    })
  }
)

LM_ManualExternalPriceSetter_v1.RedemptionPriceSet.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const entity = await context.ExternalPriceSetter.get(id)

    if (!entity) {
      return
    }

    const collateralToken = await context.Token.get(
      `${event.chainId}-${entity.collateralToken_id}`
    )

    const priceCOL = formatUnitsToBD(
      event.params.price_,
      collateralToken?.decimals
    )

    context.ExternalPriceSetter.set({
      ...entity,
      priceCOL,
    })
  }
)

LM_ManualExternalPriceSetter_v1.IssuancePriceSet.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const entity = await context.ExternalPriceSetter.get(id)

    if (!entity) {
      return
    }

    const collateralToken = await context.Token.get(
      `${event.chainId}-${entity.collateralToken_id}`
    )

    const priceISS = formatUnitsToBD(
      event.params.price_,
      collateralToken?.decimals
    )

    context.ExternalPriceSetter.set({
      ...entity!,
      priceISS,
    })
  }
)
