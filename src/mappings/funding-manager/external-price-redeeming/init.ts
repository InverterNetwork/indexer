import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'

import { deriveTokenAddress, updateToken } from '../../../utils'

import { updateExternalPriceFundingManager } from './update'

FM_PC_ExternalPrice_Redeeming_v1.ModuleInitialized.handler(
  async ({ event, context }) => {
    const address = event.srcAddress
    const workflow_id = `${event.params.parentOrchestrator}-${event.chainId}`

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

    await updateExternalPriceFundingManager({
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
