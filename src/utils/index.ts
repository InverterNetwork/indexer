export * from "./token";
export * from "./interval-updates";
export * from "./funding-manager";
export * from "./constants";

import { keccak256, formatUnits } from "viem";
import { moduleTitles } from "./constants";

export const getModuleTitleFromId = (hash: `0x${string}`) =>
  moduleTitles.find((title) => keccak256(title as `0x${string}`) === hash);

export const uintToFloat = (amount: bigint, decimals: number) => {
  return parseFloat(formatUnits(amount, decimals));
};

export const NULL_ETH_HEX_STRING =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

export function isNullEthValue(value: string): boolean {
  return value == NULL_ETH_HEX_STRING;
}
