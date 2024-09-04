import { keccak256, formatUnits } from 'viem';
import { moduleTitles } from './constants';

export const getModuleTitleFromId = (hash: `0x${string}`) => {
  return moduleTitles.find((title) => {
    // @ts-ignore
    return keccak256(title) === hash;
  });
};

export const uintToFloat = (amount: bigint, decimals: number) => {
  return parseFloat(formatUnits(amount, decimals));
};
