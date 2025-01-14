import { BondingCurve_t } from "generated/src/db/Entities.gen";

export type OptionalBondingCurveProperties = Partial<
  Omit<BondingCurve_t, "id" | "chainId" | "workflow_id">
>;
