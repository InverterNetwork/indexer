import { ExternalPriceFundingManager_t } from 'generated/src/db/Entities.gen'

import { eventLog, handlerContext } from 'generated'
import { Writable } from 'type-fest'
import { ZERO_BD } from '../../../utils'

export const updateExternalPriceFundingManager = async ({
  event,
  context,
  properties,
  prevData,
}: {
  event: eventLog<any>
  context: handlerContext
  properties: Partial<Omit<ExternalPriceFundingManager_t, 'id'>>
  prevData?: ExternalPriceFundingManager_t
}) => {
  const { chainId, srcAddress: address } = event

  const id = `${address}-${chainId}`

  const data =
    // PREVIOUS DATA
    // --------------------------------------------------------------------------
    prevData ||
    ((await context.ExternalPriceFundingManager.get(
      id
    )) as Writable<ExternalPriceFundingManager_t>) ||
    // DEFAULT STATE
    // --------------------------------------------------------------------------
    ({
      id,
      chainId,
      address,

      workflow_id: properties?.workflow_id!,

      issuanceToken_id: properties?.issuanceToken_id!,
      collateralToken_id: properties?.collateralToken_id!,
      externalPriceSetter_id: properties?.externalPriceSetter_id!,

      buyFee: 0n,
      sellFee: 0n,

      redemptionAmount: ZERO_BD,

      ...properties,
    } satisfies ExternalPriceFundingManager_t)

  // If required fields are present, update the bonding curve
  if (data.workflow_id && data.collateralToken_id && data.issuanceToken_id) {
    context.ExternalPriceFundingManager.set({
      ...data,
      ...properties,
    })
  }
}
