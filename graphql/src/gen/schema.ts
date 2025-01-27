// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
  Boolean: boolean
  Float: number
  Int: number
  String: string
  contract_type: any
  feesource: any
  jsonb: any
  numeric: any
  swaptype: any
  timestamp: any
  timestamptz: any
  vestingstatus: any
}

/** columns and relationships of "BondingCurve" */
export interface BondingCurve {
  address: Scalars['String']
  bcType: Scalars['String'] | null
  buyFee: Scalars['numeric']
  buyReserveRatio: Scalars['numeric']
  chainId: Scalars['Int']
  /** An object relationship */
  collateralToken: Token | null
  collateralToken_id: Scalars['String']
  /** An array relationship */
  curveDayData: CurveDayData[]
  /** An aggregate relationship */
  curveDayData_aggregate: CurveDayData_aggregate
  /** An array relationship */
  curveHourData: CurveHourData[]
  /** An aggregate relationship */
  curveHourData_aggregate: CurveHourData_aggregate
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  /** An object relationship */
  issuanceToken: Token | null
  /** An array relationship */
  issuanceTokenDayData: IssuanceTokenDayData[]
  /** An aggregate relationship */
  issuanceTokenDayData_aggregate: IssuanceTokenDayData_aggregate
  /** An array relationship */
  issuanceTokenHourData: IssuanceTokenHourData[]
  /** An aggregate relationship */
  issuanceTokenHourData_aggregate: IssuanceTokenHourData_aggregate
  issuanceToken_id: Scalars['String']
  /** An array relationship */
  projectFees: ProjectFee[]
  /** An aggregate relationship */
  projectFees_aggregate: ProjectFee_aggregate
  /** An array relationship */
  protocolFees: ProtocolFee[]
  /** An aggregate relationship */
  protocolFees_aggregate: ProtocolFee_aggregate
  reserveCOL: Scalars['numeric']
  reserveUSD: Scalars['numeric']
  sellFee: Scalars['numeric']
  sellReserveRatio: Scalars['numeric']
  /** An array relationship */
  swaps: Swap[]
  virtualCOL: Scalars['numeric']
  virtualISS: Scalars['numeric']
  /** An object relationship */
  workflow: Workflow | null
  workflow_id: Scalars['String']
  __typename: 'BondingCurve'
}

/** aggregated selection of "BondingCurve" */
export interface BondingCurve_aggregate {
  aggregate: BondingCurve_aggregate_fields | null
  nodes: BondingCurve[]
  __typename: 'BondingCurve_aggregate'
}

/** aggregate fields of "BondingCurve" */
export interface BondingCurve_aggregate_fields {
  avg: BondingCurve_avg_fields | null
  count: Scalars['Int']
  max: BondingCurve_max_fields | null
  min: BondingCurve_min_fields | null
  stddev: BondingCurve_stddev_fields | null
  stddev_pop: BondingCurve_stddev_pop_fields | null
  stddev_samp: BondingCurve_stddev_samp_fields | null
  sum: BondingCurve_sum_fields | null
  var_pop: BondingCurve_var_pop_fields | null
  var_samp: BondingCurve_var_samp_fields | null
  variance: BondingCurve_variance_fields | null
  __typename: 'BondingCurve_aggregate_fields'
}

/** aggregate avg on columns */
export interface BondingCurve_avg_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  reserveCOL: Scalars['Float'] | null
  reserveUSD: Scalars['Float'] | null
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_avg_fields'
}

/** aggregate max on columns */
export interface BondingCurve_max_fields {
  address: Scalars['String'] | null
  bcType: Scalars['String'] | null
  buyFee: Scalars['numeric'] | null
  buyReserveRatio: Scalars['numeric'] | null
  chainId: Scalars['Int'] | null
  collateralToken_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  reserveCOL: Scalars['numeric'] | null
  reserveUSD: Scalars['numeric'] | null
  sellFee: Scalars['numeric'] | null
  sellReserveRatio: Scalars['numeric'] | null
  virtualCOL: Scalars['numeric'] | null
  virtualISS: Scalars['numeric'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'BondingCurve_max_fields'
}

/** aggregate min on columns */
export interface BondingCurve_min_fields {
  address: Scalars['String'] | null
  bcType: Scalars['String'] | null
  buyFee: Scalars['numeric'] | null
  buyReserveRatio: Scalars['numeric'] | null
  chainId: Scalars['Int'] | null
  collateralToken_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  reserveCOL: Scalars['numeric'] | null
  reserveUSD: Scalars['numeric'] | null
  sellFee: Scalars['numeric'] | null
  sellReserveRatio: Scalars['numeric'] | null
  virtualCOL: Scalars['numeric'] | null
  virtualISS: Scalars['numeric'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'BondingCurve_min_fields'
}

/** select columns of table "BondingCurve" */
export type BondingCurve_select_column =
  | 'address'
  | 'bcType'
  | 'buyFee'
  | 'buyReserveRatio'
  | 'chainId'
  | 'collateralToken_id'
  | 'db_write_timestamp'
  | 'id'
  | 'issuanceToken_id'
  | 'reserveCOL'
  | 'reserveUSD'
  | 'sellFee'
  | 'sellReserveRatio'
  | 'virtualCOL'
  | 'virtualISS'
  | 'workflow_id'

/** aggregate stddev on columns */
export interface BondingCurve_stddev_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  reserveCOL: Scalars['Float'] | null
  reserveUSD: Scalars['Float'] | null
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface BondingCurve_stddev_pop_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  reserveCOL: Scalars['Float'] | null
  reserveUSD: Scalars['Float'] | null
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface BondingCurve_stddev_samp_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  reserveCOL: Scalars['Float'] | null
  reserveUSD: Scalars['Float'] | null
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface BondingCurve_sum_fields {
  buyFee: Scalars['numeric'] | null
  buyReserveRatio: Scalars['numeric'] | null
  chainId: Scalars['Int'] | null
  reserveCOL: Scalars['numeric'] | null
  reserveUSD: Scalars['numeric'] | null
  sellFee: Scalars['numeric'] | null
  sellReserveRatio: Scalars['numeric'] | null
  virtualCOL: Scalars['numeric'] | null
  virtualISS: Scalars['numeric'] | null
  __typename: 'BondingCurve_sum_fields'
}

/** aggregate var_pop on columns */
export interface BondingCurve_var_pop_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  reserveCOL: Scalars['Float'] | null
  reserveUSD: Scalars['Float'] | null
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface BondingCurve_var_samp_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  reserveCOL: Scalars['Float'] | null
  reserveUSD: Scalars['Float'] | null
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_var_samp_fields'
}

/** aggregate variance on columns */
export interface BondingCurve_variance_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  reserveCOL: Scalars['Float'] | null
  reserveUSD: Scalars['Float'] | null
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_variance_fields'
}

/** columns and relationships of "Bounty" */
export interface Bounty {
  /** An object relationship */
  bountyModule: BountyModule | null
  bountyModule_id: Scalars['String']
  /** An array relationship */
  claims: BountyClaim[]
  /** An aggregate relationship */
  claims_aggregate: BountyClaim_aggregate
  db_write_timestamp: Scalars['timestamp'] | null
  details: Scalars['String']
  id: Scalars['String']
  locked: Scalars['Boolean'] | null
  maximumPayoutAmount: Scalars['numeric']
  minimumPayoutAmount: Scalars['numeric']
  __typename: 'Bounty'
}

/** columns and relationships of "BountyClaim" */
export interface BountyClaim {
  /** An object relationship */
  bounty: Bounty | null
  bounty_id: Scalars['String']
  claimed: Scalars['Boolean'] | null
  /** An array relationship */
  contributors: BountyContributor[]
  db_write_timestamp: Scalars['timestamp'] | null
  details: Scalars['String']
  id: Scalars['String']
  __typename: 'BountyClaim'
}

/** aggregated selection of "BountyClaim" */
export interface BountyClaim_aggregate {
  aggregate: BountyClaim_aggregate_fields | null
  nodes: BountyClaim[]
  __typename: 'BountyClaim_aggregate'
}

/** aggregate fields of "BountyClaim" */
export interface BountyClaim_aggregate_fields {
  count: Scalars['Int']
  max: BountyClaim_max_fields | null
  min: BountyClaim_min_fields | null
  __typename: 'BountyClaim_aggregate_fields'
}

/** aggregate max on columns */
export interface BountyClaim_max_fields {
  bounty_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  details: Scalars['String'] | null
  id: Scalars['String'] | null
  __typename: 'BountyClaim_max_fields'
}

/** aggregate min on columns */
export interface BountyClaim_min_fields {
  bounty_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  details: Scalars['String'] | null
  id: Scalars['String'] | null
  __typename: 'BountyClaim_min_fields'
}

/** select columns of table "BountyClaim" */
export type BountyClaim_select_column =
  | 'bounty_id'
  | 'claimed'
  | 'db_write_timestamp'
  | 'details'
  | 'id'

/** select "BountyClaim_aggregate_bool_exp_bool_and_arguments_columns" columns of table "BountyClaim" */
export type BountyClaim_select_column_BountyClaim_aggregate_bool_exp_bool_and_arguments_columns =
  'claimed'

/** select "BountyClaim_aggregate_bool_exp_bool_or_arguments_columns" columns of table "BountyClaim" */
export type BountyClaim_select_column_BountyClaim_aggregate_bool_exp_bool_or_arguments_columns =
  'claimed'

/** columns and relationships of "BountyContributor" */
export interface BountyContributor {
  address: Scalars['String']
  /** An object relationship */
  bountyClaim: BountyClaim | null
  bountyClaim_id: Scalars['String']
  claimAmount: Scalars['numeric']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  __typename: 'BountyContributor'
}

/** select columns of table "BountyContributor" */
export type BountyContributor_select_column =
  | 'address'
  | 'bountyClaim_id'
  | 'claimAmount'
  | 'db_write_timestamp'
  | 'id'

/** columns and relationships of "BountyModule" */
export interface BountyModule {
  /** An array relationship */
  bounties: Bounty[]
  /** An aggregate relationship */
  bounties_aggregate: Bounty_aggregate
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  /** An object relationship */
  workflow: Workflow | null
  workflow_id: Scalars['String']
  __typename: 'BountyModule'
}

/** select columns of table "BountyModule" */
export type BountyModule_select_column =
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'workflow_id'

/** aggregated selection of "Bounty" */
export interface Bounty_aggregate {
  aggregate: Bounty_aggregate_fields | null
  nodes: Bounty[]
  __typename: 'Bounty_aggregate'
}

/** aggregate fields of "Bounty" */
export interface Bounty_aggregate_fields {
  avg: Bounty_avg_fields | null
  count: Scalars['Int']
  max: Bounty_max_fields | null
  min: Bounty_min_fields | null
  stddev: Bounty_stddev_fields | null
  stddev_pop: Bounty_stddev_pop_fields | null
  stddev_samp: Bounty_stddev_samp_fields | null
  sum: Bounty_sum_fields | null
  var_pop: Bounty_var_pop_fields | null
  var_samp: Bounty_var_samp_fields | null
  variance: Bounty_variance_fields | null
  __typename: 'Bounty_aggregate_fields'
}

/** aggregate avg on columns */
export interface Bounty_avg_fields {
  maximumPayoutAmount: Scalars['Float'] | null
  minimumPayoutAmount: Scalars['Float'] | null
  __typename: 'Bounty_avg_fields'
}

/** aggregate max on columns */
export interface Bounty_max_fields {
  bountyModule_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  details: Scalars['String'] | null
  id: Scalars['String'] | null
  maximumPayoutAmount: Scalars['numeric'] | null
  minimumPayoutAmount: Scalars['numeric'] | null
  __typename: 'Bounty_max_fields'
}

/** aggregate min on columns */
export interface Bounty_min_fields {
  bountyModule_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  details: Scalars['String'] | null
  id: Scalars['String'] | null
  maximumPayoutAmount: Scalars['numeric'] | null
  minimumPayoutAmount: Scalars['numeric'] | null
  __typename: 'Bounty_min_fields'
}

/** select columns of table "Bounty" */
export type Bounty_select_column =
  | 'bountyModule_id'
  | 'db_write_timestamp'
  | 'details'
  | 'id'
  | 'locked'
  | 'maximumPayoutAmount'
  | 'minimumPayoutAmount'

/** select "Bounty_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Bounty" */
export type Bounty_select_column_Bounty_aggregate_bool_exp_bool_and_arguments_columns =
  'locked'

/** select "Bounty_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Bounty" */
export type Bounty_select_column_Bounty_aggregate_bool_exp_bool_or_arguments_columns =
  'locked'

/** aggregate stddev on columns */
export interface Bounty_stddev_fields {
  maximumPayoutAmount: Scalars['Float'] | null
  minimumPayoutAmount: Scalars['Float'] | null
  __typename: 'Bounty_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Bounty_stddev_pop_fields {
  maximumPayoutAmount: Scalars['Float'] | null
  minimumPayoutAmount: Scalars['Float'] | null
  __typename: 'Bounty_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Bounty_stddev_samp_fields {
  maximumPayoutAmount: Scalars['Float'] | null
  minimumPayoutAmount: Scalars['Float'] | null
  __typename: 'Bounty_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Bounty_sum_fields {
  maximumPayoutAmount: Scalars['numeric'] | null
  minimumPayoutAmount: Scalars['numeric'] | null
  __typename: 'Bounty_sum_fields'
}

/** aggregate var_pop on columns */
export interface Bounty_var_pop_fields {
  maximumPayoutAmount: Scalars['Float'] | null
  minimumPayoutAmount: Scalars['Float'] | null
  __typename: 'Bounty_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Bounty_var_samp_fields {
  maximumPayoutAmount: Scalars['Float'] | null
  minimumPayoutAmount: Scalars['Float'] | null
  __typename: 'Bounty_var_samp_fields'
}

/** aggregate variance on columns */
export interface Bounty_variance_fields {
  maximumPayoutAmount: Scalars['Float'] | null
  minimumPayoutAmount: Scalars['Float'] | null
  __typename: 'Bounty_variance_fields'
}

/** columns and relationships of "CurveDayData" */
export interface CurveDayData {
  chainId: Scalars['Int']
  closeCOL: Scalars['numeric']
  closeUSD: Scalars['numeric']
  /** An object relationship */
  collateralToken: Token | null
  collateralToken_id: Scalars['String']
  date: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  highCOL: Scalars['numeric']
  highUSD: Scalars['numeric']
  id: Scalars['String']
  /** An object relationship */
  issuanceToken: Token | null
  issuanceToken_id: Scalars['String']
  lowCOL: Scalars['numeric']
  lowUSD: Scalars['numeric']
  module_id: Scalars['String']
  openCOL: Scalars['numeric']
  openUSD: Scalars['numeric']
  priceCOL: Scalars['numeric']
  priceUSD: Scalars['numeric']
  projectFeeCOL: Scalars['numeric']
  projectFeeUSD: Scalars['numeric']
  protocolFeeCOL: Scalars['numeric']
  protocolFeeISS: Scalars['numeric']
  protocolFeeUSD: Scalars['numeric']
  volumeCOL: Scalars['numeric']
  volumeISS: Scalars['numeric']
  volumeUSD: Scalars['numeric']
  __typename: 'CurveDayData'
}

/** aggregated selection of "CurveDayData" */
export interface CurveDayData_aggregate {
  aggregate: CurveDayData_aggregate_fields | null
  nodes: CurveDayData[]
  __typename: 'CurveDayData_aggregate'
}

/** aggregate fields of "CurveDayData" */
export interface CurveDayData_aggregate_fields {
  avg: CurveDayData_avg_fields | null
  count: Scalars['Int']
  max: CurveDayData_max_fields | null
  min: CurveDayData_min_fields | null
  stddev: CurveDayData_stddev_fields | null
  stddev_pop: CurveDayData_stddev_pop_fields | null
  stddev_samp: CurveDayData_stddev_samp_fields | null
  sum: CurveDayData_sum_fields | null
  var_pop: CurveDayData_var_pop_fields | null
  var_samp: CurveDayData_var_samp_fields | null
  variance: CurveDayData_variance_fields | null
  __typename: 'CurveDayData_aggregate_fields'
}

/** aggregate avg on columns */
export interface CurveDayData_avg_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveDayData_avg_fields'
}

/** aggregate max on columns */
export interface CurveDayData_max_fields {
  chainId: Scalars['Int'] | null
  closeCOL: Scalars['numeric'] | null
  closeUSD: Scalars['numeric'] | null
  collateralToken_id: Scalars['String'] | null
  date: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highCOL: Scalars['numeric'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  lowCOL: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  module_id: Scalars['String'] | null
  openCOL: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeCOL: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeCOL: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeCOL: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'CurveDayData_max_fields'
}

/** aggregate min on columns */
export interface CurveDayData_min_fields {
  chainId: Scalars['Int'] | null
  closeCOL: Scalars['numeric'] | null
  closeUSD: Scalars['numeric'] | null
  collateralToken_id: Scalars['String'] | null
  date: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highCOL: Scalars['numeric'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  lowCOL: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  module_id: Scalars['String'] | null
  openCOL: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeCOL: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeCOL: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeCOL: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'CurveDayData_min_fields'
}

/** select columns of table "CurveDayData" */
export type CurveDayData_select_column =
  | 'chainId'
  | 'closeCOL'
  | 'closeUSD'
  | 'collateralToken_id'
  | 'date'
  | 'db_write_timestamp'
  | 'highCOL'
  | 'highUSD'
  | 'id'
  | 'issuanceToken_id'
  | 'lowCOL'
  | 'lowUSD'
  | 'module_id'
  | 'openCOL'
  | 'openUSD'
  | 'priceCOL'
  | 'priceUSD'
  | 'projectFeeCOL'
  | 'projectFeeUSD'
  | 'protocolFeeCOL'
  | 'protocolFeeISS'
  | 'protocolFeeUSD'
  | 'volumeCOL'
  | 'volumeISS'
  | 'volumeUSD'

/** aggregate stddev on columns */
export interface CurveDayData_stddev_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveDayData_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface CurveDayData_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveDayData_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface CurveDayData_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveDayData_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface CurveDayData_sum_fields {
  chainId: Scalars['Int'] | null
  closeCOL: Scalars['numeric'] | null
  closeUSD: Scalars['numeric'] | null
  date: Scalars['Int'] | null
  highCOL: Scalars['numeric'] | null
  highUSD: Scalars['numeric'] | null
  lowCOL: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  openCOL: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeCOL: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeCOL: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeCOL: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'CurveDayData_sum_fields'
}

/** aggregate var_pop on columns */
export interface CurveDayData_var_pop_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveDayData_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface CurveDayData_var_samp_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveDayData_var_samp_fields'
}

/** aggregate variance on columns */
export interface CurveDayData_variance_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveDayData_variance_fields'
}

/** columns and relationships of "CurveHourData" */
export interface CurveHourData {
  chainId: Scalars['Int']
  closeCOL: Scalars['numeric']
  closeUSD: Scalars['numeric']
  /** An object relationship */
  collateralToken: Token | null
  collateralToken_id: Scalars['String']
  db_write_timestamp: Scalars['timestamp'] | null
  highCOL: Scalars['numeric']
  highUSD: Scalars['numeric']
  id: Scalars['String']
  /** An object relationship */
  issuanceToken: Token | null
  issuanceToken_id: Scalars['String']
  lowCOL: Scalars['numeric']
  lowUSD: Scalars['numeric']
  module_id: Scalars['String']
  openCOL: Scalars['numeric']
  openUSD: Scalars['numeric']
  periodStartUnix: Scalars['Int']
  priceCOL: Scalars['numeric']
  priceUSD: Scalars['numeric']
  projectFeeCOL: Scalars['numeric']
  projectFeeUSD: Scalars['numeric']
  protocolFeeCOL: Scalars['numeric']
  protocolFeeISS: Scalars['numeric']
  protocolFeeUSD: Scalars['numeric']
  volumeCOL: Scalars['numeric']
  volumeISS: Scalars['numeric']
  volumeUSD: Scalars['numeric']
  __typename: 'CurveHourData'
}

/** aggregated selection of "CurveHourData" */
export interface CurveHourData_aggregate {
  aggregate: CurveHourData_aggregate_fields | null
  nodes: CurveHourData[]
  __typename: 'CurveHourData_aggregate'
}

/** aggregate fields of "CurveHourData" */
export interface CurveHourData_aggregate_fields {
  avg: CurveHourData_avg_fields | null
  count: Scalars['Int']
  max: CurveHourData_max_fields | null
  min: CurveHourData_min_fields | null
  stddev: CurveHourData_stddev_fields | null
  stddev_pop: CurveHourData_stddev_pop_fields | null
  stddev_samp: CurveHourData_stddev_samp_fields | null
  sum: CurveHourData_sum_fields | null
  var_pop: CurveHourData_var_pop_fields | null
  var_samp: CurveHourData_var_samp_fields | null
  variance: CurveHourData_variance_fields | null
  __typename: 'CurveHourData_aggregate_fields'
}

/** aggregate avg on columns */
export interface CurveHourData_avg_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveHourData_avg_fields'
}

