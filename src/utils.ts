import { keccak256 } from 'viem';
import { moduleTitles } from './constants';

export const getModuleTitleFromId = (hash: `0x${string}`) => {
  return moduleTitles.find((title) => {
    // @ts-ignore
    return keccak256(title) === hash;
  });
};
