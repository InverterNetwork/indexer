import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'

import {
  deriveTokenAddress,
  updateToken,
  updateOraclePrice,
  ZERO_BD,
  formatUnitsToBD,
} from '../../../utils'

// Module Initialization
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const address = event.srcAddress
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`

    const { derivedAddress: collateralTokenAddress } = await deriveTokenAddress(
      {
        address,
        chainId: event.chainId,
        derivesTo: 'token',
      }
    )

    const { id: collateralToken_id } = await updateToken({
      event,
      context,
      derivedType: 'token',
      properties: {
        address: collateralTokenAddress,
      },
      triggerTotalSupply: true,
    })

    const { derivedAddress: issuanceTokenAddress } = await deriveTokenAddress({
      address,
      chainId: event.chainId,
      derivesTo: 'issuance',
    })

    const { id: issuanceToken_id } = await updateToken({
      event,
      context,
      derivedType: 'issuance',
      properties: {
        address: issuanceTokenAddress,
      },
      triggerTotalSupply: true,
    })

    await updateOraclePrice({
      event,
      context,
      properties: {
        workflow_id,
        collateralToken_id,
        issuanceToken_id,
        address: address,
      },
    })
  }
)

// Project Treasury Updated
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.ProjectTreasuryUpdated.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const bc = (await context.OraclePriceFM.get(id))!

    await updateOraclePrice({
      context,
      event,
      properties: {
        treasury: event.params.newProjectTreasury_,
      },
      prevData: bc,
    })
  }
)

// Oracle Updated
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.OracleUpdated.handler(
  async ({ event, context }) => {
    const chainId = event.chainId
    const id = `${chainId}-${event.srcAddress}`
    const newPriceSetter = event.params.newOracle_
    const priceSetterId = `${chainId}-${newPriceSetter}`

    const oraclePriceFM = (await context.OraclePriceFM.get(id))!
    const workflow_id = oraclePriceFM.workflow_id
    const workflow = (await context.Workflow.get(workflow_id))!
    const collateralToken_id = workflow.token_id

    const externalPriceSetter =
      await context.ExternalPriceSetter.get(priceSetterId)

    context.ExternalPriceSetter.set({
      id: priceSetterId,
      workflow_id,
      chainId,
      address: newPriceSetter,

      collateralToken_id,

      priceCOL: externalPriceSetter?.priceCOL ?? ZERO_BD,
      priceISS: externalPriceSetter?.priceISS ?? ZERO_BD,
    })

    await updateOraclePrice({
      context,
      event,
      properties: {
        externalPriceSetter_id: priceSetterId,
      },
    })
  }
)

// Redemption Amount Updated
// ----------------------------------------------------------------------------

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