/** aggregate max on columns */
export interface CurveHourData_max_fields {
  chainId: Scalars['Int'] | null
  closeCOL: Scalars['numeric'] | null
  closeUSD: Scalars['numeric'] | null
  collateralToken_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highCOL: Scalars['numeric'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  lowCOL: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  module_id: Scalars['String'] | null
  openCOL: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  periodStartUnix: Scalars['Int'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeCOL: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeCOL: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeCOL: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'CurveHourData_max_fields'
}

/** aggregate min on columns */
export interface CurveHourData_min_fields {
  chainId: Scalars['Int'] | null
  closeCOL: Scalars['numeric'] | null
  closeUSD: Scalars['numeric'] | null
  collateralToken_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highCOL: Scalars['numeric'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  lowCOL: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  module_id: Scalars['String'] | null
  openCOL: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  periodStartUnix: Scalars['Int'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeCOL: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeCOL: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeCOL: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'CurveHourData_min_fields'
}

/** select columns of table "CurveHourData" */
export type CurveHourData_select_column =
  | 'chainId'
  | 'closeCOL'
  | 'closeUSD'
  | 'collateralToken_id'
  | 'db_write_timestamp'
  | 'highCOL'
  | 'highUSD'
  | 'id'
  | 'issuanceToken_id'
  | 'lowCOL'
  | 'lowUSD'
  | 'module_id'
  | 'openCOL'
  | 'openUSD'
  | 'periodStartUnix'
  | 'priceCOL'
  | 'priceUSD'
  | 'projectFeeCOL'
  | 'projectFeeUSD'
  | 'protocolFeeCOL'
  | 'protocolFeeISS'
  | 'protocolFeeUSD'
  | 'volumeCOL'
  | 'volumeISS'
  | 'volumeUSD'

/** aggregate stddev on columns */
export interface CurveHourData_stddev_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveHourData_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface CurveHourData_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveHourData_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface CurveHourData_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveHourData_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface CurveHourData_sum_fields {
  chainId: Scalars['Int'] | null
  closeCOL: Scalars['numeric'] | null
  closeUSD: Scalars['numeric'] | null
  highCOL: Scalars['numeric'] | null
  highUSD: Scalars['numeric'] | null
  lowCOL: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  openCOL: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  periodStartUnix: Scalars['Int'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeCOL: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeCOL: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeCOL: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'CurveHourData_sum_fields'
}

/** aggregate var_pop on columns */
export interface CurveHourData_var_pop_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveHourData_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface CurveHourData_var_samp_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveHourData_var_samp_fields'
}

/** aggregate variance on columns */
export interface CurveHourData_variance_fields {
  chainId: Scalars['Float'] | null
  closeCOL: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highCOL: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowCOL: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openCOL: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeCOL: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeCOL: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeCOL: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'CurveHourData_variance_fields'
}

/** columns and relationships of "Deposit" */
export interface Deposit {
  amount: Scalars['numeric']
  amountUSD: Scalars['numeric']
  blockTimestamp: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  /** An object relationship */
  depositVault: DepositVault | null
  depositVault_id: Scalars['String']
  depositor: Scalars['String']
  id: Scalars['String']
  __typename: 'Deposit'
}

/** columns and relationships of "DepositVault" */
export interface DepositVault {
  address: Scalars['String']
  balance: Scalars['numeric']
  balanceUSD: Scalars['numeric']
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  /** An array relationship */
  deposits: Deposit[]
  /** An aggregate relationship */
  deposits_aggregate: Deposit_aggregate
  id: Scalars['String']
  /** An object relationship */
  token: Token | null
  token_id: Scalars['String']
  /** An array relationship */
  transfers: Transfer[]
  /** An aggregate relationship */
  transfers_aggregate: Transfer_aggregate
  /** An object relationship */
  workflow: Workflow | null
  workflow_id: Scalars['String']
  __typename: 'DepositVault'
}

/** aggregated selection of "DepositVault" */
export interface DepositVault_aggregate {
  aggregate: DepositVault_aggregate_fields | null
  nodes: DepositVault[]
  __typename: 'DepositVault_aggregate'
}

/** aggregate fields of "DepositVault" */
export interface DepositVault_aggregate_fields {
  avg: DepositVault_avg_fields | null
  count: Scalars['Int']
  max: DepositVault_max_fields | null
  min: DepositVault_min_fields | null
  stddev: DepositVault_stddev_fields | null
  stddev_pop: DepositVault_stddev_pop_fields | null
  stddev_samp: DepositVault_stddev_samp_fields | null
  sum: DepositVault_sum_fields | null
  var_pop: DepositVault_var_pop_fields | null
  var_samp: DepositVault_var_samp_fields | null
  variance: DepositVault_variance_fields | null
  __typename: 'DepositVault_aggregate_fields'
}

/** aggregate avg on columns */
export interface DepositVault_avg_fields {
  balance: Scalars['Float'] | null
  balanceUSD: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_avg_fields'
}

/** aggregate max on columns */
export interface DepositVault_max_fields {
  address: Scalars['String'] | null
  balance: Scalars['numeric'] | null
  balanceUSD: Scalars['numeric'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  token_id: Scalars['String'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'DepositVault_max_fields'
}

/** aggregate min on columns */
export interface DepositVault_min_fields {
  address: Scalars['String'] | null
  balance: Scalars['numeric'] | null
  balanceUSD: Scalars['numeric'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  token_id: Scalars['String'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'DepositVault_min_fields'
}

/** select columns of table "DepositVault" */
export type DepositVault_select_column =
  | 'address'
  | 'balance'
  | 'balanceUSD'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'token_id'
  | 'workflow_id'

/** aggregate stddev on columns */
export interface DepositVault_stddev_fields {
  balance: Scalars['Float'] | null
  balanceUSD: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface DepositVault_stddev_pop_fields {
  balance: Scalars['Float'] | null
  balanceUSD: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface DepositVault_stddev_samp_fields {
  balance: Scalars['Float'] | null
  balanceUSD: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface DepositVault_sum_fields {
  balance: Scalars['numeric'] | null
  balanceUSD: Scalars['numeric'] | null
  chainId: Scalars['Int'] | null
  __typename: 'DepositVault_sum_fields'
}

/** aggregate var_pop on columns */
export interface DepositVault_var_pop_fields {
  balance: Scalars['Float'] | null
  balanceUSD: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface DepositVault_var_samp_fields {
  balance: Scalars['Float'] | null
  balanceUSD: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_var_samp_fields'
}

/** aggregate variance on columns */
export interface DepositVault_variance_fields {
  balance: Scalars['Float'] | null
  balanceUSD: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_variance_fields'
}

/** aggregated selection of "Deposit" */
export interface Deposit_aggregate {
  aggregate: Deposit_aggregate_fields | null
  nodes: Deposit[]
  __typename: 'Deposit_aggregate'
}

/** aggregate fields of "Deposit" */
export interface Deposit_aggregate_fields {
  avg: Deposit_avg_fields | null
  count: Scalars['Int']
  max: Deposit_max_fields | null
  min: Deposit_min_fields | null
  stddev: Deposit_stddev_fields | null
  stddev_pop: Deposit_stddev_pop_fields | null
  stddev_samp: Deposit_stddev_samp_fields | null
  sum: Deposit_sum_fields | null
  var_pop: Deposit_var_pop_fields | null
  var_samp: Deposit_var_samp_fields | null
  variance: Deposit_variance_fields | null
  __typename: 'Deposit_aggregate_fields'
}

/** aggregate avg on columns */
export interface Deposit_avg_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_avg_fields'
}

/** aggregate max on columns */
export interface Deposit_max_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  depositVault_id: Scalars['String'] | null
  depositor: Scalars['String'] | null
  id: Scalars['String'] | null
  __typename: 'Deposit_max_fields'
}

/** aggregate min on columns */
export interface Deposit_min_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  depositVault_id: Scalars['String'] | null
  depositor: Scalars['String'] | null
  id: Scalars['String'] | null
  __typename: 'Deposit_min_fields'
}

/** select columns of table "Deposit" */
export type Deposit_select_column =
  | 'amount'
  | 'amountUSD'
  | 'blockTimestamp'
  | 'db_write_timestamp'
  | 'depositVault_id'
  | 'depositor'
  | 'id'

/** aggregate stddev on columns */
export interface Deposit_stddev_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Deposit_stddev_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Deposit_stddev_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Deposit_sum_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  __typename: 'Deposit_sum_fields'
}

/** aggregate var_pop on columns */
export interface Deposit_var_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Deposit_var_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_var_samp_fields'
}

/** aggregate variance on columns */
export interface Deposit_variance_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_variance_fields'
}

/** columns and relationships of "IssuanceTokenDayData" */
export interface IssuanceTokenDayData {
  chainId: Scalars['Int']
  closeUSD: Scalars['numeric']
  date: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  highUSD: Scalars['numeric']
  id: Scalars['String']
  lowUSD: Scalars['numeric']
  openUSD: Scalars['numeric']
  priceUSD: Scalars['numeric']
  projectFeeUSD: Scalars['numeric']
  protocolFeeISS: Scalars['numeric']
  protocolFeeUSD: Scalars['numeric']
  token_id: Scalars['String']
  volumeISS: Scalars['numeric']
  volumeUSD: Scalars['numeric']
  __typename: 'IssuanceTokenDayData'
}

/** aggregated selection of "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_aggregate {
  aggregate: IssuanceTokenDayData_aggregate_fields | null
  nodes: IssuanceTokenDayData[]
  __typename: 'IssuanceTokenDayData_aggregate'
}

/** aggregate fields of "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_aggregate_fields {
  avg: IssuanceTokenDayData_avg_fields | null
  count: Scalars['Int']
  max: IssuanceTokenDayData_max_fields | null
  min: IssuanceTokenDayData_min_fields | null
  stddev: IssuanceTokenDayData_stddev_fields | null
  stddev_pop: IssuanceTokenDayData_stddev_pop_fields | null
  stddev_samp: IssuanceTokenDayData_stddev_samp_fields | null
  sum: IssuanceTokenDayData_sum_fields | null
  var_pop: IssuanceTokenDayData_var_pop_fields | null
  var_samp: IssuanceTokenDayData_var_samp_fields | null
  variance: IssuanceTokenDayData_variance_fields | null
  __typename: 'IssuanceTokenDayData_aggregate_fields'
}

/** aggregate avg on columns */
export interface IssuanceTokenDayData_avg_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenDayData_avg_fields'
}

/** aggregate max on columns */
export interface IssuanceTokenDayData_max_fields {
  chainId: Scalars['Int'] | null
  closeUSD: Scalars['numeric'] | null
  date: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  lowUSD: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  token_id: Scalars['String'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'IssuanceTokenDayData_max_fields'
}

/** aggregate min on columns */
export interface IssuanceTokenDayData_min_fields {
  chainId: Scalars['Int'] | null
  closeUSD: Scalars['numeric'] | null
  date: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  lowUSD: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  token_id: Scalars['String'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'IssuanceTokenDayData_min_fields'
}

/** select columns of table "IssuanceTokenDayData" */
export type IssuanceTokenDayData_select_column =
  | 'chainId'
  | 'closeUSD'
  | 'date'
  | 'db_write_timestamp'
  | 'highUSD'
  | 'id'
  | 'lowUSD'
  | 'openUSD'
  | 'priceUSD'
  | 'projectFeeUSD'
  | 'protocolFeeISS'
  | 'protocolFeeUSD'
  | 'token_id'
  | 'volumeISS'
  | 'volumeUSD'

/** aggregate stddev on columns */
export interface IssuanceTokenDayData_stddev_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenDayData_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface IssuanceTokenDayData_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenDayData_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface IssuanceTokenDayData_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenDayData_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface IssuanceTokenDayData_sum_fields {
  chainId: Scalars['Int'] | null
  closeUSD: Scalars['numeric'] | null
  date: Scalars['Int'] | null
  highUSD: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'IssuanceTokenDayData_sum_fields'
}

/** aggregate var_pop on columns */
export interface IssuanceTokenDayData_var_pop_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenDayData_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface IssuanceTokenDayData_var_samp_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenDayData_var_samp_fields'
}

/** aggregate variance on columns */
export interface IssuanceTokenDayData_variance_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  date: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenDayData_variance_fields'
}

/** columns and relationships of "IssuanceTokenHourData" */
export interface IssuanceTokenHourData {
  chainId: Scalars['Int']
  closeUSD: Scalars['numeric']
  db_write_timestamp: Scalars['timestamp'] | null
  highUSD: Scalars['numeric']
  id: Scalars['String']
  lowUSD: Scalars['numeric']
  openUSD: Scalars['numeric']
  periodStartUnix: Scalars['Int']
  priceUSD: Scalars['numeric']
  projectFeeUSD: Scalars['numeric']
  protocolFeeISS: Scalars['numeric']
  protocolFeeUSD: Scalars['numeric']
  token_id: Scalars['String']
  volumeISS: Scalars['numeric']
  volumeUSD: Scalars['numeric']
  __typename: 'IssuanceTokenHourData'
}

/** aggregated selection of "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_aggregate {
  aggregate: IssuanceTokenHourData_aggregate_fields | null
  nodes: IssuanceTokenHourData[]
  __typename: 'IssuanceTokenHourData_aggregate'
}

/** aggregate fields of "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_aggregate_fields {
  avg: IssuanceTokenHourData_avg_fields | null
  count: Scalars['Int']
  max: IssuanceTokenHourData_max_fields | null
  min: IssuanceTokenHourData_min_fields | null
  stddev: IssuanceTokenHourData_stddev_fields | null
  stddev_pop: IssuanceTokenHourData_stddev_pop_fields | null
  stddev_samp: IssuanceTokenHourData_stddev_samp_fields | null
  sum: IssuanceTokenHourData_sum_fields | null
  var_pop: IssuanceTokenHourData_var_pop_fields | null
  var_samp: IssuanceTokenHourData_var_samp_fields | null
  variance: IssuanceTokenHourData_variance_fields | null
  __typename: 'IssuanceTokenHourData_aggregate_fields'
}

/** aggregate avg on columns */
export interface IssuanceTokenHourData_avg_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenHourData_avg_fields'
}

/** aggregate max on columns */
export interface IssuanceTokenHourData_max_fields {
  chainId: Scalars['Int'] | null
  closeUSD: Scalars['numeric'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  lowUSD: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  periodStartUnix: Scalars['Int'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  token_id: Scalars['String'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'IssuanceTokenHourData_max_fields'
}

/** aggregate min on columns */
export interface IssuanceTokenHourData_min_fields {
  chainId: Scalars['Int'] | null
  closeUSD: Scalars['numeric'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  highUSD: Scalars['numeric'] | null
  id: Scalars['String'] | null
  lowUSD: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  periodStartUnix: Scalars['Int'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  token_id: Scalars['String'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'IssuanceTokenHourData_min_fields'
}

/** select columns of table "IssuanceTokenHourData" */
export type IssuanceTokenHourData_select_column =
  | 'chainId'
  | 'closeUSD'
  | 'db_write_timestamp'
  | 'highUSD'
  | 'id'
  | 'lowUSD'
  | 'openUSD'
  | 'periodStartUnix'
  | 'priceUSD'
  | 'projectFeeUSD'
  | 'protocolFeeISS'
  | 'protocolFeeUSD'
  | 'token_id'
  | 'volumeISS'
  | 'volumeUSD'

/** aggregate stddev on columns */
export interface IssuanceTokenHourData_stddev_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenHourData_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface IssuanceTokenHourData_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenHourData_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface IssuanceTokenHourData_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenHourData_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface IssuanceTokenHourData_sum_fields {
  chainId: Scalars['Int'] | null
  closeUSD: Scalars['numeric'] | null
  highUSD: Scalars['numeric'] | null
  lowUSD: Scalars['numeric'] | null
  openUSD: Scalars['numeric'] | null
  periodStartUnix: Scalars['Int'] | null
  priceUSD: Scalars['numeric'] | null
  projectFeeUSD: Scalars['numeric'] | null
  protocolFeeISS: Scalars['numeric'] | null
  protocolFeeUSD: Scalars['numeric'] | null
  volumeISS: Scalars['numeric'] | null
  volumeUSD: Scalars['numeric'] | null
  __typename: 'IssuanceTokenHourData_sum_fields'
}

/** aggregate var_pop on columns */
export interface IssuanceTokenHourData_var_pop_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenHourData_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface IssuanceTokenHourData_var_samp_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenHourData_var_samp_fields'
}

/** aggregate variance on columns */
export interface IssuanceTokenHourData_variance_fields {
  chainId: Scalars['Float'] | null
  closeUSD: Scalars['Float'] | null
  highUSD: Scalars['Float'] | null
  lowUSD: Scalars['Float'] | null
  openUSD: Scalars['Float'] | null
  periodStartUnix: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  projectFeeUSD: Scalars['Float'] | null
  protocolFeeISS: Scalars['Float'] | null
  protocolFeeUSD: Scalars['Float'] | null
  volumeISS: Scalars['Float'] | null
  volumeUSD: Scalars['Float'] | null
  __typename: 'IssuanceTokenHourData_variance_fields'
}

/** columns and relationships of "LinearVesting" */
export interface LinearVesting {
  amount: Scalars['numeric']
  blockTimestamp: Scalars['Int']
  chainId: Scalars['Int']
  cliff: Scalars['numeric']
  db_write_timestamp: Scalars['timestamp'] | null
  end: Scalars['numeric']
  id: Scalars['String']
  recipient: Scalars['String']
  start: Scalars['numeric']
  status: Scalars['vestingstatus']
  /** An object relationship */
  streamingPaymentProcessor: StreamingPaymentProcessor | null
  streamingPaymentProcessor_id: Scalars['String']
  /** An object relationship */
  token: Token | null
  token_id: Scalars['String']
  __typename: 'LinearVesting'
}

/** select columns of table "LinearVesting" */
export type LinearVesting_select_column =
  | 'amount'
  | 'blockTimestamp'
  | 'chainId'
  | 'cliff'
  | 'db_write_timestamp'
  | 'end'
  | 'id'
  | 'recipient'
  | 'start'
  | 'status'
  | 'streamingPaymentProcessor_id'
  | 'token_id'

/** columns and relationships of "ProjectFee" */
export interface ProjectFee {
  amount: Scalars['numeric']
  amountUSD: Scalars['numeric']
  blockTimestamp: Scalars['Int']
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  module_id: Scalars['String']
  recipient: Scalars['String']
  /** An object relationship */
  token: Token | null
  token_id: Scalars['String']
  __typename: 'ProjectFee'
}

/** aggregated selection of "ProjectFee" */
export interface ProjectFee_aggregate {
  aggregate: ProjectFee_aggregate_fields | null
  nodes: ProjectFee[]
  __typename: 'ProjectFee_aggregate'
}

/** aggregate fields of "ProjectFee" */
export interface ProjectFee_aggregate_fields {
  avg: ProjectFee_avg_fields | null
  count: Scalars['Int']
  max: ProjectFee_max_fields | null
  min: ProjectFee_min_fields | null
  stddev: ProjectFee_stddev_fields | null
  stddev_pop: ProjectFee_stddev_pop_fields | null
  stddev_samp: ProjectFee_stddev_samp_fields | null
  sum: ProjectFee_sum_fields | null
  var_pop: ProjectFee_var_pop_fields | null
  var_samp: ProjectFee_var_samp_fields | null
  variance: ProjectFee_variance_fields | null
  __typename: 'ProjectFee_aggregate_fields'
}

/** aggregate avg on columns */
export interface ProjectFee_avg_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProjectFee_avg_fields'
}

/** aggregate max on columns */
export interface ProjectFee_max_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  module_id: Scalars['String'] | null
  recipient: Scalars['String'] | null
  token_id: Scalars['String'] | null
  __typename: 'ProjectFee_max_fields'
}

/** aggregate min on columns */
export interface ProjectFee_min_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  module_id: Scalars['String'] | null
  recipient: Scalars['String'] | null
  token_id: Scalars['String'] | null
  __typename: 'ProjectFee_min_fields'
}

/** select columns of table "ProjectFee" */
export type ProjectFee_select_column =
  | 'amount'
  | 'amountUSD'
  | 'blockTimestamp'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'module_id'
  | 'recipient'
  | 'token_id'

/** aggregate stddev on columns */
export interface ProjectFee_stddev_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProjectFee_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface ProjectFee_stddev_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProjectFee_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface ProjectFee_stddev_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProjectFee_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface ProjectFee_sum_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  __typename: 'ProjectFee_sum_fields'
}

/** aggregate var_pop on columns */
export interface ProjectFee_var_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProjectFee_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface ProjectFee_var_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProjectFee_var_samp_fields'
}

/** aggregate variance on columns */
export interface ProjectFee_variance_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProjectFee_variance_fields'
}

/** columns and relationships of "ProtocolFee" */
export interface ProtocolFee {
  amount: Scalars['numeric']
  amountUSD: Scalars['numeric']
  blockTimestamp: Scalars['Int']
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  module_id: Scalars['String']
  source: Scalars['feesource']
  /** An object relationship */
  token: Token | null
  token_id: Scalars['String']
  treasury: Scalars['String']
  __typename: 'ProtocolFee'
}

/** aggregated selection of "ProtocolFee" */
export interface ProtocolFee_aggregate {
  aggregate: ProtocolFee_aggregate_fields | null
  nodes: ProtocolFee[]
  __typename: 'ProtocolFee_aggregate'
}

/** aggregate fields of "ProtocolFee" */
export interface ProtocolFee_aggregate_fields {
  avg: ProtocolFee_avg_fields | null
  count: Scalars['Int']
  max: ProtocolFee_max_fields | null
  min: ProtocolFee_min_fields | null
  stddev: ProtocolFee_stddev_fields | null
  stddev_pop: ProtocolFee_stddev_pop_fields | null
  stddev_samp: ProtocolFee_stddev_samp_fields | null
  sum: ProtocolFee_sum_fields | null
  var_pop: ProtocolFee_var_pop_fields | null
  var_samp: ProtocolFee_var_samp_fields | null
  variance: ProtocolFee_variance_fields | null
  __typename: 'ProtocolFee_aggregate_fields'
}

/** aggregate avg on columns */
export interface ProtocolFee_avg_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProtocolFee_avg_fields'
}

/** aggregate max on columns */
export interface ProtocolFee_max_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  module_id: Scalars['String'] | null
  source: Scalars['feesource'] | null
  token_id: Scalars['String'] | null
  treasury: Scalars['String'] | null
  __typename: 'ProtocolFee_max_fields'
}

/** aggregate min on columns */
export interface ProtocolFee_min_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  module_id: Scalars['String'] | null
  source: Scalars['feesource'] | null
  token_id: Scalars['String'] | null
  treasury: Scalars['String'] | null
  __typename: 'ProtocolFee_min_fields'
}

/** select columns of table "ProtocolFee" */
export type ProtocolFee_select_column =
  | 'amount'
  | 'amountUSD'
  | 'blockTimestamp'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'module_id'
  | 'source'
  | 'token_id'
  | 'treasury'

/** aggregate stddev on columns */
export interface ProtocolFee_stddev_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProtocolFee_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface ProtocolFee_stddev_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProtocolFee_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface ProtocolFee_stddev_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProtocolFee_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface ProtocolFee_sum_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  __typename: 'ProtocolFee_sum_fields'
}

/** aggregate var_pop on columns */
export interface ProtocolFee_var_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProtocolFee_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface ProtocolFee_var_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProtocolFee_var_samp_fields'
}

/** aggregate variance on columns */
export interface ProtocolFee_variance_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'ProtocolFee_variance_fields'
}

/** columns and relationships of "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor {
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  /** An array relationship */
  vestings: LinearVesting[]
  /** An object relationship */
  workflow: Workflow | null
  workflow_id: Scalars['String']
  __typename: 'StreamingPaymentProcessor'
}

/** select columns of table "StreamingPaymentProcessor" */
export type StreamingPaymentProcessor_select_column =
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'workflow_id'

/** columns and relationships of "Swap" */
export interface Swap {
  amountCOL: Scalars['numeric']
  amountISS: Scalars['numeric']
  amountUSD: Scalars['numeric']
  blockTimestamp: Scalars['Int']
  chainId: Scalars['Int']
  /** An object relationship */
  collateralToken: Token | null
  collateralToken_id: Scalars['String']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  initiator: Scalars['String']
  /** An object relationship */
  issuanceToken: Token | null
  issuanceToken_id: Scalars['String']
  module_id: Scalars['String']
  priceCOL: Scalars['numeric']
  priceUSD: Scalars['numeric']
  recipient: Scalars['String']
  swapType: Scalars['swaptype']
  __typename: 'Swap'
}

/** select columns of table "Swap" */
export type Swap_select_column =
  | 'amountCOL'
  | 'amountISS'
  | 'amountUSD'
  | 'blockTimestamp'
  | 'chainId'
  | 'collateralToken_id'
  | 'db_write_timestamp'
  | 'id'
  | 'initiator'
  | 'issuanceToken_id'
  | 'module_id'
  | 'priceCOL'
  | 'priceUSD'
  | 'recipient'
  | 'swapType'

/** columns and relationships of "Token" */
export interface Token {
  address: Scalars['String']
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  decimals: Scalars['Int']
  id: Scalars['String']
  name: Scalars['String']
  priceUSD: Scalars['numeric']
  symbol: Scalars['String']
  totalSupply: Scalars['numeric']
  __typename: 'Token'
}

/** aggregated selection of "Token" */
export interface Token_aggregate {
  aggregate: Token_aggregate_fields | null
  nodes: Token[]
  __typename: 'Token_aggregate'
}

/** aggregate fields of "Token" */
export interface Token_aggregate_fields {
  avg: Token_avg_fields | null
  count: Scalars['Int']
  max: Token_max_fields | null
  min: Token_min_fields | null
  stddev: Token_stddev_fields | null
  stddev_pop: Token_stddev_pop_fields | null
  stddev_samp: Token_stddev_samp_fields | null
  sum: Token_sum_fields | null
  var_pop: Token_var_pop_fields | null
  var_samp: Token_var_samp_fields | null
  variance: Token_variance_fields | null
  __typename: 'Token_aggregate_fields'
}

/** aggregate avg on columns */
export interface Token_avg_fields {
  chainId: Scalars['Float'] | null
  decimals: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  totalSupply: Scalars['Float'] | null
  __typename: 'Token_avg_fields'
}

/** aggregate max on columns */
export interface Token_max_fields {
  address: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  decimals: Scalars['Int'] | null
  id: Scalars['String'] | null
  name: Scalars['String'] | null
  priceUSD: Scalars['numeric'] | null
  symbol: Scalars['String'] | null
  totalSupply: Scalars['numeric'] | null
  __typename: 'Token_max_fields'
}

/** aggregate min on columns */
export interface Token_min_fields {
  address: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  decimals: Scalars['Int'] | null
  id: Scalars['String'] | null
  name: Scalars['String'] | null
  priceUSD: Scalars['numeric'] | null
  symbol: Scalars['String'] | null
  totalSupply: Scalars['numeric'] | null
  __typename: 'Token_min_fields'
}

/** select columns of table "Token" */
export type Token_select_column =
  | 'address'
  | 'chainId'
  | 'db_write_timestamp'
  | 'decimals'
  | 'id'
  | 'name'
  | 'priceUSD'
  | 'symbol'
  | 'totalSupply'

/** aggregate stddev on columns */
export interface Token_stddev_fields {
  chainId: Scalars['Float'] | null
  decimals: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  totalSupply: Scalars['Float'] | null
  __typename: 'Token_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Token_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  decimals: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  totalSupply: Scalars['Float'] | null
  __typename: 'Token_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Token_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  decimals: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  totalSupply: Scalars['Float'] | null
  __typename: 'Token_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Token_sum_fields {
  chainId: Scalars['Int'] | null
  decimals: Scalars['Int'] | null
  priceUSD: Scalars['numeric'] | null
  totalSupply: Scalars['numeric'] | null
  __typename: 'Token_sum_fields'
}

/** aggregate var_pop on columns */
export interface Token_var_pop_fields {
  chainId: Scalars['Float'] | null
  decimals: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  totalSupply: Scalars['Float'] | null
  __typename: 'Token_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Token_var_samp_fields {
  chainId: Scalars['Float'] | null
  decimals: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  totalSupply: Scalars['Float'] | null
  __typename: 'Token_var_samp_fields'
}

/** aggregate variance on columns */
export interface Token_variance_fields {
  chainId: Scalars['Float'] | null
  decimals: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  totalSupply: Scalars['Float'] | null
  __typename: 'Token_variance_fields'
}

/** columns and relationships of "Transfer" */
export interface Transfer {
  amount: Scalars['numeric']
  amountUSD: Scalars['numeric']
  blockTimestamp: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  /** An object relationship */
  depositVault: DepositVault | null
  depositVault_id: Scalars['String']
  id: Scalars['String']
  recipient: Scalars['String']
  __typename: 'Transfer'
}

/** aggregated selection of "Transfer" */
export interface Transfer_aggregate {
  aggregate: Transfer_aggregate_fields | null
  nodes: Transfer[]
  __typename: 'Transfer_aggregate'
}

/** aggregate fields of "Transfer" */
export interface Transfer_aggregate_fields {
  avg: Transfer_avg_fields | null
  count: Scalars['Int']
  max: Transfer_max_fields | null
  min: Transfer_min_fields | null
  stddev: Transfer_stddev_fields | null
  stddev_pop: Transfer_stddev_pop_fields | null
  stddev_samp: Transfer_stddev_samp_fields | null
  sum: Transfer_sum_fields | null
  var_pop: Transfer_var_pop_fields | null
  var_samp: Transfer_var_samp_fields | null
  variance: Transfer_variance_fields | null
  __typename: 'Transfer_aggregate_fields'
}

/** aggregate avg on columns */
export interface Transfer_avg_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_avg_fields'
}

/** aggregate max on columns */
export interface Transfer_max_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  depositVault_id: Scalars['String'] | null
  id: Scalars['String'] | null
  recipient: Scalars['String'] | null
  __typename: 'Transfer_max_fields'
}

/** aggregate min on columns */
export interface Transfer_min_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  depositVault_id: Scalars['String'] | null
  id: Scalars['String'] | null
  recipient: Scalars['String'] | null
  __typename: 'Transfer_min_fields'
}

/** select columns of table "Transfer" */
export type Transfer_select_column =
  | 'amount'
  | 'amountUSD'
  | 'blockTimestamp'
  | 'db_write_timestamp'
  | 'depositVault_id'
  | 'id'
  | 'recipient'

/** aggregate stddev on columns */
export interface Transfer_stddev_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Transfer_stddev_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Transfer_stddev_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Transfer_sum_fields {
  amount: Scalars['numeric'] | null
  amountUSD: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  __typename: 'Transfer_sum_fields'
}

/** aggregate var_pop on columns */
export interface Transfer_var_pop_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Transfer_var_samp_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_var_samp_fields'
}

/** aggregate variance on columns */
export interface Transfer_variance_fields {
  amount: Scalars['Float'] | null
  amountUSD: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_variance_fields'
}

/** columns and relationships of "Workflow" */
export interface Workflow {
  /** An object relationship */
  authorizer: WorkflowModule | null
  authorizer_id: Scalars['String']
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  /** An object relationship */
  fundingManager: WorkflowModule | null
  fundingManager_id: Scalars['String']
  id: Scalars['String']
  optionalModules: Scalars['String'][] | null
  orchestrator: Scalars['String']
  /** An object relationship */
  paymentProcessor: WorkflowModule | null
  paymentProcessor_id: Scalars['String']
  __typename: 'Workflow'
}

/** columns and relationships of "WorkflowModule" */
export interface WorkflowModule {
  address: Scalars['String']
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  /** An object relationship */
  moduleType: WorkflowModuleType | null
  moduleType_id: Scalars['String']
  orchestrator: Scalars['String']
  __typename: 'WorkflowModule'
}

/** columns and relationships of "WorkflowModuleType" */
export interface WorkflowModuleType {
  beacon: Scalars['String']
  chainId: Scalars['Int']
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String']
  majorVersion: Scalars['numeric']
  minorVersion: Scalars['numeric']
  name: Scalars['String']
  patchVersion: Scalars['numeric']
  url: Scalars['String']
  __typename: 'WorkflowModuleType'
}

/** select columns of table "WorkflowModuleType" */
export type WorkflowModuleType_select_column =
  | 'beacon'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'majorVersion'
  | 'minorVersion'
  | 'name'
  | 'patchVersion'
  | 'url'

/** select columns of table "WorkflowModule" */
export type WorkflowModule_select_column =
  | 'address'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'moduleType_id'
  | 'orchestrator'

/** select columns of table "Workflow" */
export type Workflow_select_column =
  | 'authorizer_id'
  | 'chainId'
  | 'db_write_timestamp'
  | 'fundingManager_id'
  | 'id'
  | 'optionalModules'
  | 'orchestrator'
  | 'paymentProcessor_id'

/** columns and relationships of "chain_metadata" */
export interface chain_metadata {
  block_height: Scalars['Int']
  chain_id: Scalars['Int']
  end_block: Scalars['Int'] | null
  first_event_block_number: Scalars['Int'] | null
  is_hyper_sync: Scalars['Boolean']
  latest_fetched_block_number: Scalars['Int']
  latest_processed_block: Scalars['Int'] | null
  num_batches_fetched: Scalars['Int']
  num_events_processed: Scalars['Int'] | null
  start_block: Scalars['Int']
  timestamp_caught_up_to_head_or_endblock: Scalars['timestamptz'] | null
  __typename: 'chain_metadata'
}

/** select columns of table "chain_metadata" */
export type chain_metadata_select_column =
  | 'block_height'
  | 'chain_id'
  | 'end_block'
  | 'first_event_block_number'
  | 'is_hyper_sync'
  | 'latest_fetched_block_number'
  | 'latest_processed_block'
  | 'num_batches_fetched'
  | 'num_events_processed'
  | 'start_block'
  | 'timestamp_caught_up_to_head_or_endblock'

/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'

/** columns and relationships of "dynamic_contract_registry" */
export interface dynamic_contract_registry {
  chain_id: Scalars['Int']
  contract_address: Scalars['String']
  contract_type: Scalars['contract_type']
  id: Scalars['String']
  is_pre_registered: Scalars['Boolean']
  registering_event_block_number: Scalars['Int']
  registering_event_block_timestamp: Scalars['Int']
  registering_event_contract_name: Scalars['String']
  registering_event_log_index: Scalars['Int']
  registering_event_name: Scalars['String']
  registering_event_src_address: Scalars['String']
  __typename: 'dynamic_contract_registry'
}

/** select columns of table "dynamic_contract_registry" */
export type dynamic_contract_registry_select_column =
  | 'chain_id'
  | 'contract_address'
  | 'contract_type'
  | 'id'
  | 'is_pre_registered'
  | 'registering_event_block_number'
  | 'registering_event_block_timestamp'
  | 'registering_event_contract_name'
  | 'registering_event_log_index'
  | 'registering_event_name'
  | 'registering_event_src_address'

/** columns and relationships of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data {
  block_hash: Scalars['String']
  block_number: Scalars['Int']
  block_timestamp: Scalars['Int']
  chain_id: Scalars['Int']
  __typename: 'end_of_block_range_scanned_data'
}

/** select columns of table "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data_select_column =
  | 'block_hash'
  | 'block_number'
  | 'block_timestamp'
  | 'chain_id'

/** columns and relationships of "event_sync_state" */
export interface event_sync_state {
  block_number: Scalars['Int']
  block_timestamp: Scalars['Int']
  chain_id: Scalars['Int']
  is_pre_registering_dynamic_contracts: Scalars['Boolean']
  log_index: Scalars['Int']
  __typename: 'event_sync_state'
}

/** select columns of table "event_sync_state" */
export type event_sync_state_select_column =
  | 'block_number'
  | 'block_timestamp'
  | 'chain_id'
  | 'is_pre_registering_dynamic_contracts'
  | 'log_index'

/** column ordering options */
export type order_by =
  | 'asc'
  | 'asc_nulls_first'
  | 'asc_nulls_last'
  | 'desc'
  | 'desc_nulls_first'
  | 'desc_nulls_last'

/** columns and relationships of "persisted_state" */
export interface persisted_state {
  abi_files_hash: Scalars['String']
  config_hash: Scalars['String']
  envio_version: Scalars['String']
  handler_files_hash: Scalars['String']
  id: Scalars['Int']
  schema_hash: Scalars['String']
  __typename: 'persisted_state'
}

/** select columns of table "persisted_state" */
export type persisted_state_select_column =
  | 'abi_files_hash'
  | 'config_hash'
  | 'envio_version'
  | 'handler_files_hash'
  | 'id'
  | 'schema_hash'

export interface query_root {
  /** fetch data from the table: "BondingCurve" */
  BondingCurve: BondingCurve[]
  /** fetch aggregated fields from the table: "BondingCurve" */
  BondingCurve_aggregate: BondingCurve_aggregate
  /** fetch data from the table: "BondingCurve" using primary key columns */
  BondingCurve_by_pk: BondingCurve | null
  /** fetch data from the table: "Bounty" */
  Bounty: Bounty[]
  /** fetch data from the table: "BountyClaim" */
  BountyClaim: BountyClaim[]
  /** fetch aggregated fields from the table: "BountyClaim" */
  BountyClaim_aggregate: BountyClaim_aggregate
  /** fetch data from the table: "BountyClaim" using primary key columns */
  BountyClaim_by_pk: BountyClaim | null
  /** fetch data from the table: "BountyContributor" */
  BountyContributor: BountyContributor[]
  /** fetch data from the table: "BountyContributor" using primary key columns */
  BountyContributor_by_pk: BountyContributor | null
  /** fetch data from the table: "BountyModule" */
  BountyModule: BountyModule[]
  /** fetch data from the table: "BountyModule" using primary key columns */
  BountyModule_by_pk: BountyModule | null
  /** fetch aggregated fields from the table: "Bounty" */
  Bounty_aggregate: Bounty_aggregate
  /** fetch data from the table: "Bounty" using primary key columns */
  Bounty_by_pk: Bounty | null
  /** fetch data from the table: "CurveDayData" */
  CurveDayData: CurveDayData[]
  /** fetch aggregated fields from the table: "CurveDayData" */
  CurveDayData_aggregate: CurveDayData_aggregate
  /** fetch data from the table: "CurveDayData" using primary key columns */
  CurveDayData_by_pk: CurveDayData | null
  /** fetch data from the table: "CurveHourData" */
  CurveHourData: CurveHourData[]
  /** fetch aggregated fields from the table: "CurveHourData" */
  CurveHourData_aggregate: CurveHourData_aggregate
  /** fetch data from the table: "CurveHourData" using primary key columns */
  CurveHourData_by_pk: CurveHourData | null
  /** fetch data from the table: "Deposit" */
  Deposit: Deposit[]
  /** fetch data from the table: "DepositVault" */
  DepositVault: DepositVault[]
  /** fetch aggregated fields from the table: "DepositVault" */
  DepositVault_aggregate: DepositVault_aggregate
  /** fetch data from the table: "DepositVault" using primary key columns */
  DepositVault_by_pk: DepositVault | null
  /** fetch aggregated fields from the table: "Deposit" */
  Deposit_aggregate: Deposit_aggregate
  /** fetch data from the table: "Deposit" using primary key columns */
  Deposit_by_pk: Deposit | null
  /** fetch data from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData: IssuanceTokenDayData[]
  /** fetch aggregated fields from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData_aggregate: IssuanceTokenDayData_aggregate
  /** fetch data from the table: "IssuanceTokenDayData" using primary key columns */
  IssuanceTokenDayData_by_pk: IssuanceTokenDayData | null
  /** fetch data from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData: IssuanceTokenHourData[]
  /** fetch aggregated fields from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData_aggregate: IssuanceTokenHourData_aggregate
  /** fetch data from the table: "IssuanceTokenHourData" using primary key columns */
  IssuanceTokenHourData_by_pk: IssuanceTokenHourData | null
  /** fetch data from the table: "LinearVesting" */
  LinearVesting: LinearVesting[]
  /** fetch data from the table: "LinearVesting" using primary key columns */
  LinearVesting_by_pk: LinearVesting | null
  /** fetch data from the table: "ProjectFee" */
  ProjectFee: ProjectFee[]
  /** fetch aggregated fields from the table: "ProjectFee" */
  ProjectFee_aggregate: ProjectFee_aggregate
  /** fetch data from the table: "ProjectFee" using primary key columns */
  ProjectFee_by_pk: ProjectFee | null
  /** fetch data from the table: "ProtocolFee" */
  ProtocolFee: ProtocolFee[]
  /** fetch aggregated fields from the table: "ProtocolFee" */
  ProtocolFee_aggregate: ProtocolFee_aggregate
  /** fetch data from the table: "ProtocolFee" using primary key columns */
  ProtocolFee_by_pk: ProtocolFee | null
  /** fetch data from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor: StreamingPaymentProcessor[]
  /** fetch data from the table: "StreamingPaymentProcessor" using primary key columns */
  StreamingPaymentProcessor_by_pk: StreamingPaymentProcessor | null
  /** fetch data from the table: "Swap" */
  Swap: Swap[]
  /** fetch data from the table: "Swap" using primary key columns */
  Swap_by_pk: Swap | null
  /** fetch data from the table: "Token" */
  Token: Token[]
  /** fetch aggregated fields from the table: "Token" */
  Token_aggregate: Token_aggregate
  /** fetch data from the table: "Token" using primary key columns */
  Token_by_pk: Token | null
  /** fetch data from the table: "Transfer" */
  Transfer: Transfer[]
  /** fetch aggregated fields from the table: "Transfer" */
  Transfer_aggregate: Transfer_aggregate
  /** fetch data from the table: "Transfer" using primary key columns */
  Transfer_by_pk: Transfer | null
  /** fetch data from the table: "Workflow" */
  Workflow: Workflow[]
  /** fetch data from the table: "WorkflowModule" */
  WorkflowModule: WorkflowModule[]
  /** fetch data from the table: "WorkflowModuleType" */
  WorkflowModuleType: WorkflowModuleType[]
  /** fetch data from the table: "WorkflowModuleType" using primary key columns */
  WorkflowModuleType_by_pk: WorkflowModuleType | null
  /** fetch data from the table: "WorkflowModule" using primary key columns */
  WorkflowModule_by_pk: WorkflowModule | null
  /** fetch data from the table: "Workflow" using primary key columns */
  Workflow_by_pk: Workflow | null
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: chain_metadata[]
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk: chain_metadata | null
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: dynamic_contract_registry[]
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk: dynamic_contract_registry | null
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data: end_of_block_range_scanned_data[]
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk: end_of_block_range_scanned_data | null
  /** fetch data from the table: "event_sync_state" */
  event_sync_state: event_sync_state[]
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk: event_sync_state | null
  /** fetch data from the table: "persisted_state" */
  persisted_state: persisted_state[]
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk: persisted_state | null
  /** fetch data from the table: "raw_events" */
  raw_events: raw_events[]
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk: raw_events | null
  __typename: 'query_root'
}

