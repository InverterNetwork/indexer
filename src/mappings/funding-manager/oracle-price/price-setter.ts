import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'
import { updateOraclePrice } from '../../../utils'

FM_PC_ExternalPrice_Redeeming_v1.OracleUpdated.handler(
  async ({ event, context }) => {
    const newPriceSetter = event.params.newOracle_
    const priceSetterId = `${event.chainId}-${newPriceSetter}`

    await updateOraclePrice({
      context,
      event,
      properties: {
        externalPriceSetter_id: priceSetterId,
      },
    })
  }
)
