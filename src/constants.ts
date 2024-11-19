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
};

export const moduleTitles = [
  ...moduleGroups.fundingManager.bondingCurves.members,
];

export const addressZero =
  '0x0000000000000000000000000000000000000000';