/** columns and relationships of "raw_events" */
export interface raw_events {
  block_fields: Scalars['jsonb']
  block_hash: Scalars['String']
  block_number: Scalars['Int']
  block_timestamp: Scalars['Int']
  chain_id: Scalars['Int']
  contract_name: Scalars['String']
  db_write_timestamp: Scalars['timestamp'] | null
  event_id: Scalars['numeric']
  event_name: Scalars['String']
  log_index: Scalars['Int']
  params: Scalars['jsonb']
  serial: Scalars['Int']
  src_address: Scalars['String']
  transaction_fields: Scalars['jsonb']
  __typename: 'raw_events'
}

/** select columns of table "raw_events" */
export type raw_events_select_column =
  | 'block_fields'
  | 'block_hash'
  | 'block_number'
  | 'block_timestamp'
  | 'chain_id'
  | 'contract_name'
  | 'db_write_timestamp'
  | 'event_id'
  | 'event_name'
  | 'log_index'
  | 'params'
  | 'serial'
  | 'src_address'
  | 'transaction_fields'

export interface subscription_root {
  /** fetch data from the table: "BondingCurve" */
  BondingCurve: BondingCurve[]
  /** fetch aggregated fields from the table: "BondingCurve" */
  BondingCurve_aggregate: BondingCurve_aggregate
  /** fetch data from the table: "BondingCurve" using primary key columns */
  BondingCurve_by_pk: BondingCurve | null
  /** fetch data from the table in a streaming manner: "BondingCurve" */
  BondingCurve_stream: BondingCurve[]
  /** fetch data from the table: "Bounty" */
  Bounty: Bounty[]
  /** fetch data from the table: "BountyClaim" */
  BountyClaim: BountyClaim[]
  /** fetch aggregated fields from the table: "BountyClaim" */
  BountyClaim_aggregate: BountyClaim_aggregate
  /** fetch data from the table: "BountyClaim" using primary key columns */
  BountyClaim_by_pk: BountyClaim | null
  /** fetch data from the table in a streaming manner: "BountyClaim" */
  BountyClaim_stream: BountyClaim[]
  /** fetch data from the table: "BountyContributor" */
  BountyContributor: BountyContributor[]
  /** fetch data from the table: "BountyContributor" using primary key columns */
  BountyContributor_by_pk: BountyContributor | null
  /** fetch data from the table in a streaming manner: "BountyContributor" */
  BountyContributor_stream: BountyContributor[]
  /** fetch data from the table: "BountyModule" */
  BountyModule: BountyModule[]
  /** fetch data from the table: "BountyModule" using primary key columns */
  BountyModule_by_pk: BountyModule | null
  /** fetch data from the table in a streaming manner: "BountyModule" */
  BountyModule_stream: BountyModule[]
  /** fetch aggregated fields from the table: "Bounty" */
  Bounty_aggregate: Bounty_aggregate
  /** fetch data from the table: "Bounty" using primary key columns */
  Bounty_by_pk: Bounty | null
  /** fetch data from the table in a streaming manner: "Bounty" */
  Bounty_stream: Bounty[]
  /** fetch data from the table: "CurveDayData" */
  CurveDayData: CurveDayData[]
  /** fetch aggregated fields from the table: "CurveDayData" */
  CurveDayData_aggregate: CurveDayData_aggregate
  /** fetch data from the table: "CurveDayData" using primary key columns */
  CurveDayData_by_pk: CurveDayData | null
  /** fetch data from the table in a streaming manner: "CurveDayData" */
  CurveDayData_stream: CurveDayData[]
  /** fetch data from the table: "CurveHourData" */
  CurveHourData: CurveHourData[]
  /** fetch aggregated fields from the table: "CurveHourData" */
  CurveHourData_aggregate: CurveHourData_aggregate
  /** fetch data from the table: "CurveHourData" using primary key columns */
  CurveHourData_by_pk: CurveHourData | null
  /** fetch data from the table in a streaming manner: "CurveHourData" */
  CurveHourData_stream: CurveHourData[]
  /** fetch data from the table: "Deposit" */
  Deposit: Deposit[]
  /** fetch data from the table: "DepositVault" */
  DepositVault: DepositVault[]
  /** fetch aggregated fields from the table: "DepositVault" */
  DepositVault_aggregate: DepositVault_aggregate
  /** fetch data from the table: "DepositVault" using primary key columns */
  DepositVault_by_pk: DepositVault | null
  /** fetch data from the table in a streaming manner: "DepositVault" */
  DepositVault_stream: DepositVault[]
  /** fetch aggregated fields from the table: "Deposit" */
  Deposit_aggregate: Deposit_aggregate
  /** fetch data from the table: "Deposit" using primary key columns */
  Deposit_by_pk: Deposit | null
  /** fetch data from the table in a streaming manner: "Deposit" */
  Deposit_stream: Deposit[]
  /** fetch data from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData: IssuanceTokenDayData[]
  /** fetch aggregated fields from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData_aggregate: IssuanceTokenDayData_aggregate
  /** fetch data from the table: "IssuanceTokenDayData" using primary key columns */
  IssuanceTokenDayData_by_pk: IssuanceTokenDayData | null
  /** fetch data from the table in a streaming manner: "IssuanceTokenDayData" */
  IssuanceTokenDayData_stream: IssuanceTokenDayData[]
  /** fetch data from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData: IssuanceTokenHourData[]
  /** fetch aggregated fields from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData_aggregate: IssuanceTokenHourData_aggregate
  /** fetch data from the table: "IssuanceTokenHourData" using primary key columns */
  IssuanceTokenHourData_by_pk: IssuanceTokenHourData | null
  /** fetch data from the table in a streaming manner: "IssuanceTokenHourData" */
  IssuanceTokenHourData_stream: IssuanceTokenHourData[]
  /** fetch data from the table: "LinearVesting" */
  LinearVesting: LinearVesting[]
  /** fetch data from the table: "LinearVesting" using primary key columns */
  LinearVesting_by_pk: LinearVesting | null
  /** fetch data from the table in a streaming manner: "LinearVesting" */
  LinearVesting_stream: LinearVesting[]
  /** fetch data from the table: "ProjectFee" */
  ProjectFee: ProjectFee[]
  /** fetch aggregated fields from the table: "ProjectFee" */
  ProjectFee_aggregate: ProjectFee_aggregate
  /** fetch data from the table: "ProjectFee" using primary key columns */
  ProjectFee_by_pk: ProjectFee | null
  /** fetch data from the table in a streaming manner: "ProjectFee" */
  ProjectFee_stream: ProjectFee[]
  /** fetch data from the table: "ProtocolFee" */
  ProtocolFee: ProtocolFee[]
  /** fetch aggregated fields from the table: "ProtocolFee" */
  ProtocolFee_aggregate: ProtocolFee_aggregate
  /** fetch data from the table: "ProtocolFee" using primary key columns */
  ProtocolFee_by_pk: ProtocolFee | null
  /** fetch data from the table in a streaming manner: "ProtocolFee" */
  ProtocolFee_stream: ProtocolFee[]
  /** fetch data from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor: StreamingPaymentProcessor[]
  /** fetch data from the table: "StreamingPaymentProcessor" using primary key columns */
  StreamingPaymentProcessor_by_pk: StreamingPaymentProcessor | null
  /** fetch data from the table in a streaming manner: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor_stream: StreamingPaymentProcessor[]
  /** fetch data from the table: "Swap" */
  Swap: Swap[]
  /** fetch data from the table: "Swap" using primary key columns */
  Swap_by_pk: Swap | null
  /** fetch data from the table in a streaming manner: "Swap" */
  Swap_stream: Swap[]
  /** fetch data from the table: "Token" */
  Token: Token[]
  /** fetch aggregated fields from the table: "Token" */
  Token_aggregate: Token_aggregate
  /** fetch data from the table: "Token" using primary key columns */
  Token_by_pk: Token | null
  /** fetch data from the table in a streaming manner: "Token" */
  Token_stream: Token[]
  /** fetch data from the table: "Transfer" */
  Transfer: Transfer[]
  /** fetch aggregated fields from the table: "Transfer" */
  Transfer_aggregate: Transfer_aggregate
  /** fetch data from the table: "Transfer" using primary key columns */
  Transfer_by_pk: Transfer | null
  /** fetch data from the table in a streaming manner: "Transfer" */
  Transfer_stream: Transfer[]
  /** fetch data from the table: "Workflow" */
  Workflow: Workflow[]
  /** fetch data from the table: "WorkflowModule" */
  WorkflowModule: WorkflowModule[]
  /** fetch data from the table: "WorkflowModuleType" */
  WorkflowModuleType: WorkflowModuleType[]
  /** fetch data from the table: "WorkflowModuleType" using primary key columns */
  WorkflowModuleType_by_pk: WorkflowModuleType | null
  /** fetch data from the table in a streaming manner: "WorkflowModuleType" */
  WorkflowModuleType_stream: WorkflowModuleType[]
  /** fetch data from the table: "WorkflowModule" using primary key columns */
  WorkflowModule_by_pk: WorkflowModule | null
  /** fetch data from the table in a streaming manner: "WorkflowModule" */
  WorkflowModule_stream: WorkflowModule[]
  /** fetch data from the table: "Workflow" using primary key columns */
  Workflow_by_pk: Workflow | null
  /** fetch data from the table in a streaming manner: "Workflow" */
  Workflow_stream: Workflow[]
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: chain_metadata[]
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk: chain_metadata | null
  /** fetch data from the table in a streaming manner: "chain_metadata" */
  chain_metadata_stream: chain_metadata[]
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: dynamic_contract_registry[]
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk: dynamic_contract_registry | null
  /** fetch data from the table in a streaming manner: "dynamic_contract_registry" */
  dynamic_contract_registry_stream: dynamic_contract_registry[]
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data: end_of_block_range_scanned_data[]
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk: end_of_block_range_scanned_data | null
  /** fetch data from the table in a streaming manner: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_stream: end_of_block_range_scanned_data[]
  /** fetch data from the table: "event_sync_state" */
  event_sync_state: event_sync_state[]
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk: event_sync_state | null
  /** fetch data from the table in a streaming manner: "event_sync_state" */
  event_sync_state_stream: event_sync_state[]
  /** fetch data from the table: "persisted_state" */
  persisted_state: persisted_state[]
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk: persisted_state | null
  /** fetch data from the table in a streaming manner: "persisted_state" */
  persisted_state_stream: persisted_state[]
  /** fetch data from the table: "raw_events" */
  raw_events: raw_events[]
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk: raw_events | null
  /** fetch data from the table in a streaming manner: "raw_events" */
  raw_events_stream: raw_events[]
  __typename: 'subscription_root'
}

export type Query = query_root
export type Subscription = subscription_root

