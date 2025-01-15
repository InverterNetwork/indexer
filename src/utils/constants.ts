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

export const ZERO_BI = 0n
export const ONE_BI = 1n
export const ZERO_BD = 0
export const ONE_BD = 1
export const BI_18 = 18n
