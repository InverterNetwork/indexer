import { keccak256, encodeAbiParameters } from "viem";
import { Metadata } from "./types";
import { contractRegistrations, eventLog } from "generated";
import { moduleGroups } from "../utils/constants";

export const getMetadataId = (
  majorVersion: bigint,
  url: string,
  name: string
) => {
  return keccak256(
    encodeAbiParameters(
      [
        { name: "majorVersion", type: "uint256" },
        { name: "url", type: "string" },
        { name: "title", type: "string" },
      ],
      [majorVersion, url, name]
    )
  );
};

export const registerModule = (
  context: contractRegistrations,
  name: string,
  event: eventLog<any>
) => {
  // index both restricted and open bc as restircted bc

  if (moduleGroups.fundingManager.bondingCurves.members.includes(name)) {
    return context.addBondingCurve(event.params.m);
  }

  if (moduleGroups.fundingManager.depositVaults.members.includes(name)) {
    return context.addFM_DepositVault_v1(event.params.m);
  }

  if (moduleGroups.logicModules.bounties.members.includes(name)) {
    return context.addLM_PC_Bounties_v1(event.params.m);
  }

  // default: try to register module based on its distinct ABI
  try {
    // @ts-ignore indexing will be rolled out gradually for various modules
    return context[`add${name as any}`](event.params.m);
  } catch (e) {
    console.warn(
      `Warning: When trying to index module could not find ABI for ${name}`
    );
  }
};