/** columns and relationships of "BondingCurve" */
export interface BondingCurveGenqlSelection {
  address?: boolean | number
  bcType?: boolean | number
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  /** An object relationship */
  collateralToken?: TokenGenqlSelection
  collateralToken_id?: boolean | number
  /** An array relationship */
  curveDayData?: CurveDayDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveDayData_order_by[] | null
      /** filter the rows returned */
      where?: CurveDayData_bool_exp | null
    }
  }
  /** An aggregate relationship */
  curveDayData_aggregate?: CurveDayData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveDayData_order_by[] | null
      /** filter the rows returned */
      where?: CurveDayData_bool_exp | null
    }
  }
  /** An array relationship */
  curveHourData?: CurveHourDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveHourData_order_by[] | null
      /** filter the rows returned */
      where?: CurveHourData_bool_exp | null
    }
  }
  /** An aggregate relationship */
  curveHourData_aggregate?: CurveHourData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveHourData_order_by[] | null
      /** filter the rows returned */
      where?: CurveHourData_bool_exp | null
    }
  }
  db_write_timestamp?: boolean | number
  id?: boolean | number
  /** An object relationship */
  issuanceToken?: TokenGenqlSelection
  /** An array relationship */
  issuanceTokenDayData?: IssuanceTokenDayDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenDayData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenDayData_bool_exp | null
    }
  }
  /** An aggregate relationship */
  issuanceTokenDayData_aggregate?: IssuanceTokenDayData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenDayData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenDayData_bool_exp | null
    }
  }
  /** An array relationship */
  issuanceTokenHourData?: IssuanceTokenHourDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenHourData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenHourData_bool_exp | null
    }
  }
  /** An aggregate relationship */
  issuanceTokenHourData_aggregate?: IssuanceTokenHourData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenHourData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenHourData_bool_exp | null
    }
  }
  issuanceToken_id?: boolean | number
  /** An array relationship */
  projectFees?: ProjectFeeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProjectFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProjectFee_order_by[] | null
      /** filter the rows returned */
      where?: ProjectFee_bool_exp | null
    }
  }
  /** An aggregate relationship */
  projectFees_aggregate?: ProjectFee_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProjectFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProjectFee_order_by[] | null
      /** filter the rows returned */
      where?: ProjectFee_bool_exp | null
    }
  }
  /** An array relationship */
  protocolFees?: ProtocolFeeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProtocolFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProtocolFee_order_by[] | null
      /** filter the rows returned */
      where?: ProtocolFee_bool_exp | null
    }
  }
  /** An aggregate relationship */
  protocolFees_aggregate?: ProtocolFee_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProtocolFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProtocolFee_order_by[] | null
      /** filter the rows returned */
      where?: ProtocolFee_bool_exp | null
    }
  }
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  /** An array relationship */
  swaps?: SwapGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Swap_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Swap_order_by[] | null
      /** filter the rows returned */
      where?: Swap_bool_exp | null
    }
  }
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  /** An object relationship */
  workflow?: WorkflowGenqlSelection
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "BondingCurve" */
export interface BondingCurve_aggregateGenqlSelection {
  aggregate?: BondingCurve_aggregate_fieldsGenqlSelection
  nodes?: BondingCurveGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "BondingCurve" */
export interface BondingCurve_aggregate_fieldsGenqlSelection {
  avg?: BondingCurve_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: BondingCurve_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: BondingCurve_max_fieldsGenqlSelection
  min?: BondingCurve_min_fieldsGenqlSelection
  stddev?: BondingCurve_stddev_fieldsGenqlSelection
  stddev_pop?: BondingCurve_stddev_pop_fieldsGenqlSelection
  stddev_samp?: BondingCurve_stddev_samp_fieldsGenqlSelection
  sum?: BondingCurve_sum_fieldsGenqlSelection
  var_pop?: BondingCurve_var_pop_fieldsGenqlSelection
  var_samp?: BondingCurve_var_samp_fieldsGenqlSelection
  variance?: BondingCurve_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface BondingCurve_avg_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "BondingCurve". All fields are combined with a logical 'AND'. */
export interface BondingCurve_bool_exp {
  _and?: BondingCurve_bool_exp[] | null
  _not?: BondingCurve_bool_exp | null
  _or?: BondingCurve_bool_exp[] | null
  address?: String_comparison_exp | null
  bcType?: String_comparison_exp | null
  buyFee?: numeric_comparison_exp | null
  buyReserveRatio?: numeric_comparison_exp | null
  chainId?: Int_comparison_exp | null
  collateralToken?: Token_bool_exp | null
  collateralToken_id?: String_comparison_exp | null
  curveDayData?: CurveDayData_bool_exp | null
  curveDayData_aggregate?: CurveDayData_aggregate_bool_exp | null
  curveHourData?: CurveHourData_bool_exp | null
  curveHourData_aggregate?: CurveHourData_aggregate_bool_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  issuanceToken?: Token_bool_exp | null
  issuanceTokenDayData?: IssuanceTokenDayData_bool_exp | null
  issuanceTokenDayData_aggregate?: IssuanceTokenDayData_aggregate_bool_exp | null
  issuanceTokenHourData?: IssuanceTokenHourData_bool_exp | null
  issuanceTokenHourData_aggregate?: IssuanceTokenHourData_aggregate_bool_exp | null
  issuanceToken_id?: String_comparison_exp | null
  projectFees?: ProjectFee_bool_exp | null
  projectFees_aggregate?: ProjectFee_aggregate_bool_exp | null
  protocolFees?: ProtocolFee_bool_exp | null
  protocolFees_aggregate?: ProtocolFee_aggregate_bool_exp | null
  reserveCOL?: numeric_comparison_exp | null
  reserveUSD?: numeric_comparison_exp | null
  sellFee?: numeric_comparison_exp | null
  sellReserveRatio?: numeric_comparison_exp | null
  swaps?: Swap_bool_exp | null
  virtualCOL?: numeric_comparison_exp | null
  virtualISS?: numeric_comparison_exp | null
  workflow?: Workflow_bool_exp | null
  workflow_id?: String_comparison_exp | null
}

/** aggregate max on columns */
export interface BondingCurve_max_fieldsGenqlSelection {
  address?: boolean | number
  bcType?: boolean | number
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  issuanceToken_id?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface BondingCurve_min_fieldsGenqlSelection {
  address?: boolean | number
  bcType?: boolean | number
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  issuanceToken_id?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "BondingCurve". */
export interface BondingCurve_order_by {
  address?: order_by | null
  bcType?: order_by | null
  buyFee?: order_by | null
  buyReserveRatio?: order_by | null
  chainId?: order_by | null
  collateralToken?: Token_order_by | null
  collateralToken_id?: order_by | null
  curveDayData_aggregate?: CurveDayData_aggregate_order_by | null
  curveHourData_aggregate?: CurveHourData_aggregate_order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  issuanceToken?: Token_order_by | null
  issuanceTokenDayData_aggregate?: IssuanceTokenDayData_aggregate_order_by | null
  issuanceTokenHourData_aggregate?: IssuanceTokenHourData_aggregate_order_by | null
  issuanceToken_id?: order_by | null
  projectFees_aggregate?: ProjectFee_aggregate_order_by | null
  protocolFees_aggregate?: ProtocolFee_aggregate_order_by | null
  reserveCOL?: order_by | null
  reserveUSD?: order_by | null
  sellFee?: order_by | null
  sellReserveRatio?: order_by | null
  swaps_aggregate?: Swap_aggregate_order_by | null
  virtualCOL?: order_by | null
  virtualISS?: order_by | null
  workflow?: Workflow_order_by | null
  workflow_id?: order_by | null
}

/** aggregate stddev on columns */
export interface BondingCurve_stddev_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface BondingCurve_stddev_pop_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface BondingCurve_stddev_samp_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Streaming cursor of the table "BondingCurve" */
export interface BondingCurve_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: BondingCurve_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface BondingCurve_stream_cursor_value_input {
  address?: Scalars['String'] | null
  bcType?: Scalars['String'] | null
  buyFee?: Scalars['numeric'] | null
  buyReserveRatio?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
  collateralToken_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  issuanceToken_id?: Scalars['String'] | null
  reserveCOL?: Scalars['numeric'] | null
  reserveUSD?: Scalars['numeric'] | null
  sellFee?: Scalars['numeric'] | null
  sellReserveRatio?: Scalars['numeric'] | null
  virtualCOL?: Scalars['numeric'] | null
  virtualISS?: Scalars['numeric'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface BondingCurve_sum_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface BondingCurve_var_pop_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface BondingCurve_var_samp_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface BondingCurve_variance_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
  reserveCOL?: boolean | number
  reserveUSD?: boolean | number
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: Scalars['Boolean'] | null
  _gt?: Scalars['Boolean'] | null
  _gte?: Scalars['Boolean'] | null
  _in?: Scalars['Boolean'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['Boolean'] | null
  _lte?: Scalars['Boolean'] | null
  _neq?: Scalars['Boolean'] | null
  _nin?: Scalars['Boolean'][] | null
}

/** columns and relationships of "Bounty" */
export interface BountyGenqlSelection {
  /** An object relationship */
  bountyModule?: BountyModuleGenqlSelection
  bountyModule_id?: boolean | number
  /** An array relationship */
  claims?: BountyClaimGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyClaim_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyClaim_order_by[] | null
      /** filter the rows returned */
      where?: BountyClaim_bool_exp | null
    }
  }
  /** An aggregate relationship */
  claims_aggregate?: BountyClaim_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyClaim_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyClaim_order_by[] | null
      /** filter the rows returned */
      where?: BountyClaim_bool_exp | null
    }
  }
  db_write_timestamp?: boolean | number
  details?: boolean | number
  id?: boolean | number
  locked?: boolean | number
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "BountyClaim" */
export interface BountyClaimGenqlSelection {
  /** An object relationship */
  bounty?: BountyGenqlSelection
  bounty_id?: boolean | number
  claimed?: boolean | number
  /** An array relationship */
  contributors?: BountyContributorGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyContributor_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyContributor_order_by[] | null
      /** filter the rows returned */
      where?: BountyContributor_bool_exp | null
    }
  }
  db_write_timestamp?: boolean | number
  details?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "BountyClaim" */
export interface BountyClaim_aggregateGenqlSelection {
  aggregate?: BountyClaim_aggregate_fieldsGenqlSelection
  nodes?: BountyClaimGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface BountyClaim_aggregate_bool_exp {
  bool_and?: BountyClaim_aggregate_bool_exp_bool_and | null
  bool_or?: BountyClaim_aggregate_bool_exp_bool_or | null
  count?: BountyClaim_aggregate_bool_exp_count | null
}

export interface BountyClaim_aggregate_bool_exp_bool_and {
  arguments: BountyClaim_select_column_BountyClaim_aggregate_bool_exp_bool_and_arguments_columns
  distinct?: Scalars['Boolean'] | null
  filter?: BountyClaim_bool_exp | null
  predicate: Boolean_comparison_exp
}

export interface BountyClaim_aggregate_bool_exp_bool_or {
  arguments: BountyClaim_select_column_BountyClaim_aggregate_bool_exp_bool_or_arguments_columns
  distinct?: Scalars['Boolean'] | null
  filter?: BountyClaim_bool_exp | null
  predicate: Boolean_comparison_exp
}

export interface BountyClaim_aggregate_bool_exp_count {
  arguments?: BountyClaim_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: BountyClaim_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "BountyClaim" */
export interface BountyClaim_aggregate_fieldsGenqlSelection {
  count?:
    | {
        __args: {
          columns?: BountyClaim_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: BountyClaim_max_fieldsGenqlSelection
  min?: BountyClaim_min_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "BountyClaim" */
export interface BountyClaim_aggregate_order_by {
  count?: order_by | null
  max?: BountyClaim_max_order_by | null
  min?: BountyClaim_min_order_by | null
}

/** Boolean expression to filter rows from the table "BountyClaim". All fields are combined with a logical 'AND'. */
export interface BountyClaim_bool_exp {
  _and?: BountyClaim_bool_exp[] | null
  _not?: BountyClaim_bool_exp | null
  _or?: BountyClaim_bool_exp[] | null
  bounty?: Bounty_bool_exp | null
  bounty_id?: String_comparison_exp | null
  claimed?: Boolean_comparison_exp | null
  contributors?: BountyContributor_bool_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  details?: String_comparison_exp | null
  id?: String_comparison_exp | null
}

/** aggregate max on columns */
export interface BountyClaim_max_fieldsGenqlSelection {
  bounty_id?: boolean | number
  db_write_timestamp?: boolean | number
  details?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "BountyClaim" */
export interface BountyClaim_max_order_by {
  bounty_id?: order_by | null
  db_write_timestamp?: order_by | null
  details?: order_by | null
  id?: order_by | null
}

/** aggregate min on columns */
export interface BountyClaim_min_fieldsGenqlSelection {
  bounty_id?: boolean | number
  db_write_timestamp?: boolean | number
  details?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "BountyClaim" */
export interface BountyClaim_min_order_by {
  bounty_id?: order_by | null
  db_write_timestamp?: order_by | null
  details?: order_by | null
  id?: order_by | null
}

/** Ordering options when selecting data from "BountyClaim". */
export interface BountyClaim_order_by {
  bounty?: Bounty_order_by | null
  bounty_id?: order_by | null
  claimed?: order_by | null
  contributors_aggregate?: BountyContributor_aggregate_order_by | null
  db_write_timestamp?: order_by | null
  details?: order_by | null
  id?: order_by | null
}

/** Streaming cursor of the table "BountyClaim" */
export interface BountyClaim_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: BountyClaim_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface BountyClaim_stream_cursor_value_input {
  bounty_id?: Scalars['String'] | null
  claimed?: Scalars['Boolean'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  details?: Scalars['String'] | null
  id?: Scalars['String'] | null
}

/** columns and relationships of "BountyContributor" */
export interface BountyContributorGenqlSelection {
  address?: boolean | number
  /** An object relationship */
  bountyClaim?: BountyClaimGenqlSelection
  bountyClaim_id?: boolean | number
  claimAmount?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "BountyContributor" */
export interface BountyContributor_aggregate_order_by {
  avg?: BountyContributor_avg_order_by | null
  count?: order_by | null
  max?: BountyContributor_max_order_by | null
  min?: BountyContributor_min_order_by | null
  stddev?: BountyContributor_stddev_order_by | null
  stddev_pop?: BountyContributor_stddev_pop_order_by | null
  stddev_samp?: BountyContributor_stddev_samp_order_by | null
  sum?: BountyContributor_sum_order_by | null
  var_pop?: BountyContributor_var_pop_order_by | null
  var_samp?: BountyContributor_var_samp_order_by | null
  variance?: BountyContributor_variance_order_by | null
}

/** order by avg() on columns of table "BountyContributor" */
export interface BountyContributor_avg_order_by {
  claimAmount?: order_by | null
}

/** Boolean expression to filter rows from the table "BountyContributor". All fields are combined with a logical 'AND'. */
export interface BountyContributor_bool_exp {
  _and?: BountyContributor_bool_exp[] | null
  _not?: BountyContributor_bool_exp | null
  _or?: BountyContributor_bool_exp[] | null
  address?: String_comparison_exp | null
  bountyClaim?: BountyClaim_bool_exp | null
  bountyClaim_id?: String_comparison_exp | null
  claimAmount?: numeric_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
}

/** order by max() on columns of table "BountyContributor" */
export interface BountyContributor_max_order_by {
  address?: order_by | null
  bountyClaim_id?: order_by | null
  claimAmount?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
}

/** order by min() on columns of table "BountyContributor" */
export interface BountyContributor_min_order_by {
  address?: order_by | null
  bountyClaim_id?: order_by | null
  claimAmount?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
}

/** Ordering options when selecting data from "BountyContributor". */
export interface BountyContributor_order_by {
  address?: order_by | null
  bountyClaim?: BountyClaim_order_by | null
  bountyClaim_id?: order_by | null
  claimAmount?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
}

/** order by stddev() on columns of table "BountyContributor" */
export interface BountyContributor_stddev_order_by {
  claimAmount?: order_by | null
}

/** order by stddev_pop() on columns of table "BountyContributor" */
export interface BountyContributor_stddev_pop_order_by {
  claimAmount?: order_by | null
}

/** order by stddev_samp() on columns of table "BountyContributor" */
export interface BountyContributor_stddev_samp_order_by {
  claimAmount?: order_by | null
}

/** Streaming cursor of the table "BountyContributor" */
export interface BountyContributor_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: BountyContributor_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface BountyContributor_stream_cursor_value_input {
  address?: Scalars['String'] | null
  bountyClaim_id?: Scalars['String'] | null
  claimAmount?: Scalars['numeric'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
}

/** order by sum() on columns of table "BountyContributor" */
export interface BountyContributor_sum_order_by {
  claimAmount?: order_by | null
}

/** order by var_pop() on columns of table "BountyContributor" */
export interface BountyContributor_var_pop_order_by {
  claimAmount?: order_by | null
}

/** order by var_samp() on columns of table "BountyContributor" */
export interface BountyContributor_var_samp_order_by {
  claimAmount?: order_by | null
}

/** order by variance() on columns of table "BountyContributor" */
export interface BountyContributor_variance_order_by {
  claimAmount?: order_by | null
}

/** columns and relationships of "BountyModule" */
export interface BountyModuleGenqlSelection {
  /** An array relationship */
  bounties?: BountyGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Bounty_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Bounty_order_by[] | null
      /** filter the rows returned */
      where?: Bounty_bool_exp | null
    }
  }
  /** An aggregate relationship */
  bounties_aggregate?: Bounty_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Bounty_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Bounty_order_by[] | null
      /** filter the rows returned */
      where?: Bounty_bool_exp | null
    }
  }
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  /** An object relationship */
  workflow?: WorkflowGenqlSelection
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "BountyModule". All fields are combined with a logical 'AND'. */
export interface BountyModule_bool_exp {
  _and?: BountyModule_bool_exp[] | null
  _not?: BountyModule_bool_exp | null
  _or?: BountyModule_bool_exp[] | null
  bounties?: Bounty_bool_exp | null
  bounties_aggregate?: Bounty_aggregate_bool_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  workflow?: Workflow_bool_exp | null
  workflow_id?: String_comparison_exp | null
}

/** Ordering options when selecting data from "BountyModule". */
export interface BountyModule_order_by {
  bounties_aggregate?: Bounty_aggregate_order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  workflow?: Workflow_order_by | null
  workflow_id?: order_by | null
}

/** Streaming cursor of the table "BountyModule" */
export interface BountyModule_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: BountyModule_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface BountyModule_stream_cursor_value_input {
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregated selection of "Bounty" */
export interface Bounty_aggregateGenqlSelection {
  aggregate?: Bounty_aggregate_fieldsGenqlSelection
  nodes?: BountyGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Bounty_aggregate_bool_exp {
  bool_and?: Bounty_aggregate_bool_exp_bool_and | null
  bool_or?: Bounty_aggregate_bool_exp_bool_or | null
  count?: Bounty_aggregate_bool_exp_count | null
}

export interface Bounty_aggregate_bool_exp_bool_and {
  arguments: Bounty_select_column_Bounty_aggregate_bool_exp_bool_and_arguments_columns
  distinct?: Scalars['Boolean'] | null
  filter?: Bounty_bool_exp | null
  predicate: Boolean_comparison_exp
}

export interface Bounty_aggregate_bool_exp_bool_or {
  arguments: Bounty_select_column_Bounty_aggregate_bool_exp_bool_or_arguments_columns
  distinct?: Scalars['Boolean'] | null
  filter?: Bounty_bool_exp | null
  predicate: Boolean_comparison_exp
}

export interface Bounty_aggregate_bool_exp_count {
  arguments?: Bounty_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: Bounty_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "Bounty" */
export interface Bounty_aggregate_fieldsGenqlSelection {
  avg?: Bounty_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: Bounty_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: Bounty_max_fieldsGenqlSelection
  min?: Bounty_min_fieldsGenqlSelection
  stddev?: Bounty_stddev_fieldsGenqlSelection
  stddev_pop?: Bounty_stddev_pop_fieldsGenqlSelection
  stddev_samp?: Bounty_stddev_samp_fieldsGenqlSelection
  sum?: Bounty_sum_fieldsGenqlSelection
  var_pop?: Bounty_var_pop_fieldsGenqlSelection
  var_samp?: Bounty_var_samp_fieldsGenqlSelection
  variance?: Bounty_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "Bounty" */
export interface Bounty_aggregate_order_by {
  avg?: Bounty_avg_order_by | null
  count?: order_by | null
  max?: Bounty_max_order_by | null
  min?: Bounty_min_order_by | null
  stddev?: Bounty_stddev_order_by | null
  stddev_pop?: Bounty_stddev_pop_order_by | null
  stddev_samp?: Bounty_stddev_samp_order_by | null
  sum?: Bounty_sum_order_by | null
  var_pop?: Bounty_var_pop_order_by | null
  var_samp?: Bounty_var_samp_order_by | null
  variance?: Bounty_variance_order_by | null
}

/** aggregate avg on columns */
export interface Bounty_avg_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "Bounty" */
export interface Bounty_avg_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** Boolean expression to filter rows from the table "Bounty". All fields are combined with a logical 'AND'. */
export interface Bounty_bool_exp {
  _and?: Bounty_bool_exp[] | null
  _not?: Bounty_bool_exp | null
  _or?: Bounty_bool_exp[] | null
  bountyModule?: BountyModule_bool_exp | null
  bountyModule_id?: String_comparison_exp | null
  claims?: BountyClaim_bool_exp | null
  claims_aggregate?: BountyClaim_aggregate_bool_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  details?: String_comparison_exp | null
  id?: String_comparison_exp | null
  locked?: Boolean_comparison_exp | null
  maximumPayoutAmount?: numeric_comparison_exp | null
  minimumPayoutAmount?: numeric_comparison_exp | null
}

/** aggregate max on columns */
export interface Bounty_max_fieldsGenqlSelection {
  bountyModule_id?: boolean | number
  db_write_timestamp?: boolean | number
  details?: boolean | number
  id?: boolean | number
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "Bounty" */
export interface Bounty_max_order_by {
  bountyModule_id?: order_by | null
  db_write_timestamp?: order_by | null
  details?: order_by | null
  id?: order_by | null
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** aggregate min on columns */
export interface Bounty_min_fieldsGenqlSelection {
  bountyModule_id?: boolean | number
  db_write_timestamp?: boolean | number
  details?: boolean | number
  id?: boolean | number
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "Bounty" */
export interface Bounty_min_order_by {
  bountyModule_id?: order_by | null
  db_write_timestamp?: order_by | null
  details?: order_by | null
  id?: order_by | null
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** Ordering options when selecting data from "Bounty". */
export interface Bounty_order_by {
  bountyModule?: BountyModule_order_by | null
  bountyModule_id?: order_by | null
  claims_aggregate?: BountyClaim_aggregate_order_by | null
  db_write_timestamp?: order_by | null
  details?: order_by | null
  id?: order_by | null
  locked?: order_by | null
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** aggregate stddev on columns */
export interface Bounty_stddev_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "Bounty" */
export interface Bounty_stddev_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface Bounty_stddev_pop_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "Bounty" */
export interface Bounty_stddev_pop_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface Bounty_stddev_samp_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "Bounty" */
export interface Bounty_stddev_samp_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** Streaming cursor of the table "Bounty" */
export interface Bounty_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: Bounty_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface Bounty_stream_cursor_value_input {
  bountyModule_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  details?: Scalars['String'] | null
  id?: Scalars['String'] | null
  locked?: Scalars['Boolean'] | null
  maximumPayoutAmount?: Scalars['numeric'] | null
  minimumPayoutAmount?: Scalars['numeric'] | null
}

/** aggregate sum on columns */
export interface Bounty_sum_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "Bounty" */
export interface Bounty_sum_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** aggregate var_pop on columns */
export interface Bounty_var_pop_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "Bounty" */
export interface Bounty_var_pop_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** aggregate var_samp on columns */
export interface Bounty_var_samp_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "Bounty" */
export interface Bounty_var_samp_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** aggregate variance on columns */
export interface Bounty_variance_fieldsGenqlSelection {
  maximumPayoutAmount?: boolean | number
  minimumPayoutAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "Bounty" */
export interface Bounty_variance_order_by {
  maximumPayoutAmount?: order_by | null
  minimumPayoutAmount?: order_by | null
}

/** columns and relationships of "CurveDayData" */
export interface CurveDayDataGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  /** An object relationship */
  collateralToken?: TokenGenqlSelection
  collateralToken_id?: boolean | number
  date?: boolean | number
  db_write_timestamp?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  /** An object relationship */
  issuanceToken?: TokenGenqlSelection
  issuanceToken_id?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  module_id?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "CurveDayData" */
export interface CurveDayData_aggregateGenqlSelection {
  aggregate?: CurveDayData_aggregate_fieldsGenqlSelection
  nodes?: CurveDayDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CurveDayData_aggregate_bool_exp {
  count?: CurveDayData_aggregate_bool_exp_count | null
}

export interface CurveDayData_aggregate_bool_exp_count {
  arguments?: CurveDayData_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: CurveDayData_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "CurveDayData" */
export interface CurveDayData_aggregate_fieldsGenqlSelection {
  avg?: CurveDayData_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: CurveDayData_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: CurveDayData_max_fieldsGenqlSelection
  min?: CurveDayData_min_fieldsGenqlSelection
  stddev?: CurveDayData_stddev_fieldsGenqlSelection
  stddev_pop?: CurveDayData_stddev_pop_fieldsGenqlSelection
  stddev_samp?: CurveDayData_stddev_samp_fieldsGenqlSelection
  sum?: CurveDayData_sum_fieldsGenqlSelection
  var_pop?: CurveDayData_var_pop_fieldsGenqlSelection
  var_samp?: CurveDayData_var_samp_fieldsGenqlSelection
  variance?: CurveDayData_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "CurveDayData" */
export interface CurveDayData_aggregate_order_by {
  avg?: CurveDayData_avg_order_by | null
  count?: order_by | null
  max?: CurveDayData_max_order_by | null
  min?: CurveDayData_min_order_by | null
  stddev?: CurveDayData_stddev_order_by | null
  stddev_pop?: CurveDayData_stddev_pop_order_by | null
  stddev_samp?: CurveDayData_stddev_samp_order_by | null
  sum?: CurveDayData_sum_order_by | null
  var_pop?: CurveDayData_var_pop_order_by | null
  var_samp?: CurveDayData_var_samp_order_by | null
  variance?: CurveDayData_variance_order_by | null
}

/** aggregate avg on columns */
export interface CurveDayData_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "CurveDayData" */
export interface CurveDayData_avg_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Boolean expression to filter rows from the table "CurveDayData". All fields are combined with a logical 'AND'. */
export interface CurveDayData_bool_exp {
  _and?: CurveDayData_bool_exp[] | null
  _not?: CurveDayData_bool_exp | null
  _or?: CurveDayData_bool_exp[] | null
  chainId?: Int_comparison_exp | null
  closeCOL?: numeric_comparison_exp | null
  closeUSD?: numeric_comparison_exp | null
  collateralToken?: Token_bool_exp | null
  collateralToken_id?: String_comparison_exp | null
  date?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  highCOL?: numeric_comparison_exp | null
  highUSD?: numeric_comparison_exp | null
  id?: String_comparison_exp | null
  issuanceToken?: Token_bool_exp | null
  issuanceToken_id?: String_comparison_exp | null
  lowCOL?: numeric_comparison_exp | null
  lowUSD?: numeric_comparison_exp | null
  module_id?: String_comparison_exp | null
  openCOL?: numeric_comparison_exp | null
  openUSD?: numeric_comparison_exp | null
  priceCOL?: numeric_comparison_exp | null
  priceUSD?: numeric_comparison_exp | null
  projectFeeCOL?: numeric_comparison_exp | null
  projectFeeUSD?: numeric_comparison_exp | null
  protocolFeeCOL?: numeric_comparison_exp | null
  protocolFeeISS?: numeric_comparison_exp | null
  protocolFeeUSD?: numeric_comparison_exp | null
  volumeCOL?: numeric_comparison_exp | null
  volumeISS?: numeric_comparison_exp | null
  volumeUSD?: numeric_comparison_exp | null
}

/** aggregate max on columns */
export interface CurveDayData_max_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  collateralToken_id?: boolean | number
  date?: boolean | number
  db_write_timestamp?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  issuanceToken_id?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  module_id?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "CurveDayData" */
export interface CurveDayData_max_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  collateralToken_id?: order_by | null
  date?: order_by | null
  db_write_timestamp?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  issuanceToken_id?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  module_id?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate min on columns */
export interface CurveDayData_min_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  collateralToken_id?: boolean | number
  date?: boolean | number
  db_write_timestamp?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  issuanceToken_id?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  module_id?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "CurveDayData" */
export interface CurveDayData_min_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  collateralToken_id?: order_by | null
  date?: order_by | null
  db_write_timestamp?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  issuanceToken_id?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  module_id?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Ordering options when selecting data from "CurveDayData". */
export interface CurveDayData_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  collateralToken?: Token_order_by | null
  collateralToken_id?: order_by | null
  date?: order_by | null
  db_write_timestamp?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  issuanceToken?: Token_order_by | null
  issuanceToken_id?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  module_id?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev on columns */
export interface CurveDayData_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "CurveDayData" */
export interface CurveDayData_stddev_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface CurveDayData_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "CurveDayData" */
export interface CurveDayData_stddev_pop_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface CurveDayData_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "CurveDayData" */
export interface CurveDayData_stddev_samp_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Streaming cursor of the table "CurveDayData" */
export interface CurveDayData_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: CurveDayData_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface CurveDayData_stream_cursor_value_input {
  chainId?: Scalars['Int'] | null
  closeCOL?: Scalars['numeric'] | null
  closeUSD?: Scalars['numeric'] | null
  collateralToken_id?: Scalars['String'] | null
  date?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  highCOL?: Scalars['numeric'] | null
  highUSD?: Scalars['numeric'] | null
  id?: Scalars['String'] | null
  issuanceToken_id?: Scalars['String'] | null
  lowCOL?: Scalars['numeric'] | null
  lowUSD?: Scalars['numeric'] | null
  module_id?: Scalars['String'] | null
  openCOL?: Scalars['numeric'] | null
  openUSD?: Scalars['numeric'] | null
  priceCOL?: Scalars['numeric'] | null
  priceUSD?: Scalars['numeric'] | null
  projectFeeCOL?: Scalars['numeric'] | null
  projectFeeUSD?: Scalars['numeric'] | null
  protocolFeeCOL?: Scalars['numeric'] | null
  protocolFeeISS?: Scalars['numeric'] | null
  protocolFeeUSD?: Scalars['numeric'] | null
  volumeCOL?: Scalars['numeric'] | null
  volumeISS?: Scalars['numeric'] | null
  volumeUSD?: Scalars['numeric'] | null
}

/** aggregate sum on columns */
export interface CurveDayData_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "CurveDayData" */
export interface CurveDayData_sum_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_pop on columns */
export interface CurveDayData_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "CurveDayData" */
export interface CurveDayData_var_pop_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_samp on columns */
export interface CurveDayData_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "CurveDayData" */
export interface CurveDayData_var_samp_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate variance on columns */
export interface CurveDayData_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "CurveDayData" */
export interface CurveDayData_variance_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** columns and relationships of "CurveHourData" */
export interface CurveHourDataGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  /** An object relationship */
  collateralToken?: TokenGenqlSelection
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  /** An object relationship */
  issuanceToken?: TokenGenqlSelection
  issuanceToken_id?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  module_id?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "CurveHourData" */
export interface CurveHourData_aggregateGenqlSelection {
  aggregate?: CurveHourData_aggregate_fieldsGenqlSelection
  nodes?: CurveHourDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CurveHourData_aggregate_bool_exp {
  count?: CurveHourData_aggregate_bool_exp_count | null
}

export interface CurveHourData_aggregate_bool_exp_count {
  arguments?: CurveHourData_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: CurveHourData_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "CurveHourData" */
export interface CurveHourData_aggregate_fieldsGenqlSelection {
  avg?: CurveHourData_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: CurveHourData_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: CurveHourData_max_fieldsGenqlSelection
  min?: CurveHourData_min_fieldsGenqlSelection
  stddev?: CurveHourData_stddev_fieldsGenqlSelection
  stddev_pop?: CurveHourData_stddev_pop_fieldsGenqlSelection
  stddev_samp?: CurveHourData_stddev_samp_fieldsGenqlSelection
  sum?: CurveHourData_sum_fieldsGenqlSelection
  var_pop?: CurveHourData_var_pop_fieldsGenqlSelection
  var_samp?: CurveHourData_var_samp_fieldsGenqlSelection
  variance?: CurveHourData_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "CurveHourData" */
export interface CurveHourData_aggregate_order_by {
  avg?: CurveHourData_avg_order_by | null
  count?: order_by | null
  max?: CurveHourData_max_order_by | null
  min?: CurveHourData_min_order_by | null
  stddev?: CurveHourData_stddev_order_by | null
  stddev_pop?: CurveHourData_stddev_pop_order_by | null
  stddev_samp?: CurveHourData_stddev_samp_order_by | null
  sum?: CurveHourData_sum_order_by | null
  var_pop?: CurveHourData_var_pop_order_by | null
  var_samp?: CurveHourData_var_samp_order_by | null
  variance?: CurveHourData_variance_order_by | null
}

/** aggregate avg on columns */
export interface CurveHourData_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "CurveHourData" */
export interface CurveHourData_avg_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Boolean expression to filter rows from the table "CurveHourData". All fields are combined with a logical 'AND'. */
export interface CurveHourData_bool_exp {
  _and?: CurveHourData_bool_exp[] | null
  _not?: CurveHourData_bool_exp | null
  _or?: CurveHourData_bool_exp[] | null
  chainId?: Int_comparison_exp | null
  closeCOL?: numeric_comparison_exp | null
  closeUSD?: numeric_comparison_exp | null
  collateralToken?: Token_bool_exp | null
  collateralToken_id?: String_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  highCOL?: numeric_comparison_exp | null
  highUSD?: numeric_comparison_exp | null
  id?: String_comparison_exp | null
  issuanceToken?: Token_bool_exp | null
  issuanceToken_id?: String_comparison_exp | null
  lowCOL?: numeric_comparison_exp | null
  lowUSD?: numeric_comparison_exp | null
  module_id?: String_comparison_exp | null
  openCOL?: numeric_comparison_exp | null
  openUSD?: numeric_comparison_exp | null
  periodStartUnix?: Int_comparison_exp | null
  priceCOL?: numeric_comparison_exp | null
  priceUSD?: numeric_comparison_exp | null
  projectFeeCOL?: numeric_comparison_exp | null
  projectFeeUSD?: numeric_comparison_exp | null
  protocolFeeCOL?: numeric_comparison_exp | null
  protocolFeeISS?: numeric_comparison_exp | null
  protocolFeeUSD?: numeric_comparison_exp | null
  volumeCOL?: numeric_comparison_exp | null
  volumeISS?: numeric_comparison_exp | null
  volumeUSD?: numeric_comparison_exp | null
}

/** aggregate max on columns */
export interface CurveHourData_max_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  issuanceToken_id?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  module_id?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "CurveHourData" */
export interface CurveHourData_max_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  collateralToken_id?: order_by | null
  db_write_timestamp?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  issuanceToken_id?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  module_id?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate min on columns */
export interface CurveHourData_min_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  issuanceToken_id?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  module_id?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "CurveHourData" */
export interface CurveHourData_min_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  collateralToken_id?: order_by | null
  db_write_timestamp?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  issuanceToken_id?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  module_id?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Ordering options when selecting data from "CurveHourData". */
export interface CurveHourData_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  collateralToken?: Token_order_by | null
  collateralToken_id?: order_by | null
  db_write_timestamp?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  issuanceToken?: Token_order_by | null
  issuanceToken_id?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  module_id?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev on columns */
export interface CurveHourData_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "CurveHourData" */
export interface CurveHourData_stddev_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface CurveHourData_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "CurveHourData" */
export interface CurveHourData_stddev_pop_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface CurveHourData_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "CurveHourData" */
export interface CurveHourData_stddev_samp_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Streaming cursor of the table "CurveHourData" */
export interface CurveHourData_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: CurveHourData_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface CurveHourData_stream_cursor_value_input {
  chainId?: Scalars['Int'] | null
  closeCOL?: Scalars['numeric'] | null
  closeUSD?: Scalars['numeric'] | null
  collateralToken_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  highCOL?: Scalars['numeric'] | null
  highUSD?: Scalars['numeric'] | null
  id?: Scalars['String'] | null
  issuanceToken_id?: Scalars['String'] | null
  lowCOL?: Scalars['numeric'] | null
  lowUSD?: Scalars['numeric'] | null
  module_id?: Scalars['String'] | null
  openCOL?: Scalars['numeric'] | null
  openUSD?: Scalars['numeric'] | null
  periodStartUnix?: Scalars['Int'] | null
  priceCOL?: Scalars['numeric'] | null
  priceUSD?: Scalars['numeric'] | null
  projectFeeCOL?: Scalars['numeric'] | null
  projectFeeUSD?: Scalars['numeric'] | null
  protocolFeeCOL?: Scalars['numeric'] | null
  protocolFeeISS?: Scalars['numeric'] | null
  protocolFeeUSD?: Scalars['numeric'] | null
  volumeCOL?: Scalars['numeric'] | null
  volumeISS?: Scalars['numeric'] | null
  volumeUSD?: Scalars['numeric'] | null
}

/** aggregate sum on columns */
export interface CurveHourData_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "CurveHourData" */
export interface CurveHourData_sum_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_pop on columns */
export interface CurveHourData_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "CurveHourData" */
export interface CurveHourData_var_pop_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_samp on columns */
export interface CurveHourData_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "CurveHourData" */
export interface CurveHourData_var_samp_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate variance on columns */
export interface CurveHourData_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  closeCOL?: boolean | number
  closeUSD?: boolean | number
  highCOL?: boolean | number
  highUSD?: boolean | number
  lowCOL?: boolean | number
  lowUSD?: boolean | number
  openCOL?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  projectFeeCOL?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeCOL?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeCOL?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "CurveHourData" */
export interface CurveHourData_variance_order_by {
  chainId?: order_by | null
  closeCOL?: order_by | null
  closeUSD?: order_by | null
  highCOL?: order_by | null
  highUSD?: order_by | null
  lowCOL?: order_by | null
  lowUSD?: order_by | null
  openCOL?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  projectFeeCOL?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeCOL?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeCOL?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** columns and relationships of "Deposit" */
export interface DepositGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  db_write_timestamp?: boolean | number
  /** An object relationship */
  depositVault?: DepositVaultGenqlSelection
  depositVault_id?: boolean | number
  depositor?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "DepositVault" */
export interface DepositVaultGenqlSelection {
  address?: boolean | number
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  /** An array relationship */
  deposits?: DepositGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Deposit_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Deposit_order_by[] | null
      /** filter the rows returned */
      where?: Deposit_bool_exp | null
    }
  }
  /** An aggregate relationship */
  deposits_aggregate?: Deposit_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Deposit_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Deposit_order_by[] | null
      /** filter the rows returned */
      where?: Deposit_bool_exp | null
    }
  }
  id?: boolean | number
  /** An object relationship */
  token?: TokenGenqlSelection
  token_id?: boolean | number
  /** An array relationship */
  transfers?: TransferGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Transfer_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Transfer_order_by[] | null
      /** filter the rows returned */
      where?: Transfer_bool_exp | null
    }
  }
  /** An aggregate relationship */
  transfers_aggregate?: Transfer_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Transfer_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Transfer_order_by[] | null
      /** filter the rows returned */
      where?: Transfer_bool_exp | null
    }
  }
  /** An object relationship */
  workflow?: WorkflowGenqlSelection
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "DepositVault" */
export interface DepositVault_aggregateGenqlSelection {
  aggregate?: DepositVault_aggregate_fieldsGenqlSelection
  nodes?: DepositVaultGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "DepositVault" */
export interface DepositVault_aggregate_fieldsGenqlSelection {
  avg?: DepositVault_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: DepositVault_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: DepositVault_max_fieldsGenqlSelection
  min?: DepositVault_min_fieldsGenqlSelection
  stddev?: DepositVault_stddev_fieldsGenqlSelection
  stddev_pop?: DepositVault_stddev_pop_fieldsGenqlSelection
  stddev_samp?: DepositVault_stddev_samp_fieldsGenqlSelection
  sum?: DepositVault_sum_fieldsGenqlSelection
  var_pop?: DepositVault_var_pop_fieldsGenqlSelection
  var_samp?: DepositVault_var_samp_fieldsGenqlSelection
  variance?: DepositVault_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface DepositVault_avg_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "DepositVault". All fields are combined with a logical 'AND'. */
export interface DepositVault_bool_exp {
  _and?: DepositVault_bool_exp[] | null
  _not?: DepositVault_bool_exp | null
  _or?: DepositVault_bool_exp[] | null
  address?: String_comparison_exp | null
  balance?: numeric_comparison_exp | null
  balanceUSD?: numeric_comparison_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  deposits?: Deposit_bool_exp | null
  deposits_aggregate?: Deposit_aggregate_bool_exp | null
  id?: String_comparison_exp | null
  token?: Token_bool_exp | null
  token_id?: String_comparison_exp | null
  transfers?: Transfer_bool_exp | null
  transfers_aggregate?: Transfer_aggregate_bool_exp | null
  workflow?: Workflow_bool_exp | null
  workflow_id?: String_comparison_exp | null
}

/** aggregate max on columns */
export interface DepositVault_max_fieldsGenqlSelection {
  address?: boolean | number
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  token_id?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface DepositVault_min_fieldsGenqlSelection {
  address?: boolean | number
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  token_id?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "DepositVault". */
export interface DepositVault_order_by {
  address?: order_by | null
  balance?: order_by | null
  balanceUSD?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  deposits_aggregate?: Deposit_aggregate_order_by | null
  id?: order_by | null
  token?: Token_order_by | null
  token_id?: order_by | null
  transfers_aggregate?: Transfer_aggregate_order_by | null
  workflow?: Workflow_order_by | null
  workflow_id?: order_by | null
}

/** aggregate stddev on columns */
export interface DepositVault_stddev_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface DepositVault_stddev_pop_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface DepositVault_stddev_samp_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Streaming cursor of the table "DepositVault" */
export interface DepositVault_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: DepositVault_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface DepositVault_stream_cursor_value_input {
  address?: Scalars['String'] | null
  balance?: Scalars['numeric'] | null
  balanceUSD?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  token_id?: Scalars['String'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface DepositVault_sum_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface DepositVault_var_pop_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface DepositVault_var_samp_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface DepositVault_variance_fieldsGenqlSelection {
  balance?: boolean | number
  balanceUSD?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "Deposit" */
export interface Deposit_aggregateGenqlSelection {
  aggregate?: Deposit_aggregate_fieldsGenqlSelection
  nodes?: DepositGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Deposit_aggregate_bool_exp {
  count?: Deposit_aggregate_bool_exp_count | null
}

export interface Deposit_aggregate_bool_exp_count {
  arguments?: Deposit_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: Deposit_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "Deposit" */
export interface Deposit_aggregate_fieldsGenqlSelection {
  avg?: Deposit_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: Deposit_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: Deposit_max_fieldsGenqlSelection
  min?: Deposit_min_fieldsGenqlSelection
  stddev?: Deposit_stddev_fieldsGenqlSelection
  stddev_pop?: Deposit_stddev_pop_fieldsGenqlSelection
  stddev_samp?: Deposit_stddev_samp_fieldsGenqlSelection
  sum?: Deposit_sum_fieldsGenqlSelection
  var_pop?: Deposit_var_pop_fieldsGenqlSelection
  var_samp?: Deposit_var_samp_fieldsGenqlSelection
  variance?: Deposit_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "Deposit" */
export interface Deposit_aggregate_order_by {
  avg?: Deposit_avg_order_by | null
  count?: order_by | null
  max?: Deposit_max_order_by | null
  min?: Deposit_min_order_by | null
  stddev?: Deposit_stddev_order_by | null
  stddev_pop?: Deposit_stddev_pop_order_by | null
  stddev_samp?: Deposit_stddev_samp_order_by | null
  sum?: Deposit_sum_order_by | null
  var_pop?: Deposit_var_pop_order_by | null
  var_samp?: Deposit_var_samp_order_by | null
  variance?: Deposit_variance_order_by | null
}

/** aggregate avg on columns */
export interface Deposit_avg_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "Deposit" */
export interface Deposit_avg_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** Boolean expression to filter rows from the table "Deposit". All fields are combined with a logical 'AND'. */
export interface Deposit_bool_exp {
  _and?: Deposit_bool_exp[] | null
  _not?: Deposit_bool_exp | null
  _or?: Deposit_bool_exp[] | null
  amount?: numeric_comparison_exp | null
  amountUSD?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  depositVault?: DepositVault_bool_exp | null
  depositVault_id?: String_comparison_exp | null
  depositor?: String_comparison_exp | null
  id?: String_comparison_exp | null
}

/** aggregate max on columns */
export interface Deposit_max_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  db_write_timestamp?: boolean | number
  depositVault_id?: boolean | number
  depositor?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "Deposit" */
export interface Deposit_max_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  depositor?: order_by | null
  id?: order_by | null
}

/** aggregate min on columns */
export interface Deposit_min_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  db_write_timestamp?: boolean | number
  depositVault_id?: boolean | number
  depositor?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "Deposit" */
export interface Deposit_min_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  depositor?: order_by | null
  id?: order_by | null
}

/** Ordering options when selecting data from "Deposit". */
export interface Deposit_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault?: DepositVault_order_by | null
  depositVault_id?: order_by | null
  depositor?: order_by | null
  id?: order_by | null
}

/** aggregate stddev on columns */
export interface Deposit_stddev_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "Deposit" */
export interface Deposit_stddev_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface Deposit_stddev_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "Deposit" */
export interface Deposit_stddev_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface Deposit_stddev_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "Deposit" */
export interface Deposit_stddev_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** Streaming cursor of the table "Deposit" */
export interface Deposit_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: Deposit_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface Deposit_stream_cursor_value_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault_id?: Scalars['String'] | null
  depositor?: Scalars['String'] | null
  id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface Deposit_sum_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "Deposit" */
export interface Deposit_sum_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate var_pop on columns */
export interface Deposit_var_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "Deposit" */
export interface Deposit_var_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate var_samp on columns */
export interface Deposit_var_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "Deposit" */
export interface Deposit_var_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate variance on columns */
export interface Deposit_variance_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "Deposit" */
export interface Deposit_variance_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Scalars['Int'] | null
  _gt?: Scalars['Int'] | null
  _gte?: Scalars['Int'] | null
  _in?: Scalars['Int'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['Int'] | null
  _lte?: Scalars['Int'] | null
  _neq?: Scalars['Int'] | null
  _nin?: Scalars['Int'][] | null
}

/** columns and relationships of "IssuanceTokenDayData" */
export interface IssuanceTokenDayDataGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  db_write_timestamp?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  token_id?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_aggregateGenqlSelection {
  aggregate?: IssuanceTokenDayData_aggregate_fieldsGenqlSelection
  nodes?: IssuanceTokenDayDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface IssuanceTokenDayData_aggregate_bool_exp {
  count?: IssuanceTokenDayData_aggregate_bool_exp_count | null
}

export interface IssuanceTokenDayData_aggregate_bool_exp_count {
  arguments?: IssuanceTokenDayData_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: IssuanceTokenDayData_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_aggregate_fieldsGenqlSelection {
  avg?: IssuanceTokenDayData_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: IssuanceTokenDayData_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: IssuanceTokenDayData_max_fieldsGenqlSelection
  min?: IssuanceTokenDayData_min_fieldsGenqlSelection
  stddev?: IssuanceTokenDayData_stddev_fieldsGenqlSelection
  stddev_pop?: IssuanceTokenDayData_stddev_pop_fieldsGenqlSelection
  stddev_samp?: IssuanceTokenDayData_stddev_samp_fieldsGenqlSelection
  sum?: IssuanceTokenDayData_sum_fieldsGenqlSelection
  var_pop?: IssuanceTokenDayData_var_pop_fieldsGenqlSelection
  var_samp?: IssuanceTokenDayData_var_samp_fieldsGenqlSelection
  variance?: IssuanceTokenDayData_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_aggregate_order_by {
  avg?: IssuanceTokenDayData_avg_order_by | null
  count?: order_by | null
  max?: IssuanceTokenDayData_max_order_by | null
  min?: IssuanceTokenDayData_min_order_by | null
  stddev?: IssuanceTokenDayData_stddev_order_by | null
  stddev_pop?: IssuanceTokenDayData_stddev_pop_order_by | null
  stddev_samp?: IssuanceTokenDayData_stddev_samp_order_by | null
  sum?: IssuanceTokenDayData_sum_order_by | null
  var_pop?: IssuanceTokenDayData_var_pop_order_by | null
  var_samp?: IssuanceTokenDayData_var_samp_order_by | null
  variance?: IssuanceTokenDayData_variance_order_by | null
}

/** aggregate avg on columns */
export interface IssuanceTokenDayData_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_avg_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Boolean expression to filter rows from the table "IssuanceTokenDayData". All fields are combined with a logical 'AND'. */
export interface IssuanceTokenDayData_bool_exp {
  _and?: IssuanceTokenDayData_bool_exp[] | null
  _not?: IssuanceTokenDayData_bool_exp | null
  _or?: IssuanceTokenDayData_bool_exp[] | null
  chainId?: Int_comparison_exp | null
  closeUSD?: numeric_comparison_exp | null
  date?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  highUSD?: numeric_comparison_exp | null
  id?: String_comparison_exp | null
  lowUSD?: numeric_comparison_exp | null
  openUSD?: numeric_comparison_exp | null
  priceUSD?: numeric_comparison_exp | null
  projectFeeUSD?: numeric_comparison_exp | null
  protocolFeeISS?: numeric_comparison_exp | null
  protocolFeeUSD?: numeric_comparison_exp | null
  token_id?: String_comparison_exp | null
  volumeISS?: numeric_comparison_exp | null
  volumeUSD?: numeric_comparison_exp | null
}

/** aggregate max on columns */
export interface IssuanceTokenDayData_max_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  db_write_timestamp?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  token_id?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_max_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  db_write_timestamp?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  token_id?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate min on columns */
export interface IssuanceTokenDayData_min_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  db_write_timestamp?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  token_id?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_min_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  db_write_timestamp?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  token_id?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Ordering options when selecting data from "IssuanceTokenDayData". */
export interface IssuanceTokenDayData_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  db_write_timestamp?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  token_id?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev on columns */
export interface IssuanceTokenDayData_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_stddev_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface IssuanceTokenDayData_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_stddev_pop_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface IssuanceTokenDayData_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_stddev_samp_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Streaming cursor of the table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: IssuanceTokenDayData_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface IssuanceTokenDayData_stream_cursor_value_input {
  chainId?: Scalars['Int'] | null
  closeUSD?: Scalars['numeric'] | null
  date?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  highUSD?: Scalars['numeric'] | null
  id?: Scalars['String'] | null
  lowUSD?: Scalars['numeric'] | null
  openUSD?: Scalars['numeric'] | null
  priceUSD?: Scalars['numeric'] | null
  projectFeeUSD?: Scalars['numeric'] | null
  protocolFeeISS?: Scalars['numeric'] | null
  protocolFeeUSD?: Scalars['numeric'] | null
  token_id?: Scalars['String'] | null
  volumeISS?: Scalars['numeric'] | null
  volumeUSD?: Scalars['numeric'] | null
}

/** aggregate sum on columns */
export interface IssuanceTokenDayData_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_sum_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_pop on columns */
export interface IssuanceTokenDayData_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_var_pop_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_samp on columns */
export interface IssuanceTokenDayData_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_var_samp_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate variance on columns */
export interface IssuanceTokenDayData_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  date?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_variance_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  date?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** columns and relationships of "IssuanceTokenHourData" */
export interface IssuanceTokenHourDataGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  db_write_timestamp?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  token_id?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_aggregateGenqlSelection {
  aggregate?: IssuanceTokenHourData_aggregate_fieldsGenqlSelection
  nodes?: IssuanceTokenHourDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface IssuanceTokenHourData_aggregate_bool_exp {
  count?: IssuanceTokenHourData_aggregate_bool_exp_count | null
}

export interface IssuanceTokenHourData_aggregate_bool_exp_count {
  arguments?: IssuanceTokenHourData_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: IssuanceTokenHourData_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_aggregate_fieldsGenqlSelection {
  avg?: IssuanceTokenHourData_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: IssuanceTokenHourData_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: IssuanceTokenHourData_max_fieldsGenqlSelection
  min?: IssuanceTokenHourData_min_fieldsGenqlSelection
  stddev?: IssuanceTokenHourData_stddev_fieldsGenqlSelection
  stddev_pop?: IssuanceTokenHourData_stddev_pop_fieldsGenqlSelection
  stddev_samp?: IssuanceTokenHourData_stddev_samp_fieldsGenqlSelection
  sum?: IssuanceTokenHourData_sum_fieldsGenqlSelection
  var_pop?: IssuanceTokenHourData_var_pop_fieldsGenqlSelection
  var_samp?: IssuanceTokenHourData_var_samp_fieldsGenqlSelection
  variance?: IssuanceTokenHourData_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_aggregate_order_by {
  avg?: IssuanceTokenHourData_avg_order_by | null
  count?: order_by | null
  max?: IssuanceTokenHourData_max_order_by | null
  min?: IssuanceTokenHourData_min_order_by | null
  stddev?: IssuanceTokenHourData_stddev_order_by | null
  stddev_pop?: IssuanceTokenHourData_stddev_pop_order_by | null
  stddev_samp?: IssuanceTokenHourData_stddev_samp_order_by | null
  sum?: IssuanceTokenHourData_sum_order_by | null
  var_pop?: IssuanceTokenHourData_var_pop_order_by | null
  var_samp?: IssuanceTokenHourData_var_samp_order_by | null
  variance?: IssuanceTokenHourData_variance_order_by | null
}

/** aggregate avg on columns */
export interface IssuanceTokenHourData_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_avg_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Boolean expression to filter rows from the table "IssuanceTokenHourData". All fields are combined with a logical 'AND'. */
export interface IssuanceTokenHourData_bool_exp {
  _and?: IssuanceTokenHourData_bool_exp[] | null
  _not?: IssuanceTokenHourData_bool_exp | null
  _or?: IssuanceTokenHourData_bool_exp[] | null
  chainId?: Int_comparison_exp | null
  closeUSD?: numeric_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  highUSD?: numeric_comparison_exp | null
  id?: String_comparison_exp | null
  lowUSD?: numeric_comparison_exp | null
  openUSD?: numeric_comparison_exp | null
  periodStartUnix?: Int_comparison_exp | null
  priceUSD?: numeric_comparison_exp | null
  projectFeeUSD?: numeric_comparison_exp | null
  protocolFeeISS?: numeric_comparison_exp | null
  protocolFeeUSD?: numeric_comparison_exp | null
  token_id?: String_comparison_exp | null
  volumeISS?: numeric_comparison_exp | null
  volumeUSD?: numeric_comparison_exp | null
}

/** aggregate max on columns */
export interface IssuanceTokenHourData_max_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  db_write_timestamp?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  token_id?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_max_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  db_write_timestamp?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  token_id?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate min on columns */
export interface IssuanceTokenHourData_min_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  db_write_timestamp?: boolean | number
  highUSD?: boolean | number
  id?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  token_id?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_min_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  db_write_timestamp?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  token_id?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Ordering options when selecting data from "IssuanceTokenHourData". */
export interface IssuanceTokenHourData_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  db_write_timestamp?: order_by | null
  highUSD?: order_by | null
  id?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  token_id?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev on columns */
export interface IssuanceTokenHourData_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_stddev_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface IssuanceTokenHourData_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_stddev_pop_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface IssuanceTokenHourData_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_stddev_samp_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** Streaming cursor of the table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: IssuanceTokenHourData_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface IssuanceTokenHourData_stream_cursor_value_input {
  chainId?: Scalars['Int'] | null
  closeUSD?: Scalars['numeric'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  highUSD?: Scalars['numeric'] | null
  id?: Scalars['String'] | null
  lowUSD?: Scalars['numeric'] | null
  openUSD?: Scalars['numeric'] | null
  periodStartUnix?: Scalars['Int'] | null
  priceUSD?: Scalars['numeric'] | null
  projectFeeUSD?: Scalars['numeric'] | null
  protocolFeeISS?: Scalars['numeric'] | null
  protocolFeeUSD?: Scalars['numeric'] | null
  token_id?: Scalars['String'] | null
  volumeISS?: Scalars['numeric'] | null
  volumeUSD?: Scalars['numeric'] | null
}

/** aggregate sum on columns */
export interface IssuanceTokenHourData_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_sum_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_pop on columns */
export interface IssuanceTokenHourData_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_var_pop_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate var_samp on columns */
export interface IssuanceTokenHourData_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_var_samp_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** aggregate variance on columns */
export interface IssuanceTokenHourData_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  closeUSD?: boolean | number
  highUSD?: boolean | number
  lowUSD?: boolean | number
  openUSD?: boolean | number
  periodStartUnix?: boolean | number
  priceUSD?: boolean | number
  projectFeeUSD?: boolean | number
  protocolFeeISS?: boolean | number
  protocolFeeUSD?: boolean | number
  volumeISS?: boolean | number
  volumeUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_variance_order_by {
  chainId?: order_by | null
  closeUSD?: order_by | null
  highUSD?: order_by | null
  lowUSD?: order_by | null
  openUSD?: order_by | null
  periodStartUnix?: order_by | null
  priceUSD?: order_by | null
  projectFeeUSD?: order_by | null
  protocolFeeISS?: order_by | null
  protocolFeeUSD?: order_by | null
  volumeISS?: order_by | null
  volumeUSD?: order_by | null
}

/** columns and relationships of "LinearVesting" */
export interface LinearVestingGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  db_write_timestamp?: boolean | number
  end?: boolean | number
  id?: boolean | number
  recipient?: boolean | number
  start?: boolean | number
  status?: boolean | number
  /** An object relationship */
  streamingPaymentProcessor?: StreamingPaymentProcessorGenqlSelection
  streamingPaymentProcessor_id?: boolean | number
  /** An object relationship */
  token?: TokenGenqlSelection
  token_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "LinearVesting" */
export interface LinearVesting_aggregate_order_by {
  avg?: LinearVesting_avg_order_by | null
  count?: order_by | null
  max?: LinearVesting_max_order_by | null
  min?: LinearVesting_min_order_by | null
  stddev?: LinearVesting_stddev_order_by | null
  stddev_pop?: LinearVesting_stddev_pop_order_by | null
  stddev_samp?: LinearVesting_stddev_samp_order_by | null
  sum?: LinearVesting_sum_order_by | null
  var_pop?: LinearVesting_var_pop_order_by | null
  var_samp?: LinearVesting_var_samp_order_by | null
  variance?: LinearVesting_variance_order_by | null
}

/** order by avg() on columns of table "LinearVesting" */
export interface LinearVesting_avg_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** Boolean expression to filter rows from the table "LinearVesting". All fields are combined with a logical 'AND'. */
export interface LinearVesting_bool_exp {
  _and?: LinearVesting_bool_exp[] | null
  _not?: LinearVesting_bool_exp | null
  _or?: LinearVesting_bool_exp[] | null
  amount?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  chainId?: Int_comparison_exp | null
  cliff?: numeric_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  end?: numeric_comparison_exp | null
  id?: String_comparison_exp | null
  recipient?: String_comparison_exp | null
  start?: numeric_comparison_exp | null
  status?: vestingstatus_comparison_exp | null
  streamingPaymentProcessor?: StreamingPaymentProcessor_bool_exp | null
  streamingPaymentProcessor_id?: String_comparison_exp | null
  token?: Token_bool_exp | null
  token_id?: String_comparison_exp | null
}

/** order by max() on columns of table "LinearVesting" */
export interface LinearVesting_max_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  db_write_timestamp?: order_by | null
  end?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
  start?: order_by | null
  status?: order_by | null
  streamingPaymentProcessor_id?: order_by | null
  token_id?: order_by | null
}

/** order by min() on columns of table "LinearVesting" */
export interface LinearVesting_min_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  db_write_timestamp?: order_by | null
  end?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
  start?: order_by | null
  status?: order_by | null
  streamingPaymentProcessor_id?: order_by | null
  token_id?: order_by | null
}

/** Ordering options when selecting data from "LinearVesting". */
export interface LinearVesting_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  db_write_timestamp?: order_by | null
  end?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
  start?: order_by | null
  status?: order_by | null
  streamingPaymentProcessor?: StreamingPaymentProcessor_order_by | null
  streamingPaymentProcessor_id?: order_by | null
  token?: Token_order_by | null
  token_id?: order_by | null
}

/** order by stddev() on columns of table "LinearVesting" */
export interface LinearVesting_stddev_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** order by stddev_pop() on columns of table "LinearVesting" */
export interface LinearVesting_stddev_pop_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** order by stddev_samp() on columns of table "LinearVesting" */
export interface LinearVesting_stddev_samp_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** Streaming cursor of the table "LinearVesting" */
export interface LinearVesting_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: LinearVesting_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface LinearVesting_stream_cursor_value_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  cliff?: Scalars['numeric'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  end?: Scalars['numeric'] | null
  id?: Scalars['String'] | null
  recipient?: Scalars['String'] | null
  start?: Scalars['numeric'] | null
  status?: Scalars['vestingstatus'] | null
  streamingPaymentProcessor_id?: Scalars['String'] | null
  token_id?: Scalars['String'] | null
}

/** order by sum() on columns of table "LinearVesting" */
export interface LinearVesting_sum_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** order by var_pop() on columns of table "LinearVesting" */
export interface LinearVesting_var_pop_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** order by var_samp() on columns of table "LinearVesting" */
export interface LinearVesting_var_samp_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** order by variance() on columns of table "LinearVesting" */
export interface LinearVesting_variance_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  cliff?: order_by | null
  end?: order_by | null
  start?: order_by | null
}

/** columns and relationships of "ProjectFee" */
export interface ProjectFeeGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  module_id?: boolean | number
  recipient?: boolean | number
  /** An object relationship */
  token?: TokenGenqlSelection
  token_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "ProjectFee" */
export interface ProjectFee_aggregateGenqlSelection {
  aggregate?: ProjectFee_aggregate_fieldsGenqlSelection
  nodes?: ProjectFeeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ProjectFee_aggregate_bool_exp {
  count?: ProjectFee_aggregate_bool_exp_count | null
}

export interface ProjectFee_aggregate_bool_exp_count {
  arguments?: ProjectFee_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: ProjectFee_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "ProjectFee" */
export interface ProjectFee_aggregate_fieldsGenqlSelection {
  avg?: ProjectFee_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: ProjectFee_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: ProjectFee_max_fieldsGenqlSelection
  min?: ProjectFee_min_fieldsGenqlSelection
  stddev?: ProjectFee_stddev_fieldsGenqlSelection
  stddev_pop?: ProjectFee_stddev_pop_fieldsGenqlSelection
  stddev_samp?: ProjectFee_stddev_samp_fieldsGenqlSelection
  sum?: ProjectFee_sum_fieldsGenqlSelection
  var_pop?: ProjectFee_var_pop_fieldsGenqlSelection
  var_samp?: ProjectFee_var_samp_fieldsGenqlSelection
  variance?: ProjectFee_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "ProjectFee" */
export interface ProjectFee_aggregate_order_by {
  avg?: ProjectFee_avg_order_by | null
  count?: order_by | null
  max?: ProjectFee_max_order_by | null
  min?: ProjectFee_min_order_by | null
  stddev?: ProjectFee_stddev_order_by | null
  stddev_pop?: ProjectFee_stddev_pop_order_by | null
  stddev_samp?: ProjectFee_stddev_samp_order_by | null
  sum?: ProjectFee_sum_order_by | null
  var_pop?: ProjectFee_var_pop_order_by | null
  var_samp?: ProjectFee_var_samp_order_by | null
  variance?: ProjectFee_variance_order_by | null
}

/** aggregate avg on columns */
export interface ProjectFee_avg_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "ProjectFee" */
export interface ProjectFee_avg_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** Boolean expression to filter rows from the table "ProjectFee". All fields are combined with a logical 'AND'. */
export interface ProjectFee_bool_exp {
  _and?: ProjectFee_bool_exp[] | null
  _not?: ProjectFee_bool_exp | null
  _or?: ProjectFee_bool_exp[] | null
  amount?: numeric_comparison_exp | null
  amountUSD?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  module_id?: String_comparison_exp | null
  recipient?: String_comparison_exp | null
  token?: Token_bool_exp | null
  token_id?: String_comparison_exp | null
}

/** aggregate max on columns */
export interface ProjectFee_max_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  module_id?: boolean | number
  recipient?: boolean | number
  token_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "ProjectFee" */
export interface ProjectFee_max_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  module_id?: order_by | null
  recipient?: order_by | null
  token_id?: order_by | null
}

/** aggregate min on columns */
export interface ProjectFee_min_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  module_id?: boolean | number
  recipient?: boolean | number
  token_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "ProjectFee" */
export interface ProjectFee_min_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  module_id?: order_by | null
  recipient?: order_by | null
  token_id?: order_by | null
}

/** Ordering options when selecting data from "ProjectFee". */
export interface ProjectFee_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  module_id?: order_by | null
  recipient?: order_by | null
  token?: Token_order_by | null
  token_id?: order_by | null
}

/** aggregate stddev on columns */
export interface ProjectFee_stddev_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "ProjectFee" */
export interface ProjectFee_stddev_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface ProjectFee_stddev_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "ProjectFee" */
export interface ProjectFee_stddev_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface ProjectFee_stddev_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "ProjectFee" */
export interface ProjectFee_stddev_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** Streaming cursor of the table "ProjectFee" */
export interface ProjectFee_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: ProjectFee_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface ProjectFee_stream_cursor_value_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  module_id?: Scalars['String'] | null
  recipient?: Scalars['String'] | null
  token_id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface ProjectFee_sum_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "ProjectFee" */
export interface ProjectFee_sum_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate var_pop on columns */
export interface ProjectFee_var_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "ProjectFee" */
export interface ProjectFee_var_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate var_samp on columns */
export interface ProjectFee_var_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "ProjectFee" */
export interface ProjectFee_var_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate variance on columns */
export interface ProjectFee_variance_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "ProjectFee" */
export interface ProjectFee_variance_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** columns and relationships of "ProtocolFee" */
export interface ProtocolFeeGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  module_id?: boolean | number
  source?: boolean | number
  /** An object relationship */
  token?: TokenGenqlSelection
  token_id?: boolean | number
  treasury?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "ProtocolFee" */
export interface ProtocolFee_aggregateGenqlSelection {
  aggregate?: ProtocolFee_aggregate_fieldsGenqlSelection
  nodes?: ProtocolFeeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ProtocolFee_aggregate_bool_exp {
  count?: ProtocolFee_aggregate_bool_exp_count | null
}

export interface ProtocolFee_aggregate_bool_exp_count {
  arguments?: ProtocolFee_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: ProtocolFee_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "ProtocolFee" */
export interface ProtocolFee_aggregate_fieldsGenqlSelection {
  avg?: ProtocolFee_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: ProtocolFee_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: ProtocolFee_max_fieldsGenqlSelection
  min?: ProtocolFee_min_fieldsGenqlSelection
  stddev?: ProtocolFee_stddev_fieldsGenqlSelection
  stddev_pop?: ProtocolFee_stddev_pop_fieldsGenqlSelection
  stddev_samp?: ProtocolFee_stddev_samp_fieldsGenqlSelection
  sum?: ProtocolFee_sum_fieldsGenqlSelection
  var_pop?: ProtocolFee_var_pop_fieldsGenqlSelection
  var_samp?: ProtocolFee_var_samp_fieldsGenqlSelection
  variance?: ProtocolFee_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "ProtocolFee" */
export interface ProtocolFee_aggregate_order_by {
  avg?: ProtocolFee_avg_order_by | null
  count?: order_by | null
  max?: ProtocolFee_max_order_by | null
  min?: ProtocolFee_min_order_by | null
  stddev?: ProtocolFee_stddev_order_by | null
  stddev_pop?: ProtocolFee_stddev_pop_order_by | null
  stddev_samp?: ProtocolFee_stddev_samp_order_by | null
  sum?: ProtocolFee_sum_order_by | null
  var_pop?: ProtocolFee_var_pop_order_by | null
  var_samp?: ProtocolFee_var_samp_order_by | null
  variance?: ProtocolFee_variance_order_by | null
}

/** aggregate avg on columns */
export interface ProtocolFee_avg_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "ProtocolFee" */
export interface ProtocolFee_avg_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** Boolean expression to filter rows from the table "ProtocolFee". All fields are combined with a logical 'AND'. */
export interface ProtocolFee_bool_exp {
  _and?: ProtocolFee_bool_exp[] | null
  _not?: ProtocolFee_bool_exp | null
  _or?: ProtocolFee_bool_exp[] | null
  amount?: numeric_comparison_exp | null
  amountUSD?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  module_id?: String_comparison_exp | null
  source?: feesource_comparison_exp | null
  token?: Token_bool_exp | null
  token_id?: String_comparison_exp | null
  treasury?: String_comparison_exp | null
}

/** aggregate max on columns */
export interface ProtocolFee_max_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  module_id?: boolean | number
  source?: boolean | number
  token_id?: boolean | number
  treasury?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "ProtocolFee" */
export interface ProtocolFee_max_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  module_id?: order_by | null
  source?: order_by | null
  token_id?: order_by | null
  treasury?: order_by | null
}

/** aggregate min on columns */
export interface ProtocolFee_min_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  module_id?: boolean | number
  source?: boolean | number
  token_id?: boolean | number
  treasury?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "ProtocolFee" */
export interface ProtocolFee_min_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  module_id?: order_by | null
  source?: order_by | null
  token_id?: order_by | null
  treasury?: order_by | null
}

/** Ordering options when selecting data from "ProtocolFee". */
export interface ProtocolFee_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  module_id?: order_by | null
  source?: order_by | null
  token?: Token_order_by | null
  token_id?: order_by | null
  treasury?: order_by | null
}

/** aggregate stddev on columns */
export interface ProtocolFee_stddev_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "ProtocolFee" */
export interface ProtocolFee_stddev_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface ProtocolFee_stddev_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "ProtocolFee" */
export interface ProtocolFee_stddev_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface ProtocolFee_stddev_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "ProtocolFee" */
export interface ProtocolFee_stddev_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** Streaming cursor of the table "ProtocolFee" */
export interface ProtocolFee_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: ProtocolFee_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface ProtocolFee_stream_cursor_value_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  module_id?: Scalars['String'] | null
  source?: Scalars['feesource'] | null
  token_id?: Scalars['String'] | null
  treasury?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface ProtocolFee_sum_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "ProtocolFee" */
export interface ProtocolFee_sum_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate var_pop on columns */
export interface ProtocolFee_var_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "ProtocolFee" */
export interface ProtocolFee_var_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate var_samp on columns */
export interface ProtocolFee_var_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "ProtocolFee" */
export interface ProtocolFee_var_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** aggregate variance on columns */
export interface ProtocolFee_variance_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "ProtocolFee" */
export interface ProtocolFee_variance_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
}

/** columns and relationships of "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessorGenqlSelection {
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  /** An array relationship */
  vestings?: LinearVestingGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: LinearVesting_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: LinearVesting_order_by[] | null
      /** filter the rows returned */
      where?: LinearVesting_bool_exp | null
    }
  }
  /** An object relationship */
  workflow?: WorkflowGenqlSelection
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "StreamingPaymentProcessor". All fields are combined with a logical 'AND'. */
export interface StreamingPaymentProcessor_bool_exp {
  _and?: StreamingPaymentProcessor_bool_exp[] | null
  _not?: StreamingPaymentProcessor_bool_exp | null
  _or?: StreamingPaymentProcessor_bool_exp[] | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  vestings?: LinearVesting_bool_exp | null
  workflow?: Workflow_bool_exp | null
  workflow_id?: String_comparison_exp | null
}

/** Ordering options when selecting data from "StreamingPaymentProcessor". */
export interface StreamingPaymentProcessor_order_by {
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  vestings_aggregate?: LinearVesting_aggregate_order_by | null
  workflow?: Workflow_order_by | null
  workflow_id?: order_by | null
}

/** Streaming cursor of the table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: StreamingPaymentProcessor_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface StreamingPaymentProcessor_stream_cursor_value_input {
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  workflow_id?: Scalars['String'] | null
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_array_comparison_exp {
  /** is the array contained in the given array value */
  _contained_in?: Scalars['String'][] | null
  /** does the array contain the given value */
  _contains?: Scalars['String'][] | null
  _eq?: Scalars['String'][] | null
  _gt?: Scalars['String'][] | null
  _gte?: Scalars['String'][] | null
  _in?: Scalars['String'][][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['String'][] | null
  _lte?: Scalars['String'][] | null
  _neq?: Scalars['String'][] | null
  _nin?: Scalars['String'][][] | null
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Scalars['String'] | null
  _gt?: Scalars['String'] | null
  _gte?: Scalars['String'] | null
  /** does the column match the given case-insensitive pattern */
  _ilike?: Scalars['String'] | null
  _in?: Scalars['String'][] | null
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Scalars['String'] | null
  _is_null?: Scalars['Boolean'] | null
  /** does the column match the given pattern */
  _like?: Scalars['String'] | null
  _lt?: Scalars['String'] | null
  _lte?: Scalars['String'] | null
  _neq?: Scalars['String'] | null
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Scalars['String'] | null
  _nin?: Scalars['String'][] | null
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Scalars['String'] | null
  /** does the column NOT match the given pattern */
  _nlike?: Scalars['String'] | null
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Scalars['String'] | null
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Scalars['String'] | null
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Scalars['String'] | null
  /** does the column match the given SQL regular expression */
  _similar?: Scalars['String'] | null
}

/** columns and relationships of "Swap" */
export interface SwapGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  /** An object relationship */
  collateralToken?: TokenGenqlSelection
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  initiator?: boolean | number
  /** An object relationship */
  issuanceToken?: TokenGenqlSelection
  issuanceToken_id?: boolean | number
  module_id?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  recipient?: boolean | number
  swapType?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "Swap" */
export interface Swap_aggregate_order_by {
  avg?: Swap_avg_order_by | null
  count?: order_by | null
  max?: Swap_max_order_by | null
  min?: Swap_min_order_by | null
  stddev?: Swap_stddev_order_by | null
  stddev_pop?: Swap_stddev_pop_order_by | null
  stddev_samp?: Swap_stddev_samp_order_by | null
  sum?: Swap_sum_order_by | null
  var_pop?: Swap_var_pop_order_by | null
  var_samp?: Swap_var_samp_order_by | null
  variance?: Swap_variance_order_by | null
}

/** order by avg() on columns of table "Swap" */
export interface Swap_avg_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** Boolean expression to filter rows from the table "Swap". All fields are combined with a logical 'AND'. */
export interface Swap_bool_exp {
  _and?: Swap_bool_exp[] | null
  _not?: Swap_bool_exp | null
  _or?: Swap_bool_exp[] | null
  amountCOL?: numeric_comparison_exp | null
  amountISS?: numeric_comparison_exp | null
  amountUSD?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  chainId?: Int_comparison_exp | null
  collateralToken?: Token_bool_exp | null
  collateralToken_id?: String_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  initiator?: String_comparison_exp | null
  issuanceToken?: Token_bool_exp | null
  issuanceToken_id?: String_comparison_exp | null
  module_id?: String_comparison_exp | null
  priceCOL?: numeric_comparison_exp | null
  priceUSD?: numeric_comparison_exp | null
  recipient?: String_comparison_exp | null
  swapType?: swaptype_comparison_exp | null
}

/** order by max() on columns of table "Swap" */
export interface Swap_max_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  collateralToken_id?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  initiator?: order_by | null
  issuanceToken_id?: order_by | null
  module_id?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  recipient?: order_by | null
  swapType?: order_by | null
}

/** order by min() on columns of table "Swap" */
export interface Swap_min_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  collateralToken_id?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  initiator?: order_by | null
  issuanceToken_id?: order_by | null
  module_id?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  recipient?: order_by | null
  swapType?: order_by | null
}

/** Ordering options when selecting data from "Swap". */
export interface Swap_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  collateralToken?: Token_order_by | null
  collateralToken_id?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  initiator?: order_by | null
  issuanceToken?: Token_order_by | null
  issuanceToken_id?: order_by | null
  module_id?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
  recipient?: order_by | null
  swapType?: order_by | null
}

/** order by stddev() on columns of table "Swap" */
export interface Swap_stddev_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** order by stddev_pop() on columns of table "Swap" */
export interface Swap_stddev_pop_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** order by stddev_samp() on columns of table "Swap" */
export interface Swap_stddev_samp_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** Streaming cursor of the table "Swap" */
export interface Swap_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: Swap_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface Swap_stream_cursor_value_input {
  amountCOL?: Scalars['numeric'] | null
  amountISS?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  collateralToken_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  initiator?: Scalars['String'] | null
  issuanceToken_id?: Scalars['String'] | null
  module_id?: Scalars['String'] | null
  priceCOL?: Scalars['numeric'] | null
  priceUSD?: Scalars['numeric'] | null
  recipient?: Scalars['String'] | null
  swapType?: Scalars['swaptype'] | null
}

/** order by sum() on columns of table "Swap" */
export interface Swap_sum_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** order by var_pop() on columns of table "Swap" */
export interface Swap_var_pop_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** order by var_samp() on columns of table "Swap" */
export interface Swap_var_samp_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** order by variance() on columns of table "Swap" */
export interface Swap_variance_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** columns and relationships of "Token" */
export interface TokenGenqlSelection {
  address?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  decimals?: boolean | number
  id?: boolean | number
  name?: boolean | number
  priceUSD?: boolean | number
  symbol?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "Token" */
export interface Token_aggregateGenqlSelection {
  aggregate?: Token_aggregate_fieldsGenqlSelection
  nodes?: TokenGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "Token" */
export interface Token_aggregate_fieldsGenqlSelection {
  avg?: Token_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: Token_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: Token_max_fieldsGenqlSelection
  min?: Token_min_fieldsGenqlSelection
  stddev?: Token_stddev_fieldsGenqlSelection
  stddev_pop?: Token_stddev_pop_fieldsGenqlSelection
  stddev_samp?: Token_stddev_samp_fieldsGenqlSelection
  sum?: Token_sum_fieldsGenqlSelection
  var_pop?: Token_var_pop_fieldsGenqlSelection
  var_samp?: Token_var_samp_fieldsGenqlSelection
  variance?: Token_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface Token_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "Token". All fields are combined with a logical 'AND'. */
export interface Token_bool_exp {
  _and?: Token_bool_exp[] | null
  _not?: Token_bool_exp | null
  _or?: Token_bool_exp[] | null
  address?: String_comparison_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  decimals?: Int_comparison_exp | null
  id?: String_comparison_exp | null
  name?: String_comparison_exp | null
  priceUSD?: numeric_comparison_exp | null
  symbol?: String_comparison_exp | null
  totalSupply?: numeric_comparison_exp | null
}

/** aggregate max on columns */
export interface Token_max_fieldsGenqlSelection {
  address?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  decimals?: boolean | number
  id?: boolean | number
  name?: boolean | number
  priceUSD?: boolean | number
  symbol?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface Token_min_fieldsGenqlSelection {
  address?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  decimals?: boolean | number
  id?: boolean | number
  name?: boolean | number
  priceUSD?: boolean | number
  symbol?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "Token". */
export interface Token_order_by {
  address?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  decimals?: order_by | null
  id?: order_by | null
  name?: order_by | null
  priceUSD?: order_by | null
  symbol?: order_by | null
  totalSupply?: order_by | null
}

/** aggregate stddev on columns */
export interface Token_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface Token_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface Token_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Streaming cursor of the table "Token" */
export interface Token_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: Token_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface Token_stream_cursor_value_input {
  address?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  decimals?: Scalars['Int'] | null
  id?: Scalars['String'] | null
  name?: Scalars['String'] | null
  priceUSD?: Scalars['numeric'] | null
  symbol?: Scalars['String'] | null
  totalSupply?: Scalars['numeric'] | null
}

/** aggregate sum on columns */
export interface Token_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface Token_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface Token_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface Token_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  decimals?: boolean | number
  priceUSD?: boolean | number
  totalSupply?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "Transfer" */
export interface TransferGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  db_write_timestamp?: boolean | number
  /** An object relationship */
  depositVault?: DepositVaultGenqlSelection
  depositVault_id?: boolean | number
  id?: boolean | number
  recipient?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "Transfer" */
export interface Transfer_aggregateGenqlSelection {
  aggregate?: Transfer_aggregate_fieldsGenqlSelection
  nodes?: TransferGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Transfer_aggregate_bool_exp {
  count?: Transfer_aggregate_bool_exp_count | null
}

export interface Transfer_aggregate_bool_exp_count {
  arguments?: Transfer_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: Transfer_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "Transfer" */
export interface Transfer_aggregate_fieldsGenqlSelection {
  avg?: Transfer_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: Transfer_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: Transfer_max_fieldsGenqlSelection
  min?: Transfer_min_fieldsGenqlSelection
  stddev?: Transfer_stddev_fieldsGenqlSelection
  stddev_pop?: Transfer_stddev_pop_fieldsGenqlSelection
  stddev_samp?: Transfer_stddev_samp_fieldsGenqlSelection
  sum?: Transfer_sum_fieldsGenqlSelection
  var_pop?: Transfer_var_pop_fieldsGenqlSelection
  var_samp?: Transfer_var_samp_fieldsGenqlSelection
  variance?: Transfer_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by aggregate values of table "Transfer" */
export interface Transfer_aggregate_order_by {
  avg?: Transfer_avg_order_by | null
  count?: order_by | null
  max?: Transfer_max_order_by | null
  min?: Transfer_min_order_by | null
  stddev?: Transfer_stddev_order_by | null
  stddev_pop?: Transfer_stddev_pop_order_by | null
  stddev_samp?: Transfer_stddev_samp_order_by | null
  sum?: Transfer_sum_order_by | null
  var_pop?: Transfer_var_pop_order_by | null
  var_samp?: Transfer_var_samp_order_by | null
  variance?: Transfer_variance_order_by | null
}

/** aggregate avg on columns */
export interface Transfer_avg_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "Transfer" */
export interface Transfer_avg_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** Boolean expression to filter rows from the table "Transfer". All fields are combined with a logical 'AND'. */
export interface Transfer_bool_exp {
  _and?: Transfer_bool_exp[] | null
  _not?: Transfer_bool_exp | null
  _or?: Transfer_bool_exp[] | null
  amount?: numeric_comparison_exp | null
  amountUSD?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  depositVault?: DepositVault_bool_exp | null
  depositVault_id?: String_comparison_exp | null
  id?: String_comparison_exp | null
  recipient?: String_comparison_exp | null
}

/** aggregate max on columns */
export interface Transfer_max_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  db_write_timestamp?: boolean | number
  depositVault_id?: boolean | number
  id?: boolean | number
  recipient?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "Transfer" */
export interface Transfer_max_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
}

/** aggregate min on columns */
export interface Transfer_min_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  db_write_timestamp?: boolean | number
  depositVault_id?: boolean | number
  id?: boolean | number
  recipient?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "Transfer" */
export interface Transfer_min_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
}

/** Ordering options when selecting data from "Transfer". */
export interface Transfer_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault?: DepositVault_order_by | null
  depositVault_id?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
}

/** aggregate stddev on columns */
export interface Transfer_stddev_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "Transfer" */
export interface Transfer_stddev_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface Transfer_stddev_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "Transfer" */
export interface Transfer_stddev_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface Transfer_stddev_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "Transfer" */
export interface Transfer_stddev_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** Streaming cursor of the table "Transfer" */
export interface Transfer_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: Transfer_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface Transfer_stream_cursor_value_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault_id?: Scalars['String'] | null
  id?: Scalars['String'] | null
  recipient?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface Transfer_sum_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "Transfer" */
export interface Transfer_sum_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate var_pop on columns */
export interface Transfer_var_pop_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "Transfer" */
export interface Transfer_var_pop_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate var_samp on columns */
export interface Transfer_var_samp_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "Transfer" */
export interface Transfer_var_samp_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate variance on columns */
export interface Transfer_variance_fieldsGenqlSelection {
  amount?: boolean | number
  amountUSD?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "Transfer" */
export interface Transfer_variance_order_by {
  amount?: order_by | null
  amountUSD?: order_by | null
  blockTimestamp?: order_by | null
}

/** columns and relationships of "Workflow" */
export interface WorkflowGenqlSelection {
  /** An object relationship */
  authorizer?: WorkflowModuleGenqlSelection
  authorizer_id?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  /** An object relationship */
  fundingManager?: WorkflowModuleGenqlSelection
  fundingManager_id?: boolean | number
  id?: boolean | number
  optionalModules?: boolean | number
  orchestrator?: boolean | number
  /** An object relationship */
  paymentProcessor?: WorkflowModuleGenqlSelection
  paymentProcessor_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "WorkflowModule" */
export interface WorkflowModuleGenqlSelection {
  address?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  /** An object relationship */
  moduleType?: WorkflowModuleTypeGenqlSelection
  moduleType_id?: boolean | number
  orchestrator?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "WorkflowModuleType" */
export interface WorkflowModuleTypeGenqlSelection {
  beacon?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  name?: boolean | number
  patchVersion?: boolean | number
  url?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "WorkflowModuleType". All fields are combined with a logical 'AND'. */
export interface WorkflowModuleType_bool_exp {
  _and?: WorkflowModuleType_bool_exp[] | null
  _not?: WorkflowModuleType_bool_exp | null
  _or?: WorkflowModuleType_bool_exp[] | null
  beacon?: String_comparison_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  majorVersion?: numeric_comparison_exp | null
  minorVersion?: numeric_comparison_exp | null
  name?: String_comparison_exp | null
  patchVersion?: numeric_comparison_exp | null
  url?: String_comparison_exp | null
}

/** Ordering options when selecting data from "WorkflowModuleType". */
export interface WorkflowModuleType_order_by {
  beacon?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  majorVersion?: order_by | null
  minorVersion?: order_by | null
  name?: order_by | null
  patchVersion?: order_by | null
  url?: order_by | null
}

/** Streaming cursor of the table "WorkflowModuleType" */
export interface WorkflowModuleType_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: WorkflowModuleType_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface WorkflowModuleType_stream_cursor_value_input {
  beacon?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  majorVersion?: Scalars['numeric'] | null
  minorVersion?: Scalars['numeric'] | null
  name?: Scalars['String'] | null
  patchVersion?: Scalars['numeric'] | null
  url?: Scalars['String'] | null
}

/** Boolean expression to filter rows from the table "WorkflowModule". All fields are combined with a logical 'AND'. */
export interface WorkflowModule_bool_exp {
  _and?: WorkflowModule_bool_exp[] | null
  _not?: WorkflowModule_bool_exp | null
  _or?: WorkflowModule_bool_exp[] | null
  address?: String_comparison_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  id?: String_comparison_exp | null
  moduleType?: WorkflowModuleType_bool_exp | null
  moduleType_id?: String_comparison_exp | null
  orchestrator?: String_comparison_exp | null
}

/** Ordering options when selecting data from "WorkflowModule". */
export interface WorkflowModule_order_by {
  address?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
  moduleType?: WorkflowModuleType_order_by | null
  moduleType_id?: order_by | null
  orchestrator?: order_by | null
}

/** Streaming cursor of the table "WorkflowModule" */
export interface WorkflowModule_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: WorkflowModule_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface WorkflowModule_stream_cursor_value_input {
  address?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  moduleType_id?: Scalars['String'] | null
  orchestrator?: Scalars['String'] | null
}

/** Boolean expression to filter rows from the table "Workflow". All fields are combined with a logical 'AND'. */
export interface Workflow_bool_exp {
  _and?: Workflow_bool_exp[] | null
  _not?: Workflow_bool_exp | null
  _or?: Workflow_bool_exp[] | null
  authorizer?: WorkflowModule_bool_exp | null
  authorizer_id?: String_comparison_exp | null
  chainId?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  fundingManager?: WorkflowModule_bool_exp | null
  fundingManager_id?: String_comparison_exp | null
  id?: String_comparison_exp | null
  optionalModules?: String_array_comparison_exp | null
  orchestrator?: String_comparison_exp | null
  paymentProcessor?: WorkflowModule_bool_exp | null
  paymentProcessor_id?: String_comparison_exp | null
}

/** Ordering options when selecting data from "Workflow". */
export interface Workflow_order_by {
  authorizer?: WorkflowModule_order_by | null
  authorizer_id?: order_by | null
  chainId?: order_by | null
  db_write_timestamp?: order_by | null
  fundingManager?: WorkflowModule_order_by | null
  fundingManager_id?: order_by | null
  id?: order_by | null
  optionalModules?: order_by | null
  orchestrator?: order_by | null
  paymentProcessor?: WorkflowModule_order_by | null
  paymentProcessor_id?: order_by | null
}

/** Streaming cursor of the table "Workflow" */
export interface Workflow_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: Workflow_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface Workflow_stream_cursor_value_input {
  authorizer_id?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  fundingManager_id?: Scalars['String'] | null
  id?: Scalars['String'] | null
  optionalModules?: Scalars['String'][] | null
  orchestrator?: Scalars['String'] | null
  paymentProcessor_id?: Scalars['String'] | null
}

/** columns and relationships of "chain_metadata" */
export interface chain_metadataGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  is_hyper_sync?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  timestamp_caught_up_to_head_or_endblock?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "chain_metadata". All fields are combined with a logical 'AND'. */
export interface chain_metadata_bool_exp {
  _and?: chain_metadata_bool_exp[] | null
  _not?: chain_metadata_bool_exp | null
  _or?: chain_metadata_bool_exp[] | null
  block_height?: Int_comparison_exp | null
  chain_id?: Int_comparison_exp | null
  end_block?: Int_comparison_exp | null
  first_event_block_number?: Int_comparison_exp | null
  is_hyper_sync?: Boolean_comparison_exp | null
  latest_fetched_block_number?: Int_comparison_exp | null
  latest_processed_block?: Int_comparison_exp | null
  num_batches_fetched?: Int_comparison_exp | null
  num_events_processed?: Int_comparison_exp | null
  start_block?: Int_comparison_exp | null
  timestamp_caught_up_to_head_or_endblock?: timestamptz_comparison_exp | null
}

/** Ordering options when selecting data from "chain_metadata". */
export interface chain_metadata_order_by {
  block_height?: order_by | null
  chain_id?: order_by | null
  end_block?: order_by | null
  first_event_block_number?: order_by | null
  is_hyper_sync?: order_by | null
  latest_fetched_block_number?: order_by | null
  latest_processed_block?: order_by | null
  num_batches_fetched?: order_by | null
  num_events_processed?: order_by | null
  start_block?: order_by | null
  timestamp_caught_up_to_head_or_endblock?: order_by | null
}

/** Streaming cursor of the table "chain_metadata" */
export interface chain_metadata_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: chain_metadata_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface chain_metadata_stream_cursor_value_input {
  block_height?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  end_block?: Scalars['Int'] | null
  first_event_block_number?: Scalars['Int'] | null
  is_hyper_sync?: Scalars['Boolean'] | null
  latest_fetched_block_number?: Scalars['Int'] | null
  latest_processed_block?: Scalars['Int'] | null
  num_batches_fetched?: Scalars['Int'] | null
  num_events_processed?: Scalars['Int'] | null
  start_block?: Scalars['Int'] | null
  timestamp_caught_up_to_head_or_endblock?: Scalars['timestamptz'] | null
}

/** Boolean expression to compare columns of type "contract_type". All fields are combined with logical 'AND'. */
export interface contract_type_comparison_exp {
  _eq?: Scalars['contract_type'] | null
  _gt?: Scalars['contract_type'] | null
  _gte?: Scalars['contract_type'] | null
  _in?: Scalars['contract_type'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['contract_type'] | null
  _lte?: Scalars['contract_type'] | null
  _neq?: Scalars['contract_type'] | null
  _nin?: Scalars['contract_type'][] | null
}

/** columns and relationships of "dynamic_contract_registry" */
export interface dynamic_contract_registryGenqlSelection {
  chain_id?: boolean | number
  contract_address?: boolean | number
  contract_type?: boolean | number
  id?: boolean | number
  is_pre_registered?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_contract_name?: boolean | number
  registering_event_log_index?: boolean | number
  registering_event_name?: boolean | number
  registering_event_src_address?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "dynamic_contract_registry". All fields are combined with a logical 'AND'. */
export interface dynamic_contract_registry_bool_exp {
  _and?: dynamic_contract_registry_bool_exp[] | null
  _not?: dynamic_contract_registry_bool_exp | null
  _or?: dynamic_contract_registry_bool_exp[] | null
  chain_id?: Int_comparison_exp | null
  contract_address?: String_comparison_exp | null
  contract_type?: contract_type_comparison_exp | null
  id?: String_comparison_exp | null
  is_pre_registered?: Boolean_comparison_exp | null
  registering_event_block_number?: Int_comparison_exp | null
  registering_event_block_timestamp?: Int_comparison_exp | null
  registering_event_contract_name?: String_comparison_exp | null
  registering_event_log_index?: Int_comparison_exp | null
  registering_event_name?: String_comparison_exp | null
  registering_event_src_address?: String_comparison_exp | null
}

/** Ordering options when selecting data from "dynamic_contract_registry". */
export interface dynamic_contract_registry_order_by {
  chain_id?: order_by | null
  contract_address?: order_by | null
  contract_type?: order_by | null
  id?: order_by | null
  is_pre_registered?: order_by | null
  registering_event_block_number?: order_by | null
  registering_event_block_timestamp?: order_by | null
  registering_event_contract_name?: order_by | null
  registering_event_log_index?: order_by | null
  registering_event_name?: order_by | null
  registering_event_src_address?: order_by | null
}

/** Streaming cursor of the table "dynamic_contract_registry" */
export interface dynamic_contract_registry_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: dynamic_contract_registry_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface dynamic_contract_registry_stream_cursor_value_input {
  chain_id?: Scalars['Int'] | null
  contract_address?: Scalars['String'] | null
  contract_type?: Scalars['contract_type'] | null
  id?: Scalars['String'] | null
  is_pre_registered?: Scalars['Boolean'] | null
  registering_event_block_number?: Scalars['Int'] | null
  registering_event_block_timestamp?: Scalars['Int'] | null
  registering_event_contract_name?: Scalars['String'] | null
  registering_event_log_index?: Scalars['Int'] | null
  registering_event_name?: Scalars['String'] | null
  registering_event_src_address?: Scalars['String'] | null
}

/** columns and relationships of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_dataGenqlSelection {
  block_hash?: boolean | number
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "end_of_block_range_scanned_data". All fields are combined with a logical 'AND'. */
export interface end_of_block_range_scanned_data_bool_exp {
  _and?: end_of_block_range_scanned_data_bool_exp[] | null
  _not?: end_of_block_range_scanned_data_bool_exp | null
  _or?: end_of_block_range_scanned_data_bool_exp[] | null
  block_hash?: String_comparison_exp | null
  block_number?: Int_comparison_exp | null
  block_timestamp?: Int_comparison_exp | null
  chain_id?: Int_comparison_exp | null
}

/** Ordering options when selecting data from "end_of_block_range_scanned_data". */
export interface end_of_block_range_scanned_data_order_by {
  block_hash?: order_by | null
  block_number?: order_by | null
  block_timestamp?: order_by | null
  chain_id?: order_by | null
}

/** Streaming cursor of the table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: end_of_block_range_scanned_data_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface end_of_block_range_scanned_data_stream_cursor_value_input {
  block_hash?: Scalars['String'] | null
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
}

/** columns and relationships of "event_sync_state" */
export interface event_sync_stateGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  is_pre_registering_dynamic_contracts?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "event_sync_state". All fields are combined with a logical 'AND'. */
export interface event_sync_state_bool_exp {
  _and?: event_sync_state_bool_exp[] | null
  _not?: event_sync_state_bool_exp | null
  _or?: event_sync_state_bool_exp[] | null
  block_number?: Int_comparison_exp | null
  block_timestamp?: Int_comparison_exp | null
  chain_id?: Int_comparison_exp | null
  is_pre_registering_dynamic_contracts?: Boolean_comparison_exp | null
  log_index?: Int_comparison_exp | null
}

/** Ordering options when selecting data from "event_sync_state". */
export interface event_sync_state_order_by {
  block_number?: order_by | null
  block_timestamp?: order_by | null
  chain_id?: order_by | null
  is_pre_registering_dynamic_contracts?: order_by | null
  log_index?: order_by | null
}

/** Streaming cursor of the table "event_sync_state" */
export interface event_sync_state_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: event_sync_state_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface event_sync_state_stream_cursor_value_input {
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  is_pre_registering_dynamic_contracts?: Scalars['Boolean'] | null
  log_index?: Scalars['Int'] | null
}

/** Boolean expression to compare columns of type "feesource". All fields are combined with logical 'AND'. */
export interface feesource_comparison_exp {
  _eq?: Scalars['feesource'] | null
  _gt?: Scalars['feesource'] | null
  _gte?: Scalars['feesource'] | null
  _in?: Scalars['feesource'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['feesource'] | null
  _lte?: Scalars['feesource'] | null
  _neq?: Scalars['feesource'] | null
  _nin?: Scalars['feesource'][] | null
}

export interface jsonb_cast_exp {
  String?: String_comparison_exp | null
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {
  _cast?: jsonb_cast_exp | null
  /** is the column contained in the given json value */
  _contained_in?: Scalars['jsonb'] | null
  /** does the column contain the given json value at the top level */
  _contains?: Scalars['jsonb'] | null
  _eq?: Scalars['jsonb'] | null
  _gt?: Scalars['jsonb'] | null
  _gte?: Scalars['jsonb'] | null
  /** does the string exist as a top-level key in the column */
  _has_key?: Scalars['String'] | null
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Scalars['String'][] | null
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Scalars['String'][] | null
  _in?: Scalars['jsonb'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['jsonb'] | null
  _lte?: Scalars['jsonb'] | null
  _neq?: Scalars['jsonb'] | null
  _nin?: Scalars['jsonb'][] | null
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {
  _eq?: Scalars['numeric'] | null
  _gt?: Scalars['numeric'] | null
  _gte?: Scalars['numeric'] | null
  _in?: Scalars['numeric'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['numeric'] | null
  _lte?: Scalars['numeric'] | null
  _neq?: Scalars['numeric'] | null
  _nin?: Scalars['numeric'][] | null
}

/** columns and relationships of "persisted_state" */
export interface persisted_stateGenqlSelection {
  abi_files_hash?: boolean | number
  config_hash?: boolean | number
  envio_version?: boolean | number
  handler_files_hash?: boolean | number
  id?: boolean | number
  schema_hash?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "persisted_state". All fields are combined with a logical 'AND'. */
export interface persisted_state_bool_exp {
  _and?: persisted_state_bool_exp[] | null
  _not?: persisted_state_bool_exp | null
  _or?: persisted_state_bool_exp[] | null
  abi_files_hash?: String_comparison_exp | null
  config_hash?: String_comparison_exp | null
  envio_version?: String_comparison_exp | null
  handler_files_hash?: String_comparison_exp | null
  id?: Int_comparison_exp | null
  schema_hash?: String_comparison_exp | null
}

/** Ordering options when selecting data from "persisted_state". */
export interface persisted_state_order_by {
  abi_files_hash?: order_by | null
  config_hash?: order_by | null
  envio_version?: order_by | null
  handler_files_hash?: order_by | null
  id?: order_by | null
  schema_hash?: order_by | null
}

/** Streaming cursor of the table "persisted_state" */
export interface persisted_state_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: persisted_state_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface persisted_state_stream_cursor_value_input {
  abi_files_hash?: Scalars['String'] | null
  config_hash?: Scalars['String'] | null
  envio_version?: Scalars['String'] | null
  handler_files_hash?: Scalars['String'] | null
  id?: Scalars['Int'] | null
  schema_hash?: Scalars['String'] | null
}

export interface query_rootGenqlSelection {
  /** fetch data from the table: "BondingCurve" */
  BondingCurve?: BondingCurveGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BondingCurve_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BondingCurve_order_by[] | null
      /** filter the rows returned */
      where?: BondingCurve_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "BondingCurve" */
  BondingCurve_aggregate?: BondingCurve_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BondingCurve_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BondingCurve_order_by[] | null
      /** filter the rows returned */
      where?: BondingCurve_bool_exp | null
    }
  }
  /** fetch data from the table: "BondingCurve" using primary key columns */
  BondingCurve_by_pk?: BondingCurveGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "Bounty" */
  Bounty?: BountyGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Bounty_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Bounty_order_by[] | null
      /** filter the rows returned */
      where?: Bounty_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyClaim" */
  BountyClaim?: BountyClaimGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyClaim_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyClaim_order_by[] | null
      /** filter the rows returned */
      where?: BountyClaim_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "BountyClaim" */
  BountyClaim_aggregate?: BountyClaim_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyClaim_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyClaim_order_by[] | null
      /** filter the rows returned */
      where?: BountyClaim_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyClaim" using primary key columns */
  BountyClaim_by_pk?: BountyClaimGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "BountyContributor" */
  BountyContributor?: BountyContributorGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyContributor_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyContributor_order_by[] | null
      /** filter the rows returned */
      where?: BountyContributor_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyContributor" using primary key columns */
  BountyContributor_by_pk?: BountyContributorGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "BountyModule" */
  BountyModule?: BountyModuleGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyModule_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyModule_order_by[] | null
      /** filter the rows returned */
      where?: BountyModule_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyModule" using primary key columns */
  BountyModule_by_pk?: BountyModuleGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch aggregated fields from the table: "Bounty" */
  Bounty_aggregate?: Bounty_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Bounty_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Bounty_order_by[] | null
      /** filter the rows returned */
      where?: Bounty_bool_exp | null
    }
  }
  /** fetch data from the table: "Bounty" using primary key columns */
  Bounty_by_pk?: BountyGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table: "CurveDayData" */
  CurveDayData?: CurveDayDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveDayData_order_by[] | null
      /** filter the rows returned */
      where?: CurveDayData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "CurveDayData" */
  CurveDayData_aggregate?: CurveDayData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveDayData_order_by[] | null
      /** filter the rows returned */
      where?: CurveDayData_bool_exp | null
    }
  }
  /** fetch data from the table: "CurveDayData" using primary key columns */
  CurveDayData_by_pk?: CurveDayDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "CurveHourData" */
  CurveHourData?: CurveHourDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveHourData_order_by[] | null
      /** filter the rows returned */
      where?: CurveHourData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "CurveHourData" */
  CurveHourData_aggregate?: CurveHourData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveHourData_order_by[] | null
      /** filter the rows returned */
      where?: CurveHourData_bool_exp | null
    }
  }
  /** fetch data from the table: "CurveHourData" using primary key columns */
  CurveHourData_by_pk?: CurveHourDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "Deposit" */
  Deposit?: DepositGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Deposit_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Deposit_order_by[] | null
      /** filter the rows returned */
      where?: Deposit_bool_exp | null
    }
  }
  /** fetch data from the table: "DepositVault" */
  DepositVault?: DepositVaultGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: DepositVault_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: DepositVault_order_by[] | null
      /** filter the rows returned */
      where?: DepositVault_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "DepositVault" */
  DepositVault_aggregate?: DepositVault_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: DepositVault_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: DepositVault_order_by[] | null
      /** filter the rows returned */
      where?: DepositVault_bool_exp | null
    }
  }
  /** fetch data from the table: "DepositVault" using primary key columns */
  DepositVault_by_pk?: DepositVaultGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch aggregated fields from the table: "Deposit" */
  Deposit_aggregate?: Deposit_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Deposit_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Deposit_order_by[] | null
      /** filter the rows returned */
      where?: Deposit_bool_exp | null
    }
  }
  /** fetch data from the table: "Deposit" using primary key columns */
  Deposit_by_pk?: DepositGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData?: IssuanceTokenDayDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenDayData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenDayData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData_aggregate?: IssuanceTokenDayData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenDayData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenDayData_bool_exp | null
    }
  }
  /** fetch data from the table: "IssuanceTokenDayData" using primary key columns */
  IssuanceTokenDayData_by_pk?: IssuanceTokenDayDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData?: IssuanceTokenHourDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenHourData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenHourData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData_aggregate?: IssuanceTokenHourData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenHourData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenHourData_bool_exp | null
    }
  }
  /** fetch data from the table: "IssuanceTokenHourData" using primary key columns */
  IssuanceTokenHourData_by_pk?: IssuanceTokenHourDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "LinearVesting" */
  LinearVesting?: LinearVestingGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: LinearVesting_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: LinearVesting_order_by[] | null
      /** filter the rows returned */
      where?: LinearVesting_bool_exp | null
    }
  }
  /** fetch data from the table: "LinearVesting" using primary key columns */
  LinearVesting_by_pk?: LinearVestingGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "ProjectFee" */
  ProjectFee?: ProjectFeeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProjectFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProjectFee_order_by[] | null
      /** filter the rows returned */
      where?: ProjectFee_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "ProjectFee" */
  ProjectFee_aggregate?: ProjectFee_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProjectFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProjectFee_order_by[] | null
      /** filter the rows returned */
      where?: ProjectFee_bool_exp | null
    }
  }
  /** fetch data from the table: "ProjectFee" using primary key columns */
  ProjectFee_by_pk?: ProjectFeeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "ProtocolFee" */
  ProtocolFee?: ProtocolFeeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProtocolFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProtocolFee_order_by[] | null
      /** filter the rows returned */
      where?: ProtocolFee_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "ProtocolFee" */
  ProtocolFee_aggregate?: ProtocolFee_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProtocolFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProtocolFee_order_by[] | null
      /** filter the rows returned */
      where?: ProtocolFee_bool_exp | null
    }
  }
  /** fetch data from the table: "ProtocolFee" using primary key columns */
  ProtocolFee_by_pk?: ProtocolFeeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor?: StreamingPaymentProcessorGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: StreamingPaymentProcessor_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: StreamingPaymentProcessor_order_by[] | null
      /** filter the rows returned */
      where?: StreamingPaymentProcessor_bool_exp | null
    }
  }
  /** fetch data from the table: "StreamingPaymentProcessor" using primary key columns */
  StreamingPaymentProcessor_by_pk?: StreamingPaymentProcessorGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "Swap" */
  Swap?: SwapGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Swap_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Swap_order_by[] | null
      /** filter the rows returned */
      where?: Swap_bool_exp | null
    }
  }
  /** fetch data from the table: "Swap" using primary key columns */
  Swap_by_pk?: SwapGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table: "Token" */
  Token?: TokenGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Token_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Token_order_by[] | null
      /** filter the rows returned */
      where?: Token_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "Token" */
  Token_aggregate?: Token_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Token_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Token_order_by[] | null
      /** filter the rows returned */
      where?: Token_bool_exp | null
    }
  }
  /** fetch data from the table: "Token" using primary key columns */
  Token_by_pk?: TokenGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table: "Transfer" */
  Transfer?: TransferGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Transfer_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Transfer_order_by[] | null
      /** filter the rows returned */
      where?: Transfer_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "Transfer" */
  Transfer_aggregate?: Transfer_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Transfer_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Transfer_order_by[] | null
      /** filter the rows returned */
      where?: Transfer_bool_exp | null
    }
  }
  /** fetch data from the table: "Transfer" using primary key columns */
  Transfer_by_pk?: TransferGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "Workflow" */
  Workflow?: WorkflowGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Workflow_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Workflow_order_by[] | null
      /** filter the rows returned */
      where?: Workflow_bool_exp | null
    }
  }
  /** fetch data from the table: "WorkflowModule" */
  WorkflowModule?: WorkflowModuleGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: WorkflowModule_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: WorkflowModule_order_by[] | null
      /** filter the rows returned */
      where?: WorkflowModule_bool_exp | null
    }
  }
  /** fetch data from the table: "WorkflowModuleType" */
  WorkflowModuleType?: WorkflowModuleTypeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: WorkflowModuleType_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: WorkflowModuleType_order_by[] | null
      /** filter the rows returned */
      where?: WorkflowModuleType_bool_exp | null
    }
  }
  /** fetch data from the table: "WorkflowModuleType" using primary key columns */
  WorkflowModuleType_by_pk?: WorkflowModuleTypeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "WorkflowModule" using primary key columns */
  WorkflowModule_by_pk?: WorkflowModuleGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "Workflow" using primary key columns */
  Workflow_by_pk?: WorkflowGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "chain_metadata" */
  chain_metadata?: chain_metadataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: chain_metadata_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: chain_metadata_order_by[] | null
      /** filter the rows returned */
      where?: chain_metadata_bool_exp | null
    }
  }
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk?: chain_metadataGenqlSelection & {
    __args: { chain_id: Scalars['Int'] }
  }
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry?: dynamic_contract_registryGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: dynamic_contract_registry_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: dynamic_contract_registry_order_by[] | null
      /** filter the rows returned */
      where?: dynamic_contract_registry_bool_exp | null
    }
  }
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk?: dynamic_contract_registryGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data?: end_of_block_range_scanned_dataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: end_of_block_range_scanned_data_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: end_of_block_range_scanned_data_order_by[] | null
      /** filter the rows returned */
      where?: end_of_block_range_scanned_data_bool_exp | null
    }
  }
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk?: end_of_block_range_scanned_dataGenqlSelection & {
    __args: { block_number: Scalars['Int']; chain_id: Scalars['Int'] }
  }
  /** fetch data from the table: "event_sync_state" */
  event_sync_state?: event_sync_stateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: event_sync_state_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: event_sync_state_order_by[] | null
      /** filter the rows returned */
      where?: event_sync_state_bool_exp | null
    }
  }
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk?: event_sync_stateGenqlSelection & {
    __args: { chain_id: Scalars['Int'] }
  }
  /** fetch data from the table: "persisted_state" */
  persisted_state?: persisted_stateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: persisted_state_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: persisted_state_order_by[] | null
      /** filter the rows returned */
      where?: persisted_state_bool_exp | null
    }
  }
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk?: persisted_stateGenqlSelection & {
    __args: { id: Scalars['Int'] }
  }
  /** fetch data from the table: "raw_events" */
  raw_events?: raw_eventsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: raw_events_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: raw_events_order_by[] | null
      /** filter the rows returned */
      where?: raw_events_bool_exp | null
    }
  }
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: raw_eventsGenqlSelection & {
    __args: { serial: Scalars['Int'] }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "raw_events" */
export interface raw_eventsGenqlSelection {
  block_fields?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  block_hash?: boolean | number
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  contract_name?: boolean | number
  db_write_timestamp?: boolean | number
  event_id?: boolean | number
  event_name?: boolean | number
  log_index?: boolean | number
  params?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  serial?: boolean | number
  src_address?: boolean | number
  transaction_fields?:
    | {
        __args: {
          /** JSON select path */
          path?: Scalars['String'] | null
        }
      }
    | boolean
    | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to filter rows from the table "raw_events". All fields are combined with a logical 'AND'. */
export interface raw_events_bool_exp {
  _and?: raw_events_bool_exp[] | null
  _not?: raw_events_bool_exp | null
  _or?: raw_events_bool_exp[] | null
  block_fields?: jsonb_comparison_exp | null
  block_hash?: String_comparison_exp | null
  block_number?: Int_comparison_exp | null
  block_timestamp?: Int_comparison_exp | null
  chain_id?: Int_comparison_exp | null
  contract_name?: String_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  event_id?: numeric_comparison_exp | null
  event_name?: String_comparison_exp | null
  log_index?: Int_comparison_exp | null
  params?: jsonb_comparison_exp | null
  serial?: Int_comparison_exp | null
  src_address?: String_comparison_exp | null
  transaction_fields?: jsonb_comparison_exp | null
}

/** Ordering options when selecting data from "raw_events". */
export interface raw_events_order_by {
  block_fields?: order_by | null
  block_hash?: order_by | null
  block_number?: order_by | null
  block_timestamp?: order_by | null
  chain_id?: order_by | null
  contract_name?: order_by | null
  db_write_timestamp?: order_by | null
  event_id?: order_by | null
  event_name?: order_by | null
  log_index?: order_by | null
  params?: order_by | null
  serial?: order_by | null
  src_address?: order_by | null
  transaction_fields?: order_by | null
}

/** Streaming cursor of the table "raw_events" */
export interface raw_events_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: raw_events_stream_cursor_value_input
  /** cursor ordering */
  ordering?: cursor_ordering | null
}

/** Initial value of the column from where the streaming should start */
export interface raw_events_stream_cursor_value_input {
  block_fields?: Scalars['jsonb'] | null
  block_hash?: Scalars['String'] | null
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  contract_name?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  event_id?: Scalars['numeric'] | null
  event_name?: Scalars['String'] | null
  log_index?: Scalars['Int'] | null
  params?: Scalars['jsonb'] | null
  serial?: Scalars['Int'] | null
  src_address?: Scalars['String'] | null
  transaction_fields?: Scalars['jsonb'] | null
}

export interface subscription_rootGenqlSelection {
  /** fetch data from the table: "BondingCurve" */
  BondingCurve?: BondingCurveGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BondingCurve_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BondingCurve_order_by[] | null
      /** filter the rows returned */
      where?: BondingCurve_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "BondingCurve" */
  BondingCurve_aggregate?: BondingCurve_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BondingCurve_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BondingCurve_order_by[] | null
      /** filter the rows returned */
      where?: BondingCurve_bool_exp | null
    }
  }
  /** fetch data from the table: "BondingCurve" using primary key columns */
  BondingCurve_by_pk?: BondingCurveGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "BondingCurve" */
  BondingCurve_stream?: BondingCurveGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (BondingCurve_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: BondingCurve_bool_exp | null
    }
  }
  /** fetch data from the table: "Bounty" */
  Bounty?: BountyGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Bounty_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Bounty_order_by[] | null
      /** filter the rows returned */
      where?: Bounty_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyClaim" */
  BountyClaim?: BountyClaimGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyClaim_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyClaim_order_by[] | null
      /** filter the rows returned */
      where?: BountyClaim_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "BountyClaim" */
  BountyClaim_aggregate?: BountyClaim_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyClaim_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyClaim_order_by[] | null
      /** filter the rows returned */
      where?: BountyClaim_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyClaim" using primary key columns */
  BountyClaim_by_pk?: BountyClaimGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "BountyClaim" */
  BountyClaim_stream?: BountyClaimGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (BountyClaim_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: BountyClaim_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyContributor" */
  BountyContributor?: BountyContributorGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyContributor_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyContributor_order_by[] | null
      /** filter the rows returned */
      where?: BountyContributor_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyContributor" using primary key columns */
  BountyContributor_by_pk?: BountyContributorGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "BountyContributor" */
  BountyContributor_stream?: BountyContributorGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (BountyContributor_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: BountyContributor_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyModule" */
  BountyModule?: BountyModuleGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: BountyModule_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: BountyModule_order_by[] | null
      /** filter the rows returned */
      where?: BountyModule_bool_exp | null
    }
  }
  /** fetch data from the table: "BountyModule" using primary key columns */
  BountyModule_by_pk?: BountyModuleGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "BountyModule" */
  BountyModule_stream?: BountyModuleGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (BountyModule_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: BountyModule_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "Bounty" */
  Bounty_aggregate?: Bounty_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Bounty_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Bounty_order_by[] | null
      /** filter the rows returned */
      where?: Bounty_bool_exp | null
    }
  }
  /** fetch data from the table: "Bounty" using primary key columns */
  Bounty_by_pk?: BountyGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table in a streaming manner: "Bounty" */
  Bounty_stream?: BountyGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (Bounty_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: Bounty_bool_exp | null
    }
  }
  /** fetch data from the table: "CurveDayData" */
  CurveDayData?: CurveDayDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveDayData_order_by[] | null
      /** filter the rows returned */
      where?: CurveDayData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "CurveDayData" */
  CurveDayData_aggregate?: CurveDayData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveDayData_order_by[] | null
      /** filter the rows returned */
      where?: CurveDayData_bool_exp | null
    }
  }
  /** fetch data from the table: "CurveDayData" using primary key columns */
  CurveDayData_by_pk?: CurveDayDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "CurveDayData" */
  CurveDayData_stream?: CurveDayDataGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (CurveDayData_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: CurveDayData_bool_exp | null
    }
  }
  /** fetch data from the table: "CurveHourData" */
  CurveHourData?: CurveHourDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveHourData_order_by[] | null
      /** filter the rows returned */
      where?: CurveHourData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "CurveHourData" */
  CurveHourData_aggregate?: CurveHourData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: CurveHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: CurveHourData_order_by[] | null
      /** filter the rows returned */
      where?: CurveHourData_bool_exp | null
    }
  }
  /** fetch data from the table: "CurveHourData" using primary key columns */
  CurveHourData_by_pk?: CurveHourDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "CurveHourData" */
  CurveHourData_stream?: CurveHourDataGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (CurveHourData_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: CurveHourData_bool_exp | null
    }
  }
  /** fetch data from the table: "Deposit" */
  Deposit?: DepositGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Deposit_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Deposit_order_by[] | null
      /** filter the rows returned */
      where?: Deposit_bool_exp | null
    }
  }
  /** fetch data from the table: "DepositVault" */
  DepositVault?: DepositVaultGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: DepositVault_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: DepositVault_order_by[] | null
      /** filter the rows returned */
      where?: DepositVault_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "DepositVault" */
  DepositVault_aggregate?: DepositVault_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: DepositVault_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: DepositVault_order_by[] | null
      /** filter the rows returned */
      where?: DepositVault_bool_exp | null
    }
  }
  /** fetch data from the table: "DepositVault" using primary key columns */
  DepositVault_by_pk?: DepositVaultGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "DepositVault" */
  DepositVault_stream?: DepositVaultGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (DepositVault_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: DepositVault_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "Deposit" */
  Deposit_aggregate?: Deposit_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Deposit_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Deposit_order_by[] | null
      /** filter the rows returned */
      where?: Deposit_bool_exp | null
    }
  }
  /** fetch data from the table: "Deposit" using primary key columns */
  Deposit_by_pk?: DepositGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table in a streaming manner: "Deposit" */
  Deposit_stream?: DepositGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (Deposit_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: Deposit_bool_exp | null
    }
  }
  /** fetch data from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData?: IssuanceTokenDayDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenDayData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenDayData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "IssuanceTokenDayData" */
  IssuanceTokenDayData_aggregate?: IssuanceTokenDayData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenDayData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenDayData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenDayData_bool_exp | null
    }
  }
  /** fetch data from the table: "IssuanceTokenDayData" using primary key columns */
  IssuanceTokenDayData_by_pk?: IssuanceTokenDayDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "IssuanceTokenDayData" */
  IssuanceTokenDayData_stream?: IssuanceTokenDayDataGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (IssuanceTokenDayData_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: IssuanceTokenDayData_bool_exp | null
    }
  }
  /** fetch data from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData?: IssuanceTokenHourDataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenHourData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenHourData_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "IssuanceTokenHourData" */
  IssuanceTokenHourData_aggregate?: IssuanceTokenHourData_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: IssuanceTokenHourData_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: IssuanceTokenHourData_order_by[] | null
      /** filter the rows returned */
      where?: IssuanceTokenHourData_bool_exp | null
    }
  }
  /** fetch data from the table: "IssuanceTokenHourData" using primary key columns */
  IssuanceTokenHourData_by_pk?: IssuanceTokenHourDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "IssuanceTokenHourData" */
  IssuanceTokenHourData_stream?: IssuanceTokenHourDataGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (IssuanceTokenHourData_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: IssuanceTokenHourData_bool_exp | null
    }
  }
  /** fetch data from the table: "LinearVesting" */
  LinearVesting?: LinearVestingGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: LinearVesting_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: LinearVesting_order_by[] | null
      /** filter the rows returned */
      where?: LinearVesting_bool_exp | null
    }
  }
  /** fetch data from the table: "LinearVesting" using primary key columns */
  LinearVesting_by_pk?: LinearVestingGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "LinearVesting" */
  LinearVesting_stream?: LinearVestingGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (LinearVesting_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: LinearVesting_bool_exp | null
    }
  }
  /** fetch data from the table: "ProjectFee" */
  ProjectFee?: ProjectFeeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProjectFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProjectFee_order_by[] | null
      /** filter the rows returned */
      where?: ProjectFee_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "ProjectFee" */
  ProjectFee_aggregate?: ProjectFee_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProjectFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProjectFee_order_by[] | null
      /** filter the rows returned */
      where?: ProjectFee_bool_exp | null
    }
  }
  /** fetch data from the table: "ProjectFee" using primary key columns */
  ProjectFee_by_pk?: ProjectFeeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "ProjectFee" */
  ProjectFee_stream?: ProjectFeeGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (ProjectFee_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: ProjectFee_bool_exp | null
    }
  }
  /** fetch data from the table: "ProtocolFee" */
  ProtocolFee?: ProtocolFeeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProtocolFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProtocolFee_order_by[] | null
      /** filter the rows returned */
      where?: ProtocolFee_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "ProtocolFee" */
  ProtocolFee_aggregate?: ProtocolFee_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: ProtocolFee_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: ProtocolFee_order_by[] | null
      /** filter the rows returned */
      where?: ProtocolFee_bool_exp | null
    }
  }
  /** fetch data from the table: "ProtocolFee" using primary key columns */
  ProtocolFee_by_pk?: ProtocolFeeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "ProtocolFee" */
  ProtocolFee_stream?: ProtocolFeeGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (ProtocolFee_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: ProtocolFee_bool_exp | null
    }
  }
  /** fetch data from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor?: StreamingPaymentProcessorGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: StreamingPaymentProcessor_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: StreamingPaymentProcessor_order_by[] | null
      /** filter the rows returned */
      where?: StreamingPaymentProcessor_bool_exp | null
    }
  }
  /** fetch data from the table: "StreamingPaymentProcessor" using primary key columns */
  StreamingPaymentProcessor_by_pk?: StreamingPaymentProcessorGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor_stream?: StreamingPaymentProcessorGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (StreamingPaymentProcessor_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: StreamingPaymentProcessor_bool_exp | null
    }
  }
  /** fetch data from the table: "Swap" */
  Swap?: SwapGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Swap_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Swap_order_by[] | null
      /** filter the rows returned */
      where?: Swap_bool_exp | null
    }
  }
  /** fetch data from the table: "Swap" using primary key columns */
  Swap_by_pk?: SwapGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table in a streaming manner: "Swap" */
  Swap_stream?: SwapGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (Swap_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: Swap_bool_exp | null
    }
  }
  /** fetch data from the table: "Token" */
  Token?: TokenGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Token_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Token_order_by[] | null
      /** filter the rows returned */
      where?: Token_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "Token" */
  Token_aggregate?: Token_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Token_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Token_order_by[] | null
      /** filter the rows returned */
      where?: Token_bool_exp | null
    }
  }
  /** fetch data from the table: "Token" using primary key columns */
  Token_by_pk?: TokenGenqlSelection & { __args: { id: Scalars['String'] } }
  /** fetch data from the table in a streaming manner: "Token" */
  Token_stream?: TokenGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (Token_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: Token_bool_exp | null
    }
  }
  /** fetch data from the table: "Transfer" */
  Transfer?: TransferGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Transfer_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Transfer_order_by[] | null
      /** filter the rows returned */
      where?: Transfer_bool_exp | null
    }
  }
  /** fetch aggregated fields from the table: "Transfer" */
  Transfer_aggregate?: Transfer_aggregateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Transfer_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Transfer_order_by[] | null
      /** filter the rows returned */
      where?: Transfer_bool_exp | null
    }
  }
  /** fetch data from the table: "Transfer" using primary key columns */
  Transfer_by_pk?: TransferGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "Transfer" */
  Transfer_stream?: TransferGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (Transfer_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: Transfer_bool_exp | null
    }
  }
  /** fetch data from the table: "Workflow" */
  Workflow?: WorkflowGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: Workflow_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: Workflow_order_by[] | null
      /** filter the rows returned */
      where?: Workflow_bool_exp | null
    }
  }
  /** fetch data from the table: "WorkflowModule" */
  WorkflowModule?: WorkflowModuleGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: WorkflowModule_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: WorkflowModule_order_by[] | null
      /** filter the rows returned */
      where?: WorkflowModule_bool_exp | null
    }
  }
  /** fetch data from the table: "WorkflowModuleType" */
  WorkflowModuleType?: WorkflowModuleTypeGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: WorkflowModuleType_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: WorkflowModuleType_order_by[] | null
      /** filter the rows returned */
      where?: WorkflowModuleType_bool_exp | null
    }
  }
  /** fetch data from the table: "WorkflowModuleType" using primary key columns */
  WorkflowModuleType_by_pk?: WorkflowModuleTypeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "WorkflowModuleType" */
  WorkflowModuleType_stream?: WorkflowModuleTypeGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (WorkflowModuleType_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: WorkflowModuleType_bool_exp | null
    }
  }
  /** fetch data from the table: "WorkflowModule" using primary key columns */
  WorkflowModule_by_pk?: WorkflowModuleGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "WorkflowModule" */
  WorkflowModule_stream?: WorkflowModuleGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (WorkflowModule_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: WorkflowModule_bool_exp | null
    }
  }
  /** fetch data from the table: "Workflow" using primary key columns */
  Workflow_by_pk?: WorkflowGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "Workflow" */
  Workflow_stream?: WorkflowGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (Workflow_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: Workflow_bool_exp | null
    }
  }
  /** fetch data from the table: "chain_metadata" */
  chain_metadata?: chain_metadataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: chain_metadata_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: chain_metadata_order_by[] | null
      /** filter the rows returned */
      where?: chain_metadata_bool_exp | null
    }
  }
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk?: chain_metadataGenqlSelection & {
    __args: { chain_id: Scalars['Int'] }
  }
  /** fetch data from the table in a streaming manner: "chain_metadata" */
  chain_metadata_stream?: chain_metadataGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (chain_metadata_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: chain_metadata_bool_exp | null
    }
  }
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry?: dynamic_contract_registryGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: dynamic_contract_registry_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: dynamic_contract_registry_order_by[] | null
      /** filter the rows returned */
      where?: dynamic_contract_registry_bool_exp | null
    }
  }
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk?: dynamic_contract_registryGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch data from the table in a streaming manner: "dynamic_contract_registry" */
  dynamic_contract_registry_stream?: dynamic_contract_registryGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (dynamic_contract_registry_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: dynamic_contract_registry_bool_exp | null
    }
  }
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data?: end_of_block_range_scanned_dataGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: end_of_block_range_scanned_data_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: end_of_block_range_scanned_data_order_by[] | null
      /** filter the rows returned */
      where?: end_of_block_range_scanned_data_bool_exp | null
    }
  }
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk?: end_of_block_range_scanned_dataGenqlSelection & {
    __args: { block_number: Scalars['Int']; chain_id: Scalars['Int'] }
  }
  /** fetch data from the table in a streaming manner: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_stream?: end_of_block_range_scanned_dataGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (end_of_block_range_scanned_data_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: end_of_block_range_scanned_data_bool_exp | null
    }
  }
  /** fetch data from the table: "event_sync_state" */
  event_sync_state?: event_sync_stateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: event_sync_state_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: event_sync_state_order_by[] | null
      /** filter the rows returned */
      where?: event_sync_state_bool_exp | null
    }
  }
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk?: event_sync_stateGenqlSelection & {
    __args: { chain_id: Scalars['Int'] }
  }
  /** fetch data from the table in a streaming manner: "event_sync_state" */
  event_sync_state_stream?: event_sync_stateGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (event_sync_state_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: event_sync_state_bool_exp | null
    }
  }
  /** fetch data from the table: "persisted_state" */
  persisted_state?: persisted_stateGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: persisted_state_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: persisted_state_order_by[] | null
      /** filter the rows returned */
      where?: persisted_state_bool_exp | null
    }
  }
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk?: persisted_stateGenqlSelection & {
    __args: { id: Scalars['Int'] }
  }
  /** fetch data from the table in a streaming manner: "persisted_state" */
  persisted_state_stream?: persisted_stateGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (persisted_state_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: persisted_state_bool_exp | null
    }
  }
  /** fetch data from the table: "raw_events" */
  raw_events?: raw_eventsGenqlSelection & {
    __args?: {
      /** distinct select on columns */
      distinct_on?: raw_events_select_column[] | null
      /** limit the number of rows returned */
      limit?: Scalars['Int'] | null
      /** skip the first n rows. Use only with order_by */
      offset?: Scalars['Int'] | null
      /** sort the rows by one or more columns */
      order_by?: raw_events_order_by[] | null
      /** filter the rows returned */
      where?: raw_events_bool_exp | null
    }
  }
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: raw_eventsGenqlSelection & {
    __args: { serial: Scalars['Int'] }
  }
  /** fetch data from the table in a streaming manner: "raw_events" */
  raw_events_stream?: raw_eventsGenqlSelection & {
    __args: {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int']
      /** cursor to stream the results returned by the query */
      cursor: (raw_events_stream_cursor_input | null)[]
      /** filter the rows returned */
      where?: raw_events_bool_exp | null
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Boolean expression to compare columns of type "swaptype". All fields are combined with logical 'AND'. */
export interface swaptype_comparison_exp {
  _eq?: Scalars['swaptype'] | null
  _gt?: Scalars['swaptype'] | null
  _gte?: Scalars['swaptype'] | null
  _in?: Scalars['swaptype'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['swaptype'] | null
  _lte?: Scalars['swaptype'] | null
  _neq?: Scalars['swaptype'] | null
  _nin?: Scalars['swaptype'][] | null
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {
  _eq?: Scalars['timestamp'] | null
  _gt?: Scalars['timestamp'] | null
  _gte?: Scalars['timestamp'] | null
  _in?: Scalars['timestamp'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['timestamp'] | null
  _lte?: Scalars['timestamp'] | null
  _neq?: Scalars['timestamp'] | null
  _nin?: Scalars['timestamp'][] | null
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: Scalars['timestamptz'] | null
  _gt?: Scalars['timestamptz'] | null
  _gte?: Scalars['timestamptz'] | null
  _in?: Scalars['timestamptz'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['timestamptz'] | null
  _lte?: Scalars['timestamptz'] | null
  _neq?: Scalars['timestamptz'] | null
  _nin?: Scalars['timestamptz'][] | null
}

/** Boolean expression to compare columns of type "vestingstatus". All fields are combined with logical 'AND'. */
export interface vestingstatus_comparison_exp {
  _eq?: Scalars['vestingstatus'] | null
  _gt?: Scalars['vestingstatus'] | null
  _gte?: Scalars['vestingstatus'] | null
  _in?: Scalars['vestingstatus'][] | null
  _is_null?: Scalars['Boolean'] | null
  _lt?: Scalars['vestingstatus'] | null
  _lte?: Scalars['vestingstatus'] | null
  _neq?: Scalars['vestingstatus'] | null
  _nin?: Scalars['vestingstatus'][] | null
}

export type QueryGenqlSelection = query_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection

const BondingCurve_possibleTypes: string[] = ['BondingCurve']
export const isBondingCurve = (
  obj?: { __typename?: any } | null
): obj is BondingCurve => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve"')
  return BondingCurve_possibleTypes.includes(obj.__typename)
}

const BondingCurve_aggregate_possibleTypes: string[] = [
  'BondingCurve_aggregate',
]
export const isBondingCurve_aggregate = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_aggregate"')
  return BondingCurve_aggregate_possibleTypes.includes(obj.__typename)
}

const BondingCurve_aggregate_fields_possibleTypes: string[] = [
  'BondingCurve_aggregate_fields',
]
export const isBondingCurve_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBondingCurve_aggregate_fields"'
    )
  return BondingCurve_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_avg_fields_possibleTypes: string[] = [
  'BondingCurve_avg_fields',
]
export const isBondingCurve_avg_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_avg_fields"')
  return BondingCurve_avg_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_max_fields_possibleTypes: string[] = [
  'BondingCurve_max_fields',
]
export const isBondingCurve_max_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_max_fields"')
  return BondingCurve_max_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_min_fields_possibleTypes: string[] = [
  'BondingCurve_min_fields',
]
export const isBondingCurve_min_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_min_fields"')
  return BondingCurve_min_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_stddev_fields_possibleTypes: string[] = [
  'BondingCurve_stddev_fields',
]
export const isBondingCurve_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_stddev_fields"')
  return BondingCurve_stddev_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_stddev_pop_fields_possibleTypes: string[] = [
  'BondingCurve_stddev_pop_fields',
]
export const isBondingCurve_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBondingCurve_stddev_pop_fields"'
    )
  return BondingCurve_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_stddev_samp_fields_possibleTypes: string[] = [
  'BondingCurve_stddev_samp_fields',
]
export const isBondingCurve_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBondingCurve_stddev_samp_fields"'
    )
  return BondingCurve_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_sum_fields_possibleTypes: string[] = [
  'BondingCurve_sum_fields',
]
export const isBondingCurve_sum_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_sum_fields"')
  return BondingCurve_sum_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_var_pop_fields_possibleTypes: string[] = [
  'BondingCurve_var_pop_fields',
]
export const isBondingCurve_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_var_pop_fields"')
  return BondingCurve_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_var_samp_fields_possibleTypes: string[] = [
  'BondingCurve_var_samp_fields',
]
export const isBondingCurve_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_var_samp_fields"')
  return BondingCurve_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const BondingCurve_variance_fields_possibleTypes: string[] = [
  'BondingCurve_variance_fields',
]
export const isBondingCurve_variance_fields = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBondingCurve_variance_fields"')
  return BondingCurve_variance_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_possibleTypes: string[] = ['Bounty']
export const isBounty = (obj?: { __typename?: any } | null): obj is Bounty => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBounty"')
  return Bounty_possibleTypes.includes(obj.__typename)
}

