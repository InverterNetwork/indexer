import { BigDecimal } from 'generated'
import { stringToHex } from 'viem'

export const moduleGroups = {
  fundingManager: {
    bondingCurves: {
      members: [
        'FM_BC_Bancor_Redeeming_VirtualSupply_v1',
        'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1',
      ],
      entity: 'BondingCurve',
    },
    depositVaults: {
      members: ['FM_DepositVault_v1'],
      entity: 'FM_DepositVault_v1',
    },
  },
  logicModules: {
    bounties: {
      members: ['LM_PC_Bounties_v1'],
      entity: 'LM_PC_Bounties_v1',
    },
  },
}

export const moduleTitles = [
  ...moduleGroups.fundingManager.bondingCurves.members,
  ...moduleGroups.fundingManager.depositVaults.members,
  ...moduleGroups.logicModules.bounties.members,
]

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ZERO_BI = BigInt(0)
export const ONE_BI = BigInt(1)
export const ZERO_BD = BigDecimal('0')
export const ONE_BD = BigDecimal('1')
export const BI_18 = BigInt(18)

export const knownRoleNames = [
  'DEFAULT_ADMIN_ROLE',
  'CURVE_USER',
  'WHITELIST_ROLE',
  'BURN_ADMIN_ROLE',
  'BOUNTY_ISSUER_ROLE',
  'CLAIMANT_ROLE',
  'BOUNTY_ISSUER_ROLE',
  'VERIFIER_ROLE',
  'PRICE_SETTER_ROLE',
  'ASSERTER_ROLE',
  'PAYMENT_PUSHER_ROLE',
  'WHITELIST_ROLE',
]

export const DEFAULT_ADMIN_ROLE =
  '0x0000000000000000000000000000000000000000000000000000000000000000'

export const knownRoles = knownRoleNames.map((name) => ({
  name,
  hex:
    name === 'DEFAULT_ADMIN_ROLE'
      ? (DEFAULT_ADMIN_ROLE as string)
      : (stringToHex(name, {
          size: 32,
        }) as string),
}))
