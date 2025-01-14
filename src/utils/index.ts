import { keccak256, formatUnits } from "viem";
import { moduleTitles } from "./constants";

export const getModuleTitleFromId = (hash: `0x${string}`) =>
  moduleTitles.find((title) => keccak256(title as `0x${string}`) === hash);

export const uintToFloat = (amount: bigint, decimals: number) => {
  return parseFloat(formatUnits(amount, decimals));
};
