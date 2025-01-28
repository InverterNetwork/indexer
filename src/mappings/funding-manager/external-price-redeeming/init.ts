import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'

import {
  deriveTokenAddress,
  updateBondingCurve,
  updateToken,
} from '../../../utils'

import { ZERO_BD } from '../../../utils/constants'

FM_PC_ExternalPrice_Redeeming_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const address = event.srcAddress
    const chainId = event.chainId
    const id = `${address}-${chainId}`
    const workflow_id = `${event.params.parentOrchestrator}-${event.chainId}`

    const { derivedAddress: collateralTokenAddress } = await deriveTokenAddress(
      {
        address,
        chainId,
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
    })

    const { derivedAddress: issuanceTokenAddress } = await deriveTokenAddress({
      address,
      chainId,
      derivesTo: 'issuance',
    })

    const { id: issuanceToken_id } = await updateToken({
      event,
      context,
      derivedType: 'issuance',
      properties: {
        address: issuanceTokenAddress,
      },
    })

    context.ExternalPriceFundingManager.set({
      id: id,
      chainId,
      workflow_id,
      collateralToken_id,
      issuanceToken_id,
      address: address,
      buyFee: 0n,
      sellFee: 0n,
      redemptionAmount: 0n,
    })
  }
)