const BountyClaim_possibleTypes: string[] = ['BountyClaim']
export const isBountyClaim = (
  obj?: { __typename?: any } | null
): obj is BountyClaim => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyClaim"')
  return BountyClaim_possibleTypes.includes(obj.__typename)
}

const BountyClaim_aggregate_possibleTypes: string[] = ['BountyClaim_aggregate']
export const isBountyClaim_aggregate = (
  obj?: { __typename?: any } | null
): obj is BountyClaim_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyClaim_aggregate"')
  return BountyClaim_aggregate_possibleTypes.includes(obj.__typename)
}

const BountyClaim_aggregate_fields_possibleTypes: string[] = [
  'BountyClaim_aggregate_fields',
]
export const isBountyClaim_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is BountyClaim_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyClaim_aggregate_fields"')
  return BountyClaim_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const BountyClaim_max_fields_possibleTypes: string[] = [
  'BountyClaim_max_fields',
]
export const isBountyClaim_max_fields = (
  obj?: { __typename?: any } | null
): obj is BountyClaim_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyClaim_max_fields"')
  return BountyClaim_max_fields_possibleTypes.includes(obj.__typename)
}

const BountyClaim_min_fields_possibleTypes: string[] = [
  'BountyClaim_min_fields',
]
export const isBountyClaim_min_fields = (
  obj?: { __typename?: any } | null
): obj is BountyClaim_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyClaim_min_fields"')
  return BountyClaim_min_fields_possibleTypes.includes(obj.__typename)
}

