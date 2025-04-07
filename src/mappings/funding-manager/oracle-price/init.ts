import { FM_PC_ExternalPrice_Redeeming_v1 } from 'generated'

import {
  deriveTokenAddress,
  updateToken,
  updateOraclePrice,
  ZERO_BD,
  formatUnitsToBD,
  getPublicClient,
  getBalanceOf,
  initBlacklistIssuanceToken,
  getOwner,
  handlerErrorWrapper,
} from '../../../utils'

import { parseAbiItem } from 'viem'

// Module Initialization
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.ModuleInitialized.handler(
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

    const getMaxProjectBuyFeeAbi = parseAbiItem(
      'function getMaxProjectBuyFee() view returns (uint256 maxProjectBuyFee_)'
    )
    const getMaxProjectSellFeeAbi = parseAbiItem(
      'function getMaxProjectSellFee() view returns (uint256 maxProjectSellFee_)'
    )

    const publicClient = getPublicClient(event.chainId)

    let maxProjectBuyFee = 0n
    let maxProjectSellFee = 0n

    if (!!publicClient) {
      maxProjectBuyFee = await publicClient.readContract({
        address: event.srcAddress as `0x${string}`,
        abi: [getMaxProjectBuyFeeAbi],
        functionName: 'getMaxProjectBuyFee',
      })

      maxProjectSellFee = await publicClient.readContract({
        address: event.srcAddress as `0x${string}`,
        abi: [getMaxProjectSellFeeAbi],
        functionName: 'getMaxProjectSellFee',
      })
    }

    await updateOraclePrice({
      event,
      context,
      properties: {
        workflow_id,
        collateralToken_id,
        issuanceToken_id,
        address: address,
        maxBuyFee: maxProjectBuyFee,
        maxSellFee: maxProjectSellFee,
      },
    })

    // Initial setup of Blacklist Issuance Token

    const owner = await getOwner({
      tokenAddress: issuanceTokenAddress,
      chainId: event.chainId,
    })

    await initBlacklistIssuanceToken({
      event,
      context,
      blacklistIssuanceTokenAddress: issuanceTokenAddress,
      properties: {
        token_id: issuanceToken_id,
        oraclePriceFM_id: `${event.chainId}-${event.srcAddress}`,
        owner,
      },
    })
  })
)

// Project Treasury Updated
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.ProjectTreasuryUpdated.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)

// Oracle Updated
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.OracleUpdated.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
      lastUpdated: event.block.timestamp,

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
  })
)

// Redemption Amount Updated
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.RedemptionAmountUpdated.handler(
  handlerErrorWrapper(async ({ event, context }) => {
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
  })
)

// Reserve Deposited
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.ReserveDeposited.handler(
  handlerErrorWrapper(async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`
    const op = (await context.OraclePriceFM.get(id))!

    const collateralToken_id = op.collateralToken_id

    const collateralToken = (await context.Token.get(collateralToken_id))!

    const reserveCOL = await getBalanceOf({
      tokenAddress: collateralToken.address,
      address: op.address,
      chainId: op.chainId,
      decimals: collateralToken.decimals,
    })

    const reserveUSD = reserveCOL.times(collateralToken.priceUSD)

    await updateOraclePrice({
      context,
      event,
      prevData: op,
      properties: {
        reserveCOL,
        reserveUSD,
      },
    })
  })
)

// Issuance Token Set - Register Blacklist Issuance Token to Indexer
// ----------------------------------------------------------------------------

FM_PC_ExternalPrice_Redeeming_v1.IssuanceTokenSet.contractRegister(
  async ({ event, context }) => {
    context.addERC20Issuance_Blacklist_v1(event.params.issuanceToken)
  }
)
