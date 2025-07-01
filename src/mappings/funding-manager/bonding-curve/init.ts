import { BondingCurve } from 'generated'

import {
  deriveTokenAddress,
  getIssPriceFromCol,
  getStaticPriceCOL,
  handlerErrorWrapper,
  updateBondingCurve,
  updateToken,
} from '../../../utils'

// ============================================================================
// Module Initialization
// ============================================================================

BondingCurve.ModuleInitialized.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const address = event.srcAddress
    const workflow_id = `${event.chainId}-${event.params.parentOrchestrator}`

    const { derivedAddress: collateralTokenAddress } = await deriveTokenAddress(
      {
        address,
        chainId: event.chainId,
        derivesTo: 'token',
      }
    )

    const { id: collateralToken_id, priceUSD: collateralTokenPriceUSD } =
      await updateToken({
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

    const priceCOL = await getStaticPriceCOL({
      event,
    })

    const issuanceTokenPriceUSD = getIssPriceFromCol(
      priceCOL,
      collateralTokenPriceUSD
    )

    const { id: issuanceToken_id } = await updateToken({
      event,
      context,
      derivedType: 'issuance',
      properties: {
        address: issuanceTokenAddress,
        priceUSD: issuanceTokenPriceUSD,
      },
      triggerTotalSupply: true,
    })

    const bcType =
      event.params.metadata[3] ===
      'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1'
        ? 'RESTRICTED'
        : 'OPEN'

    await updateBondingCurve({
      context,
      event,
      properties: {
        workflow_id,
        collateralToken_id,
        issuanceToken_id,

        bcType,
      },
    })
  })
)
