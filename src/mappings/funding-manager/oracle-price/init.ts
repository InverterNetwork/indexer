import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'

import {
  deriveTokenAddress,
  updateToken,
  updateOraclePrice,
  ZERO_BD,
} from '../../../utils'

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

FM_PC_ExternalPrice_Redeeming_v1.OracleUpdated.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const newPriceSetter = event.params.newOracle_
    const priceSetterId = `${event.chainId}-${newPriceSetter}`

    const oraclePriceFM = (await context.OraclePriceFM.get(id))!
    const workflow_id = oraclePriceFM.workflow_id
    const workflow = (await context.Workflow.get(workflow_id))!
    const collateralToken_id = workflow.token_id

    context.ExternalPriceSetter.set({
      id: priceSetterId,
      workflow_id,
      chainId: event.chainId,
      address: event.srcAddress,

      collateralToken_id,

      priceISS: ZERO_BD,
      priceCOL: ZERO_BD,
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