const BountyContributor_possibleTypes: string[] = ['BountyContributor']
export const isBountyContributor = (
  obj?: { __typename?: any } | null
): obj is BountyContributor => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyContributor"')
  return BountyContributor_possibleTypes.includes(obj.__typename)
}

const BountyModule_possibleTypes: string[] = ['BountyModule']
export const isBountyModule = (
  obj?: { __typename?: any } | null
): obj is BountyModule => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule"')
  return BountyModule_possibleTypes.includes(obj.__typename)
}

const Bounty_aggregate_possibleTypes: string[] = ['Bounty_aggregate']
export const isBounty_aggregate = (
  obj?: { __typename?: any } | null
): obj is Bounty_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_aggregate"')
  return Bounty_aggregate_possibleTypes.includes(obj.__typename)
}

const Bounty_aggregate_fields_possibleTypes: string[] = [
  'Bounty_aggregate_fields',
]
export const isBounty_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_aggregate_fields"')
  return Bounty_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_avg_fields_possibleTypes: string[] = ['Bounty_avg_fields']
export const isBounty_avg_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_avg_fields"')
  return Bounty_avg_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_max_fields_possibleTypes: string[] = ['Bounty_max_fields']
export const isBounty_max_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_max_fields"')
  return Bounty_max_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_min_fields_possibleTypes: string[] = ['Bounty_min_fields']
