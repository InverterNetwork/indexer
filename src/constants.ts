export const moduleGroups = {
  fundingManager: {
    bondingCurves: {
      members: [
        'FM_BC_Bancor_Redeeming_VirtualSupply_v1',
        'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1',
      ],
      entity: 'BondingCurve',
    },
  },
  logicModules: {
    bounties: {
      members: ['LM_PC_Bounties_v1'],
      entity: 'LM_PC_Bounties_v1',
    },
  },
};

export const moduleTitles = [
  ...moduleGroups.fundingManager.bondingCurves.members,
  ...moduleGroups.logicModules.bounties.members,
];
