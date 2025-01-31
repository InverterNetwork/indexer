import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'
import { updateExternalPriceFundingManager } from './update'

FM_PC_ExternalPrice_Redeeming_v1.OracleUpdated.handler(
  async ({ event, context }) => {
    const newPriceSetter = event.params.newOracle_
    const priceSetterId = `${newPriceSetter}-${event.chainId}`

    await updateExternalPriceFundingManager({
      context,
      event,
      properties: {
        externalPriceSetter_id: priceSetterId,
      },
    })
  }
)