export const isBounty_min_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_min_fields"')
  return Bounty_min_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_stddev_fields_possibleTypes: string[] = ['Bounty_stddev_fields']
export const isBounty_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_stddev_fields"')
  return Bounty_stddev_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_stddev_pop_fields_possibleTypes: string[] = [
  'Bounty_stddev_pop_fields',
]
export const isBounty_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_stddev_pop_fields"')
  return Bounty_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_stddev_samp_fields_possibleTypes: string[] = [
  'Bounty_stddev_samp_fields',
]
export const isBounty_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_stddev_samp_fields"')
  return Bounty_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_sum_fields_possibleTypes: string[] = ['Bounty_sum_fields']
export const isBounty_sum_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_sum_fields"')
  return Bounty_sum_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_var_pop_fields_possibleTypes: string[] = ['Bounty_var_pop_fields']
export const isBounty_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_var_pop_fields"')
  return Bounty_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_var_samp_fields_possibleTypes: string[] = [
  'Bounty_var_samp_fields',
]
export const isBounty_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_var_samp_fields"')
  return Bounty_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const Bounty_variance_fields_possibleTypes: string[] = [
  'Bounty_variance_fields',
]
export const isBounty_variance_fields = (
  obj?: { __typename?: any } | null
): obj is Bounty_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_variance_fields"')
  return Bounty_variance_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_possibleTypes: string[] = ['CurveDayData']
export const isCurveDayData = (
  obj?: { __typename?: any } | null
): obj is CurveDayData => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData"')
  return CurveDayData_possibleTypes.includes(obj.__typename)
}

const CurveDayData_aggregate_possibleTypes: string[] = [
  'CurveDayData_aggregate',
]
export const isCurveDayData_aggregate = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_aggregate"')
  return CurveDayData_aggregate_possibleTypes.includes(obj.__typename)
}

const CurveDayData_aggregate_fields_possibleTypes: string[] = [
  'CurveDayData_aggregate_fields',
]
export const isCurveDayData_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveDayData_aggregate_fields"'
    )
  return CurveDayData_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_avg_fields_possibleTypes: string[] = [
  'CurveDayData_avg_fields',
]
export const isCurveDayData_avg_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_avg_fields"')
  return CurveDayData_avg_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_max_fields_possibleTypes: string[] = [
  'CurveDayData_max_fields',
]
export const isCurveDayData_max_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_max_fields"')
  return CurveDayData_max_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_min_fields_possibleTypes: string[] = [
  'CurveDayData_min_fields',
]
export const isCurveDayData_min_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_min_fields"')
  return CurveDayData_min_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_stddev_fields_possibleTypes: string[] = [
  'CurveDayData_stddev_fields',
]
export const isCurveDayData_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_stddev_fields"')
  return CurveDayData_stddev_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_stddev_pop_fields_possibleTypes: string[] = [
  'CurveDayData_stddev_pop_fields',
]
export const isCurveDayData_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveDayData_stddev_pop_fields"'
    )
  return CurveDayData_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_stddev_samp_fields_possibleTypes: string[] = [
  'CurveDayData_stddev_samp_fields',
]
export const isCurveDayData_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveDayData_stddev_samp_fields"'
    )
  return CurveDayData_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_sum_fields_possibleTypes: string[] = [
  'CurveDayData_sum_fields',
]
export const isCurveDayData_sum_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_sum_fields"')
  return CurveDayData_sum_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_var_pop_fields_possibleTypes: string[] = [
  'CurveDayData_var_pop_fields',
]
export const isCurveDayData_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_var_pop_fields"')
  return CurveDayData_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_var_samp_fields_possibleTypes: string[] = [
  'CurveDayData_var_samp_fields',
]
export const isCurveDayData_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_var_samp_fields"')
  return CurveDayData_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const CurveDayData_variance_fields_possibleTypes: string[] = [
  'CurveDayData_variance_fields',
]
export const isCurveDayData_variance_fields = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveDayData_variance_fields"')
  return CurveDayData_variance_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_possibleTypes: string[] = ['CurveHourData']
export const isCurveHourData = (
  obj?: { __typename?: any } | null
): obj is CurveHourData => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData"')
  return CurveHourData_possibleTypes.includes(obj.__typename)
}

const CurveHourData_aggregate_possibleTypes: string[] = [
  'CurveHourData_aggregate',
]
export const isCurveHourData_aggregate = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData_aggregate"')
  return CurveHourData_aggregate_possibleTypes.includes(obj.__typename)
}

const CurveHourData_aggregate_fields_possibleTypes: string[] = [
  'CurveHourData_aggregate_fields',
]
export const isCurveHourData_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveHourData_aggregate_fields"'
    )
  return CurveHourData_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_avg_fields_possibleTypes: string[] = [
  'CurveHourData_avg_fields',
]
export const isCurveHourData_avg_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData_avg_fields"')
  return CurveHourData_avg_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_max_fields_possibleTypes: string[] = [
  'CurveHourData_max_fields',
]
export const isCurveHourData_max_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData_max_fields"')
  return CurveHourData_max_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_min_fields_possibleTypes: string[] = [
  'CurveHourData_min_fields',
]
export const isCurveHourData_min_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData_min_fields"')
  return CurveHourData_min_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_stddev_fields_possibleTypes: string[] = [
  'CurveHourData_stddev_fields',
]
export const isCurveHourData_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData_stddev_fields"')
  return CurveHourData_stddev_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_stddev_pop_fields_possibleTypes: string[] = [
  'CurveHourData_stddev_pop_fields',
]
export const isCurveHourData_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveHourData_stddev_pop_fields"'
    )
  return CurveHourData_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_stddev_samp_fields_possibleTypes: string[] = [
  'CurveHourData_stddev_samp_fields',
]
export const isCurveHourData_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveHourData_stddev_samp_fields"'
    )
  return CurveHourData_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_sum_fields_possibleTypes: string[] = [
  'CurveHourData_sum_fields',
]
export const isCurveHourData_sum_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData_sum_fields"')
  return CurveHourData_sum_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_var_pop_fields_possibleTypes: string[] = [
  'CurveHourData_var_pop_fields',
]
export const isCurveHourData_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isCurveHourData_var_pop_fields"')
  return CurveHourData_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_var_samp_fields_possibleTypes: string[] = [
  'CurveHourData_var_samp_fields',
]
export const isCurveHourData_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveHourData_var_samp_fields"'
    )
  return CurveHourData_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const CurveHourData_variance_fields_possibleTypes: string[] = [
  'CurveHourData_variance_fields',
]
export const isCurveHourData_variance_fields = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveHourData_variance_fields"'
    )
  return CurveHourData_variance_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_possibleTypes: string[] = ['Deposit']
export const isDeposit = (
  obj?: { __typename?: any } | null
): obj is Deposit => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDeposit"')
  return Deposit_possibleTypes.includes(obj.__typename)
}

const DepositVault_possibleTypes: string[] = ['DepositVault']
export const isDepositVault = (
  obj?: { __typename?: any } | null
): obj is DepositVault => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault"')
  return DepositVault_possibleTypes.includes(obj.__typename)
}

const DepositVault_aggregate_possibleTypes: string[] = [
  'DepositVault_aggregate',
]
export const isDepositVault_aggregate = (
  obj?: { __typename?: any } | null
): obj is DepositVault_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_aggregate"')
  return DepositVault_aggregate_possibleTypes.includes(obj.__typename)
}

const DepositVault_aggregate_fields_possibleTypes: string[] = [
  'DepositVault_aggregate_fields',
]
export const isDepositVault_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isDepositVault_aggregate_fields"'
    )
  return DepositVault_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_avg_fields_possibleTypes: string[] = [
  'DepositVault_avg_fields',
]
export const isDepositVault_avg_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_avg_fields"')
  return DepositVault_avg_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_max_fields_possibleTypes: string[] = [
  'DepositVault_max_fields',
]
export const isDepositVault_max_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_max_fields"')
  return DepositVault_max_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_min_fields_possibleTypes: string[] = [
  'DepositVault_min_fields',
]
export const isDepositVault_min_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_min_fields"')
  return DepositVault_min_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_stddev_fields_possibleTypes: string[] = [
  'DepositVault_stddev_fields',
]
export const isDepositVault_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_stddev_fields"')
  return DepositVault_stddev_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_stddev_pop_fields_possibleTypes: string[] = [
  'DepositVault_stddev_pop_fields',
]
export const isDepositVault_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isDepositVault_stddev_pop_fields"'
    )
  return DepositVault_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_stddev_samp_fields_possibleTypes: string[] = [
  'DepositVault_stddev_samp_fields',
]
export const isDepositVault_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isDepositVault_stddev_samp_fields"'
    )
  return DepositVault_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_sum_fields_possibleTypes: string[] = [
  'DepositVault_sum_fields',
]
export const isDepositVault_sum_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_sum_fields"')
  return DepositVault_sum_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_var_pop_fields_possibleTypes: string[] = [
  'DepositVault_var_pop_fields',
]
export const isDepositVault_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_var_pop_fields"')
  return DepositVault_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_var_samp_fields_possibleTypes: string[] = [
  'DepositVault_var_samp_fields',
]
export const isDepositVault_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_var_samp_fields"')
  return DepositVault_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const DepositVault_variance_fields_possibleTypes: string[] = [
  'DepositVault_variance_fields',
]
export const isDepositVault_variance_fields = (
  obj?: { __typename?: any } | null
): obj is DepositVault_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDepositVault_variance_fields"')
  return DepositVault_variance_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_aggregate_possibleTypes: string[] = ['Deposit_aggregate']
export const isDeposit_aggregate = (
  obj?: { __typename?: any } | null
): obj is Deposit_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_aggregate"')
  return Deposit_aggregate_possibleTypes.includes(obj.__typename)
}

const Deposit_aggregate_fields_possibleTypes: string[] = [
  'Deposit_aggregate_fields',
]
export const isDeposit_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_aggregate_fields"')
  return Deposit_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_avg_fields_possibleTypes: string[] = ['Deposit_avg_fields']
export const isDeposit_avg_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_avg_fields"')
  return Deposit_avg_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_max_fields_possibleTypes: string[] = ['Deposit_max_fields']
export const isDeposit_max_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_max_fields"')
  return Deposit_max_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_min_fields_possibleTypes: string[] = ['Deposit_min_fields']
