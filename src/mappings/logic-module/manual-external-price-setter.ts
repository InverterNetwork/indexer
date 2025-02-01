import { LM_ManualExternalPriceSetter_v1 } from 'generated'
import {
  deriveTokenAddress,
  formatUnitsToBD,
  TOKEN_DEBUG,
  updateToken,
  ZERO_BD,
} from '../../utils'

LM_ManualExternalPriceSetter_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`
    const { fundingManager_id, token_id: collateralToken_id } =
      (await context.Workflow.get(workflow_id))!

    const fundingManagerAddress = fundingManager_id.split('-')[1]

    const { derivedAddress: issuanceTokenAddress } = await deriveTokenAddress({
      address: fundingManagerAddress,
      chainId: event.chainId,
      derivesTo: 'issuance',
    })

    await updateToken({
      event,
      context,
      derivedType: 'issuance',
      properties: { address: issuanceTokenAddress },
    })

    if (
      fundingManagerAddress.toLowerCase() !== issuanceTokenAddress.toLowerCase()
    ) {
      TOKEN_DEBUG()(
        `LM_ManualExternalPriceSetter_v1 was configured without a compatible FM for ${event.srcAddress} on ${event.chainId}`
      )
      return
    }

    const issuanceToken_id = `${event.chainId}-${issuanceTokenAddress}`

    context.ExternalPriceSetter.set({
      id,
      workflow_id,
      chainId: event.chainId,
      address: event.srcAddress,

      issuanceToken_id,
      collateralToken_id,

      priceISS: ZERO_BD,
      priceCOL: ZERO_BD,
      priceUSD: ZERO_BD,
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
    const priceUSD = priceCOL.times(collateralToken?.priceUSD ?? ZERO_BD)

    context.ExternalPriceSetter.set({
      ...entity,
      priceCOL,
      priceUSD,
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

    const issuanceToken = await context.Token.get(
      `${event.chainId}-${entity.issuanceToken_id}`
    )

    const priceISS = formatUnitsToBD(
      event.params.price_,
      issuanceToken?.decimals
    )

    context.ExternalPriceSetter.set({
      ...entity!,
      priceISS,
      ...(!entity.priceISS.isZero() && !issuanceToken?.priceUSD.isZero()
        ? { priceUSD: issuanceToken?.priceUSD }
        : {}),
    })
  }
)
