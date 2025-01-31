import { LM_PC_Bounties_v1 } from 'generated'
import { hexToString } from 'viem'
import { formatUnitsToBD } from '../../utils'

// Module initialization handler
LM_PC_Bounties_v1.ModuleInitialized.handler(async ({ event, context }) => {
  const address = event.srcAddress
  const chainId = event.chainId
  const id = `${chainId}-${address}`
  const workflow_id = `${chainId}-${event.params.parentOrchestrator}`

  context.BountyModule.set({
    id,
    chainId,
    address,

    workflow_id,
  })
})

// ===== Bounty Management Handlers =====

// Creates a new bounty record
LM_PC_Bounties_v1.BountyAdded.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const bountyId = `${event.chainId}-${event.transaction}`

  const bountyModule = await context.BountyModule.get(moduleId)

  if (!bountyModule) {
    context.log.error(`Could not find bounty module ${event.srcAddress}`)
    return
  }

  // TODO: Fetch the token decimals
  const minimumPayoutAmount = formatUnitsToBD(
    event.params.minimumPayoutAmount,
    18
  )
  const maximumPayoutAmount = formatUnitsToBD(
    event.params.maximumPayoutAmount,
    18
  )

  context.Bounty.set({
    id: bountyId,
    bountyModule_id: bountyModule!.id,
    minimumPayoutAmount,
    maximumPayoutAmount,
    details: hexToString(event.params.details as `0x${string}`),
    locked: false,
  })
})

// Updates bounty details
LM_PC_Bounties_v1.BountyUpdated.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`

  const bountyId = `${id}-${event.params.bountyId}`
  const entity = await context.Bounty.get(bountyId)

  context.Bounty.set({
    ...entity!,
    details: event.params.details,
  })
})

// Marks a bounty as locked
LM_PC_Bounties_v1.BountyLocked.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`

  const bountyId = `${id}-${event.params.bountyId}`
  const entity = await context.Bounty.get(bountyId)

  context.Bounty.set({
    ...entity!,
    locked: true,
  })
})

// ===== Claim Management Handlers =====

// Creates a new claim and its associated contributors
LM_PC_Bounties_v1.ClaimAdded.handler(async ({ event, context }) => {
  const moduleId = `${event.chainId}-${event.srcAddress}`
  const bountyId = `${event.chainId}-${event.transaction}`
  const claimId = `${moduleId}-${event.params.claimId}`
  const detail = event.params.details as `0x${string}`

  // Create the claim record
  context.BountyClaim.set({
    id: claimId,
    bounty_id: bountyId,
    details: hexToString(detail),
    claimed: false,
  })

  // Create contributor records for this claim
  event.params.contributors.forEach((element, index) => {
    const contributorId = `${bountyId}-${event.params.claimId}-${index}`

    // TODO: Fetch the token decimals
    const claimAmount = formatUnitsToBD(element[1], 18)

    context.BountyContributor.set({
      id: contributorId,
      bountyClaim_id: claimId,
      address: element[0],
      claimAmount,
    })
  })
})

// Updates the contributors for an existing claim
LM_PC_Bounties_v1.ClaimContributorsUpdated.handler(
  async ({ event, context }) => {
    const id = `${event.chainId}-${event.srcAddress}`

    const claimId = `${id}-${event.params.claimId}`
    const claim = await context.BountyClaim.get(claimId)

    if (!claim) {
      context.log.error(`Could not find claim ${event.params.claimId}`)
      return
    }

    const bountyId = `${claim.bounty_id.toString()}`

    // Remove all existing contributors for this claim
    let loop = true
    let index = 0
    while (loop) {
      let contributorId = `${bountyId}-${event.params.claimId.toString()}-${index}`

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
      let contributorId = `${bountyId}-${event.params.claimId.toString()}-${index}`

      // TODO: Fetch the token decimals
      const claimAmount = formatUnitsToBD(element[1], 18)

      context.BountyContributor.set({
        id: contributorId,
        bountyClaim_id: claimId,
        address: element[0],
        claimAmount,
      })
    })
  }
)

// Updates claim details
LM_PC_Bounties_v1.ClaimDetailsUpdated.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`

  const claimId = `${id}-${event.params.claimId}`
  const entity = await context.BountyClaim.get(claimId)
  const detail = event.params.details as `0x${string}`

  context.BountyClaim.set({
    ...entity!,
    details: hexToString(detail),
  })
})

// Marks a claim as verified/claimed
LM_PC_Bounties_v1.ClaimVerified.handler(async ({ event, context }) => {
  const id = `${event.chainId}-${event.srcAddress}`

  const claimId = `${id}-${event.params.claimId}`
  const entity = await context.BountyClaim.get(claimId)

  context.BountyClaim.set({
    ...entity!,
    claimed: true,
  })
})