export const isDeposit_min_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_min_fields"')
  return Deposit_min_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_stddev_fields_possibleTypes: string[] = ['Deposit_stddev_fields']
export const isDeposit_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_stddev_fields"')
  return Deposit_stddev_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_stddev_pop_fields_possibleTypes: string[] = [
  'Deposit_stddev_pop_fields',
]
export const isDeposit_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_stddev_pop_fields"')
  return Deposit_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_stddev_samp_fields_possibleTypes: string[] = [
  'Deposit_stddev_samp_fields',
]
export const isDeposit_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_stddev_samp_fields"')
  return Deposit_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_sum_fields_possibleTypes: string[] = ['Deposit_sum_fields']
export const isDeposit_sum_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_sum_fields"')
  return Deposit_sum_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_var_pop_fields_possibleTypes: string[] = [
  'Deposit_var_pop_fields',
]
export const isDeposit_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_var_pop_fields"')
  return Deposit_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_var_samp_fields_possibleTypes: string[] = [
  'Deposit_var_samp_fields',
]
export const isDeposit_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_var_samp_fields"')
  return Deposit_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const Deposit_variance_fields_possibleTypes: string[] = [
  'Deposit_variance_fields',
]
export const isDeposit_variance_fields = (
  obj?: { __typename?: any } | null
): obj is Deposit_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_variance_fields"')
  return Deposit_variance_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenDayData_possibleTypes: string[] = ['IssuanceTokenDayData']
export const isIssuanceTokenDayData = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isIssuanceTokenDayData"')
  return IssuanceTokenDayData_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenDayData_aggregate_possibleTypes: string[] = [
  'IssuanceTokenDayData_aggregate',
]
export const isIssuanceTokenDayData_aggregate = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_aggregate => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_aggregate"'
    )
  return IssuanceTokenDayData_aggregate_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenDayData_aggregate_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_aggregate_fields',
]
export const isIssuanceTokenDayData_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_aggregate_fields"'
    )
  return IssuanceTokenDayData_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenDayData_avg_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_avg_fields',
]
export const isIssuanceTokenDayData_avg_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_avg_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_avg_fields"'
    )
  return IssuanceTokenDayData_avg_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenDayData_max_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_max_fields',
]
export const isIssuanceTokenDayData_max_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_max_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_max_fields"'
    )
  return IssuanceTokenDayData_max_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenDayData_min_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_min_fields',
]
export const isIssuanceTokenDayData_min_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_min_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_min_fields"'
    )
  return IssuanceTokenDayData_min_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenDayData_stddev_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_stddev_fields',
]
export const isIssuanceTokenDayData_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_stddev_fields"'
    )
  return IssuanceTokenDayData_stddev_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenDayData_stddev_pop_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_stddev_pop_fields',
]
export const isIssuanceTokenDayData_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_stddev_pop_fields"'
    )
  return IssuanceTokenDayData_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenDayData_stddev_samp_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_stddev_samp_fields',
]
export const isIssuanceTokenDayData_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_stddev_samp_fields"'
    )
  return IssuanceTokenDayData_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenDayData_sum_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_sum_fields',
]
export const isIssuanceTokenDayData_sum_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_sum_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_sum_fields"'
    )
  return IssuanceTokenDayData_sum_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenDayData_var_pop_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_var_pop_fields',
]
export const isIssuanceTokenDayData_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_var_pop_fields"'
    )
  return IssuanceTokenDayData_var_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenDayData_var_samp_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_var_samp_fields',
]
export const isIssuanceTokenDayData_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_var_samp_fields"'
    )
  return IssuanceTokenDayData_var_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenDayData_variance_fields_possibleTypes: string[] = [
  'IssuanceTokenDayData_variance_fields',
]
export const isIssuanceTokenDayData_variance_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_variance_fields"'
    )
  return IssuanceTokenDayData_variance_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenHourData_possibleTypes: string[] = ['IssuanceTokenHourData']
export const isIssuanceTokenHourData = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isIssuanceTokenHourData"')
  return IssuanceTokenHourData_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenHourData_aggregate_possibleTypes: string[] = [
  'IssuanceTokenHourData_aggregate',
]
export const isIssuanceTokenHourData_aggregate = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_aggregate => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_aggregate"'
    )
  return IssuanceTokenHourData_aggregate_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenHourData_aggregate_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_aggregate_fields',
]
export const isIssuanceTokenHourData_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_aggregate_fields"'
    )
  return IssuanceTokenHourData_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenHourData_avg_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_avg_fields',
]
export const isIssuanceTokenHourData_avg_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_avg_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_avg_fields"'
    )
  return IssuanceTokenHourData_avg_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenHourData_max_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_max_fields',
]
export const isIssuanceTokenHourData_max_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_max_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_max_fields"'
    )
  return IssuanceTokenHourData_max_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenHourData_min_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_min_fields',
]
export const isIssuanceTokenHourData_min_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_min_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_min_fields"'
    )
  return IssuanceTokenHourData_min_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenHourData_stddev_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_stddev_fields',
]
export const isIssuanceTokenHourData_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_stddev_fields"'
    )
  return IssuanceTokenHourData_stddev_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenHourData_stddev_pop_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_stddev_pop_fields',
]
export const isIssuanceTokenHourData_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_stddev_pop_fields"'
    )
  return IssuanceTokenHourData_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenHourData_stddev_samp_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_stddev_samp_fields',
]
export const isIssuanceTokenHourData_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_stddev_samp_fields"'
    )
  return IssuanceTokenHourData_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenHourData_sum_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_sum_fields',
]
export const isIssuanceTokenHourData_sum_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_sum_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_sum_fields"'
    )
  return IssuanceTokenHourData_sum_fields_possibleTypes.includes(obj.__typename)
}

const IssuanceTokenHourData_var_pop_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_var_pop_fields',
]
export const isIssuanceTokenHourData_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_var_pop_fields"'
    )
  return IssuanceTokenHourData_var_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenHourData_var_samp_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_var_samp_fields',
]
export const isIssuanceTokenHourData_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_var_samp_fields"'
    )
  return IssuanceTokenHourData_var_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const IssuanceTokenHourData_variance_fields_possibleTypes: string[] = [
  'IssuanceTokenHourData_variance_fields',
]
export const isIssuanceTokenHourData_variance_fields = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_variance_fields"'
    )
  return IssuanceTokenHourData_variance_fields_possibleTypes.includes(
    obj.__typename
  )
}

const LinearVesting_possibleTypes: string[] = ['LinearVesting']
export const isLinearVesting = (
  obj?: { __typename?: any } | null
): obj is LinearVesting => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting"')
  return LinearVesting_possibleTypes.includes(obj.__typename)
}

const ProjectFee_possibleTypes: string[] = ['ProjectFee']
export const isProjectFee = (
  obj?: { __typename?: any } | null
): obj is ProjectFee => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee"')
  return ProjectFee_possibleTypes.includes(obj.__typename)
}

const ProjectFee_aggregate_possibleTypes: string[] = ['ProjectFee_aggregate']
export const isProjectFee_aggregate = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_aggregate"')
  return ProjectFee_aggregate_possibleTypes.includes(obj.__typename)
}

const ProjectFee_aggregate_fields_possibleTypes: string[] = [
  'ProjectFee_aggregate_fields',
]
export const isProjectFee_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_aggregate_fields"')
  return ProjectFee_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_avg_fields_possibleTypes: string[] = ['ProjectFee_avg_fields']
export const isProjectFee_avg_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_avg_fields"')
  return ProjectFee_avg_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_max_fields_possibleTypes: string[] = ['ProjectFee_max_fields']
export const isProjectFee_max_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_max_fields"')
  return ProjectFee_max_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_min_fields_possibleTypes: string[] = ['ProjectFee_min_fields']
export const isProjectFee_min_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_min_fields"')
  return ProjectFee_min_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_stddev_fields_possibleTypes: string[] = [
  'ProjectFee_stddev_fields',
]
export const isProjectFee_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_stddev_fields"')
  return ProjectFee_stddev_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_stddev_pop_fields_possibleTypes: string[] = [
  'ProjectFee_stddev_pop_fields',
]
export const isProjectFee_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_stddev_pop_fields"')
  return ProjectFee_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_stddev_samp_fields_possibleTypes: string[] = [
  'ProjectFee_stddev_samp_fields',
]
export const isProjectFee_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isProjectFee_stddev_samp_fields"'
    )
  return ProjectFee_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_sum_fields_possibleTypes: string[] = ['ProjectFee_sum_fields']
export const isProjectFee_sum_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_sum_fields"')
  return ProjectFee_sum_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_var_pop_fields_possibleTypes: string[] = [
  'ProjectFee_var_pop_fields',
]
export const isProjectFee_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_var_pop_fields"')
  return ProjectFee_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_var_samp_fields_possibleTypes: string[] = [
  'ProjectFee_var_samp_fields',
]
export const isProjectFee_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_var_samp_fields"')
  return ProjectFee_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const ProjectFee_variance_fields_possibleTypes: string[] = [
  'ProjectFee_variance_fields',
]
export const isProjectFee_variance_fields = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_variance_fields"')
  return ProjectFee_variance_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_possibleTypes: string[] = ['ProtocolFee']
export const isProtocolFee = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee"')
  return ProtocolFee_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_aggregate_possibleTypes: string[] = ['ProtocolFee_aggregate']
export const isProtocolFee_aggregate = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_aggregate"')
  return ProtocolFee_aggregate_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_aggregate_fields_possibleTypes: string[] = [
  'ProtocolFee_aggregate_fields',
]
export const isProtocolFee_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_aggregate_fields"')
  return ProtocolFee_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_avg_fields_possibleTypes: string[] = [
  'ProtocolFee_avg_fields',
]
export const isProtocolFee_avg_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_avg_fields"')
  return ProtocolFee_avg_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_max_fields_possibleTypes: string[] = [
  'ProtocolFee_max_fields',
]
export const isProtocolFee_max_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_max_fields"')
  return ProtocolFee_max_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_min_fields_possibleTypes: string[] = [
  'ProtocolFee_min_fields',
]
export const isProtocolFee_min_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_min_fields"')
  return ProtocolFee_min_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_stddev_fields_possibleTypes: string[] = [
  'ProtocolFee_stddev_fields',
]
export const isProtocolFee_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_stddev_fields"')
  return ProtocolFee_stddev_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_stddev_pop_fields_possibleTypes: string[] = [
  'ProtocolFee_stddev_pop_fields',
]
export const isProtocolFee_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isProtocolFee_stddev_pop_fields"'
    )
  return ProtocolFee_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_stddev_samp_fields_possibleTypes: string[] = [
  'ProtocolFee_stddev_samp_fields',
]
export const isProtocolFee_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isProtocolFee_stddev_samp_fields"'
    )
  return ProtocolFee_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_sum_fields_possibleTypes: string[] = [
  'ProtocolFee_sum_fields',
]
export const isProtocolFee_sum_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_sum_fields"')
  return ProtocolFee_sum_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_var_pop_fields_possibleTypes: string[] = [
  'ProtocolFee_var_pop_fields',
]
export const isProtocolFee_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_var_pop_fields"')
  return ProtocolFee_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_var_samp_fields_possibleTypes: string[] = [
  'ProtocolFee_var_samp_fields',
]
export const isProtocolFee_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_var_samp_fields"')
  return ProtocolFee_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const ProtocolFee_variance_fields_possibleTypes: string[] = [
  'ProtocolFee_variance_fields',
]
export const isProtocolFee_variance_fields = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProtocolFee_variance_fields"')
  return ProtocolFee_variance_fields_possibleTypes.includes(obj.__typename)
}

const StreamingPaymentProcessor_possibleTypes: string[] = [
  'StreamingPaymentProcessor',
]
export const isStreamingPaymentProcessor = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isStreamingPaymentProcessor"')
  return StreamingPaymentProcessor_possibleTypes.includes(obj.__typename)
}

const Swap_possibleTypes: string[] = ['Swap']
export const isSwap = (obj?: { __typename?: any } | null): obj is Swap => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}

const Token_possibleTypes: string[] = ['Token']
export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}

const Token_aggregate_possibleTypes: string[] = ['Token_aggregate']
export const isToken_aggregate = (
  obj?: { __typename?: any } | null
): obj is Token_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_aggregate"')
  return Token_aggregate_possibleTypes.includes(obj.__typename)
}

const Token_aggregate_fields_possibleTypes: string[] = [
  'Token_aggregate_fields',
]
export const isToken_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is Token_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_aggregate_fields"')
  return Token_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const Token_avg_fields_possibleTypes: string[] = ['Token_avg_fields']
export const isToken_avg_fields = (
  obj?: { __typename?: any } | null
): obj is Token_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_avg_fields"')
  return Token_avg_fields_possibleTypes.includes(obj.__typename)
}

const Token_max_fields_possibleTypes: string[] = ['Token_max_fields']
export const isToken_max_fields = (
  obj?: { __typename?: any } | null
): obj is Token_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_max_fields"')
  return Token_max_fields_possibleTypes.includes(obj.__typename)
}

const Token_min_fields_possibleTypes: string[] = ['Token_min_fields']
export const isToken_min_fields = (
  obj?: { __typename?: any } | null
): obj is Token_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_min_fields"')
  return Token_min_fields_possibleTypes.includes(obj.__typename)
}

const Token_stddev_fields_possibleTypes: string[] = ['Token_stddev_fields']
export const isToken_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is Token_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_stddev_fields"')
  return Token_stddev_fields_possibleTypes.includes(obj.__typename)
}

const Token_stddev_pop_fields_possibleTypes: string[] = [
  'Token_stddev_pop_fields',
]
export const isToken_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Token_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_stddev_pop_fields"')
  return Token_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const Token_stddev_samp_fields_possibleTypes: string[] = [
  'Token_stddev_samp_fields',
]
export const isToken_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Token_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_stddev_samp_fields"')
  return Token_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const Token_sum_fields_possibleTypes: string[] = ['Token_sum_fields']
export const isToken_sum_fields = (
  obj?: { __typename?: any } | null
): obj is Token_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_sum_fields"')
  return Token_sum_fields_possibleTypes.includes(obj.__typename)
}

const Token_var_pop_fields_possibleTypes: string[] = ['Token_var_pop_fields']
export const isToken_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Token_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_var_pop_fields"')
  return Token_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const Token_var_samp_fields_possibleTypes: string[] = ['Token_var_samp_fields']
export const isToken_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Token_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_var_samp_fields"')
  return Token_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const Token_variance_fields_possibleTypes: string[] = ['Token_variance_fields']
export const isToken_variance_fields = (
  obj?: { __typename?: any } | null
): obj is Token_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_variance_fields"')
  return Token_variance_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_possibleTypes: string[] = ['Transfer']
export const isTransfer = (
  obj?: { __typename?: any } | null
): obj is Transfer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransfer"')
  return Transfer_possibleTypes.includes(obj.__typename)
}

const Transfer_aggregate_possibleTypes: string[] = ['Transfer_aggregate']
export const isTransfer_aggregate = (
  obj?: { __typename?: any } | null
): obj is Transfer_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_aggregate"')
  return Transfer_aggregate_possibleTypes.includes(obj.__typename)
}

const Transfer_aggregate_fields_possibleTypes: string[] = [
  'Transfer_aggregate_fields',
]
export const isTransfer_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_aggregate_fields"')
  return Transfer_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_avg_fields_possibleTypes: string[] = ['Transfer_avg_fields']
export const isTransfer_avg_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_avg_fields"')
  return Transfer_avg_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_max_fields_possibleTypes: string[] = ['Transfer_max_fields']
export const isTransfer_max_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_max_fields"')
  return Transfer_max_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_min_fields_possibleTypes: string[] = ['Transfer_min_fields']
export const isTransfer_min_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_min_fields"')
  return Transfer_min_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_stddev_fields_possibleTypes: string[] = [
  'Transfer_stddev_fields',
]
export const isTransfer_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_stddev_fields"')
  return Transfer_stddev_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_stddev_pop_fields_possibleTypes: string[] = [
  'Transfer_stddev_pop_fields',
]
export const isTransfer_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_stddev_pop_fields"')
  return Transfer_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_stddev_samp_fields_possibleTypes: string[] = [
  'Transfer_stddev_samp_fields',
]
export const isTransfer_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_stddev_samp_fields"')
  return Transfer_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_sum_fields_possibleTypes: string[] = ['Transfer_sum_fields']
export const isTransfer_sum_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_sum_fields"')
  return Transfer_sum_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_var_pop_fields_possibleTypes: string[] = [
  'Transfer_var_pop_fields',
]
export const isTransfer_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_var_pop_fields"')
  return Transfer_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_var_samp_fields_possibleTypes: string[] = [
  'Transfer_var_samp_fields',
]
export const isTransfer_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_var_samp_fields"')
  return Transfer_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const Transfer_variance_fields_possibleTypes: string[] = [
  'Transfer_variance_fields',
]
export const isTransfer_variance_fields = (
  obj?: { __typename?: any } | null
): obj is Transfer_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_variance_fields"')
  return Transfer_variance_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_possibleTypes: string[] = ['Workflow']
export const isWorkflow = (
  obj?: { __typename?: any } | null
): obj is Workflow => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isWorkflow"')
  return Workflow_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_possibleTypes: string[] = ['WorkflowModule']
export const isWorkflowModule = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModule"')
  return WorkflowModule_possibleTypes.includes(obj.__typename)
}

const WorkflowModuleType_possibleTypes: string[] = ['WorkflowModuleType']
export const isWorkflowModuleType = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModuleType"')
  return WorkflowModuleType_possibleTypes.includes(obj.__typename)
}

const chain_metadata_possibleTypes: string[] = ['chain_metadata']
export const ischain_metadata = (
  obj?: { __typename?: any } | null
): obj is chain_metadata => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata"')
  return chain_metadata_possibleTypes.includes(obj.__typename)
}

const dynamic_contract_registry_possibleTypes: string[] = [
  'dynamic_contract_registry',
]
export const isdynamic_contract_registry = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isdynamic_contract_registry"')
  return dynamic_contract_registry_possibleTypes.includes(obj.__typename)
}

const end_of_block_range_scanned_data_possibleTypes: string[] = [
  'end_of_block_range_scanned_data',
]
export const isend_of_block_range_scanned_data = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data"'
    )
  return end_of_block_range_scanned_data_possibleTypes.includes(obj.__typename)
}

const event_sync_state_possibleTypes: string[] = ['event_sync_state']
export const isevent_sync_state = (
  obj?: { __typename?: any } | null
): obj is event_sync_state => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isevent_sync_state"')
  return event_sync_state_possibleTypes.includes(obj.__typename)
}

const persisted_state_possibleTypes: string[] = ['persisted_state']
export const ispersisted_state = (
  obj?: { __typename?: any } | null
): obj is persisted_state => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ispersisted_state"')
  return persisted_state_possibleTypes.includes(obj.__typename)
}

const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (
  obj?: { __typename?: any } | null
): obj is query_root => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}

const raw_events_possibleTypes: string[] = ['raw_events']
export const israw_events = (
  obj?: { __typename?: any } | null
): obj is raw_events => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events"')
  return raw_events_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (
  obj?: { __typename?: any } | null
): obj is subscription_root => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

export const enumBondingCurveSelectColumn = {
  address: 'address' as const,
  bcType: 'bcType' as const,
  buyFee: 'buyFee' as const,
  buyReserveRatio: 'buyReserveRatio' as const,
  chainId: 'chainId' as const,
  collateralToken_id: 'collateralToken_id' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  issuanceToken_id: 'issuanceToken_id' as const,
  reserveCOL: 'reserveCOL' as const,
  reserveUSD: 'reserveUSD' as const,
  sellFee: 'sellFee' as const,
  sellReserveRatio: 'sellReserveRatio' as const,
  virtualCOL: 'virtualCOL' as const,
  virtualISS: 'virtualISS' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumBountyClaimSelectColumn = {
  bounty_id: 'bounty_id' as const,
  claimed: 'claimed' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  details: 'details' as const,
  id: 'id' as const,
}

export const enumBountyClaimSelectColumnBountyClaimAggregateBoolExpBoolAndArgumentsColumns =
  {
    claimed: 'claimed' as const,
  }

export const enumBountyClaimSelectColumnBountyClaimAggregateBoolExpBoolOrArgumentsColumns =
  {
    claimed: 'claimed' as const,
  }

export const enumBountyContributorSelectColumn = {
  address: 'address' as const,
  bountyClaim_id: 'bountyClaim_id' as const,
  claimAmount: 'claimAmount' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
}

export const enumBountyModuleSelectColumn = {
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumBountySelectColumn = {
  bountyModule_id: 'bountyModule_id' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  details: 'details' as const,
  id: 'id' as const,
  locked: 'locked' as const,
  maximumPayoutAmount: 'maximumPayoutAmount' as const,
  minimumPayoutAmount: 'minimumPayoutAmount' as const,
}

export const enumBountySelectColumnBountyAggregateBoolExpBoolAndArgumentsColumns =
  {
    locked: 'locked' as const,
  }

export const enumBountySelectColumnBountyAggregateBoolExpBoolOrArgumentsColumns =
  {
    locked: 'locked' as const,
  }

export const enumCurveDayDataSelectColumn = {
  chainId: 'chainId' as const,
  closeCOL: 'closeCOL' as const,
  closeUSD: 'closeUSD' as const,
  collateralToken_id: 'collateralToken_id' as const,
  date: 'date' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  highCOL: 'highCOL' as const,
  highUSD: 'highUSD' as const,
  id: 'id' as const,
  issuanceToken_id: 'issuanceToken_id' as const,
  lowCOL: 'lowCOL' as const,
  lowUSD: 'lowUSD' as const,
  module_id: 'module_id' as const,
  openCOL: 'openCOL' as const,
  openUSD: 'openUSD' as const,
  priceCOL: 'priceCOL' as const,
  priceUSD: 'priceUSD' as const,
  projectFeeCOL: 'projectFeeCOL' as const,
  projectFeeUSD: 'projectFeeUSD' as const,
  protocolFeeCOL: 'protocolFeeCOL' as const,
  protocolFeeISS: 'protocolFeeISS' as const,
  protocolFeeUSD: 'protocolFeeUSD' as const,
  volumeCOL: 'volumeCOL' as const,
  volumeISS: 'volumeISS' as const,
  volumeUSD: 'volumeUSD' as const,
}

export const enumCurveHourDataSelectColumn = {
  chainId: 'chainId' as const,
  closeCOL: 'closeCOL' as const,
  closeUSD: 'closeUSD' as const,
  collateralToken_id: 'collateralToken_id' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  highCOL: 'highCOL' as const,
  highUSD: 'highUSD' as const,
  id: 'id' as const,
  issuanceToken_id: 'issuanceToken_id' as const,
  lowCOL: 'lowCOL' as const,
  lowUSD: 'lowUSD' as const,
  module_id: 'module_id' as const,
  openCOL: 'openCOL' as const,
  openUSD: 'openUSD' as const,
  periodStartUnix: 'periodStartUnix' as const,
  priceCOL: 'priceCOL' as const,
  priceUSD: 'priceUSD' as const,
  projectFeeCOL: 'projectFeeCOL' as const,
  projectFeeUSD: 'projectFeeUSD' as const,
  protocolFeeCOL: 'protocolFeeCOL' as const,
  protocolFeeISS: 'protocolFeeISS' as const,
  protocolFeeUSD: 'protocolFeeUSD' as const,
  volumeCOL: 'volumeCOL' as const,
  volumeISS: 'volumeISS' as const,
  volumeUSD: 'volumeUSD' as const,
}

export const enumDepositVaultSelectColumn = {
  address: 'address' as const,
  balance: 'balance' as const,
  balanceUSD: 'balanceUSD' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  token_id: 'token_id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumDepositSelectColumn = {
  amount: 'amount' as const,
  amountUSD: 'amountUSD' as const,
  blockTimestamp: 'blockTimestamp' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  depositVault_id: 'depositVault_id' as const,
  depositor: 'depositor' as const,
  id: 'id' as const,
}

export const enumIssuanceTokenDayDataSelectColumn = {
  chainId: 'chainId' as const,
  closeUSD: 'closeUSD' as const,
  date: 'date' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  highUSD: 'highUSD' as const,
  id: 'id' as const,
  lowUSD: 'lowUSD' as const,
  openUSD: 'openUSD' as const,
  priceUSD: 'priceUSD' as const,
  projectFeeUSD: 'projectFeeUSD' as const,
  protocolFeeISS: 'protocolFeeISS' as const,
  protocolFeeUSD: 'protocolFeeUSD' as const,
  token_id: 'token_id' as const,
  volumeISS: 'volumeISS' as const,
  volumeUSD: 'volumeUSD' as const,
}

export const enumIssuanceTokenHourDataSelectColumn = {
  chainId: 'chainId' as const,
  closeUSD: 'closeUSD' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  highUSD: 'highUSD' as const,
  id: 'id' as const,
  lowUSD: 'lowUSD' as const,
  openUSD: 'openUSD' as const,
  periodStartUnix: 'periodStartUnix' as const,
  priceUSD: 'priceUSD' as const,
  projectFeeUSD: 'projectFeeUSD' as const,
  protocolFeeISS: 'protocolFeeISS' as const,
  protocolFeeUSD: 'protocolFeeUSD' as const,
  token_id: 'token_id' as const,
  volumeISS: 'volumeISS' as const,
  volumeUSD: 'volumeUSD' as const,
}

export const enumLinearVestingSelectColumn = {
  amount: 'amount' as const,
  blockTimestamp: 'blockTimestamp' as const,
  chainId: 'chainId' as const,
  cliff: 'cliff' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  end: 'end' as const,
  id: 'id' as const,
  recipient: 'recipient' as const,
  start: 'start' as const,
  status: 'status' as const,
  streamingPaymentProcessor_id: 'streamingPaymentProcessor_id' as const,
  token_id: 'token_id' as const,
}

export const enumProjectFeeSelectColumn = {
  amount: 'amount' as const,
  amountUSD: 'amountUSD' as const,
  blockTimestamp: 'blockTimestamp' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  module_id: 'module_id' as const,
  recipient: 'recipient' as const,
  token_id: 'token_id' as const,
}

export const enumProtocolFeeSelectColumn = {
  amount: 'amount' as const,
  amountUSD: 'amountUSD' as const,
  blockTimestamp: 'blockTimestamp' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  module_id: 'module_id' as const,
  source: 'source' as const,
  token_id: 'token_id' as const,
  treasury: 'treasury' as const,
}

export const enumStreamingPaymentProcessorSelectColumn = {
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumSwapSelectColumn = {
  amountCOL: 'amountCOL' as const,
  amountISS: 'amountISS' as const,
  amountUSD: 'amountUSD' as const,
  blockTimestamp: 'blockTimestamp' as const,
  chainId: 'chainId' as const,
  collateralToken_id: 'collateralToken_id' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  initiator: 'initiator' as const,
  issuanceToken_id: 'issuanceToken_id' as const,
  module_id: 'module_id' as const,
  priceCOL: 'priceCOL' as const,
  priceUSD: 'priceUSD' as const,
  recipient: 'recipient' as const,
  swapType: 'swapType' as const,
}

export const enumTokenSelectColumn = {
  address: 'address' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  decimals: 'decimals' as const,
  id: 'id' as const,
  name: 'name' as const,
  priceUSD: 'priceUSD' as const,
  symbol: 'symbol' as const,
  totalSupply: 'totalSupply' as const,
}

export const enumTransferSelectColumn = {
  amount: 'amount' as const,
  amountUSD: 'amountUSD' as const,
  blockTimestamp: 'blockTimestamp' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  depositVault_id: 'depositVault_id' as const,
  id: 'id' as const,
  recipient: 'recipient' as const,
}

export const enumWorkflowModuleTypeSelectColumn = {
  beacon: 'beacon' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  majorVersion: 'majorVersion' as const,
  minorVersion: 'minorVersion' as const,
  name: 'name' as const,
  patchVersion: 'patchVersion' as const,
  url: 'url' as const,
}

export const enumWorkflowModuleSelectColumn = {
  address: 'address' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  moduleType_id: 'moduleType_id' as const,
  orchestrator: 'orchestrator' as const,
}

export const enumWorkflowSelectColumn = {
  authorizer_id: 'authorizer_id' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  fundingManager_id: 'fundingManager_id' as const,
  id: 'id' as const,
  optionalModules: 'optionalModules' as const,
  orchestrator: 'orchestrator' as const,
  paymentProcessor_id: 'paymentProcessor_id' as const,
}

export const enumChainMetadataSelectColumn = {
  block_height: 'block_height' as const,
  chain_id: 'chain_id' as const,
  end_block: 'end_block' as const,
  first_event_block_number: 'first_event_block_number' as const,
  is_hyper_sync: 'is_hyper_sync' as const,
  latest_fetched_block_number: 'latest_fetched_block_number' as const,
  latest_processed_block: 'latest_processed_block' as const,
  num_batches_fetched: 'num_batches_fetched' as const,
  num_events_processed: 'num_events_processed' as const,
  start_block: 'start_block' as const,
  timestamp_caught_up_to_head_or_endblock:
    'timestamp_caught_up_to_head_or_endblock' as const,
}

export const enumCursorOrdering = {
  ASC: 'ASC' as const,
  DESC: 'DESC' as const,
}

export const enumDynamicContractRegistrySelectColumn = {
  chain_id: 'chain_id' as const,
  contract_address: 'contract_address' as const,
  contract_type: 'contract_type' as const,
  id: 'id' as const,
  is_pre_registered: 'is_pre_registered' as const,
  registering_event_block_number: 'registering_event_block_number' as const,
  registering_event_block_timestamp:
    'registering_event_block_timestamp' as const,
  registering_event_contract_name: 'registering_event_contract_name' as const,
  registering_event_log_index: 'registering_event_log_index' as const,
  registering_event_name: 'registering_event_name' as const,
  registering_event_src_address: 'registering_event_src_address' as const,
}

export const enumEndOfBlockRangeScannedDataSelectColumn = {
  block_hash: 'block_hash' as const,
  block_number: 'block_number' as const,
  block_timestamp: 'block_timestamp' as const,
  chain_id: 'chain_id' as const,
}

export const enumEventSyncStateSelectColumn = {
  block_number: 'block_number' as const,
  block_timestamp: 'block_timestamp' as const,
  chain_id: 'chain_id' as const,
  is_pre_registering_dynamic_contracts:
    'is_pre_registering_dynamic_contracts' as const,
  log_index: 'log_index' as const,
}

export const enumOrderBy = {
  asc: 'asc' as const,
  asc_nulls_first: 'asc_nulls_first' as const,
  asc_nulls_last: 'asc_nulls_last' as const,
  desc: 'desc' as const,
  desc_nulls_first: 'desc_nulls_first' as const,
  desc_nulls_last: 'desc_nulls_last' as const,
}

export const enumPersistedStateSelectColumn = {
  abi_files_hash: 'abi_files_hash' as const,
  config_hash: 'config_hash' as const,
  envio_version: 'envio_version' as const,
  handler_files_hash: 'handler_files_hash' as const,
  id: 'id' as const,
  schema_hash: 'schema_hash' as const,
}

export const enumRawEventsSelectColumn = {
  block_fields: 'block_fields' as const,
  block_hash: 'block_hash' as const,
  block_number: 'block_number' as const,
  block_timestamp: 'block_timestamp' as const,
  chain_id: 'chain_id' as const,
  contract_name: 'contract_name' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  event_id: 'event_id' as const,
  event_name: 'event_name' as const,
  log_index: 'log_index' as const,
  params: 'params' as const,
  serial: 'serial' as const,
  src_address: 'src_address' as const,
  transaction_fields: 'transaction_fields' as const,
}
