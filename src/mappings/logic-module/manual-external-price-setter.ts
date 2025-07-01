import { LM_ManualExternalPriceSetter_v1 } from 'generated'
import { formatUnitsToBD, handlerErrorWrapper, ZERO_BD } from '../../utils'

import d from 'debug'

const debug = d('logic-module:manual-external-price-setter')

LM_ManualExternalPriceSetter_v1.ModuleInitialized.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`
    const { token_id: collateralToken_id } =
      (await context.Workflow.get(workflow_id))!

    context.ExternalPriceSetter.set({
      id,
      workflow_id,
      chainId: event.chainId,
      lastUpdated: event.block.timestamp,

      address: event.srcAddress,

      collateralToken_id,

      priceISS: ZERO_BD,
      priceCOL: ZERO_BD,
    })
  })
)

LM_ManualExternalPriceSetter_v1.RedemptionPriceSet.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const entity = await context.ExternalPriceSetter.get(id)

    if (!entity) {
      context.log.error(
        `ExternalPriceSetter not found. ID: ${id} @ RedemptionPriceSet`
      )
      return
    }

    const collateralToken = await context.Token.get(entity.collateralToken_id)

    const priceCOL = formatUnitsToBD(
      event.params.price_,
      collateralToken?.decimals
    )

    if (priceCOL.isZero()) {
      debug(`PriceCOL is Zero. ID: ${id} @ RedemptionPriceSet`, {
        eventParamsPrice_: event.params.price_,
        collateralTokenDecimals: collateralToken?.decimals,
      })
    }

    context.ExternalPriceSetter.set({
      ...entity,
      lastUpdated: event.block.timestamp,
      priceCOL,
    })

    context.ExternalPrice.set({
      id: `${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      source: 'COLLATERAL',

      externalPriceSetter_id: id,

      executedBy: event.params.caller_,
      timestamp: event.block.timestamp,

      price: priceCOL,
      txHash: event.transaction.hash,
    })
  })
)

LM_ManualExternalPriceSetter_v1.IssuancePriceSet.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const entity = await context.ExternalPriceSetter.get(id)

    if (!entity) {
      context.log.error(
        `ExternalPriceSetter not found. ID: ${id} @ IssuancePriceSet`
      )
      return
    }

    const collateralToken = await context.Token.get(entity.collateralToken_id)

    const priceISS = formatUnitsToBD(
      event.params.price_,
      collateralToken?.decimals
    )

    if (priceISS.isZero()) {
      debug(`PriceISS is Zero. ID: ${id} @ IssuancePriceSet`, {
        eventParamsPrice_: event.params.price_,
        collateralTokenDecimals: collateralToken?.decimals,
      })
    }

    context.ExternalPriceSetter.set({
      ...entity!,
      lastUpdated: event.block.timestamp,
      priceISS,
    })

    context.ExternalPrice.set({
      id: `${event.transaction.hash}-${event.logIndex}`,
      chainId: event.chainId,
      txHash: event.transaction.hash,

      source: 'ISSUANCE',

      externalPriceSetter_id: id,

      executedBy: event.params.caller_,
      timestamp: event.block.timestamp,

      price: priceISS,
    })
  })
)
