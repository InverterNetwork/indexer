import { IssuanceTokenDayData, IssuanceTokenHourData } from "generated";

export const initialIssuanceTokenHourData = {
  id: undefined,
  token_id: undefined,
  openInCol: undefined,
  lowInCol: undefined,
  highInCol: undefined,
  closeInCol: undefined,
  periodStartUnix: undefined,
  volumeInCol: undefined,
  projectFeeInCol: undefined,
  projectFeeInIssuance: undefined,
  protocolFeeInCol: undefined,
} satisfies Partial<IssuanceTokenHourData>;

export const initialIssuanceTokenDayData = {
  ...initialIssuanceTokenHourData,
  date: undefined,
} satisfies Partial<IssuanceTokenDayData>;
