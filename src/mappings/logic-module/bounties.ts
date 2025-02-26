import { LM_PC_Bounties_v1 } from 'generated'
import { hexToString } from 'viem'
import { deriveTokenAddress, updateToken, formatUnitsToBD } from '../../utils'

// Module initialization handler
LM_PC_Bounties_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const address = event.srcAddress
  const chainId = event.chainId

  const id = `${chainId}-${address}`

  const workflow_id = `${chainId}-${event.params.parentOrchestrator}`
  const workflow = (await context.Workflow.get(workflow_id))!

  const { derivedAddress: tokenAddress } = await deriveTokenAddress({
    address: workflow.fundingManager_id.split('-')[1],
    chainId: event.chainId,
    derivesTo: 'token',
  })

  const { id: token_id } = await updateToken({
    event,
    context,
    derivedType: 'token',
    properties: {
      address: tokenAddress,
    },
  })

  context.BountyModule.set({
    id,
    chainId,
    address,

    token_id,

    workflow_id,
  })
})

// ===== Bounty Management Handlers =====

// Creates a new bounty record
LM_PC_Bounties_v1.BountyAdded.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const id = `${moduleId}-${event.params.bountyId}`

  const bountyModule = (await context.BountyModule.get(moduleId))!
  const token = (await context.Token.get(bountyModule.token_id))!

  const minimumPayoutAmount = formatUnitsToBD(
    event.params.minimumPayoutAmount,
    token.decimals
  )
  const minimumPayoutAmountUSD = minimumPayoutAmount.times(token.priceUSD)

  const maximumPayoutAmount = formatUnitsToBD(
    event.params.maximumPayoutAmount,
    token.decimals
  )
  const maximumPayoutAmountUSD = maximumPayoutAmount.times(token.priceUSD)

  context.Bounty.set({
    id,
    bountyModule_id: bountyModule!.id,

    minimumPayoutAmount,
    maximumPayoutAmount,

    minimumPayoutAmountUSD,
    maximumPayoutAmountUSD,

    details: hexToString(event.params.details as `0x${string}`),
    locked: false,
  })
})

// Updates bounty details
LM_PC_Bounties_v1.BountyUpdated.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const id = `${moduleId}-${event.params.bountyId}`

  const entity = await context.Bounty.get(id)

  context.Bounty.set({
    ...entity!,
    details: event.params.details,
  })
})

// Marks a bounty as locked
LM_PC_Bounties_v1.BountyLocked.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const id = `${moduleId}-${event.params.bountyId}`

  const entity = await context.Bounty.get(id)

  context.Bounty.set({
    ...entity!,
    locked: true,
  })
})

// ===== Claim Management Handlers =====

// Creates a new claim and its associated contributors
LM_PC_Bounties_v1.ClaimAdded.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const bountyId = `${moduleId}-${event.params.bountyId}`
  const id = `${moduleId}-${event.params.claimId}`

  const detail = event.params.details as `0x${string}`

  const bountyModule = (await context.BountyModule.get(moduleId))!
  const token = (await context.Token.get(bountyModule.token_id))!

  // Create the claim record
  context.BountyClaim.set({
    id,
    bounty_id: bountyId,
    details: hexToString(detail),
    claimed: false,
  })

  // Create contributor records for this claim
  event.params.contributors.forEach((element, index) => {
    const contributorId = `${id}-${index}`

    const claimAmount = formatUnitsToBD(element[1], token.decimals)
    const claimAmountUSD = claimAmount.times(token.priceUSD)

    context.BountyContributor.set({
      id: contributorId,
      bountyClaim_id: id,
      address: element[0],

      claimAmount,
      claimAmountUSD,
    })
  })
})

// Updates the contributors for an existing claim
LM_PC_Bounties_v1.ClaimContributorsUpdated.handler(
  async ({ event, context }) => {
    const moduleId = `${event.chainId}-${event.srcAddress}`
    const id = `${moduleId}-${event.params.claimId}`

    const bountyModule = (await context.BountyModule.get(moduleId))!
    const token = (await context.Token.get(bountyModule.token_id))!

    // Remove all existing contributors for this claim
    let loop = true
    let index = 0
    while (loop) {
      let contributorId = `${id}-${index}`

      let contributor = await context.BountyContributor.get(contributorId)
      if (contributor) {
        context.BountyContributor.deleteUnsafe(contributorId)
        index++
      } else {
        loop = false
      }
    }

    // Add the updated list of contributors
    event.params.contributors.forEach((element, index) => {
      let contributorId = `${id}-${index}`

      const claimAmount = formatUnitsToBD(element[1], token.decimals)
      const claimAmountUSD = claimAmount.times(token.priceUSD)

      context.BountyContributor.set({
        id: contributorId,
        bountyClaim_id: id,
        address: element[0],
        claimAmount,
        claimAmountUSD,
      })
    })
  }
)

// Updates claim details
LM_PC_Bounties_v1.ClaimDetailsUpdated.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const id = `${moduleId}-${event.params.claimId}`

  const entity = await context.BountyClaim.get(id)
  const detail = event.params.details as `0x${string}`

  context.BountyClaim.set({
    ...entity!,
    details: hexToString(detail),
  })
})

// Marks a claim as verified/claimed
LM_PC_Bounties_v1.ClaimVerified.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const id = `${moduleId}-${event.params.claimId}`

  const entity = await context.BountyClaim.get(id)

  context.BountyClaim.set({
    ...entity!,
    claimed: true,
  })
})
