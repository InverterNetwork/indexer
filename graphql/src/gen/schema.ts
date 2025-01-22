// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */

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
  sellFee: Scalars['numeric']
  sellReserveRatio: Scalars['numeric']
  /** An array relationship */
  swaps: Swap[]
  /** An aggregate relationship */
  swaps_aggregate: Swap_aggregate
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
  sellFee: Scalars['Float'] | null
  sellReserveRatio: Scalars['Float'] | null
  virtualCOL: Scalars['Float'] | null
  virtualISS: Scalars['Float'] | null
  __typename: 'BondingCurve_avg_fields'
}

/** unique or primary key constraints on table "BondingCurve" */
export type BondingCurve_constraint = 'BondingCurve_pkey'

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
  sellFee: Scalars['numeric'] | null
  sellReserveRatio: Scalars['numeric'] | null
  virtualCOL: Scalars['numeric'] | null
  virtualISS: Scalars['numeric'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'BondingCurve_min_fields'
}

/** response of any mutation on the table "BondingCurve" */
export interface BondingCurve_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: BondingCurve[]
  __typename: 'BondingCurve_mutation_response'
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
  sellFee: Scalars['numeric'] | null
  sellReserveRatio: Scalars['numeric'] | null
  virtualCOL: Scalars['numeric'] | null
  virtualISS: Scalars['numeric'] | null
  __typename: 'BondingCurve_sum_fields'
}

/** update columns of table "BondingCurve" */
export type BondingCurve_update_column =
  | 'address'
  | 'bcType'
  | 'buyFee'
  | 'buyReserveRatio'
  | 'chainId'
  | 'collateralToken_id'
  | 'db_write_timestamp'
  | 'id'
  | 'issuanceToken_id'
  | 'sellFee'
  | 'sellReserveRatio'
  | 'virtualCOL'
  | 'virtualISS'
  | 'workflow_id'

/** aggregate var_pop on columns */
export interface BondingCurve_var_pop_fields {
  buyFee: Scalars['Float'] | null
  buyReserveRatio: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
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
  /** An aggregate relationship */
  contributors_aggregate: BountyContributor_aggregate
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

/** unique or primary key constraints on table "BountyClaim" */
export type BountyClaim_constraint = 'BountyClaim_pkey'

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

/** response of any mutation on the table "BountyClaim" */
export interface BountyClaim_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: BountyClaim[]
  __typename: 'BountyClaim_mutation_response'
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

/** update columns of table "BountyClaim" */
export type BountyClaim_update_column =
  | 'bounty_id'
  | 'claimed'
  | 'db_write_timestamp'
  | 'details'
  | 'id'

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

/** aggregated selection of "BountyContributor" */
export interface BountyContributor_aggregate {
  aggregate: BountyContributor_aggregate_fields | null
  nodes: BountyContributor[]
  __typename: 'BountyContributor_aggregate'
}

/** aggregate fields of "BountyContributor" */
export interface BountyContributor_aggregate_fields {
  avg: BountyContributor_avg_fields | null
  count: Scalars['Int']
  max: BountyContributor_max_fields | null
  min: BountyContributor_min_fields | null
  stddev: BountyContributor_stddev_fields | null
  stddev_pop: BountyContributor_stddev_pop_fields | null
  stddev_samp: BountyContributor_stddev_samp_fields | null
  sum: BountyContributor_sum_fields | null
  var_pop: BountyContributor_var_pop_fields | null
  var_samp: BountyContributor_var_samp_fields | null
  variance: BountyContributor_variance_fields | null
  __typename: 'BountyContributor_aggregate_fields'
}

/** aggregate avg on columns */
export interface BountyContributor_avg_fields {
  claimAmount: Scalars['Float'] | null
  __typename: 'BountyContributor_avg_fields'
}

/** unique or primary key constraints on table "BountyContributor" */
export type BountyContributor_constraint = 'BountyContributor_pkey'

/** aggregate max on columns */
export interface BountyContributor_max_fields {
  address: Scalars['String'] | null
  bountyClaim_id: Scalars['String'] | null
  claimAmount: Scalars['numeric'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  __typename: 'BountyContributor_max_fields'
}

/** aggregate min on columns */
export interface BountyContributor_min_fields {
  address: Scalars['String'] | null
  bountyClaim_id: Scalars['String'] | null
  claimAmount: Scalars['numeric'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  __typename: 'BountyContributor_min_fields'
}

/** response of any mutation on the table "BountyContributor" */
export interface BountyContributor_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: BountyContributor[]
  __typename: 'BountyContributor_mutation_response'
}

/** select columns of table "BountyContributor" */
export type BountyContributor_select_column =
  | 'address'
  | 'bountyClaim_id'
  | 'claimAmount'
  | 'db_write_timestamp'
  | 'id'

/** aggregate stddev on columns */
export interface BountyContributor_stddev_fields {
  claimAmount: Scalars['Float'] | null
  __typename: 'BountyContributor_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface BountyContributor_stddev_pop_fields {
  claimAmount: Scalars['Float'] | null
  __typename: 'BountyContributor_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface BountyContributor_stddev_samp_fields {
  claimAmount: Scalars['Float'] | null
  __typename: 'BountyContributor_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface BountyContributor_sum_fields {
  claimAmount: Scalars['numeric'] | null
  __typename: 'BountyContributor_sum_fields'
}

/** update columns of table "BountyContributor" */
export type BountyContributor_update_column =
  | 'address'
  | 'bountyClaim_id'
  | 'claimAmount'
  | 'db_write_timestamp'
  | 'id'

/** aggregate var_pop on columns */
export interface BountyContributor_var_pop_fields {
  claimAmount: Scalars['Float'] | null
  __typename: 'BountyContributor_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface BountyContributor_var_samp_fields {
  claimAmount: Scalars['Float'] | null
  __typename: 'BountyContributor_var_samp_fields'
}

/** aggregate variance on columns */
export interface BountyContributor_variance_fields {
  claimAmount: Scalars['Float'] | null
  __typename: 'BountyContributor_variance_fields'
}

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

/** aggregated selection of "BountyModule" */
export interface BountyModule_aggregate {
  aggregate: BountyModule_aggregate_fields | null
  nodes: BountyModule[]
  __typename: 'BountyModule_aggregate'
}

/** aggregate fields of "BountyModule" */
export interface BountyModule_aggregate_fields {
  avg: BountyModule_avg_fields | null
  count: Scalars['Int']
  max: BountyModule_max_fields | null
  min: BountyModule_min_fields | null
  stddev: BountyModule_stddev_fields | null
  stddev_pop: BountyModule_stddev_pop_fields | null
  stddev_samp: BountyModule_stddev_samp_fields | null
  sum: BountyModule_sum_fields | null
  var_pop: BountyModule_var_pop_fields | null
  var_samp: BountyModule_var_samp_fields | null
  variance: BountyModule_variance_fields | null
  __typename: 'BountyModule_aggregate_fields'
}

/** aggregate avg on columns */
export interface BountyModule_avg_fields {
  chainId: Scalars['Float'] | null
  __typename: 'BountyModule_avg_fields'
}

/** unique or primary key constraints on table "BountyModule" */
export type BountyModule_constraint = 'BountyModule_pkey'

/** aggregate max on columns */
export interface BountyModule_max_fields {
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'BountyModule_max_fields'
}

/** aggregate min on columns */
export interface BountyModule_min_fields {
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'BountyModule_min_fields'
}

/** response of any mutation on the table "BountyModule" */
export interface BountyModule_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: BountyModule[]
  __typename: 'BountyModule_mutation_response'
}

/** select columns of table "BountyModule" */
export type BountyModule_select_column =
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'workflow_id'

/** aggregate stddev on columns */
export interface BountyModule_stddev_fields {
  chainId: Scalars['Float'] | null
  __typename: 'BountyModule_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface BountyModule_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'BountyModule_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface BountyModule_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'BountyModule_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface BountyModule_sum_fields {
  chainId: Scalars['Int'] | null
  __typename: 'BountyModule_sum_fields'
}

/** update columns of table "BountyModule" */
export type BountyModule_update_column =
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'workflow_id'

/** aggregate var_pop on columns */
export interface BountyModule_var_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'BountyModule_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface BountyModule_var_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'BountyModule_var_samp_fields'
}

/** aggregate variance on columns */
export interface BountyModule_variance_fields {
  chainId: Scalars['Float'] | null
  __typename: 'BountyModule_variance_fields'
}

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

/** unique or primary key constraints on table "Bounty" */
export type Bounty_constraint = 'Bounty_pkey'

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

/** response of any mutation on the table "Bounty" */
export interface Bounty_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Bounty[]
  __typename: 'Bounty_mutation_response'
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

/** update columns of table "Bounty" */
export type Bounty_update_column =
  | 'bountyModule_id'
  | 'db_write_timestamp'
  | 'details'
  | 'id'
  | 'locked'
  | 'maximumPayoutAmount'
  | 'minimumPayoutAmount'

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

/** unique or primary key constraints on table "CurveDayData" */
export type CurveDayData_constraint = 'CurveDayData_pkey'

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

/** response of any mutation on the table "CurveDayData" */
export interface CurveDayData_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: CurveDayData[]
  __typename: 'CurveDayData_mutation_response'
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

/** update columns of table "CurveDayData" */
export type CurveDayData_update_column =
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

/** unique or primary key constraints on table "CurveHourData" */
export type CurveHourData_constraint = 'CurveHourData_pkey'

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

/** response of any mutation on the table "CurveHourData" */
export interface CurveHourData_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: CurveHourData[]
  __typename: 'CurveHourData_mutation_response'
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

/** update columns of table "CurveHourData" */
export type CurveHourData_update_column =
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
  balance: Scalars['numeric'] | null
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
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_avg_fields'
}

/** unique or primary key constraints on table "DepositVault" */
export type DepositVault_constraint = 'DepositVault_pkey'

/** aggregate max on columns */
export interface DepositVault_max_fields {
  address: Scalars['String'] | null
  balance: Scalars['numeric'] | null
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
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  token_id: Scalars['String'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'DepositVault_min_fields'
}

/** response of any mutation on the table "DepositVault" */
export interface DepositVault_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: DepositVault[]
  __typename: 'DepositVault_mutation_response'
}

/** select columns of table "DepositVault" */
export type DepositVault_select_column =
  | 'address'
  | 'balance'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'token_id'
  | 'workflow_id'

/** aggregate stddev on columns */
export interface DepositVault_stddev_fields {
  balance: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface DepositVault_stddev_pop_fields {
  balance: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface DepositVault_stddev_samp_fields {
  balance: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface DepositVault_sum_fields {
  balance: Scalars['numeric'] | null
  chainId: Scalars['Int'] | null
  __typename: 'DepositVault_sum_fields'
}

/** update columns of table "DepositVault" */
export type DepositVault_update_column =
  | 'address'
  | 'balance'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'token_id'
  | 'workflow_id'

/** aggregate var_pop on columns */
export interface DepositVault_var_pop_fields {
  balance: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface DepositVault_var_samp_fields {
  balance: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  __typename: 'DepositVault_var_samp_fields'
}

/** aggregate variance on columns */
export interface DepositVault_variance_fields {
  balance: Scalars['Float'] | null
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
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_avg_fields'
}

/** unique or primary key constraints on table "Deposit" */
export type Deposit_constraint = 'Deposit_pkey'

/** aggregate max on columns */
export interface Deposit_max_fields {
  amount: Scalars['numeric'] | null
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
  blockTimestamp: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  depositVault_id: Scalars['String'] | null
  depositor: Scalars['String'] | null
  id: Scalars['String'] | null
  __typename: 'Deposit_min_fields'
}

/** response of any mutation on the table "Deposit" */
export interface Deposit_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Deposit[]
  __typename: 'Deposit_mutation_response'
}

/** select columns of table "Deposit" */
export type Deposit_select_column =
  | 'amount'
  | 'blockTimestamp'
  | 'db_write_timestamp'
  | 'depositVault_id'
  | 'depositor'
  | 'id'

/** aggregate stddev on columns */
export interface Deposit_stddev_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Deposit_stddev_pop_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Deposit_stddev_samp_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Deposit_sum_fields {
  amount: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  __typename: 'Deposit_sum_fields'
}

/** update columns of table "Deposit" */
export type Deposit_update_column =
  | 'amount'
  | 'blockTimestamp'
  | 'db_write_timestamp'
  | 'depositVault_id'
  | 'depositor'
  | 'id'

/** aggregate var_pop on columns */
export interface Deposit_var_pop_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Deposit_var_samp_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Deposit_var_samp_fields'
}

/** aggregate variance on columns */
export interface Deposit_variance_fields {
  amount: Scalars['Float'] | null
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

/** unique or primary key constraints on table "IssuanceTokenDayData" */
export type IssuanceTokenDayData_constraint = 'IssuanceTokenDayData_pkey'

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

/** response of any mutation on the table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: IssuanceTokenDayData[]
  __typename: 'IssuanceTokenDayData_mutation_response'
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

/** update columns of table "IssuanceTokenDayData" */
export type IssuanceTokenDayData_update_column =
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

/** unique or primary key constraints on table "IssuanceTokenHourData" */
export type IssuanceTokenHourData_constraint = 'IssuanceTokenHourData_pkey'

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

/** response of any mutation on the table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: IssuanceTokenHourData[]
  __typename: 'IssuanceTokenHourData_mutation_response'
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

/** update columns of table "IssuanceTokenHourData" */
export type IssuanceTokenHourData_update_column =
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

/** aggregated selection of "LinearVesting" */
export interface LinearVesting_aggregate {
  aggregate: LinearVesting_aggregate_fields | null
  nodes: LinearVesting[]
  __typename: 'LinearVesting_aggregate'
}

/** aggregate fields of "LinearVesting" */
export interface LinearVesting_aggregate_fields {
  avg: LinearVesting_avg_fields | null
  count: Scalars['Int']
  max: LinearVesting_max_fields | null
  min: LinearVesting_min_fields | null
  stddev: LinearVesting_stddev_fields | null
  stddev_pop: LinearVesting_stddev_pop_fields | null
  stddev_samp: LinearVesting_stddev_samp_fields | null
  sum: LinearVesting_sum_fields | null
  var_pop: LinearVesting_var_pop_fields | null
  var_samp: LinearVesting_var_samp_fields | null
  variance: LinearVesting_variance_fields | null
  __typename: 'LinearVesting_aggregate_fields'
}

/** aggregate avg on columns */
export interface LinearVesting_avg_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  cliff: Scalars['Float'] | null
  end: Scalars['Float'] | null
  start: Scalars['Float'] | null
  __typename: 'LinearVesting_avg_fields'
}

/** unique or primary key constraints on table "LinearVesting" */
export type LinearVesting_constraint = 'LinearVesting_pkey'

/** aggregate max on columns */
export interface LinearVesting_max_fields {
  amount: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  cliff: Scalars['numeric'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  end: Scalars['numeric'] | null
  id: Scalars['String'] | null
  recipient: Scalars['String'] | null
  start: Scalars['numeric'] | null
  status: Scalars['vestingstatus'] | null
  streamingPaymentProcessor_id: Scalars['String'] | null
  token_id: Scalars['String'] | null
  __typename: 'LinearVesting_max_fields'
}

/** aggregate min on columns */
export interface LinearVesting_min_fields {
  amount: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  cliff: Scalars['numeric'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  end: Scalars['numeric'] | null
  id: Scalars['String'] | null
  recipient: Scalars['String'] | null
  start: Scalars['numeric'] | null
  status: Scalars['vestingstatus'] | null
  streamingPaymentProcessor_id: Scalars['String'] | null
  token_id: Scalars['String'] | null
  __typename: 'LinearVesting_min_fields'
}

/** response of any mutation on the table "LinearVesting" */
export interface LinearVesting_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: LinearVesting[]
  __typename: 'LinearVesting_mutation_response'
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

/** aggregate stddev on columns */
export interface LinearVesting_stddev_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  cliff: Scalars['Float'] | null
  end: Scalars['Float'] | null
  start: Scalars['Float'] | null
  __typename: 'LinearVesting_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface LinearVesting_stddev_pop_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  cliff: Scalars['Float'] | null
  end: Scalars['Float'] | null
  start: Scalars['Float'] | null
  __typename: 'LinearVesting_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface LinearVesting_stddev_samp_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  cliff: Scalars['Float'] | null
  end: Scalars['Float'] | null
  start: Scalars['Float'] | null
  __typename: 'LinearVesting_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface LinearVesting_sum_fields {
  amount: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  cliff: Scalars['numeric'] | null
  end: Scalars['numeric'] | null
  start: Scalars['numeric'] | null
  __typename: 'LinearVesting_sum_fields'
}

/** update columns of table "LinearVesting" */
export type LinearVesting_update_column =
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

/** aggregate var_pop on columns */
export interface LinearVesting_var_pop_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  cliff: Scalars['Float'] | null
  end: Scalars['Float'] | null
  start: Scalars['Float'] | null
  __typename: 'LinearVesting_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface LinearVesting_var_samp_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  cliff: Scalars['Float'] | null
  end: Scalars['Float'] | null
  start: Scalars['Float'] | null
  __typename: 'LinearVesting_var_samp_fields'
}

/** aggregate variance on columns */
export interface LinearVesting_variance_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  cliff: Scalars['Float'] | null
  end: Scalars['Float'] | null
  start: Scalars['Float'] | null
  __typename: 'LinearVesting_variance_fields'
}

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

/** unique or primary key constraints on table "ProjectFee" */
export type ProjectFee_constraint = 'ProjectFee_pkey'

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

/** response of any mutation on the table "ProjectFee" */
export interface ProjectFee_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: ProjectFee[]
  __typename: 'ProjectFee_mutation_response'
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

/** update columns of table "ProjectFee" */
export type ProjectFee_update_column =
  | 'amount'
  | 'amountUSD'
  | 'blockTimestamp'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'module_id'
  | 'recipient'
  | 'token_id'

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

/** unique or primary key constraints on table "ProtocolFee" */
export type ProtocolFee_constraint = 'ProtocolFee_pkey'

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

/** response of any mutation on the table "ProtocolFee" */
export interface ProtocolFee_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: ProtocolFee[]
  __typename: 'ProtocolFee_mutation_response'
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

/** update columns of table "ProtocolFee" */
export type ProtocolFee_update_column =
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
  /** An aggregate relationship */
  vestings_aggregate: LinearVesting_aggregate
  /** An object relationship */
  workflow: Workflow | null
  workflow_id: Scalars['String']
  __typename: 'StreamingPaymentProcessor'
}

/** aggregated selection of "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_aggregate {
  aggregate: StreamingPaymentProcessor_aggregate_fields | null
  nodes: StreamingPaymentProcessor[]
  __typename: 'StreamingPaymentProcessor_aggregate'
}

/** aggregate fields of "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_aggregate_fields {
  avg: StreamingPaymentProcessor_avg_fields | null
  count: Scalars['Int']
  max: StreamingPaymentProcessor_max_fields | null
  min: StreamingPaymentProcessor_min_fields | null
  stddev: StreamingPaymentProcessor_stddev_fields | null
  stddev_pop: StreamingPaymentProcessor_stddev_pop_fields | null
  stddev_samp: StreamingPaymentProcessor_stddev_samp_fields | null
  sum: StreamingPaymentProcessor_sum_fields | null
  var_pop: StreamingPaymentProcessor_var_pop_fields | null
  var_samp: StreamingPaymentProcessor_var_samp_fields | null
  variance: StreamingPaymentProcessor_variance_fields | null
  __typename: 'StreamingPaymentProcessor_aggregate_fields'
}

/** aggregate avg on columns */
export interface StreamingPaymentProcessor_avg_fields {
  chainId: Scalars['Float'] | null
  __typename: 'StreamingPaymentProcessor_avg_fields'
}

/** unique or primary key constraints on table "StreamingPaymentProcessor" */
export type StreamingPaymentProcessor_constraint =
  'StreamingPaymentProcessor_pkey'

/** aggregate max on columns */
export interface StreamingPaymentProcessor_max_fields {
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'StreamingPaymentProcessor_max_fields'
}

/** aggregate min on columns */
export interface StreamingPaymentProcessor_min_fields {
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  workflow_id: Scalars['String'] | null
  __typename: 'StreamingPaymentProcessor_min_fields'
}

/** response of any mutation on the table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: StreamingPaymentProcessor[]
  __typename: 'StreamingPaymentProcessor_mutation_response'
}

/** select columns of table "StreamingPaymentProcessor" */
export type StreamingPaymentProcessor_select_column =
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'workflow_id'

/** aggregate stddev on columns */
export interface StreamingPaymentProcessor_stddev_fields {
  chainId: Scalars['Float'] | null
  __typename: 'StreamingPaymentProcessor_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface StreamingPaymentProcessor_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'StreamingPaymentProcessor_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface StreamingPaymentProcessor_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'StreamingPaymentProcessor_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface StreamingPaymentProcessor_sum_fields {
  chainId: Scalars['Int'] | null
  __typename: 'StreamingPaymentProcessor_sum_fields'
}

/** update columns of table "StreamingPaymentProcessor" */
export type StreamingPaymentProcessor_update_column =
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'workflow_id'

/** aggregate var_pop on columns */
export interface StreamingPaymentProcessor_var_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'StreamingPaymentProcessor_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface StreamingPaymentProcessor_var_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'StreamingPaymentProcessor_var_samp_fields'
}

/** aggregate variance on columns */
export interface StreamingPaymentProcessor_variance_fields {
  chainId: Scalars['Float'] | null
  __typename: 'StreamingPaymentProcessor_variance_fields'
}

/** columns and relationships of "Swap" */
export interface Swap {
  amountCOL: Scalars['numeric']
  amountISS: Scalars['numeric']
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

/** aggregated selection of "Swap" */
export interface Swap_aggregate {
  aggregate: Swap_aggregate_fields | null
  nodes: Swap[]
  __typename: 'Swap_aggregate'
}

/** aggregate fields of "Swap" */
export interface Swap_aggregate_fields {
  avg: Swap_avg_fields | null
  count: Scalars['Int']
  max: Swap_max_fields | null
  min: Swap_min_fields | null
  stddev: Swap_stddev_fields | null
  stddev_pop: Swap_stddev_pop_fields | null
  stddev_samp: Swap_stddev_samp_fields | null
  sum: Swap_sum_fields | null
  var_pop: Swap_var_pop_fields | null
  var_samp: Swap_var_samp_fields | null
  variance: Swap_variance_fields | null
  __typename: 'Swap_aggregate_fields'
}

/** aggregate avg on columns */
export interface Swap_avg_fields {
  amountCOL: Scalars['Float'] | null
  amountISS: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  __typename: 'Swap_avg_fields'
}

/** unique or primary key constraints on table "Swap" */
export type Swap_constraint = 'Swap_pkey'

/** aggregate max on columns */
export interface Swap_max_fields {
  amountCOL: Scalars['numeric'] | null
  amountISS: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  collateralToken_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  initiator: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  module_id: Scalars['String'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  recipient: Scalars['String'] | null
  swapType: Scalars['swaptype'] | null
  __typename: 'Swap_max_fields'
}

/** aggregate min on columns */
export interface Swap_min_fields {
  amountCOL: Scalars['numeric'] | null
  amountISS: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  collateralToken_id: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  initiator: Scalars['String'] | null
  issuanceToken_id: Scalars['String'] | null
  module_id: Scalars['String'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  recipient: Scalars['String'] | null
  swapType: Scalars['swaptype'] | null
  __typename: 'Swap_min_fields'
}

/** response of any mutation on the table "Swap" */
export interface Swap_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Swap[]
  __typename: 'Swap_mutation_response'
}

/** select columns of table "Swap" */
export type Swap_select_column =
  | 'amountCOL'
  | 'amountISS'
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

/** aggregate stddev on columns */
export interface Swap_stddev_fields {
  amountCOL: Scalars['Float'] | null
  amountISS: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  __typename: 'Swap_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Swap_stddev_pop_fields {
  amountCOL: Scalars['Float'] | null
  amountISS: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  __typename: 'Swap_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Swap_stddev_samp_fields {
  amountCOL: Scalars['Float'] | null
  amountISS: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  __typename: 'Swap_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Swap_sum_fields {
  amountCOL: Scalars['numeric'] | null
  amountISS: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  chainId: Scalars['Int'] | null
  priceCOL: Scalars['numeric'] | null
  priceUSD: Scalars['numeric'] | null
  __typename: 'Swap_sum_fields'
}

/** update columns of table "Swap" */
export type Swap_update_column =
  | 'amountCOL'
  | 'amountISS'
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

/** aggregate var_pop on columns */
export interface Swap_var_pop_fields {
  amountCOL: Scalars['Float'] | null
  amountISS: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  __typename: 'Swap_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Swap_var_samp_fields {
  amountCOL: Scalars['Float'] | null
  amountISS: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  __typename: 'Swap_var_samp_fields'
}

/** aggregate variance on columns */
export interface Swap_variance_fields {
  amountCOL: Scalars['Float'] | null
  amountISS: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  chainId: Scalars['Float'] | null
  priceCOL: Scalars['Float'] | null
  priceUSD: Scalars['Float'] | null
  __typename: 'Swap_variance_fields'
}

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

/** unique or primary key constraints on table "Token" */
export type Token_constraint = 'Token_pkey'

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

/** response of any mutation on the table "Token" */
export interface Token_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Token[]
  __typename: 'Token_mutation_response'
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

/** update columns of table "Token" */
export type Token_update_column =
  | 'address'
  | 'chainId'
  | 'db_write_timestamp'
  | 'decimals'
  | 'id'
  | 'name'
  | 'priceUSD'
  | 'symbol'
  | 'totalSupply'

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
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_avg_fields'
}

/** unique or primary key constraints on table "Transfer" */
export type Transfer_constraint = 'Transfer_pkey'

/** aggregate max on columns */
export interface Transfer_max_fields {
  amount: Scalars['numeric'] | null
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
  blockTimestamp: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  depositVault_id: Scalars['String'] | null
  id: Scalars['String'] | null
  recipient: Scalars['String'] | null
  __typename: 'Transfer_min_fields'
}

/** response of any mutation on the table "Transfer" */
export interface Transfer_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Transfer[]
  __typename: 'Transfer_mutation_response'
}

/** select columns of table "Transfer" */
export type Transfer_select_column =
  | 'amount'
  | 'blockTimestamp'
  | 'db_write_timestamp'
  | 'depositVault_id'
  | 'id'
  | 'recipient'

/** aggregate stddev on columns */
export interface Transfer_stddev_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Transfer_stddev_pop_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Transfer_stddev_samp_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Transfer_sum_fields {
  amount: Scalars['numeric'] | null
  blockTimestamp: Scalars['Int'] | null
  __typename: 'Transfer_sum_fields'
}

/** update columns of table "Transfer" */
export type Transfer_update_column =
  | 'amount'
  | 'blockTimestamp'
  | 'db_write_timestamp'
  | 'depositVault_id'
  | 'id'
  | 'recipient'

/** aggregate var_pop on columns */
export interface Transfer_var_pop_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Transfer_var_samp_fields {
  amount: Scalars['Float'] | null
  blockTimestamp: Scalars['Float'] | null
  __typename: 'Transfer_var_samp_fields'
}

/** aggregate variance on columns */
export interface Transfer_variance_fields {
  amount: Scalars['Float'] | null
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

/** aggregated selection of "WorkflowModuleType" */
export interface WorkflowModuleType_aggregate {
  aggregate: WorkflowModuleType_aggregate_fields | null
  nodes: WorkflowModuleType[]
  __typename: 'WorkflowModuleType_aggregate'
}

/** aggregate fields of "WorkflowModuleType" */
export interface WorkflowModuleType_aggregate_fields {
  avg: WorkflowModuleType_avg_fields | null
  count: Scalars['Int']
  max: WorkflowModuleType_max_fields | null
  min: WorkflowModuleType_min_fields | null
  stddev: WorkflowModuleType_stddev_fields | null
  stddev_pop: WorkflowModuleType_stddev_pop_fields | null
  stddev_samp: WorkflowModuleType_stddev_samp_fields | null
  sum: WorkflowModuleType_sum_fields | null
  var_pop: WorkflowModuleType_var_pop_fields | null
  var_samp: WorkflowModuleType_var_samp_fields | null
  variance: WorkflowModuleType_variance_fields | null
  __typename: 'WorkflowModuleType_aggregate_fields'
}

/** aggregate avg on columns */
export interface WorkflowModuleType_avg_fields {
  chainId: Scalars['Float'] | null
  majorVersion: Scalars['Float'] | null
  minorVersion: Scalars['Float'] | null
  patchVersion: Scalars['Float'] | null
  __typename: 'WorkflowModuleType_avg_fields'
}

/** unique or primary key constraints on table "WorkflowModuleType" */
export type WorkflowModuleType_constraint = 'WorkflowModuleType_pkey'

/** aggregate max on columns */
export interface WorkflowModuleType_max_fields {
  beacon: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  majorVersion: Scalars['numeric'] | null
  minorVersion: Scalars['numeric'] | null
  name: Scalars['String'] | null
  patchVersion: Scalars['numeric'] | null
  url: Scalars['String'] | null
  __typename: 'WorkflowModuleType_max_fields'
}

/** aggregate min on columns */
export interface WorkflowModuleType_min_fields {
  beacon: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  majorVersion: Scalars['numeric'] | null
  minorVersion: Scalars['numeric'] | null
  name: Scalars['String'] | null
  patchVersion: Scalars['numeric'] | null
  url: Scalars['String'] | null
  __typename: 'WorkflowModuleType_min_fields'
}

/** response of any mutation on the table "WorkflowModuleType" */
export interface WorkflowModuleType_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: WorkflowModuleType[]
  __typename: 'WorkflowModuleType_mutation_response'
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

/** aggregate stddev on columns */
export interface WorkflowModuleType_stddev_fields {
  chainId: Scalars['Float'] | null
  majorVersion: Scalars['Float'] | null
  minorVersion: Scalars['Float'] | null
  patchVersion: Scalars['Float'] | null
  __typename: 'WorkflowModuleType_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface WorkflowModuleType_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  majorVersion: Scalars['Float'] | null
  minorVersion: Scalars['Float'] | null
  patchVersion: Scalars['Float'] | null
  __typename: 'WorkflowModuleType_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface WorkflowModuleType_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  majorVersion: Scalars['Float'] | null
  minorVersion: Scalars['Float'] | null
  patchVersion: Scalars['Float'] | null
  __typename: 'WorkflowModuleType_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface WorkflowModuleType_sum_fields {
  chainId: Scalars['Int'] | null
  majorVersion: Scalars['numeric'] | null
  minorVersion: Scalars['numeric'] | null
  patchVersion: Scalars['numeric'] | null
  __typename: 'WorkflowModuleType_sum_fields'
}

/** update columns of table "WorkflowModuleType" */
export type WorkflowModuleType_update_column =
  | 'beacon'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'majorVersion'
  | 'minorVersion'
  | 'name'
  | 'patchVersion'
  | 'url'

/** aggregate var_pop on columns */
export interface WorkflowModuleType_var_pop_fields {
  chainId: Scalars['Float'] | null
  majorVersion: Scalars['Float'] | null
  minorVersion: Scalars['Float'] | null
  patchVersion: Scalars['Float'] | null
  __typename: 'WorkflowModuleType_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface WorkflowModuleType_var_samp_fields {
  chainId: Scalars['Float'] | null
  majorVersion: Scalars['Float'] | null
  minorVersion: Scalars['Float'] | null
  patchVersion: Scalars['Float'] | null
  __typename: 'WorkflowModuleType_var_samp_fields'
}

/** aggregate variance on columns */
export interface WorkflowModuleType_variance_fields {
  chainId: Scalars['Float'] | null
  majorVersion: Scalars['Float'] | null
  minorVersion: Scalars['Float'] | null
  patchVersion: Scalars['Float'] | null
  __typename: 'WorkflowModuleType_variance_fields'
}

/** aggregated selection of "WorkflowModule" */
export interface WorkflowModule_aggregate {
  aggregate: WorkflowModule_aggregate_fields | null
  nodes: WorkflowModule[]
  __typename: 'WorkflowModule_aggregate'
}

/** aggregate fields of "WorkflowModule" */
export interface WorkflowModule_aggregate_fields {
  avg: WorkflowModule_avg_fields | null
  count: Scalars['Int']
  max: WorkflowModule_max_fields | null
  min: WorkflowModule_min_fields | null
  stddev: WorkflowModule_stddev_fields | null
  stddev_pop: WorkflowModule_stddev_pop_fields | null
  stddev_samp: WorkflowModule_stddev_samp_fields | null
  sum: WorkflowModule_sum_fields | null
  var_pop: WorkflowModule_var_pop_fields | null
  var_samp: WorkflowModule_var_samp_fields | null
  variance: WorkflowModule_variance_fields | null
  __typename: 'WorkflowModule_aggregate_fields'
}

/** aggregate avg on columns */
export interface WorkflowModule_avg_fields {
  chainId: Scalars['Float'] | null
  __typename: 'WorkflowModule_avg_fields'
}

/** unique or primary key constraints on table "WorkflowModule" */
export type WorkflowModule_constraint = 'WorkflowModule_pkey'

/** aggregate max on columns */
export interface WorkflowModule_max_fields {
  address: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  moduleType_id: Scalars['String'] | null
  orchestrator: Scalars['String'] | null
  __typename: 'WorkflowModule_max_fields'
}

/** aggregate min on columns */
export interface WorkflowModule_min_fields {
  address: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  id: Scalars['String'] | null
  moduleType_id: Scalars['String'] | null
  orchestrator: Scalars['String'] | null
  __typename: 'WorkflowModule_min_fields'
}

/** response of any mutation on the table "WorkflowModule" */
export interface WorkflowModule_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: WorkflowModule[]
  __typename: 'WorkflowModule_mutation_response'
}

/** select columns of table "WorkflowModule" */
export type WorkflowModule_select_column =
  | 'address'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'moduleType_id'
  | 'orchestrator'

/** aggregate stddev on columns */
export interface WorkflowModule_stddev_fields {
  chainId: Scalars['Float'] | null
  __typename: 'WorkflowModule_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface WorkflowModule_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'WorkflowModule_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface WorkflowModule_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'WorkflowModule_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface WorkflowModule_sum_fields {
  chainId: Scalars['Int'] | null
  __typename: 'WorkflowModule_sum_fields'
}

/** update columns of table "WorkflowModule" */
export type WorkflowModule_update_column =
  | 'address'
  | 'chainId'
  | 'db_write_timestamp'
  | 'id'
  | 'moduleType_id'
  | 'orchestrator'

/** aggregate var_pop on columns */
export interface WorkflowModule_var_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'WorkflowModule_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface WorkflowModule_var_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'WorkflowModule_var_samp_fields'
}

/** aggregate variance on columns */
export interface WorkflowModule_variance_fields {
  chainId: Scalars['Float'] | null
  __typename: 'WorkflowModule_variance_fields'
}

/** aggregated selection of "Workflow" */
export interface Workflow_aggregate {
  aggregate: Workflow_aggregate_fields | null
  nodes: Workflow[]
  __typename: 'Workflow_aggregate'
}

/** aggregate fields of "Workflow" */
export interface Workflow_aggregate_fields {
  avg: Workflow_avg_fields | null
  count: Scalars['Int']
  max: Workflow_max_fields | null
  min: Workflow_min_fields | null
  stddev: Workflow_stddev_fields | null
  stddev_pop: Workflow_stddev_pop_fields | null
  stddev_samp: Workflow_stddev_samp_fields | null
  sum: Workflow_sum_fields | null
  var_pop: Workflow_var_pop_fields | null
  var_samp: Workflow_var_samp_fields | null
  variance: Workflow_variance_fields | null
  __typename: 'Workflow_aggregate_fields'
}

/** aggregate avg on columns */
export interface Workflow_avg_fields {
  chainId: Scalars['Float'] | null
  __typename: 'Workflow_avg_fields'
}

/** unique or primary key constraints on table "Workflow" */
export type Workflow_constraint = 'Workflow_pkey'

/** aggregate max on columns */
export interface Workflow_max_fields {
  authorizer_id: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  fundingManager_id: Scalars['String'] | null
  id: Scalars['String'] | null
  optionalModules: Scalars['String'][] | null
  orchestrator: Scalars['String'] | null
  paymentProcessor_id: Scalars['String'] | null
  __typename: 'Workflow_max_fields'
}

/** aggregate min on columns */
export interface Workflow_min_fields {
  authorizer_id: Scalars['String'] | null
  chainId: Scalars['Int'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  fundingManager_id: Scalars['String'] | null
  id: Scalars['String'] | null
  optionalModules: Scalars['String'][] | null
  orchestrator: Scalars['String'] | null
  paymentProcessor_id: Scalars['String'] | null
  __typename: 'Workflow_min_fields'
}

/** response of any mutation on the table "Workflow" */
export interface Workflow_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Workflow[]
  __typename: 'Workflow_mutation_response'
}

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

/** aggregate stddev on columns */
export interface Workflow_stddev_fields {
  chainId: Scalars['Float'] | null
  __typename: 'Workflow_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Workflow_stddev_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'Workflow_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Workflow_stddev_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'Workflow_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Workflow_sum_fields {
  chainId: Scalars['Int'] | null
  __typename: 'Workflow_sum_fields'
}

/** update columns of table "Workflow" */
export type Workflow_update_column =
  | 'authorizer_id'
  | 'chainId'
  | 'db_write_timestamp'
  | 'fundingManager_id'
  | 'id'
  | 'optionalModules'
  | 'orchestrator'
  | 'paymentProcessor_id'

/** aggregate var_pop on columns */
export interface Workflow_var_pop_fields {
  chainId: Scalars['Float'] | null
  __typename: 'Workflow_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Workflow_var_samp_fields {
  chainId: Scalars['Float'] | null
  __typename: 'Workflow_var_samp_fields'
}

/** aggregate variance on columns */
export interface Workflow_variance_fields {
  chainId: Scalars['Float'] | null
  __typename: 'Workflow_variance_fields'
}

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

/** aggregated selection of "chain_metadata" */
export interface chain_metadata_aggregate {
  aggregate: chain_metadata_aggregate_fields | null
  nodes: chain_metadata[]
  __typename: 'chain_metadata_aggregate'
}

/** aggregate fields of "chain_metadata" */
export interface chain_metadata_aggregate_fields {
  avg: chain_metadata_avg_fields | null
  count: Scalars['Int']
  max: chain_metadata_max_fields | null
  min: chain_metadata_min_fields | null
  stddev: chain_metadata_stddev_fields | null
  stddev_pop: chain_metadata_stddev_pop_fields | null
  stddev_samp: chain_metadata_stddev_samp_fields | null
  sum: chain_metadata_sum_fields | null
  var_pop: chain_metadata_var_pop_fields | null
  var_samp: chain_metadata_var_samp_fields | null
  variance: chain_metadata_variance_fields | null
  __typename: 'chain_metadata_aggregate_fields'
}

/** aggregate avg on columns */
export interface chain_metadata_avg_fields {
  block_height: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  end_block: Scalars['Float'] | null
  first_event_block_number: Scalars['Float'] | null
  latest_fetched_block_number: Scalars['Float'] | null
  latest_processed_block: Scalars['Float'] | null
  num_batches_fetched: Scalars['Float'] | null
  num_events_processed: Scalars['Float'] | null
  start_block: Scalars['Float'] | null
  __typename: 'chain_metadata_avg_fields'
}

/** unique or primary key constraints on table "chain_metadata" */
export type chain_metadata_constraint = 'chain_metadata_pkey'

/** aggregate max on columns */
export interface chain_metadata_max_fields {
  block_height: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  end_block: Scalars['Int'] | null
  first_event_block_number: Scalars['Int'] | null
  latest_fetched_block_number: Scalars['Int'] | null
  latest_processed_block: Scalars['Int'] | null
  num_batches_fetched: Scalars['Int'] | null
  num_events_processed: Scalars['Int'] | null
  start_block: Scalars['Int'] | null
  timestamp_caught_up_to_head_or_endblock: Scalars['timestamptz'] | null
  __typename: 'chain_metadata_max_fields'
}

/** aggregate min on columns */
export interface chain_metadata_min_fields {
  block_height: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  end_block: Scalars['Int'] | null
  first_event_block_number: Scalars['Int'] | null
  latest_fetched_block_number: Scalars['Int'] | null
  latest_processed_block: Scalars['Int'] | null
  num_batches_fetched: Scalars['Int'] | null
  num_events_processed: Scalars['Int'] | null
  start_block: Scalars['Int'] | null
  timestamp_caught_up_to_head_or_endblock: Scalars['timestamptz'] | null
  __typename: 'chain_metadata_min_fields'
}

/** response of any mutation on the table "chain_metadata" */
export interface chain_metadata_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: chain_metadata[]
  __typename: 'chain_metadata_mutation_response'
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

/** aggregate stddev on columns */
export interface chain_metadata_stddev_fields {
  block_height: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  end_block: Scalars['Float'] | null
  first_event_block_number: Scalars['Float'] | null
  latest_fetched_block_number: Scalars['Float'] | null
  latest_processed_block: Scalars['Float'] | null
  num_batches_fetched: Scalars['Float'] | null
  num_events_processed: Scalars['Float'] | null
  start_block: Scalars['Float'] | null
  __typename: 'chain_metadata_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface chain_metadata_stddev_pop_fields {
  block_height: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  end_block: Scalars['Float'] | null
  first_event_block_number: Scalars['Float'] | null
  latest_fetched_block_number: Scalars['Float'] | null
  latest_processed_block: Scalars['Float'] | null
  num_batches_fetched: Scalars['Float'] | null
  num_events_processed: Scalars['Float'] | null
  start_block: Scalars['Float'] | null
  __typename: 'chain_metadata_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface chain_metadata_stddev_samp_fields {
  block_height: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  end_block: Scalars['Float'] | null
  first_event_block_number: Scalars['Float'] | null
  latest_fetched_block_number: Scalars['Float'] | null
  latest_processed_block: Scalars['Float'] | null
  num_batches_fetched: Scalars['Float'] | null
  num_events_processed: Scalars['Float'] | null
  start_block: Scalars['Float'] | null
  __typename: 'chain_metadata_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface chain_metadata_sum_fields {
  block_height: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  end_block: Scalars['Int'] | null
  first_event_block_number: Scalars['Int'] | null
  latest_fetched_block_number: Scalars['Int'] | null
  latest_processed_block: Scalars['Int'] | null
  num_batches_fetched: Scalars['Int'] | null
  num_events_processed: Scalars['Int'] | null
  start_block: Scalars['Int'] | null
  __typename: 'chain_metadata_sum_fields'
}

/** update columns of table "chain_metadata" */
export type chain_metadata_update_column =
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

/** aggregate var_pop on columns */
export interface chain_metadata_var_pop_fields {
  block_height: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  end_block: Scalars['Float'] | null
  first_event_block_number: Scalars['Float'] | null
  latest_fetched_block_number: Scalars['Float'] | null
  latest_processed_block: Scalars['Float'] | null
  num_batches_fetched: Scalars['Float'] | null
  num_events_processed: Scalars['Float'] | null
  start_block: Scalars['Float'] | null
  __typename: 'chain_metadata_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface chain_metadata_var_samp_fields {
  block_height: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  end_block: Scalars['Float'] | null
  first_event_block_number: Scalars['Float'] | null
  latest_fetched_block_number: Scalars['Float'] | null
  latest_processed_block: Scalars['Float'] | null
  num_batches_fetched: Scalars['Float'] | null
  num_events_processed: Scalars['Float'] | null
  start_block: Scalars['Float'] | null
  __typename: 'chain_metadata_var_samp_fields'
}

/** aggregate variance on columns */
export interface chain_metadata_variance_fields {
  block_height: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  end_block: Scalars['Float'] | null
  first_event_block_number: Scalars['Float'] | null
  latest_fetched_block_number: Scalars['Float'] | null
  latest_processed_block: Scalars['Float'] | null
  num_batches_fetched: Scalars['Float'] | null
  num_events_processed: Scalars['Float'] | null
  start_block: Scalars['Float'] | null
  __typename: 'chain_metadata_variance_fields'
}

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

/** aggregated selection of "dynamic_contract_registry" */
export interface dynamic_contract_registry_aggregate {
  aggregate: dynamic_contract_registry_aggregate_fields | null
  nodes: dynamic_contract_registry[]
  __typename: 'dynamic_contract_registry_aggregate'
}

/** aggregate fields of "dynamic_contract_registry" */
export interface dynamic_contract_registry_aggregate_fields {
  avg: dynamic_contract_registry_avg_fields | null
  count: Scalars['Int']
  max: dynamic_contract_registry_max_fields | null
  min: dynamic_contract_registry_min_fields | null
  stddev: dynamic_contract_registry_stddev_fields | null
  stddev_pop: dynamic_contract_registry_stddev_pop_fields | null
  stddev_samp: dynamic_contract_registry_stddev_samp_fields | null
  sum: dynamic_contract_registry_sum_fields | null
  var_pop: dynamic_contract_registry_var_pop_fields | null
  var_samp: dynamic_contract_registry_var_samp_fields | null
  variance: dynamic_contract_registry_variance_fields | null
  __typename: 'dynamic_contract_registry_aggregate_fields'
}

/** aggregate avg on columns */
export interface dynamic_contract_registry_avg_fields {
  chain_id: Scalars['Float'] | null
  registering_event_block_number: Scalars['Float'] | null
  registering_event_block_timestamp: Scalars['Float'] | null
  registering_event_log_index: Scalars['Float'] | null
  __typename: 'dynamic_contract_registry_avg_fields'
}

/** unique or primary key constraints on table "dynamic_contract_registry" */
export type dynamic_contract_registry_constraint =
  'dynamic_contract_registry_pkey'

/** aggregate max on columns */
export interface dynamic_contract_registry_max_fields {
  chain_id: Scalars['Int'] | null
  contract_address: Scalars['String'] | null
  contract_type: Scalars['contract_type'] | null
  id: Scalars['String'] | null
  registering_event_block_number: Scalars['Int'] | null
  registering_event_block_timestamp: Scalars['Int'] | null
  registering_event_contract_name: Scalars['String'] | null
  registering_event_log_index: Scalars['Int'] | null
  registering_event_name: Scalars['String'] | null
  registering_event_src_address: Scalars['String'] | null
  __typename: 'dynamic_contract_registry_max_fields'
}

/** aggregate min on columns */
export interface dynamic_contract_registry_min_fields {
  chain_id: Scalars['Int'] | null
  contract_address: Scalars['String'] | null
  contract_type: Scalars['contract_type'] | null
  id: Scalars['String'] | null
  registering_event_block_number: Scalars['Int'] | null
  registering_event_block_timestamp: Scalars['Int'] | null
  registering_event_contract_name: Scalars['String'] | null
  registering_event_log_index: Scalars['Int'] | null
  registering_event_name: Scalars['String'] | null
  registering_event_src_address: Scalars['String'] | null
  __typename: 'dynamic_contract_registry_min_fields'
}

/** response of any mutation on the table "dynamic_contract_registry" */
export interface dynamic_contract_registry_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: dynamic_contract_registry[]
  __typename: 'dynamic_contract_registry_mutation_response'
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

/** aggregate stddev on columns */
export interface dynamic_contract_registry_stddev_fields {
  chain_id: Scalars['Float'] | null
  registering_event_block_number: Scalars['Float'] | null
  registering_event_block_timestamp: Scalars['Float'] | null
  registering_event_log_index: Scalars['Float'] | null
  __typename: 'dynamic_contract_registry_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface dynamic_contract_registry_stddev_pop_fields {
  chain_id: Scalars['Float'] | null
  registering_event_block_number: Scalars['Float'] | null
  registering_event_block_timestamp: Scalars['Float'] | null
  registering_event_log_index: Scalars['Float'] | null
  __typename: 'dynamic_contract_registry_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface dynamic_contract_registry_stddev_samp_fields {
  chain_id: Scalars['Float'] | null
  registering_event_block_number: Scalars['Float'] | null
  registering_event_block_timestamp: Scalars['Float'] | null
  registering_event_log_index: Scalars['Float'] | null
  __typename: 'dynamic_contract_registry_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface dynamic_contract_registry_sum_fields {
  chain_id: Scalars['Int'] | null
  registering_event_block_number: Scalars['Int'] | null
  registering_event_block_timestamp: Scalars['Int'] | null
  registering_event_log_index: Scalars['Int'] | null
  __typename: 'dynamic_contract_registry_sum_fields'
}

/** update columns of table "dynamic_contract_registry" */
export type dynamic_contract_registry_update_column =
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

/** aggregate var_pop on columns */
export interface dynamic_contract_registry_var_pop_fields {
  chain_id: Scalars['Float'] | null
  registering_event_block_number: Scalars['Float'] | null
  registering_event_block_timestamp: Scalars['Float'] | null
  registering_event_log_index: Scalars['Float'] | null
  __typename: 'dynamic_contract_registry_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface dynamic_contract_registry_var_samp_fields {
  chain_id: Scalars['Float'] | null
  registering_event_block_number: Scalars['Float'] | null
  registering_event_block_timestamp: Scalars['Float'] | null
  registering_event_log_index: Scalars['Float'] | null
  __typename: 'dynamic_contract_registry_var_samp_fields'
}

/** aggregate variance on columns */
export interface dynamic_contract_registry_variance_fields {
  chain_id: Scalars['Float'] | null
  registering_event_block_number: Scalars['Float'] | null
  registering_event_block_timestamp: Scalars['Float'] | null
  registering_event_log_index: Scalars['Float'] | null
  __typename: 'dynamic_contract_registry_variance_fields'
}

/** columns and relationships of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data {
  block_hash: Scalars['String']
  block_number: Scalars['Int']
  block_timestamp: Scalars['Int']
  chain_id: Scalars['Int']
  __typename: 'end_of_block_range_scanned_data'
}

/** aggregated selection of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_aggregate {
  aggregate: end_of_block_range_scanned_data_aggregate_fields | null
  nodes: end_of_block_range_scanned_data[]
  __typename: 'end_of_block_range_scanned_data_aggregate'
}

/** aggregate fields of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_aggregate_fields {
  avg: end_of_block_range_scanned_data_avg_fields | null
  count: Scalars['Int']
  max: end_of_block_range_scanned_data_max_fields | null
  min: end_of_block_range_scanned_data_min_fields | null
  stddev: end_of_block_range_scanned_data_stddev_fields | null
  stddev_pop: end_of_block_range_scanned_data_stddev_pop_fields | null
  stddev_samp: end_of_block_range_scanned_data_stddev_samp_fields | null
  sum: end_of_block_range_scanned_data_sum_fields | null
  var_pop: end_of_block_range_scanned_data_var_pop_fields | null
  var_samp: end_of_block_range_scanned_data_var_samp_fields | null
  variance: end_of_block_range_scanned_data_variance_fields | null
  __typename: 'end_of_block_range_scanned_data_aggregate_fields'
}

/** aggregate avg on columns */
export interface end_of_block_range_scanned_data_avg_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  __typename: 'end_of_block_range_scanned_data_avg_fields'
}

/** unique or primary key constraints on table "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data_constraint =
  'end_of_block_range_scanned_data_pkey'

/** aggregate max on columns */
export interface end_of_block_range_scanned_data_max_fields {
  block_hash: Scalars['String'] | null
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  __typename: 'end_of_block_range_scanned_data_max_fields'
}

/** aggregate min on columns */
export interface end_of_block_range_scanned_data_min_fields {
  block_hash: Scalars['String'] | null
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  __typename: 'end_of_block_range_scanned_data_min_fields'
}

/** response of any mutation on the table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: end_of_block_range_scanned_data[]
  __typename: 'end_of_block_range_scanned_data_mutation_response'
}

/** select columns of table "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data_select_column =
  | 'block_hash'
  | 'block_number'
  | 'block_timestamp'
  | 'chain_id'

/** aggregate stddev on columns */
export interface end_of_block_range_scanned_data_stddev_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  __typename: 'end_of_block_range_scanned_data_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface end_of_block_range_scanned_data_stddev_pop_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  __typename: 'end_of_block_range_scanned_data_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface end_of_block_range_scanned_data_stddev_samp_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  __typename: 'end_of_block_range_scanned_data_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface end_of_block_range_scanned_data_sum_fields {
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  __typename: 'end_of_block_range_scanned_data_sum_fields'
}

/** update columns of table "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data_update_column =
  | 'block_hash'
  | 'block_number'
  | 'block_timestamp'
  | 'chain_id'

/** aggregate var_pop on columns */
export interface end_of_block_range_scanned_data_var_pop_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  __typename: 'end_of_block_range_scanned_data_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface end_of_block_range_scanned_data_var_samp_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  __typename: 'end_of_block_range_scanned_data_var_samp_fields'
}

/** aggregate variance on columns */
export interface end_of_block_range_scanned_data_variance_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  __typename: 'end_of_block_range_scanned_data_variance_fields'
}

/** columns and relationships of "event_sync_state" */
export interface event_sync_state {
  block_number: Scalars['Int']
  block_timestamp: Scalars['Int']
  chain_id: Scalars['Int']
  is_pre_registering_dynamic_contracts: Scalars['Boolean']
  log_index: Scalars['Int']
  __typename: 'event_sync_state'
}

/** aggregated selection of "event_sync_state" */
export interface event_sync_state_aggregate {
  aggregate: event_sync_state_aggregate_fields | null
  nodes: event_sync_state[]
  __typename: 'event_sync_state_aggregate'
}

/** aggregate fields of "event_sync_state" */
export interface event_sync_state_aggregate_fields {
  avg: event_sync_state_avg_fields | null
  count: Scalars['Int']
  max: event_sync_state_max_fields | null
  min: event_sync_state_min_fields | null
  stddev: event_sync_state_stddev_fields | null
  stddev_pop: event_sync_state_stddev_pop_fields | null
  stddev_samp: event_sync_state_stddev_samp_fields | null
  sum: event_sync_state_sum_fields | null
  var_pop: event_sync_state_var_pop_fields | null
  var_samp: event_sync_state_var_samp_fields | null
  variance: event_sync_state_variance_fields | null
  __typename: 'event_sync_state_aggregate_fields'
}

/** aggregate avg on columns */
export interface event_sync_state_avg_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  __typename: 'event_sync_state_avg_fields'
}

/** unique or primary key constraints on table "event_sync_state" */
export type event_sync_state_constraint = 'event_sync_state_pkey'

/** aggregate max on columns */
export interface event_sync_state_max_fields {
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  log_index: Scalars['Int'] | null
  __typename: 'event_sync_state_max_fields'
}

/** aggregate min on columns */
export interface event_sync_state_min_fields {
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  log_index: Scalars['Int'] | null
  __typename: 'event_sync_state_min_fields'
}

/** response of any mutation on the table "event_sync_state" */
export interface event_sync_state_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: event_sync_state[]
  __typename: 'event_sync_state_mutation_response'
}

/** select columns of table "event_sync_state" */
export type event_sync_state_select_column =
  | 'block_number'
  | 'block_timestamp'
  | 'chain_id'
  | 'is_pre_registering_dynamic_contracts'
  | 'log_index'

/** aggregate stddev on columns */
export interface event_sync_state_stddev_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  __typename: 'event_sync_state_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface event_sync_state_stddev_pop_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  __typename: 'event_sync_state_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface event_sync_state_stddev_samp_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  __typename: 'event_sync_state_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface event_sync_state_sum_fields {
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  log_index: Scalars['Int'] | null
  __typename: 'event_sync_state_sum_fields'
}

/** update columns of table "event_sync_state" */
export type event_sync_state_update_column =
  | 'block_number'
  | 'block_timestamp'
  | 'chain_id'
  | 'is_pre_registering_dynamic_contracts'
  | 'log_index'

/** aggregate var_pop on columns */
export interface event_sync_state_var_pop_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  __typename: 'event_sync_state_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface event_sync_state_var_samp_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  __typename: 'event_sync_state_var_samp_fields'
}

/** aggregate variance on columns */
export interface event_sync_state_variance_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  __typename: 'event_sync_state_variance_fields'
}

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "BondingCurve" */
  delete_BondingCurve: BondingCurve_mutation_response | null
  /** delete single row from the table: "BondingCurve" */
  delete_BondingCurve_by_pk: BondingCurve | null
  /** delete data from the table: "Bounty" */
  delete_Bounty: Bounty_mutation_response | null
  /** delete data from the table: "BountyClaim" */
  delete_BountyClaim: BountyClaim_mutation_response | null
  /** delete single row from the table: "BountyClaim" */
  delete_BountyClaim_by_pk: BountyClaim | null
  /** delete data from the table: "BountyContributor" */
  delete_BountyContributor: BountyContributor_mutation_response | null
  /** delete single row from the table: "BountyContributor" */
  delete_BountyContributor_by_pk: BountyContributor | null
  /** delete data from the table: "BountyModule" */
  delete_BountyModule: BountyModule_mutation_response | null
  /** delete single row from the table: "BountyModule" */
  delete_BountyModule_by_pk: BountyModule | null
  /** delete single row from the table: "Bounty" */
  delete_Bounty_by_pk: Bounty | null
  /** delete data from the table: "CurveDayData" */
  delete_CurveDayData: CurveDayData_mutation_response | null
  /** delete single row from the table: "CurveDayData" */
  delete_CurveDayData_by_pk: CurveDayData | null
  /** delete data from the table: "CurveHourData" */
  delete_CurveHourData: CurveHourData_mutation_response | null
  /** delete single row from the table: "CurveHourData" */
  delete_CurveHourData_by_pk: CurveHourData | null
  /** delete data from the table: "Deposit" */
  delete_Deposit: Deposit_mutation_response | null
  /** delete data from the table: "DepositVault" */
  delete_DepositVault: DepositVault_mutation_response | null
  /** delete single row from the table: "DepositVault" */
  delete_DepositVault_by_pk: DepositVault | null
  /** delete single row from the table: "Deposit" */
  delete_Deposit_by_pk: Deposit | null
  /** delete data from the table: "IssuanceTokenDayData" */
  delete_IssuanceTokenDayData: IssuanceTokenDayData_mutation_response | null
  /** delete single row from the table: "IssuanceTokenDayData" */
  delete_IssuanceTokenDayData_by_pk: IssuanceTokenDayData | null
  /** delete data from the table: "IssuanceTokenHourData" */
  delete_IssuanceTokenHourData: IssuanceTokenHourData_mutation_response | null
  /** delete single row from the table: "IssuanceTokenHourData" */
  delete_IssuanceTokenHourData_by_pk: IssuanceTokenHourData | null
  /** delete data from the table: "LinearVesting" */
  delete_LinearVesting: LinearVesting_mutation_response | null
  /** delete single row from the table: "LinearVesting" */
  delete_LinearVesting_by_pk: LinearVesting | null
  /** delete data from the table: "ProjectFee" */
  delete_ProjectFee: ProjectFee_mutation_response | null
  /** delete single row from the table: "ProjectFee" */
  delete_ProjectFee_by_pk: ProjectFee | null
  /** delete data from the table: "ProtocolFee" */
  delete_ProtocolFee: ProtocolFee_mutation_response | null
  /** delete single row from the table: "ProtocolFee" */
  delete_ProtocolFee_by_pk: ProtocolFee | null
  /** delete data from the table: "StreamingPaymentProcessor" */
  delete_StreamingPaymentProcessor: StreamingPaymentProcessor_mutation_response | null
  /** delete single row from the table: "StreamingPaymentProcessor" */
  delete_StreamingPaymentProcessor_by_pk: StreamingPaymentProcessor | null
  /** delete data from the table: "Swap" */
  delete_Swap: Swap_mutation_response | null
  /** delete single row from the table: "Swap" */
  delete_Swap_by_pk: Swap | null
  /** delete data from the table: "Token" */
  delete_Token: Token_mutation_response | null
  /** delete single row from the table: "Token" */
  delete_Token_by_pk: Token | null
  /** delete data from the table: "Transfer" */
  delete_Transfer: Transfer_mutation_response | null
  /** delete single row from the table: "Transfer" */
  delete_Transfer_by_pk: Transfer | null
  /** delete data from the table: "Workflow" */
  delete_Workflow: Workflow_mutation_response | null
  /** delete data from the table: "WorkflowModule" */
  delete_WorkflowModule: WorkflowModule_mutation_response | null
  /** delete data from the table: "WorkflowModuleType" */
  delete_WorkflowModuleType: WorkflowModuleType_mutation_response | null
  /** delete single row from the table: "WorkflowModuleType" */
  delete_WorkflowModuleType_by_pk: WorkflowModuleType | null
  /** delete single row from the table: "WorkflowModule" */
  delete_WorkflowModule_by_pk: WorkflowModule | null
  /** delete single row from the table: "Workflow" */
  delete_Workflow_by_pk: Workflow | null
  /** delete data from the table: "chain_metadata" */
  delete_chain_metadata: chain_metadata_mutation_response | null
  /** delete single row from the table: "chain_metadata" */
  delete_chain_metadata_by_pk: chain_metadata | null
  /** delete data from the table: "dynamic_contract_registry" */
  delete_dynamic_contract_registry: dynamic_contract_registry_mutation_response | null
  /** delete single row from the table: "dynamic_contract_registry" */
  delete_dynamic_contract_registry_by_pk: dynamic_contract_registry | null
  /** delete data from the table: "end_of_block_range_scanned_data" */
  delete_end_of_block_range_scanned_data: end_of_block_range_scanned_data_mutation_response | null
  /** delete single row from the table: "end_of_block_range_scanned_data" */
  delete_end_of_block_range_scanned_data_by_pk: end_of_block_range_scanned_data | null
  /** delete data from the table: "event_sync_state" */
  delete_event_sync_state: event_sync_state_mutation_response | null
  /** delete single row from the table: "event_sync_state" */
  delete_event_sync_state_by_pk: event_sync_state | null
  /** delete data from the table: "persisted_state" */
  delete_persisted_state: persisted_state_mutation_response | null
  /** delete single row from the table: "persisted_state" */
  delete_persisted_state_by_pk: persisted_state | null
  /** delete data from the table: "raw_events" */
  delete_raw_events: raw_events_mutation_response | null
  /** delete single row from the table: "raw_events" */
  delete_raw_events_by_pk: raw_events | null
  /** insert data into the table: "BondingCurve" */
  insert_BondingCurve: BondingCurve_mutation_response | null
  /** insert a single row into the table: "BondingCurve" */
  insert_BondingCurve_one: BondingCurve | null
  /** insert data into the table: "Bounty" */
  insert_Bounty: Bounty_mutation_response | null
  /** insert data into the table: "BountyClaim" */
  insert_BountyClaim: BountyClaim_mutation_response | null
  /** insert a single row into the table: "BountyClaim" */
  insert_BountyClaim_one: BountyClaim | null
  /** insert data into the table: "BountyContributor" */
  insert_BountyContributor: BountyContributor_mutation_response | null
  /** insert a single row into the table: "BountyContributor" */
  insert_BountyContributor_one: BountyContributor | null
  /** insert data into the table: "BountyModule" */
  insert_BountyModule: BountyModule_mutation_response | null
  /** insert a single row into the table: "BountyModule" */
  insert_BountyModule_one: BountyModule | null
  /** insert a single row into the table: "Bounty" */
  insert_Bounty_one: Bounty | null
  /** insert data into the table: "CurveDayData" */
  insert_CurveDayData: CurveDayData_mutation_response | null
  /** insert a single row into the table: "CurveDayData" */
  insert_CurveDayData_one: CurveDayData | null
  /** insert data into the table: "CurveHourData" */
  insert_CurveHourData: CurveHourData_mutation_response | null
  /** insert a single row into the table: "CurveHourData" */
  insert_CurveHourData_one: CurveHourData | null
  /** insert data into the table: "Deposit" */
  insert_Deposit: Deposit_mutation_response | null
  /** insert data into the table: "DepositVault" */
  insert_DepositVault: DepositVault_mutation_response | null
  /** insert a single row into the table: "DepositVault" */
  insert_DepositVault_one: DepositVault | null
  /** insert a single row into the table: "Deposit" */
  insert_Deposit_one: Deposit | null
  /** insert data into the table: "IssuanceTokenDayData" */
  insert_IssuanceTokenDayData: IssuanceTokenDayData_mutation_response | null
  /** insert a single row into the table: "IssuanceTokenDayData" */
  insert_IssuanceTokenDayData_one: IssuanceTokenDayData | null
  /** insert data into the table: "IssuanceTokenHourData" */
  insert_IssuanceTokenHourData: IssuanceTokenHourData_mutation_response | null
  /** insert a single row into the table: "IssuanceTokenHourData" */
  insert_IssuanceTokenHourData_one: IssuanceTokenHourData | null
  /** insert data into the table: "LinearVesting" */
  insert_LinearVesting: LinearVesting_mutation_response | null
  /** insert a single row into the table: "LinearVesting" */
  insert_LinearVesting_one: LinearVesting | null
  /** insert data into the table: "ProjectFee" */
  insert_ProjectFee: ProjectFee_mutation_response | null
  /** insert a single row into the table: "ProjectFee" */
  insert_ProjectFee_one: ProjectFee | null
  /** insert data into the table: "ProtocolFee" */
  insert_ProtocolFee: ProtocolFee_mutation_response | null
  /** insert a single row into the table: "ProtocolFee" */
  insert_ProtocolFee_one: ProtocolFee | null
  /** insert data into the table: "StreamingPaymentProcessor" */
  insert_StreamingPaymentProcessor: StreamingPaymentProcessor_mutation_response | null
  /** insert a single row into the table: "StreamingPaymentProcessor" */
  insert_StreamingPaymentProcessor_one: StreamingPaymentProcessor | null
  /** insert data into the table: "Swap" */
  insert_Swap: Swap_mutation_response | null
  /** insert a single row into the table: "Swap" */
  insert_Swap_one: Swap | null
  /** insert data into the table: "Token" */
  insert_Token: Token_mutation_response | null
  /** insert a single row into the table: "Token" */
  insert_Token_one: Token | null
  /** insert data into the table: "Transfer" */
  insert_Transfer: Transfer_mutation_response | null
  /** insert a single row into the table: "Transfer" */
  insert_Transfer_one: Transfer | null
  /** insert data into the table: "Workflow" */
  insert_Workflow: Workflow_mutation_response | null
  /** insert data into the table: "WorkflowModule" */
  insert_WorkflowModule: WorkflowModule_mutation_response | null
  /** insert data into the table: "WorkflowModuleType" */
  insert_WorkflowModuleType: WorkflowModuleType_mutation_response | null
  /** insert a single row into the table: "WorkflowModuleType" */
  insert_WorkflowModuleType_one: WorkflowModuleType | null
  /** insert a single row into the table: "WorkflowModule" */
  insert_WorkflowModule_one: WorkflowModule | null
  /** insert a single row into the table: "Workflow" */
  insert_Workflow_one: Workflow | null
  /** insert data into the table: "chain_metadata" */
  insert_chain_metadata: chain_metadata_mutation_response | null
  /** insert a single row into the table: "chain_metadata" */
  insert_chain_metadata_one: chain_metadata | null
  /** insert data into the table: "dynamic_contract_registry" */
  insert_dynamic_contract_registry: dynamic_contract_registry_mutation_response | null
  /** insert a single row into the table: "dynamic_contract_registry" */
  insert_dynamic_contract_registry_one: dynamic_contract_registry | null
  /** insert data into the table: "end_of_block_range_scanned_data" */
  insert_end_of_block_range_scanned_data: end_of_block_range_scanned_data_mutation_response | null
  /** insert a single row into the table: "end_of_block_range_scanned_data" */
  insert_end_of_block_range_scanned_data_one: end_of_block_range_scanned_data | null
  /** insert data into the table: "event_sync_state" */
  insert_event_sync_state: event_sync_state_mutation_response | null
  /** insert a single row into the table: "event_sync_state" */
  insert_event_sync_state_one: event_sync_state | null
  /** insert data into the table: "persisted_state" */
  insert_persisted_state: persisted_state_mutation_response | null
  /** insert a single row into the table: "persisted_state" */
  insert_persisted_state_one: persisted_state | null
  /** insert data into the table: "raw_events" */
  insert_raw_events: raw_events_mutation_response | null
  /** insert a single row into the table: "raw_events" */
  insert_raw_events_one: raw_events | null
  /** update data of the table: "BondingCurve" */
  update_BondingCurve: BondingCurve_mutation_response | null
  /** update single row of the table: "BondingCurve" */
  update_BondingCurve_by_pk: BondingCurve | null
  /** update multiples rows of table: "BondingCurve" */
  update_BondingCurve_many: (BondingCurve_mutation_response | null)[] | null
  /** update data of the table: "Bounty" */
  update_Bounty: Bounty_mutation_response | null
  /** update data of the table: "BountyClaim" */
  update_BountyClaim: BountyClaim_mutation_response | null
  /** update single row of the table: "BountyClaim" */
  update_BountyClaim_by_pk: BountyClaim | null
  /** update multiples rows of table: "BountyClaim" */
  update_BountyClaim_many: (BountyClaim_mutation_response | null)[] | null
  /** update data of the table: "BountyContributor" */
  update_BountyContributor: BountyContributor_mutation_response | null
  /** update single row of the table: "BountyContributor" */
  update_BountyContributor_by_pk: BountyContributor | null
  /** update multiples rows of table: "BountyContributor" */
  update_BountyContributor_many:
    | (BountyContributor_mutation_response | null)[]
    | null
  /** update data of the table: "BountyModule" */
  update_BountyModule: BountyModule_mutation_response | null
  /** update single row of the table: "BountyModule" */
  update_BountyModule_by_pk: BountyModule | null
  /** update multiples rows of table: "BountyModule" */
  update_BountyModule_many: (BountyModule_mutation_response | null)[] | null
  /** update single row of the table: "Bounty" */
  update_Bounty_by_pk: Bounty | null
  /** update multiples rows of table: "Bounty" */
  update_Bounty_many: (Bounty_mutation_response | null)[] | null
  /** update data of the table: "CurveDayData" */
  update_CurveDayData: CurveDayData_mutation_response | null
  /** update single row of the table: "CurveDayData" */
  update_CurveDayData_by_pk: CurveDayData | null
  /** update multiples rows of table: "CurveDayData" */
  update_CurveDayData_many: (CurveDayData_mutation_response | null)[] | null
  /** update data of the table: "CurveHourData" */
  update_CurveHourData: CurveHourData_mutation_response | null
  /** update single row of the table: "CurveHourData" */
  update_CurveHourData_by_pk: CurveHourData | null
  /** update multiples rows of table: "CurveHourData" */
  update_CurveHourData_many: (CurveHourData_mutation_response | null)[] | null
  /** update data of the table: "Deposit" */
  update_Deposit: Deposit_mutation_response | null
  /** update data of the table: "DepositVault" */
  update_DepositVault: DepositVault_mutation_response | null
  /** update single row of the table: "DepositVault" */
  update_DepositVault_by_pk: DepositVault | null
  /** update multiples rows of table: "DepositVault" */
  update_DepositVault_many: (DepositVault_mutation_response | null)[] | null
  /** update single row of the table: "Deposit" */
  update_Deposit_by_pk: Deposit | null
  /** update multiples rows of table: "Deposit" */
  update_Deposit_many: (Deposit_mutation_response | null)[] | null
  /** update data of the table: "IssuanceTokenDayData" */
  update_IssuanceTokenDayData: IssuanceTokenDayData_mutation_response | null
  /** update single row of the table: "IssuanceTokenDayData" */
  update_IssuanceTokenDayData_by_pk: IssuanceTokenDayData | null
  /** update multiples rows of table: "IssuanceTokenDayData" */
  update_IssuanceTokenDayData_many:
    | (IssuanceTokenDayData_mutation_response | null)[]
    | null
  /** update data of the table: "IssuanceTokenHourData" */
  update_IssuanceTokenHourData: IssuanceTokenHourData_mutation_response | null
  /** update single row of the table: "IssuanceTokenHourData" */
  update_IssuanceTokenHourData_by_pk: IssuanceTokenHourData | null
  /** update multiples rows of table: "IssuanceTokenHourData" */
  update_IssuanceTokenHourData_many:
    | (IssuanceTokenHourData_mutation_response | null)[]
    | null
  /** update data of the table: "LinearVesting" */
  update_LinearVesting: LinearVesting_mutation_response | null
  /** update single row of the table: "LinearVesting" */
  update_LinearVesting_by_pk: LinearVesting | null
  /** update multiples rows of table: "LinearVesting" */
  update_LinearVesting_many: (LinearVesting_mutation_response | null)[] | null
  /** update data of the table: "ProjectFee" */
  update_ProjectFee: ProjectFee_mutation_response | null
  /** update single row of the table: "ProjectFee" */
  update_ProjectFee_by_pk: ProjectFee | null
  /** update multiples rows of table: "ProjectFee" */
  update_ProjectFee_many: (ProjectFee_mutation_response | null)[] | null
  /** update data of the table: "ProtocolFee" */
  update_ProtocolFee: ProtocolFee_mutation_response | null
  /** update single row of the table: "ProtocolFee" */
  update_ProtocolFee_by_pk: ProtocolFee | null
  /** update multiples rows of table: "ProtocolFee" */
  update_ProtocolFee_many: (ProtocolFee_mutation_response | null)[] | null
  /** update data of the table: "StreamingPaymentProcessor" */
  update_StreamingPaymentProcessor: StreamingPaymentProcessor_mutation_response | null
  /** update single row of the table: "StreamingPaymentProcessor" */
  update_StreamingPaymentProcessor_by_pk: StreamingPaymentProcessor | null
  /** update multiples rows of table: "StreamingPaymentProcessor" */
  update_StreamingPaymentProcessor_many:
    | (StreamingPaymentProcessor_mutation_response | null)[]
    | null
  /** update data of the table: "Swap" */
  update_Swap: Swap_mutation_response | null
  /** update single row of the table: "Swap" */
  update_Swap_by_pk: Swap | null
  /** update multiples rows of table: "Swap" */
  update_Swap_many: (Swap_mutation_response | null)[] | null
  /** update data of the table: "Token" */
  update_Token: Token_mutation_response | null
  /** update single row of the table: "Token" */
  update_Token_by_pk: Token | null
  /** update multiples rows of table: "Token" */
  update_Token_many: (Token_mutation_response | null)[] | null
  /** update data of the table: "Transfer" */
  update_Transfer: Transfer_mutation_response | null
  /** update single row of the table: "Transfer" */
  update_Transfer_by_pk: Transfer | null
  /** update multiples rows of table: "Transfer" */
  update_Transfer_many: (Transfer_mutation_response | null)[] | null
  /** update data of the table: "Workflow" */
  update_Workflow: Workflow_mutation_response | null
  /** update data of the table: "WorkflowModule" */
  update_WorkflowModule: WorkflowModule_mutation_response | null
  /** update data of the table: "WorkflowModuleType" */
  update_WorkflowModuleType: WorkflowModuleType_mutation_response | null
  /** update single row of the table: "WorkflowModuleType" */
  update_WorkflowModuleType_by_pk: WorkflowModuleType | null
  /** update multiples rows of table: "WorkflowModuleType" */
  update_WorkflowModuleType_many:
    | (WorkflowModuleType_mutation_response | null)[]
    | null
  /** update single row of the table: "WorkflowModule" */
  update_WorkflowModule_by_pk: WorkflowModule | null
  /** update multiples rows of table: "WorkflowModule" */
  update_WorkflowModule_many: (WorkflowModule_mutation_response | null)[] | null
  /** update single row of the table: "Workflow" */
  update_Workflow_by_pk: Workflow | null
  /** update multiples rows of table: "Workflow" */
  update_Workflow_many: (Workflow_mutation_response | null)[] | null
  /** update data of the table: "chain_metadata" */
  update_chain_metadata: chain_metadata_mutation_response | null
  /** update single row of the table: "chain_metadata" */
  update_chain_metadata_by_pk: chain_metadata | null
  /** update multiples rows of table: "chain_metadata" */
  update_chain_metadata_many: (chain_metadata_mutation_response | null)[] | null
  /** update data of the table: "dynamic_contract_registry" */
  update_dynamic_contract_registry: dynamic_contract_registry_mutation_response | null
  /** update single row of the table: "dynamic_contract_registry" */
  update_dynamic_contract_registry_by_pk: dynamic_contract_registry | null
  /** update multiples rows of table: "dynamic_contract_registry" */
  update_dynamic_contract_registry_many:
    | (dynamic_contract_registry_mutation_response | null)[]
    | null
  /** update data of the table: "end_of_block_range_scanned_data" */
  update_end_of_block_range_scanned_data: end_of_block_range_scanned_data_mutation_response | null
  /** update single row of the table: "end_of_block_range_scanned_data" */
  update_end_of_block_range_scanned_data_by_pk: end_of_block_range_scanned_data | null
  /** update multiples rows of table: "end_of_block_range_scanned_data" */
  update_end_of_block_range_scanned_data_many:
    | (end_of_block_range_scanned_data_mutation_response | null)[]
    | null
  /** update data of the table: "event_sync_state" */
  update_event_sync_state: event_sync_state_mutation_response | null
  /** update single row of the table: "event_sync_state" */
  update_event_sync_state_by_pk: event_sync_state | null
  /** update multiples rows of table: "event_sync_state" */
  update_event_sync_state_many:
    | (event_sync_state_mutation_response | null)[]
    | null
  /** update data of the table: "persisted_state" */
  update_persisted_state: persisted_state_mutation_response | null
  /** update single row of the table: "persisted_state" */
  update_persisted_state_by_pk: persisted_state | null
  /** update multiples rows of table: "persisted_state" */
  update_persisted_state_many:
    | (persisted_state_mutation_response | null)[]
    | null
  /** update data of the table: "raw_events" */
  update_raw_events: raw_events_mutation_response | null
  /** update single row of the table: "raw_events" */
  update_raw_events_by_pk: raw_events | null
  /** update multiples rows of table: "raw_events" */
  update_raw_events_many: (raw_events_mutation_response | null)[] | null
  __typename: 'mutation_root'
}

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

/** aggregated selection of "persisted_state" */
export interface persisted_state_aggregate {
  aggregate: persisted_state_aggregate_fields | null
  nodes: persisted_state[]
  __typename: 'persisted_state_aggregate'
}

/** aggregate fields of "persisted_state" */
export interface persisted_state_aggregate_fields {
  avg: persisted_state_avg_fields | null
  count: Scalars['Int']
  max: persisted_state_max_fields | null
  min: persisted_state_min_fields | null
  stddev: persisted_state_stddev_fields | null
  stddev_pop: persisted_state_stddev_pop_fields | null
  stddev_samp: persisted_state_stddev_samp_fields | null
  sum: persisted_state_sum_fields | null
  var_pop: persisted_state_var_pop_fields | null
  var_samp: persisted_state_var_samp_fields | null
  variance: persisted_state_variance_fields | null
  __typename: 'persisted_state_aggregate_fields'
}

/** aggregate avg on columns */
export interface persisted_state_avg_fields {
  id: Scalars['Float'] | null
  __typename: 'persisted_state_avg_fields'
}

/** unique or primary key constraints on table "persisted_state" */
export type persisted_state_constraint = 'persisted_state_pkey'

/** aggregate max on columns */
export interface persisted_state_max_fields {
  abi_files_hash: Scalars['String'] | null
  config_hash: Scalars['String'] | null
  envio_version: Scalars['String'] | null
  handler_files_hash: Scalars['String'] | null
  id: Scalars['Int'] | null
  schema_hash: Scalars['String'] | null
  __typename: 'persisted_state_max_fields'
}

/** aggregate min on columns */
export interface persisted_state_min_fields {
  abi_files_hash: Scalars['String'] | null
  config_hash: Scalars['String'] | null
  envio_version: Scalars['String'] | null
  handler_files_hash: Scalars['String'] | null
  id: Scalars['Int'] | null
  schema_hash: Scalars['String'] | null
  __typename: 'persisted_state_min_fields'
}

/** response of any mutation on the table "persisted_state" */
export interface persisted_state_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: persisted_state[]
  __typename: 'persisted_state_mutation_response'
}

/** select columns of table "persisted_state" */
export type persisted_state_select_column =
  | 'abi_files_hash'
  | 'config_hash'
  | 'envio_version'
  | 'handler_files_hash'
  | 'id'
  | 'schema_hash'

/** aggregate stddev on columns */
export interface persisted_state_stddev_fields {
  id: Scalars['Float'] | null
  __typename: 'persisted_state_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface persisted_state_stddev_pop_fields {
  id: Scalars['Float'] | null
  __typename: 'persisted_state_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface persisted_state_stddev_samp_fields {
  id: Scalars['Float'] | null
  __typename: 'persisted_state_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface persisted_state_sum_fields {
  id: Scalars['Int'] | null
  __typename: 'persisted_state_sum_fields'
}

/** update columns of table "persisted_state" */
export type persisted_state_update_column =
  | 'abi_files_hash'
  | 'config_hash'
  | 'envio_version'
  | 'handler_files_hash'
  | 'id'
  | 'schema_hash'

/** aggregate var_pop on columns */
export interface persisted_state_var_pop_fields {
  id: Scalars['Float'] | null
  __typename: 'persisted_state_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface persisted_state_var_samp_fields {
  id: Scalars['Float'] | null
  __typename: 'persisted_state_var_samp_fields'
}

/** aggregate variance on columns */
export interface persisted_state_variance_fields {
  id: Scalars['Float'] | null
  __typename: 'persisted_state_variance_fields'
}

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
  /** fetch aggregated fields from the table: "BountyContributor" */
  BountyContributor_aggregate: BountyContributor_aggregate
  /** fetch data from the table: "BountyContributor" using primary key columns */
  BountyContributor_by_pk: BountyContributor | null
  /** fetch data from the table: "BountyModule" */
  BountyModule: BountyModule[]
  /** fetch aggregated fields from the table: "BountyModule" */
  BountyModule_aggregate: BountyModule_aggregate
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
  /** fetch aggregated fields from the table: "LinearVesting" */
  LinearVesting_aggregate: LinearVesting_aggregate
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
  /** fetch aggregated fields from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor_aggregate: StreamingPaymentProcessor_aggregate
  /** fetch data from the table: "StreamingPaymentProcessor" using primary key columns */
  StreamingPaymentProcessor_by_pk: StreamingPaymentProcessor | null
  /** fetch data from the table: "Swap" */
  Swap: Swap[]
  /** fetch aggregated fields from the table: "Swap" */
  Swap_aggregate: Swap_aggregate
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
  /** fetch aggregated fields from the table: "WorkflowModuleType" */
  WorkflowModuleType_aggregate: WorkflowModuleType_aggregate
  /** fetch data from the table: "WorkflowModuleType" using primary key columns */
  WorkflowModuleType_by_pk: WorkflowModuleType | null
  /** fetch aggregated fields from the table: "WorkflowModule" */
  WorkflowModule_aggregate: WorkflowModule_aggregate
  /** fetch data from the table: "WorkflowModule" using primary key columns */
  WorkflowModule_by_pk: WorkflowModule | null
  /** fetch aggregated fields from the table: "Workflow" */
  Workflow_aggregate: Workflow_aggregate
  /** fetch data from the table: "Workflow" using primary key columns */
  Workflow_by_pk: Workflow | null
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: chain_metadata[]
  /** fetch aggregated fields from the table: "chain_metadata" */
  chain_metadata_aggregate: chain_metadata_aggregate
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk: chain_metadata | null
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: dynamic_contract_registry[]
  /** fetch aggregated fields from the table: "dynamic_contract_registry" */
  dynamic_contract_registry_aggregate: dynamic_contract_registry_aggregate
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk: dynamic_contract_registry | null
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data: end_of_block_range_scanned_data[]
  /** fetch aggregated fields from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_aggregate: end_of_block_range_scanned_data_aggregate
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk: end_of_block_range_scanned_data | null
  /** fetch data from the table: "event_sync_state" */
  event_sync_state: event_sync_state[]
  /** fetch aggregated fields from the table: "event_sync_state" */
  event_sync_state_aggregate: event_sync_state_aggregate
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk: event_sync_state | null
  /** fetch data from the table: "persisted_state" */
  persisted_state: persisted_state[]
  /** fetch aggregated fields from the table: "persisted_state" */
  persisted_state_aggregate: persisted_state_aggregate
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk: persisted_state | null
  /** fetch data from the table: "raw_events" */
  raw_events: raw_events[]
  /** fetch aggregated fields from the table: "raw_events" */
  raw_events_aggregate: raw_events_aggregate
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

/** aggregated selection of "raw_events" */
export interface raw_events_aggregate {
  aggregate: raw_events_aggregate_fields | null
  nodes: raw_events[]
  __typename: 'raw_events_aggregate'
}

/** aggregate fields of "raw_events" */
export interface raw_events_aggregate_fields {
  avg: raw_events_avg_fields | null
  count: Scalars['Int']
  max: raw_events_max_fields | null
  min: raw_events_min_fields | null
  stddev: raw_events_stddev_fields | null
  stddev_pop: raw_events_stddev_pop_fields | null
  stddev_samp: raw_events_stddev_samp_fields | null
  sum: raw_events_sum_fields | null
  var_pop: raw_events_var_pop_fields | null
  var_samp: raw_events_var_samp_fields | null
  variance: raw_events_variance_fields | null
  __typename: 'raw_events_aggregate_fields'
}

/** aggregate avg on columns */
export interface raw_events_avg_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  event_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  serial: Scalars['Float'] | null
  __typename: 'raw_events_avg_fields'
}

/** unique or primary key constraints on table "raw_events" */
export type raw_events_constraint = 'raw_events_pkey'

/** aggregate max on columns */
export interface raw_events_max_fields {
  block_hash: Scalars['String'] | null
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  contract_name: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  event_id: Scalars['numeric'] | null
  event_name: Scalars['String'] | null
  log_index: Scalars['Int'] | null
  serial: Scalars['Int'] | null
  src_address: Scalars['String'] | null
  __typename: 'raw_events_max_fields'
}

/** aggregate min on columns */
export interface raw_events_min_fields {
  block_hash: Scalars['String'] | null
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  contract_name: Scalars['String'] | null
  db_write_timestamp: Scalars['timestamp'] | null
  event_id: Scalars['numeric'] | null
  event_name: Scalars['String'] | null
  log_index: Scalars['Int'] | null
  serial: Scalars['Int'] | null
  src_address: Scalars['String'] | null
  __typename: 'raw_events_min_fields'
}

/** response of any mutation on the table "raw_events" */
export interface raw_events_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: raw_events[]
  __typename: 'raw_events_mutation_response'
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

/** aggregate stddev on columns */
export interface raw_events_stddev_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  event_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  serial: Scalars['Float'] | null
  __typename: 'raw_events_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface raw_events_stddev_pop_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  event_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  serial: Scalars['Float'] | null
  __typename: 'raw_events_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface raw_events_stddev_samp_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  event_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  serial: Scalars['Float'] | null
  __typename: 'raw_events_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface raw_events_sum_fields {
  block_number: Scalars['Int'] | null
  block_timestamp: Scalars['Int'] | null
  chain_id: Scalars['Int'] | null
  event_id: Scalars['numeric'] | null
  log_index: Scalars['Int'] | null
  serial: Scalars['Int'] | null
  __typename: 'raw_events_sum_fields'
}

/** update columns of table "raw_events" */
export type raw_events_update_column =
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

/** aggregate var_pop on columns */
export interface raw_events_var_pop_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  event_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  serial: Scalars['Float'] | null
  __typename: 'raw_events_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface raw_events_var_samp_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  event_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  serial: Scalars['Float'] | null
  __typename: 'raw_events_var_samp_fields'
}

/** aggregate variance on columns */
export interface raw_events_variance_fields {
  block_number: Scalars['Float'] | null
  block_timestamp: Scalars['Float'] | null
  chain_id: Scalars['Float'] | null
  event_id: Scalars['Float'] | null
  log_index: Scalars['Float'] | null
  serial: Scalars['Float'] | null
  __typename: 'raw_events_variance_fields'
}

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
  /** fetch aggregated fields from the table: "BountyContributor" */
  BountyContributor_aggregate: BountyContributor_aggregate
  /** fetch data from the table: "BountyContributor" using primary key columns */
  BountyContributor_by_pk: BountyContributor | null
  /** fetch data from the table in a streaming manner: "BountyContributor" */
  BountyContributor_stream: BountyContributor[]
  /** fetch data from the table: "BountyModule" */
  BountyModule: BountyModule[]
  /** fetch aggregated fields from the table: "BountyModule" */
  BountyModule_aggregate: BountyModule_aggregate
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
  /** fetch aggregated fields from the table: "LinearVesting" */
  LinearVesting_aggregate: LinearVesting_aggregate
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
  /** fetch aggregated fields from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor_aggregate: StreamingPaymentProcessor_aggregate
  /** fetch data from the table: "StreamingPaymentProcessor" using primary key columns */
  StreamingPaymentProcessor_by_pk: StreamingPaymentProcessor | null
  /** fetch data from the table in a streaming manner: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor_stream: StreamingPaymentProcessor[]
  /** fetch data from the table: "Swap" */
  Swap: Swap[]
  /** fetch aggregated fields from the table: "Swap" */
  Swap_aggregate: Swap_aggregate
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
  /** fetch aggregated fields from the table: "WorkflowModuleType" */
  WorkflowModuleType_aggregate: WorkflowModuleType_aggregate
  /** fetch data from the table: "WorkflowModuleType" using primary key columns */
  WorkflowModuleType_by_pk: WorkflowModuleType | null
  /** fetch data from the table in a streaming manner: "WorkflowModuleType" */
  WorkflowModuleType_stream: WorkflowModuleType[]
  /** fetch aggregated fields from the table: "WorkflowModule" */
  WorkflowModule_aggregate: WorkflowModule_aggregate
  /** fetch data from the table: "WorkflowModule" using primary key columns */
  WorkflowModule_by_pk: WorkflowModule | null
  /** fetch data from the table in a streaming manner: "WorkflowModule" */
  WorkflowModule_stream: WorkflowModule[]
  /** fetch aggregated fields from the table: "Workflow" */
  Workflow_aggregate: Workflow_aggregate
  /** fetch data from the table: "Workflow" using primary key columns */
  Workflow_by_pk: Workflow | null
  /** fetch data from the table in a streaming manner: "Workflow" */
  Workflow_stream: Workflow[]
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: chain_metadata[]
  /** fetch aggregated fields from the table: "chain_metadata" */
  chain_metadata_aggregate: chain_metadata_aggregate
  /** fetch data from the table: "chain_metadata" using primary key columns */
  chain_metadata_by_pk: chain_metadata | null
  /** fetch data from the table in a streaming manner: "chain_metadata" */
  chain_metadata_stream: chain_metadata[]
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: dynamic_contract_registry[]
  /** fetch aggregated fields from the table: "dynamic_contract_registry" */
  dynamic_contract_registry_aggregate: dynamic_contract_registry_aggregate
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk: dynamic_contract_registry | null
  /** fetch data from the table in a streaming manner: "dynamic_contract_registry" */
  dynamic_contract_registry_stream: dynamic_contract_registry[]
  /** fetch data from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data: end_of_block_range_scanned_data[]
  /** fetch aggregated fields from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_aggregate: end_of_block_range_scanned_data_aggregate
  /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
  end_of_block_range_scanned_data_by_pk: end_of_block_range_scanned_data | null
  /** fetch data from the table in a streaming manner: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_stream: end_of_block_range_scanned_data[]
  /** fetch data from the table: "event_sync_state" */
  event_sync_state: event_sync_state[]
  /** fetch aggregated fields from the table: "event_sync_state" */
  event_sync_state_aggregate: event_sync_state_aggregate
  /** fetch data from the table: "event_sync_state" using primary key columns */
  event_sync_state_by_pk: event_sync_state | null
  /** fetch data from the table in a streaming manner: "event_sync_state" */
  event_sync_state_stream: event_sync_state[]
  /** fetch data from the table: "persisted_state" */
  persisted_state: persisted_state[]
  /** fetch aggregated fields from the table: "persisted_state" */
  persisted_state_aggregate: persisted_state_aggregate
  /** fetch data from the table: "persisted_state" using primary key columns */
  persisted_state_by_pk: persisted_state | null
  /** fetch data from the table in a streaming manner: "persisted_state" */
  persisted_state_stream: persisted_state[]
  /** fetch data from the table: "raw_events" */
  raw_events: raw_events[]
  /** fetch aggregated fields from the table: "raw_events" */
  raw_events_aggregate: raw_events_aggregate
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk: raw_events | null
  /** fetch data from the table in a streaming manner: "raw_events" */
  raw_events_stream: raw_events[]
  __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
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
  /** An aggregate relationship */
  swaps_aggregate?: Swap_aggregateGenqlSelection & {
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
  sellFee?: numeric_comparison_exp | null
  sellReserveRatio?: numeric_comparison_exp | null
  swaps?: Swap_bool_exp | null
  swaps_aggregate?: Swap_aggregate_bool_exp | null
  virtualCOL?: numeric_comparison_exp | null
  virtualISS?: numeric_comparison_exp | null
  workflow?: Workflow_bool_exp | null
  workflow_id?: String_comparison_exp | null
}

/** input type for incrementing numeric columns in table "BondingCurve" */
export interface BondingCurve_inc_input {
  buyFee?: Scalars['numeric'] | null
  buyReserveRatio?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
  sellFee?: Scalars['numeric'] | null
  sellReserveRatio?: Scalars['numeric'] | null
  virtualCOL?: Scalars['numeric'] | null
  virtualISS?: Scalars['numeric'] | null
}

/** input type for inserting data into table "BondingCurve" */
export interface BondingCurve_insert_input {
  address?: Scalars['String'] | null
  bcType?: Scalars['String'] | null
  buyFee?: Scalars['numeric'] | null
  buyReserveRatio?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
  collateralToken?: Token_obj_rel_insert_input | null
  collateralToken_id?: Scalars['String'] | null
  curveDayData?: CurveDayData_arr_rel_insert_input | null
  curveHourData?: CurveHourData_arr_rel_insert_input | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  issuanceToken?: Token_obj_rel_insert_input | null
  issuanceTokenDayData?: IssuanceTokenDayData_arr_rel_insert_input | null
  issuanceTokenHourData?: IssuanceTokenHourData_arr_rel_insert_input | null
  issuanceToken_id?: Scalars['String'] | null
  projectFees?: ProjectFee_arr_rel_insert_input | null
  protocolFees?: ProtocolFee_arr_rel_insert_input | null
  sellFee?: Scalars['numeric'] | null
  sellReserveRatio?: Scalars['numeric'] | null
  swaps?: Swap_arr_rel_insert_input | null
  virtualCOL?: Scalars['numeric'] | null
  virtualISS?: Scalars['numeric'] | null
  workflow?: Workflow_obj_rel_insert_input | null
  workflow_id?: Scalars['String'] | null
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
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "BondingCurve" */
export interface BondingCurve_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BondingCurveGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "BondingCurve" */
export interface BondingCurve_on_conflict {
  constraint: BondingCurve_constraint
  update_columns?: BondingCurve_update_column[]
  where?: BondingCurve_bool_exp | null
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
  sellFee?: order_by | null
  sellReserveRatio?: order_by | null
  swaps_aggregate?: Swap_aggregate_order_by | null
  virtualCOL?: order_by | null
  virtualISS?: order_by | null
  workflow?: Workflow_order_by | null
  workflow_id?: order_by | null
}

/** primary key columns input for table: BondingCurve */
export interface BondingCurve_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "BondingCurve" */
export interface BondingCurve_set_input {
  address?: Scalars['String'] | null
  bcType?: Scalars['String'] | null
  buyFee?: Scalars['numeric'] | null
  buyReserveRatio?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
  collateralToken_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  issuanceToken_id?: Scalars['String'] | null
  sellFee?: Scalars['numeric'] | null
  sellReserveRatio?: Scalars['numeric'] | null
  virtualCOL?: Scalars['numeric'] | null
  virtualISS?: Scalars['numeric'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface BondingCurve_stddev_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
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
  sellFee?: boolean | number
  sellReserveRatio?: boolean | number
  virtualCOL?: boolean | number
  virtualISS?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface BondingCurve_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: BondingCurve_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: BondingCurve_set_input | null
  /** filter the rows which have to be updated */
  where: BondingCurve_bool_exp
}

/** aggregate var_pop on columns */
export interface BondingCurve_var_pop_fieldsGenqlSelection {
  buyFee?: boolean | number
  buyReserveRatio?: boolean | number
  chainId?: boolean | number
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
  /** An aggregate relationship */
  contributors_aggregate?: BountyContributor_aggregateGenqlSelection & {
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

/** input type for inserting array relation for remote table "BountyClaim" */
export interface BountyClaim_arr_rel_insert_input {
  data: BountyClaim_insert_input[]
  /** upsert condition */
  on_conflict?: BountyClaim_on_conflict | null
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
  contributors_aggregate?: BountyContributor_aggregate_bool_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  details?: String_comparison_exp | null
  id?: String_comparison_exp | null
}

/** input type for inserting data into table "BountyClaim" */
export interface BountyClaim_insert_input {
  bounty?: Bounty_obj_rel_insert_input | null
  bounty_id?: Scalars['String'] | null
  claimed?: Scalars['Boolean'] | null
  contributors?: BountyContributor_arr_rel_insert_input | null
  db_write_timestamp?: Scalars['timestamp'] | null
  details?: Scalars['String'] | null
  id?: Scalars['String'] | null
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

/** response of any mutation on the table "BountyClaim" */
export interface BountyClaim_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BountyClaimGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "BountyClaim" */
export interface BountyClaim_obj_rel_insert_input {
  data: BountyClaim_insert_input
  /** upsert condition */
  on_conflict?: BountyClaim_on_conflict | null
}

/** on_conflict condition type for table "BountyClaim" */
export interface BountyClaim_on_conflict {
  constraint: BountyClaim_constraint
  update_columns?: BountyClaim_update_column[]
  where?: BountyClaim_bool_exp | null
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

/** primary key columns input for table: BountyClaim */
export interface BountyClaim_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "BountyClaim" */
export interface BountyClaim_set_input {
  bounty_id?: Scalars['String'] | null
  claimed?: Scalars['Boolean'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  details?: Scalars['String'] | null
  id?: Scalars['String'] | null
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

export interface BountyClaim_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: BountyClaim_set_input | null
  /** filter the rows which have to be updated */
  where: BountyClaim_bool_exp
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

/** aggregated selection of "BountyContributor" */
export interface BountyContributor_aggregateGenqlSelection {
  aggregate?: BountyContributor_aggregate_fieldsGenqlSelection
  nodes?: BountyContributorGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface BountyContributor_aggregate_bool_exp {
  count?: BountyContributor_aggregate_bool_exp_count | null
}

export interface BountyContributor_aggregate_bool_exp_count {
  arguments?: BountyContributor_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: BountyContributor_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "BountyContributor" */
export interface BountyContributor_aggregate_fieldsGenqlSelection {
  avg?: BountyContributor_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: BountyContributor_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: BountyContributor_max_fieldsGenqlSelection
  min?: BountyContributor_min_fieldsGenqlSelection
  stddev?: BountyContributor_stddev_fieldsGenqlSelection
  stddev_pop?: BountyContributor_stddev_pop_fieldsGenqlSelection
  stddev_samp?: BountyContributor_stddev_samp_fieldsGenqlSelection
  sum?: BountyContributor_sum_fieldsGenqlSelection
  var_pop?: BountyContributor_var_pop_fieldsGenqlSelection
  var_samp?: BountyContributor_var_samp_fieldsGenqlSelection
  variance?: BountyContributor_variance_fieldsGenqlSelection
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

/** input type for inserting array relation for remote table "BountyContributor" */
export interface BountyContributor_arr_rel_insert_input {
  data: BountyContributor_insert_input[]
  /** upsert condition */
  on_conflict?: BountyContributor_on_conflict | null
}

/** aggregate avg on columns */
export interface BountyContributor_avg_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** input type for incrementing numeric columns in table "BountyContributor" */
export interface BountyContributor_inc_input {
  claimAmount?: Scalars['numeric'] | null
}

/** input type for inserting data into table "BountyContributor" */
export interface BountyContributor_insert_input {
  address?: Scalars['String'] | null
  bountyClaim?: BountyClaim_obj_rel_insert_input | null
  bountyClaim_id?: Scalars['String'] | null
  claimAmount?: Scalars['numeric'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface BountyContributor_max_fieldsGenqlSelection {
  address?: boolean | number
  bountyClaim_id?: boolean | number
  claimAmount?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "BountyContributor" */
export interface BountyContributor_max_order_by {
  address?: order_by | null
  bountyClaim_id?: order_by | null
  claimAmount?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
}

/** aggregate min on columns */
export interface BountyContributor_min_fieldsGenqlSelection {
  address?: boolean | number
  bountyClaim_id?: boolean | number
  claimAmount?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "BountyContributor" */
export interface BountyContributor_min_order_by {
  address?: order_by | null
  bountyClaim_id?: order_by | null
  claimAmount?: order_by | null
  db_write_timestamp?: order_by | null
  id?: order_by | null
}

/** response of any mutation on the table "BountyContributor" */
export interface BountyContributor_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BountyContributorGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "BountyContributor" */
export interface BountyContributor_on_conflict {
  constraint: BountyContributor_constraint
  update_columns?: BountyContributor_update_column[]
  where?: BountyContributor_bool_exp | null
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

/** primary key columns input for table: BountyContributor */
export interface BountyContributor_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "BountyContributor" */
export interface BountyContributor_set_input {
  address?: Scalars['String'] | null
  bountyClaim_id?: Scalars['String'] | null
  claimAmount?: Scalars['numeric'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface BountyContributor_stddev_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "BountyContributor" */
export interface BountyContributor_stddev_order_by {
  claimAmount?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface BountyContributor_stddev_pop_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "BountyContributor" */
export interface BountyContributor_stddev_pop_order_by {
  claimAmount?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface BountyContributor_stddev_samp_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface BountyContributor_sum_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "BountyContributor" */
export interface BountyContributor_sum_order_by {
  claimAmount?: order_by | null
}

export interface BountyContributor_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: BountyContributor_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: BountyContributor_set_input | null
  /** filter the rows which have to be updated */
  where: BountyContributor_bool_exp
}

/** aggregate var_pop on columns */
export interface BountyContributor_var_pop_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "BountyContributor" */
export interface BountyContributor_var_pop_order_by {
  claimAmount?: order_by | null
}

/** aggregate var_samp on columns */
export interface BountyContributor_var_samp_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "BountyContributor" */
export interface BountyContributor_var_samp_order_by {
  claimAmount?: order_by | null
}

/** aggregate variance on columns */
export interface BountyContributor_variance_fieldsGenqlSelection {
  claimAmount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregated selection of "BountyModule" */
export interface BountyModule_aggregateGenqlSelection {
  aggregate?: BountyModule_aggregate_fieldsGenqlSelection
  nodes?: BountyModuleGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "BountyModule" */
export interface BountyModule_aggregate_fieldsGenqlSelection {
  avg?: BountyModule_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: BountyModule_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: BountyModule_max_fieldsGenqlSelection
  min?: BountyModule_min_fieldsGenqlSelection
  stddev?: BountyModule_stddev_fieldsGenqlSelection
  stddev_pop?: BountyModule_stddev_pop_fieldsGenqlSelection
  stddev_samp?: BountyModule_stddev_samp_fieldsGenqlSelection
  sum?: BountyModule_sum_fieldsGenqlSelection
  var_pop?: BountyModule_var_pop_fieldsGenqlSelection
  var_samp?: BountyModule_var_samp_fieldsGenqlSelection
  variance?: BountyModule_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface BountyModule_avg_fieldsGenqlSelection {
  chainId?: boolean | number
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

/** input type for incrementing numeric columns in table "BountyModule" */
export interface BountyModule_inc_input {
  chainId?: Scalars['Int'] | null
}

/** input type for inserting data into table "BountyModule" */
export interface BountyModule_insert_input {
  bounties?: Bounty_arr_rel_insert_input | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  workflow?: Workflow_obj_rel_insert_input | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface BountyModule_max_fieldsGenqlSelection {
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface BountyModule_min_fieldsGenqlSelection {
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "BountyModule" */
export interface BountyModule_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BountyModuleGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "BountyModule" */
export interface BountyModule_obj_rel_insert_input {
  data: BountyModule_insert_input
  /** upsert condition */
  on_conflict?: BountyModule_on_conflict | null
}

/** on_conflict condition type for table "BountyModule" */
export interface BountyModule_on_conflict {
  constraint: BountyModule_constraint
  update_columns?: BountyModule_update_column[]
  where?: BountyModule_bool_exp | null
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

/** primary key columns input for table: BountyModule */
export interface BountyModule_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "BountyModule" */
export interface BountyModule_set_input {
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface BountyModule_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface BountyModule_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface BountyModule_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface BountyModule_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface BountyModule_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: BountyModule_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: BountyModule_set_input | null
  /** filter the rows which have to be updated */
  where: BountyModule_bool_exp
}

/** aggregate var_pop on columns */
export interface BountyModule_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface BountyModule_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface BountyModule_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** input type for inserting array relation for remote table "Bounty" */
export interface Bounty_arr_rel_insert_input {
  data: Bounty_insert_input[]
  /** upsert condition */
  on_conflict?: Bounty_on_conflict | null
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

/** input type for incrementing numeric columns in table "Bounty" */
export interface Bounty_inc_input {
  maximumPayoutAmount?: Scalars['numeric'] | null
  minimumPayoutAmount?: Scalars['numeric'] | null
}

/** input type for inserting data into table "Bounty" */
export interface Bounty_insert_input {
  bountyModule?: BountyModule_obj_rel_insert_input | null
  bountyModule_id?: Scalars['String'] | null
  claims?: BountyClaim_arr_rel_insert_input | null
  db_write_timestamp?: Scalars['timestamp'] | null
  details?: Scalars['String'] | null
  id?: Scalars['String'] | null
  locked?: Scalars['Boolean'] | null
  maximumPayoutAmount?: Scalars['numeric'] | null
  minimumPayoutAmount?: Scalars['numeric'] | null
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

/** response of any mutation on the table "Bounty" */
export interface Bounty_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: BountyGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "Bounty" */
export interface Bounty_obj_rel_insert_input {
  data: Bounty_insert_input
  /** upsert condition */
  on_conflict?: Bounty_on_conflict | null
}

/** on_conflict condition type for table "Bounty" */
export interface Bounty_on_conflict {
  constraint: Bounty_constraint
  update_columns?: Bounty_update_column[]
  where?: Bounty_bool_exp | null
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

/** primary key columns input for table: Bounty */
export interface Bounty_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "Bounty" */
export interface Bounty_set_input {
  bountyModule_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  details?: Scalars['String'] | null
  id?: Scalars['String'] | null
  locked?: Scalars['Boolean'] | null
  maximumPayoutAmount?: Scalars['numeric'] | null
  minimumPayoutAmount?: Scalars['numeric'] | null
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

export interface Bounty_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Bounty_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: Bounty_set_input | null
  /** filter the rows which have to be updated */
  where: Bounty_bool_exp
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

/** input type for inserting array relation for remote table "CurveDayData" */
export interface CurveDayData_arr_rel_insert_input {
  data: CurveDayData_insert_input[]
  /** upsert condition */
  on_conflict?: CurveDayData_on_conflict | null
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

/** input type for incrementing numeric columns in table "CurveDayData" */
export interface CurveDayData_inc_input {
  chainId?: Scalars['Int'] | null
  closeCOL?: Scalars['numeric'] | null
  closeUSD?: Scalars['numeric'] | null
  date?: Scalars['Int'] | null
  highCOL?: Scalars['numeric'] | null
  highUSD?: Scalars['numeric'] | null
  lowCOL?: Scalars['numeric'] | null
  lowUSD?: Scalars['numeric'] | null
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

/** input type for inserting data into table "CurveDayData" */
export interface CurveDayData_insert_input {
  chainId?: Scalars['Int'] | null
  closeCOL?: Scalars['numeric'] | null
  closeUSD?: Scalars['numeric'] | null
  collateralToken?: Token_obj_rel_insert_input | null
  collateralToken_id?: Scalars['String'] | null
  date?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  highCOL?: Scalars['numeric'] | null
  highUSD?: Scalars['numeric'] | null
  id?: Scalars['String'] | null
  issuanceToken?: Token_obj_rel_insert_input | null
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

/** response of any mutation on the table "CurveDayData" */
export interface CurveDayData_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: CurveDayDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "CurveDayData" */
export interface CurveDayData_on_conflict {
  constraint: CurveDayData_constraint
  update_columns?: CurveDayData_update_column[]
  where?: CurveDayData_bool_exp | null
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

/** primary key columns input for table: CurveDayData */
export interface CurveDayData_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "CurveDayData" */
export interface CurveDayData_set_input {
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

export interface CurveDayData_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: CurveDayData_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: CurveDayData_set_input | null
  /** filter the rows which have to be updated */
  where: CurveDayData_bool_exp
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

/** input type for inserting array relation for remote table "CurveHourData" */
export interface CurveHourData_arr_rel_insert_input {
  data: CurveHourData_insert_input[]
  /** upsert condition */
  on_conflict?: CurveHourData_on_conflict | null
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

/** input type for incrementing numeric columns in table "CurveHourData" */
export interface CurveHourData_inc_input {
  chainId?: Scalars['Int'] | null
  closeCOL?: Scalars['numeric'] | null
  closeUSD?: Scalars['numeric'] | null
  highCOL?: Scalars['numeric'] | null
  highUSD?: Scalars['numeric'] | null
  lowCOL?: Scalars['numeric'] | null
  lowUSD?: Scalars['numeric'] | null
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

/** input type for inserting data into table "CurveHourData" */
export interface CurveHourData_insert_input {
  chainId?: Scalars['Int'] | null
  closeCOL?: Scalars['numeric'] | null
  closeUSD?: Scalars['numeric'] | null
  collateralToken?: Token_obj_rel_insert_input | null
  collateralToken_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  highCOL?: Scalars['numeric'] | null
  highUSD?: Scalars['numeric'] | null
  id?: Scalars['String'] | null
  issuanceToken?: Token_obj_rel_insert_input | null
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

/** response of any mutation on the table "CurveHourData" */
export interface CurveHourData_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: CurveHourDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "CurveHourData" */
export interface CurveHourData_on_conflict {
  constraint: CurveHourData_constraint
  update_columns?: CurveHourData_update_column[]
  where?: CurveHourData_bool_exp | null
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

/** primary key columns input for table: CurveHourData */
export interface CurveHourData_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "CurveHourData" */
export interface CurveHourData_set_input {
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

export interface CurveHourData_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: CurveHourData_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: CurveHourData_set_input | null
  /** filter the rows which have to be updated */
  where: CurveHourData_bool_exp
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

/** input type for incrementing numeric columns in table "DepositVault" */
export interface DepositVault_inc_input {
  balance?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
}

/** input type for inserting data into table "DepositVault" */
export interface DepositVault_insert_input {
  address?: Scalars['String'] | null
  balance?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  deposits?: Deposit_arr_rel_insert_input | null
  id?: Scalars['String'] | null
  token?: Token_obj_rel_insert_input | null
  token_id?: Scalars['String'] | null
  transfers?: Transfer_arr_rel_insert_input | null
  workflow?: Workflow_obj_rel_insert_input | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface DepositVault_max_fieldsGenqlSelection {
  address?: boolean | number
  balance?: boolean | number
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
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  token_id?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "DepositVault" */
export interface DepositVault_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: DepositVaultGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "DepositVault" */
export interface DepositVault_obj_rel_insert_input {
  data: DepositVault_insert_input
  /** upsert condition */
  on_conflict?: DepositVault_on_conflict | null
}

/** on_conflict condition type for table "DepositVault" */
export interface DepositVault_on_conflict {
  constraint: DepositVault_constraint
  update_columns?: DepositVault_update_column[]
  where?: DepositVault_bool_exp | null
}

/** Ordering options when selecting data from "DepositVault". */
export interface DepositVault_order_by {
  address?: order_by | null
  balance?: order_by | null
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

/** primary key columns input for table: DepositVault */
export interface DepositVault_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "DepositVault" */
export interface DepositVault_set_input {
  address?: Scalars['String'] | null
  balance?: Scalars['numeric'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  token_id?: Scalars['String'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface DepositVault_stddev_fieldsGenqlSelection {
  balance?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface DepositVault_stddev_pop_fieldsGenqlSelection {
  balance?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface DepositVault_stddev_samp_fieldsGenqlSelection {
  balance?: boolean | number
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
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  token_id?: Scalars['String'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface DepositVault_sum_fieldsGenqlSelection {
  balance?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface DepositVault_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: DepositVault_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: DepositVault_set_input | null
  /** filter the rows which have to be updated */
  where: DepositVault_bool_exp
}

/** aggregate var_pop on columns */
export interface DepositVault_var_pop_fieldsGenqlSelection {
  balance?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface DepositVault_var_samp_fieldsGenqlSelection {
  balance?: boolean | number
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface DepositVault_variance_fieldsGenqlSelection {
  balance?: boolean | number
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

/** input type for inserting array relation for remote table "Deposit" */
export interface Deposit_arr_rel_insert_input {
  data: Deposit_insert_input[]
  /** upsert condition */
  on_conflict?: Deposit_on_conflict | null
}

/** aggregate avg on columns */
export interface Deposit_avg_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "Deposit" */
export interface Deposit_avg_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** Boolean expression to filter rows from the table "Deposit". All fields are combined with a logical 'AND'. */
export interface Deposit_bool_exp {
  _and?: Deposit_bool_exp[] | null
  _not?: Deposit_bool_exp | null
  _or?: Deposit_bool_exp[] | null
  amount?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  depositVault?: DepositVault_bool_exp | null
  depositVault_id?: String_comparison_exp | null
  depositor?: String_comparison_exp | null
  id?: String_comparison_exp | null
}

/** input type for incrementing numeric columns in table "Deposit" */
export interface Deposit_inc_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
}

/** input type for inserting data into table "Deposit" */
export interface Deposit_insert_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault?: DepositVault_obj_rel_insert_input | null
  depositVault_id?: Scalars['String'] | null
  depositor?: Scalars['String'] | null
  id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface Deposit_max_fieldsGenqlSelection {
  amount?: boolean | number
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
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  depositor?: order_by | null
  id?: order_by | null
}

/** aggregate min on columns */
export interface Deposit_min_fieldsGenqlSelection {
  amount?: boolean | number
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
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  depositor?: order_by | null
  id?: order_by | null
}

/** response of any mutation on the table "Deposit" */
export interface Deposit_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: DepositGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "Deposit" */
export interface Deposit_on_conflict {
  constraint: Deposit_constraint
  update_columns?: Deposit_update_column[]
  where?: Deposit_bool_exp | null
}

/** Ordering options when selecting data from "Deposit". */
export interface Deposit_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault?: DepositVault_order_by | null
  depositVault_id?: order_by | null
  depositor?: order_by | null
  id?: order_by | null
}

/** primary key columns input for table: Deposit */
export interface Deposit_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "Deposit" */
export interface Deposit_set_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault_id?: Scalars['String'] | null
  depositor?: Scalars['String'] | null
  id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface Deposit_stddev_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "Deposit" */
export interface Deposit_stddev_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface Deposit_stddev_pop_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "Deposit" */
export interface Deposit_stddev_pop_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface Deposit_stddev_samp_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "Deposit" */
export interface Deposit_stddev_samp_order_by {
  amount?: order_by | null
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
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault_id?: Scalars['String'] | null
  depositor?: Scalars['String'] | null
  id?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface Deposit_sum_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "Deposit" */
export interface Deposit_sum_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

export interface Deposit_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Deposit_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: Deposit_set_input | null
  /** filter the rows which have to be updated */
  where: Deposit_bool_exp
}

/** aggregate var_pop on columns */
export interface Deposit_var_pop_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "Deposit" */
export interface Deposit_var_pop_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate var_samp on columns */
export interface Deposit_var_samp_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "Deposit" */
export interface Deposit_var_samp_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate variance on columns */
export interface Deposit_variance_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "Deposit" */
export interface Deposit_variance_order_by {
  amount?: order_by | null
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

/** input type for inserting array relation for remote table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_arr_rel_insert_input {
  data: IssuanceTokenDayData_insert_input[]
  /** upsert condition */
  on_conflict?: IssuanceTokenDayData_on_conflict | null
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

/** input type for incrementing numeric columns in table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_inc_input {
  chainId?: Scalars['Int'] | null
  closeUSD?: Scalars['numeric'] | null
  date?: Scalars['Int'] | null
  highUSD?: Scalars['numeric'] | null
  lowUSD?: Scalars['numeric'] | null
  openUSD?: Scalars['numeric'] | null
  priceUSD?: Scalars['numeric'] | null
  projectFeeUSD?: Scalars['numeric'] | null
  protocolFeeISS?: Scalars['numeric'] | null
  protocolFeeUSD?: Scalars['numeric'] | null
  volumeISS?: Scalars['numeric'] | null
  volumeUSD?: Scalars['numeric'] | null
}

/** input type for inserting data into table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_insert_input {
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

/** response of any mutation on the table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: IssuanceTokenDayDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_on_conflict {
  constraint: IssuanceTokenDayData_constraint
  update_columns?: IssuanceTokenDayData_update_column[]
  where?: IssuanceTokenDayData_bool_exp | null
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

/** primary key columns input for table: IssuanceTokenDayData */
export interface IssuanceTokenDayData_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "IssuanceTokenDayData" */
export interface IssuanceTokenDayData_set_input {
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

export interface IssuanceTokenDayData_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: IssuanceTokenDayData_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: IssuanceTokenDayData_set_input | null
  /** filter the rows which have to be updated */
  where: IssuanceTokenDayData_bool_exp
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

/** input type for inserting array relation for remote table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_arr_rel_insert_input {
  data: IssuanceTokenHourData_insert_input[]
  /** upsert condition */
  on_conflict?: IssuanceTokenHourData_on_conflict | null
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

/** input type for incrementing numeric columns in table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_inc_input {
  chainId?: Scalars['Int'] | null
  closeUSD?: Scalars['numeric'] | null
  highUSD?: Scalars['numeric'] | null
  lowUSD?: Scalars['numeric'] | null
  openUSD?: Scalars['numeric'] | null
  periodStartUnix?: Scalars['Int'] | null
  priceUSD?: Scalars['numeric'] | null
  projectFeeUSD?: Scalars['numeric'] | null
  protocolFeeISS?: Scalars['numeric'] | null
  protocolFeeUSD?: Scalars['numeric'] | null
  volumeISS?: Scalars['numeric'] | null
  volumeUSD?: Scalars['numeric'] | null
}

/** input type for inserting data into table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_insert_input {
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

/** response of any mutation on the table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: IssuanceTokenHourDataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_on_conflict {
  constraint: IssuanceTokenHourData_constraint
  update_columns?: IssuanceTokenHourData_update_column[]
  where?: IssuanceTokenHourData_bool_exp | null
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

/** primary key columns input for table: IssuanceTokenHourData */
export interface IssuanceTokenHourData_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "IssuanceTokenHourData" */
export interface IssuanceTokenHourData_set_input {
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

export interface IssuanceTokenHourData_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: IssuanceTokenHourData_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: IssuanceTokenHourData_set_input | null
  /** filter the rows which have to be updated */
  where: IssuanceTokenHourData_bool_exp
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

/** aggregated selection of "LinearVesting" */
export interface LinearVesting_aggregateGenqlSelection {
  aggregate?: LinearVesting_aggregate_fieldsGenqlSelection
  nodes?: LinearVestingGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface LinearVesting_aggregate_bool_exp {
  count?: LinearVesting_aggregate_bool_exp_count | null
}

export interface LinearVesting_aggregate_bool_exp_count {
  arguments?: LinearVesting_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: LinearVesting_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "LinearVesting" */
export interface LinearVesting_aggregate_fieldsGenqlSelection {
  avg?: LinearVesting_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: LinearVesting_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: LinearVesting_max_fieldsGenqlSelection
  min?: LinearVesting_min_fieldsGenqlSelection
  stddev?: LinearVesting_stddev_fieldsGenqlSelection
  stddev_pop?: LinearVesting_stddev_pop_fieldsGenqlSelection
  stddev_samp?: LinearVesting_stddev_samp_fieldsGenqlSelection
  sum?: LinearVesting_sum_fieldsGenqlSelection
  var_pop?: LinearVesting_var_pop_fieldsGenqlSelection
  var_samp?: LinearVesting_var_samp_fieldsGenqlSelection
  variance?: LinearVesting_variance_fieldsGenqlSelection
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

/** input type for inserting array relation for remote table "LinearVesting" */
export interface LinearVesting_arr_rel_insert_input {
  data: LinearVesting_insert_input[]
  /** upsert condition */
  on_conflict?: LinearVesting_on_conflict | null
}

/** aggregate avg on columns */
export interface LinearVesting_avg_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** input type for incrementing numeric columns in table "LinearVesting" */
export interface LinearVesting_inc_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  cliff?: Scalars['numeric'] | null
  end?: Scalars['numeric'] | null
  start?: Scalars['numeric'] | null
}

/** input type for inserting data into table "LinearVesting" */
export interface LinearVesting_insert_input {
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
  streamingPaymentProcessor?: StreamingPaymentProcessor_obj_rel_insert_input | null
  streamingPaymentProcessor_id?: Scalars['String'] | null
  token?: Token_obj_rel_insert_input | null
  token_id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface LinearVesting_max_fieldsGenqlSelection {
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
  streamingPaymentProcessor_id?: boolean | number
  token_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate min on columns */
export interface LinearVesting_min_fieldsGenqlSelection {
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
  streamingPaymentProcessor_id?: boolean | number
  token_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** response of any mutation on the table "LinearVesting" */
export interface LinearVesting_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: LinearVestingGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "LinearVesting" */
export interface LinearVesting_on_conflict {
  constraint: LinearVesting_constraint
  update_columns?: LinearVesting_update_column[]
  where?: LinearVesting_bool_exp | null
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

/** primary key columns input for table: LinearVesting */
export interface LinearVesting_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "LinearVesting" */
export interface LinearVesting_set_input {
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

/** aggregate stddev on columns */
export interface LinearVesting_stddev_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate stddev_pop on columns */
export interface LinearVesting_stddev_pop_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate stddev_samp on columns */
export interface LinearVesting_stddev_samp_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface LinearVesting_sum_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

export interface LinearVesting_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: LinearVesting_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: LinearVesting_set_input | null
  /** filter the rows which have to be updated */
  where: LinearVesting_bool_exp
}

/** aggregate var_pop on columns */
export interface LinearVesting_var_pop_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate var_samp on columns */
export interface LinearVesting_var_samp_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate variance on columns */
export interface LinearVesting_variance_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  cliff?: boolean | number
  end?: boolean | number
  start?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** input type for inserting array relation for remote table "ProjectFee" */
export interface ProjectFee_arr_rel_insert_input {
  data: ProjectFee_insert_input[]
  /** upsert condition */
  on_conflict?: ProjectFee_on_conflict | null
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

/** input type for incrementing numeric columns in table "ProjectFee" */
export interface ProjectFee_inc_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
}

/** input type for inserting data into table "ProjectFee" */
export interface ProjectFee_insert_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  module_id?: Scalars['String'] | null
  recipient?: Scalars['String'] | null
  token?: Token_obj_rel_insert_input | null
  token_id?: Scalars['String'] | null
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

/** response of any mutation on the table "ProjectFee" */
export interface ProjectFee_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: ProjectFeeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "ProjectFee" */
export interface ProjectFee_on_conflict {
  constraint: ProjectFee_constraint
  update_columns?: ProjectFee_update_column[]
  where?: ProjectFee_bool_exp | null
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

/** primary key columns input for table: ProjectFee */
export interface ProjectFee_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "ProjectFee" */
export interface ProjectFee_set_input {
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

export interface ProjectFee_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: ProjectFee_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: ProjectFee_set_input | null
  /** filter the rows which have to be updated */
  where: ProjectFee_bool_exp
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

/** input type for inserting array relation for remote table "ProtocolFee" */
export interface ProtocolFee_arr_rel_insert_input {
  data: ProtocolFee_insert_input[]
  /** upsert condition */
  on_conflict?: ProtocolFee_on_conflict | null
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

/** input type for incrementing numeric columns in table "ProtocolFee" */
export interface ProtocolFee_inc_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
}

/** input type for inserting data into table "ProtocolFee" */
export interface ProtocolFee_insert_input {
  amount?: Scalars['numeric'] | null
  amountUSD?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  module_id?: Scalars['String'] | null
  source?: Scalars['feesource'] | null
  token?: Token_obj_rel_insert_input | null
  token_id?: Scalars['String'] | null
  treasury?: Scalars['String'] | null
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

/** response of any mutation on the table "ProtocolFee" */
export interface ProtocolFee_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: ProtocolFeeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "ProtocolFee" */
export interface ProtocolFee_on_conflict {
  constraint: ProtocolFee_constraint
  update_columns?: ProtocolFee_update_column[]
  where?: ProtocolFee_bool_exp | null
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

/** primary key columns input for table: ProtocolFee */
export interface ProtocolFee_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "ProtocolFee" */
export interface ProtocolFee_set_input {
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

export interface ProtocolFee_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: ProtocolFee_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: ProtocolFee_set_input | null
  /** filter the rows which have to be updated */
  where: ProtocolFee_bool_exp
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
  /** An aggregate relationship */
  vestings_aggregate?: LinearVesting_aggregateGenqlSelection & {
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

/** aggregated selection of "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_aggregateGenqlSelection {
  aggregate?: StreamingPaymentProcessor_aggregate_fieldsGenqlSelection
  nodes?: StreamingPaymentProcessorGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_aggregate_fieldsGenqlSelection {
  avg?: StreamingPaymentProcessor_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: StreamingPaymentProcessor_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: StreamingPaymentProcessor_max_fieldsGenqlSelection
  min?: StreamingPaymentProcessor_min_fieldsGenqlSelection
  stddev?: StreamingPaymentProcessor_stddev_fieldsGenqlSelection
  stddev_pop?: StreamingPaymentProcessor_stddev_pop_fieldsGenqlSelection
  stddev_samp?: StreamingPaymentProcessor_stddev_samp_fieldsGenqlSelection
  sum?: StreamingPaymentProcessor_sum_fieldsGenqlSelection
  var_pop?: StreamingPaymentProcessor_var_pop_fieldsGenqlSelection
  var_samp?: StreamingPaymentProcessor_var_samp_fieldsGenqlSelection
  variance?: StreamingPaymentProcessor_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface StreamingPaymentProcessor_avg_fieldsGenqlSelection {
  chainId?: boolean | number
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
  vestings_aggregate?: LinearVesting_aggregate_bool_exp | null
  workflow?: Workflow_bool_exp | null
  workflow_id?: String_comparison_exp | null
}

/** input type for incrementing numeric columns in table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_inc_input {
  chainId?: Scalars['Int'] | null
}

/** input type for inserting data into table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_insert_input {
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  vestings?: LinearVesting_arr_rel_insert_input | null
  workflow?: Workflow_obj_rel_insert_input | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface StreamingPaymentProcessor_max_fieldsGenqlSelection {
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface StreamingPaymentProcessor_min_fieldsGenqlSelection {
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  workflow_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: StreamingPaymentProcessorGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_obj_rel_insert_input {
  data: StreamingPaymentProcessor_insert_input
  /** upsert condition */
  on_conflict?: StreamingPaymentProcessor_on_conflict | null
}

/** on_conflict condition type for table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_on_conflict {
  constraint: StreamingPaymentProcessor_constraint
  update_columns?: StreamingPaymentProcessor_update_column[]
  where?: StreamingPaymentProcessor_bool_exp | null
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

/** primary key columns input for table: StreamingPaymentProcessor */
export interface StreamingPaymentProcessor_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "StreamingPaymentProcessor" */
export interface StreamingPaymentProcessor_set_input {
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  workflow_id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface StreamingPaymentProcessor_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface StreamingPaymentProcessor_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface StreamingPaymentProcessor_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface StreamingPaymentProcessor_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface StreamingPaymentProcessor_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: StreamingPaymentProcessor_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: StreamingPaymentProcessor_set_input | null
  /** filter the rows which have to be updated */
  where: StreamingPaymentProcessor_bool_exp
}

/** aggregate var_pop on columns */
export interface StreamingPaymentProcessor_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface StreamingPaymentProcessor_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface StreamingPaymentProcessor_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregated selection of "Swap" */
export interface Swap_aggregateGenqlSelection {
  aggregate?: Swap_aggregate_fieldsGenqlSelection
  nodes?: SwapGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Swap_aggregate_bool_exp {
  count?: Swap_aggregate_bool_exp_count | null
}

export interface Swap_aggregate_bool_exp_count {
  arguments?: Swap_select_column[] | null
  distinct?: Scalars['Boolean'] | null
  filter?: Swap_bool_exp | null
  predicate: Int_comparison_exp
}

/** aggregate fields of "Swap" */
export interface Swap_aggregate_fieldsGenqlSelection {
  avg?: Swap_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: Swap_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: Swap_max_fieldsGenqlSelection
  min?: Swap_min_fieldsGenqlSelection
  stddev?: Swap_stddev_fieldsGenqlSelection
  stddev_pop?: Swap_stddev_pop_fieldsGenqlSelection
  stddev_samp?: Swap_stddev_samp_fieldsGenqlSelection
  sum?: Swap_sum_fieldsGenqlSelection
  var_pop?: Swap_var_pop_fieldsGenqlSelection
  var_samp?: Swap_var_samp_fieldsGenqlSelection
  variance?: Swap_variance_fieldsGenqlSelection
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

/** input type for inserting array relation for remote table "Swap" */
export interface Swap_arr_rel_insert_input {
  data: Swap_insert_input[]
  /** upsert condition */
  on_conflict?: Swap_on_conflict | null
}

/** aggregate avg on columns */
export interface Swap_avg_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "Swap" */
export interface Swap_avg_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
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

/** input type for incrementing numeric columns in table "Swap" */
export interface Swap_inc_input {
  amountCOL?: Scalars['numeric'] | null
  amountISS?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  priceCOL?: Scalars['numeric'] | null
  priceUSD?: Scalars['numeric'] | null
}

/** input type for inserting data into table "Swap" */
export interface Swap_insert_input {
  amountCOL?: Scalars['numeric'] | null
  amountISS?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  chainId?: Scalars['Int'] | null
  collateralToken?: Token_obj_rel_insert_input | null
  collateralToken_id?: Scalars['String'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  initiator?: Scalars['String'] | null
  issuanceToken?: Token_obj_rel_insert_input | null
  issuanceToken_id?: Scalars['String'] | null
  module_id?: Scalars['String'] | null
  priceCOL?: Scalars['numeric'] | null
  priceUSD?: Scalars['numeric'] | null
  recipient?: Scalars['String'] | null
  swapType?: Scalars['swaptype'] | null
}

/** aggregate max on columns */
export interface Swap_max_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  initiator?: boolean | number
  issuanceToken_id?: boolean | number
  module_id?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  recipient?: boolean | number
  swapType?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by max() on columns of table "Swap" */
export interface Swap_max_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
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

/** aggregate min on columns */
export interface Swap_min_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  collateralToken_id?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  initiator?: boolean | number
  issuanceToken_id?: boolean | number
  module_id?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  recipient?: boolean | number
  swapType?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by min() on columns of table "Swap" */
export interface Swap_min_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
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

/** response of any mutation on the table "Swap" */
export interface Swap_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: SwapGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "Swap" */
export interface Swap_on_conflict {
  constraint: Swap_constraint
  update_columns?: Swap_update_column[]
  where?: Swap_bool_exp | null
}

/** Ordering options when selecting data from "Swap". */
export interface Swap_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
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

/** primary key columns input for table: Swap */
export interface Swap_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "Swap" */
export interface Swap_set_input {
  amountCOL?: Scalars['numeric'] | null
  amountISS?: Scalars['numeric'] | null
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

/** aggregate stddev on columns */
export interface Swap_stddev_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "Swap" */
export interface Swap_stddev_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface Swap_stddev_pop_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "Swap" */
export interface Swap_stddev_pop_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface Swap_stddev_samp_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "Swap" */
export interface Swap_stddev_samp_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
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

/** aggregate sum on columns */
export interface Swap_sum_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "Swap" */
export interface Swap_sum_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

export interface Swap_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Swap_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: Swap_set_input | null
  /** filter the rows which have to be updated */
  where: Swap_bool_exp
}

/** aggregate var_pop on columns */
export interface Swap_var_pop_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "Swap" */
export interface Swap_var_pop_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** aggregate var_samp on columns */
export interface Swap_var_samp_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "Swap" */
export interface Swap_var_samp_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
  blockTimestamp?: order_by | null
  chainId?: order_by | null
  priceCOL?: order_by | null
  priceUSD?: order_by | null
}

/** aggregate variance on columns */
export interface Swap_variance_fieldsGenqlSelection {
  amountCOL?: boolean | number
  amountISS?: boolean | number
  blockTimestamp?: boolean | number
  chainId?: boolean | number
  priceCOL?: boolean | number
  priceUSD?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "Swap" */
export interface Swap_variance_order_by {
  amountCOL?: order_by | null
  amountISS?: order_by | null
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

/** input type for incrementing numeric columns in table "Token" */
export interface Token_inc_input {
  chainId?: Scalars['Int'] | null
  decimals?: Scalars['Int'] | null
  priceUSD?: Scalars['numeric'] | null
  totalSupply?: Scalars['numeric'] | null
}

/** input type for inserting data into table "Token" */
export interface Token_insert_input {
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

/** response of any mutation on the table "Token" */
export interface Token_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: TokenGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "Token" */
export interface Token_obj_rel_insert_input {
  data: Token_insert_input
  /** upsert condition */
  on_conflict?: Token_on_conflict | null
}

/** on_conflict condition type for table "Token" */
export interface Token_on_conflict {
  constraint: Token_constraint
  update_columns?: Token_update_column[]
  where?: Token_bool_exp | null
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

/** primary key columns input for table: Token */
export interface Token_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "Token" */
export interface Token_set_input {
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

export interface Token_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Token_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: Token_set_input | null
  /** filter the rows which have to be updated */
  where: Token_bool_exp
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

/** input type for inserting array relation for remote table "Transfer" */
export interface Transfer_arr_rel_insert_input {
  data: Transfer_insert_input[]
  /** upsert condition */
  on_conflict?: Transfer_on_conflict | null
}

/** aggregate avg on columns */
export interface Transfer_avg_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by avg() on columns of table "Transfer" */
export interface Transfer_avg_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** Boolean expression to filter rows from the table "Transfer". All fields are combined with a logical 'AND'. */
export interface Transfer_bool_exp {
  _and?: Transfer_bool_exp[] | null
  _not?: Transfer_bool_exp | null
  _or?: Transfer_bool_exp[] | null
  amount?: numeric_comparison_exp | null
  blockTimestamp?: Int_comparison_exp | null
  db_write_timestamp?: timestamp_comparison_exp | null
  depositVault?: DepositVault_bool_exp | null
  depositVault_id?: String_comparison_exp | null
  id?: String_comparison_exp | null
  recipient?: String_comparison_exp | null
}

/** input type for incrementing numeric columns in table "Transfer" */
export interface Transfer_inc_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
}

/** input type for inserting data into table "Transfer" */
export interface Transfer_insert_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault?: DepositVault_obj_rel_insert_input | null
  depositVault_id?: Scalars['String'] | null
  id?: Scalars['String'] | null
  recipient?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface Transfer_max_fieldsGenqlSelection {
  amount?: boolean | number
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
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
}

/** aggregate min on columns */
export interface Transfer_min_fieldsGenqlSelection {
  amount?: boolean | number
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
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault_id?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
}

/** response of any mutation on the table "Transfer" */
export interface Transfer_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: TransferGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "Transfer" */
export interface Transfer_on_conflict {
  constraint: Transfer_constraint
  update_columns?: Transfer_update_column[]
  where?: Transfer_bool_exp | null
}

/** Ordering options when selecting data from "Transfer". */
export interface Transfer_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
  db_write_timestamp?: order_by | null
  depositVault?: DepositVault_order_by | null
  depositVault_id?: order_by | null
  id?: order_by | null
  recipient?: order_by | null
}

/** primary key columns input for table: Transfer */
export interface Transfer_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "Transfer" */
export interface Transfer_set_input {
  amount?: Scalars['numeric'] | null
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault_id?: Scalars['String'] | null
  id?: Scalars['String'] | null
  recipient?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface Transfer_stddev_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev() on columns of table "Transfer" */
export interface Transfer_stddev_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_pop on columns */
export interface Transfer_stddev_pop_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_pop() on columns of table "Transfer" */
export interface Transfer_stddev_pop_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate stddev_samp on columns */
export interface Transfer_stddev_samp_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by stddev_samp() on columns of table "Transfer" */
export interface Transfer_stddev_samp_order_by {
  amount?: order_by | null
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
  blockTimestamp?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  depositVault_id?: Scalars['String'] | null
  id?: Scalars['String'] | null
  recipient?: Scalars['String'] | null
}

/** aggregate sum on columns */
export interface Transfer_sum_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by sum() on columns of table "Transfer" */
export interface Transfer_sum_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

export interface Transfer_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Transfer_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: Transfer_set_input | null
  /** filter the rows which have to be updated */
  where: Transfer_bool_exp
}

/** aggregate var_pop on columns */
export interface Transfer_var_pop_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_pop() on columns of table "Transfer" */
export interface Transfer_var_pop_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate var_samp on columns */
export interface Transfer_var_samp_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by var_samp() on columns of table "Transfer" */
export interface Transfer_var_samp_order_by {
  amount?: order_by | null
  blockTimestamp?: order_by | null
}

/** aggregate variance on columns */
export interface Transfer_variance_fieldsGenqlSelection {
  amount?: boolean | number
  blockTimestamp?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** order by variance() on columns of table "Transfer" */
export interface Transfer_variance_order_by {
  amount?: order_by | null
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

/** aggregated selection of "WorkflowModuleType" */
export interface WorkflowModuleType_aggregateGenqlSelection {
  aggregate?: WorkflowModuleType_aggregate_fieldsGenqlSelection
  nodes?: WorkflowModuleTypeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "WorkflowModuleType" */
export interface WorkflowModuleType_aggregate_fieldsGenqlSelection {
  avg?: WorkflowModuleType_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: WorkflowModuleType_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: WorkflowModuleType_max_fieldsGenqlSelection
  min?: WorkflowModuleType_min_fieldsGenqlSelection
  stddev?: WorkflowModuleType_stddev_fieldsGenqlSelection
  stddev_pop?: WorkflowModuleType_stddev_pop_fieldsGenqlSelection
  stddev_samp?: WorkflowModuleType_stddev_samp_fieldsGenqlSelection
  sum?: WorkflowModuleType_sum_fieldsGenqlSelection
  var_pop?: WorkflowModuleType_var_pop_fieldsGenqlSelection
  var_samp?: WorkflowModuleType_var_samp_fieldsGenqlSelection
  variance?: WorkflowModuleType_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface WorkflowModuleType_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
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

/** input type for incrementing numeric columns in table "WorkflowModuleType" */
export interface WorkflowModuleType_inc_input {
  chainId?: Scalars['Int'] | null
  majorVersion?: Scalars['numeric'] | null
  minorVersion?: Scalars['numeric'] | null
  patchVersion?: Scalars['numeric'] | null
}

/** input type for inserting data into table "WorkflowModuleType" */
export interface WorkflowModuleType_insert_input {
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

/** aggregate max on columns */
export interface WorkflowModuleType_max_fieldsGenqlSelection {
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

/** aggregate min on columns */
export interface WorkflowModuleType_min_fieldsGenqlSelection {
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

/** response of any mutation on the table "WorkflowModuleType" */
export interface WorkflowModuleType_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: WorkflowModuleTypeGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "WorkflowModuleType" */
export interface WorkflowModuleType_obj_rel_insert_input {
  data: WorkflowModuleType_insert_input
  /** upsert condition */
  on_conflict?: WorkflowModuleType_on_conflict | null
}

/** on_conflict condition type for table "WorkflowModuleType" */
export interface WorkflowModuleType_on_conflict {
  constraint: WorkflowModuleType_constraint
  update_columns?: WorkflowModuleType_update_column[]
  where?: WorkflowModuleType_bool_exp | null
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

/** primary key columns input for table: WorkflowModuleType */
export interface WorkflowModuleType_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "WorkflowModuleType" */
export interface WorkflowModuleType_set_input {
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

/** aggregate stddev on columns */
export interface WorkflowModuleType_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface WorkflowModuleType_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface WorkflowModuleType_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface WorkflowModuleType_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface WorkflowModuleType_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: WorkflowModuleType_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: WorkflowModuleType_set_input | null
  /** filter the rows which have to be updated */
  where: WorkflowModuleType_bool_exp
}

/** aggregate var_pop on columns */
export interface WorkflowModuleType_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface WorkflowModuleType_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface WorkflowModuleType_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  majorVersion?: boolean | number
  minorVersion?: boolean | number
  patchVersion?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "WorkflowModule" */
export interface WorkflowModule_aggregateGenqlSelection {
  aggregate?: WorkflowModule_aggregate_fieldsGenqlSelection
  nodes?: WorkflowModuleGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "WorkflowModule" */
export interface WorkflowModule_aggregate_fieldsGenqlSelection {
  avg?: WorkflowModule_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: WorkflowModule_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: WorkflowModule_max_fieldsGenqlSelection
  min?: WorkflowModule_min_fieldsGenqlSelection
  stddev?: WorkflowModule_stddev_fieldsGenqlSelection
  stddev_pop?: WorkflowModule_stddev_pop_fieldsGenqlSelection
  stddev_samp?: WorkflowModule_stddev_samp_fieldsGenqlSelection
  sum?: WorkflowModule_sum_fieldsGenqlSelection
  var_pop?: WorkflowModule_var_pop_fieldsGenqlSelection
  var_samp?: WorkflowModule_var_samp_fieldsGenqlSelection
  variance?: WorkflowModule_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface WorkflowModule_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** input type for incrementing numeric columns in table "WorkflowModule" */
export interface WorkflowModule_inc_input {
  chainId?: Scalars['Int'] | null
}

/** input type for inserting data into table "WorkflowModule" */
export interface WorkflowModule_insert_input {
  address?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  moduleType?: WorkflowModuleType_obj_rel_insert_input | null
  moduleType_id?: Scalars['String'] | null
  orchestrator?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface WorkflowModule_max_fieldsGenqlSelection {
  address?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  moduleType_id?: boolean | number
  orchestrator?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface WorkflowModule_min_fieldsGenqlSelection {
  address?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  id?: boolean | number
  moduleType_id?: boolean | number
  orchestrator?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "WorkflowModule" */
export interface WorkflowModule_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: WorkflowModuleGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "WorkflowModule" */
export interface WorkflowModule_obj_rel_insert_input {
  data: WorkflowModule_insert_input
  /** upsert condition */
  on_conflict?: WorkflowModule_on_conflict | null
}

/** on_conflict condition type for table "WorkflowModule" */
export interface WorkflowModule_on_conflict {
  constraint: WorkflowModule_constraint
  update_columns?: WorkflowModule_update_column[]
  where?: WorkflowModule_bool_exp | null
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

/** primary key columns input for table: WorkflowModule */
export interface WorkflowModule_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "WorkflowModule" */
export interface WorkflowModule_set_input {
  address?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  id?: Scalars['String'] | null
  moduleType_id?: Scalars['String'] | null
  orchestrator?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface WorkflowModule_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface WorkflowModule_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface WorkflowModule_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface WorkflowModule_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface WorkflowModule_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: WorkflowModule_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: WorkflowModule_set_input | null
  /** filter the rows which have to be updated */
  where: WorkflowModule_bool_exp
}

/** aggregate var_pop on columns */
export interface WorkflowModule_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface WorkflowModule_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface WorkflowModule_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "Workflow" */
export interface Workflow_aggregateGenqlSelection {
  aggregate?: Workflow_aggregate_fieldsGenqlSelection
  nodes?: WorkflowGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "Workflow" */
export interface Workflow_aggregate_fieldsGenqlSelection {
  avg?: Workflow_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: Workflow_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: Workflow_max_fieldsGenqlSelection
  min?: Workflow_min_fieldsGenqlSelection
  stddev?: Workflow_stddev_fieldsGenqlSelection
  stddev_pop?: Workflow_stddev_pop_fieldsGenqlSelection
  stddev_samp?: Workflow_stddev_samp_fieldsGenqlSelection
  sum?: Workflow_sum_fieldsGenqlSelection
  var_pop?: Workflow_var_pop_fieldsGenqlSelection
  var_samp?: Workflow_var_samp_fieldsGenqlSelection
  variance?: Workflow_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface Workflow_avg_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** input type for incrementing numeric columns in table "Workflow" */
export interface Workflow_inc_input {
  chainId?: Scalars['Int'] | null
}

/** input type for inserting data into table "Workflow" */
export interface Workflow_insert_input {
  authorizer?: WorkflowModule_obj_rel_insert_input | null
  authorizer_id?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  fundingManager?: WorkflowModule_obj_rel_insert_input | null
  fundingManager_id?: Scalars['String'] | null
  id?: Scalars['String'] | null
  optionalModules?: Scalars['String'][] | null
  orchestrator?: Scalars['String'] | null
  paymentProcessor?: WorkflowModule_obj_rel_insert_input | null
  paymentProcessor_id?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface Workflow_max_fieldsGenqlSelection {
  authorizer_id?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  fundingManager_id?: boolean | number
  id?: boolean | number
  optionalModules?: boolean | number
  orchestrator?: boolean | number
  paymentProcessor_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface Workflow_min_fieldsGenqlSelection {
  authorizer_id?: boolean | number
  chainId?: boolean | number
  db_write_timestamp?: boolean | number
  fundingManager_id?: boolean | number
  id?: boolean | number
  optionalModules?: boolean | number
  orchestrator?: boolean | number
  paymentProcessor_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "Workflow" */
export interface Workflow_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: WorkflowGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting object relation for remote table "Workflow" */
export interface Workflow_obj_rel_insert_input {
  data: Workflow_insert_input
  /** upsert condition */
  on_conflict?: Workflow_on_conflict | null
}

/** on_conflict condition type for table "Workflow" */
export interface Workflow_on_conflict {
  constraint: Workflow_constraint
  update_columns?: Workflow_update_column[]
  where?: Workflow_bool_exp | null
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

/** primary key columns input for table: Workflow */
export interface Workflow_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "Workflow" */
export interface Workflow_set_input {
  authorizer_id?: Scalars['String'] | null
  chainId?: Scalars['Int'] | null
  db_write_timestamp?: Scalars['timestamp'] | null
  fundingManager_id?: Scalars['String'] | null
  id?: Scalars['String'] | null
  optionalModules?: Scalars['String'][] | null
  orchestrator?: Scalars['String'] | null
  paymentProcessor_id?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface Workflow_stddev_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface Workflow_stddev_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface Workflow_stddev_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface Workflow_sum_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface Workflow_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Workflow_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: Workflow_set_input | null
  /** filter the rows which have to be updated */
  where: Workflow_bool_exp
}

/** aggregate var_pop on columns */
export interface Workflow_var_pop_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface Workflow_var_samp_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface Workflow_variance_fieldsGenqlSelection {
  chainId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregated selection of "chain_metadata" */
export interface chain_metadata_aggregateGenqlSelection {
  aggregate?: chain_metadata_aggregate_fieldsGenqlSelection
  nodes?: chain_metadataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "chain_metadata" */
export interface chain_metadata_aggregate_fieldsGenqlSelection {
  avg?: chain_metadata_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: chain_metadata_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: chain_metadata_max_fieldsGenqlSelection
  min?: chain_metadata_min_fieldsGenqlSelection
  stddev?: chain_metadata_stddev_fieldsGenqlSelection
  stddev_pop?: chain_metadata_stddev_pop_fieldsGenqlSelection
  stddev_samp?: chain_metadata_stddev_samp_fieldsGenqlSelection
  sum?: chain_metadata_sum_fieldsGenqlSelection
  var_pop?: chain_metadata_var_pop_fieldsGenqlSelection
  var_samp?: chain_metadata_var_samp_fieldsGenqlSelection
  variance?: chain_metadata_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface chain_metadata_avg_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
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

/** input type for incrementing numeric columns in table "chain_metadata" */
export interface chain_metadata_inc_input {
  block_height?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  end_block?: Scalars['Int'] | null
  first_event_block_number?: Scalars['Int'] | null
  latest_fetched_block_number?: Scalars['Int'] | null
  latest_processed_block?: Scalars['Int'] | null
  num_batches_fetched?: Scalars['Int'] | null
  num_events_processed?: Scalars['Int'] | null
  start_block?: Scalars['Int'] | null
}

/** input type for inserting data into table "chain_metadata" */
export interface chain_metadata_insert_input {
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

/** aggregate max on columns */
export interface chain_metadata_max_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  timestamp_caught_up_to_head_or_endblock?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface chain_metadata_min_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  timestamp_caught_up_to_head_or_endblock?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "chain_metadata" */
export interface chain_metadata_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: chain_metadataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "chain_metadata" */
export interface chain_metadata_on_conflict {
  constraint: chain_metadata_constraint
  update_columns?: chain_metadata_update_column[]
  where?: chain_metadata_bool_exp | null
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

/** primary key columns input for table: chain_metadata */
export interface chain_metadata_pk_columns_input {
  chain_id: Scalars['Int']
}

/** input type for updating data in table "chain_metadata" */
export interface chain_metadata_set_input {
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

/** aggregate stddev on columns */
export interface chain_metadata_stddev_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface chain_metadata_stddev_pop_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface chain_metadata_stddev_samp_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface chain_metadata_sum_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface chain_metadata_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: chain_metadata_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: chain_metadata_set_input | null
  /** filter the rows which have to be updated */
  where: chain_metadata_bool_exp
}

/** aggregate var_pop on columns */
export interface chain_metadata_var_pop_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface chain_metadata_var_samp_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface chain_metadata_variance_fieldsGenqlSelection {
  block_height?: boolean | number
  chain_id?: boolean | number
  end_block?: boolean | number
  first_event_block_number?: boolean | number
  latest_fetched_block_number?: boolean | number
  latest_processed_block?: boolean | number
  num_batches_fetched?: boolean | number
  num_events_processed?: boolean | number
  start_block?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregated selection of "dynamic_contract_registry" */
export interface dynamic_contract_registry_aggregateGenqlSelection {
  aggregate?: dynamic_contract_registry_aggregate_fieldsGenqlSelection
  nodes?: dynamic_contract_registryGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "dynamic_contract_registry" */
export interface dynamic_contract_registry_aggregate_fieldsGenqlSelection {
  avg?: dynamic_contract_registry_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: dynamic_contract_registry_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: dynamic_contract_registry_max_fieldsGenqlSelection
  min?: dynamic_contract_registry_min_fieldsGenqlSelection
  stddev?: dynamic_contract_registry_stddev_fieldsGenqlSelection
  stddev_pop?: dynamic_contract_registry_stddev_pop_fieldsGenqlSelection
  stddev_samp?: dynamic_contract_registry_stddev_samp_fieldsGenqlSelection
  sum?: dynamic_contract_registry_sum_fieldsGenqlSelection
  var_pop?: dynamic_contract_registry_var_pop_fieldsGenqlSelection
  var_samp?: dynamic_contract_registry_var_samp_fieldsGenqlSelection
  variance?: dynamic_contract_registry_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface dynamic_contract_registry_avg_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
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

/** input type for incrementing numeric columns in table "dynamic_contract_registry" */
export interface dynamic_contract_registry_inc_input {
  chain_id?: Scalars['Int'] | null
  registering_event_block_number?: Scalars['Int'] | null
  registering_event_block_timestamp?: Scalars['Int'] | null
  registering_event_log_index?: Scalars['Int'] | null
}

/** input type for inserting data into table "dynamic_contract_registry" */
export interface dynamic_contract_registry_insert_input {
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

/** aggregate max on columns */
export interface dynamic_contract_registry_max_fieldsGenqlSelection {
  chain_id?: boolean | number
  contract_address?: boolean | number
  contract_type?: boolean | number
  id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_contract_name?: boolean | number
  registering_event_log_index?: boolean | number
  registering_event_name?: boolean | number
  registering_event_src_address?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface dynamic_contract_registry_min_fieldsGenqlSelection {
  chain_id?: boolean | number
  contract_address?: boolean | number
  contract_type?: boolean | number
  id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_contract_name?: boolean | number
  registering_event_log_index?: boolean | number
  registering_event_name?: boolean | number
  registering_event_src_address?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "dynamic_contract_registry" */
export interface dynamic_contract_registry_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: dynamic_contract_registryGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "dynamic_contract_registry" */
export interface dynamic_contract_registry_on_conflict {
  constraint: dynamic_contract_registry_constraint
  update_columns?: dynamic_contract_registry_update_column[]
  where?: dynamic_contract_registry_bool_exp | null
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

/** primary key columns input for table: dynamic_contract_registry */
export interface dynamic_contract_registry_pk_columns_input {
  id: Scalars['String']
}

/** input type for updating data in table "dynamic_contract_registry" */
export interface dynamic_contract_registry_set_input {
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

/** aggregate stddev on columns */
export interface dynamic_contract_registry_stddev_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface dynamic_contract_registry_stddev_pop_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface dynamic_contract_registry_stddev_samp_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface dynamic_contract_registry_sum_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface dynamic_contract_registry_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: dynamic_contract_registry_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: dynamic_contract_registry_set_input | null
  /** filter the rows which have to be updated */
  where: dynamic_contract_registry_bool_exp
}

/** aggregate var_pop on columns */
export interface dynamic_contract_registry_var_pop_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface dynamic_contract_registry_var_samp_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface dynamic_contract_registry_variance_fieldsGenqlSelection {
  chain_id?: boolean | number
  registering_event_block_number?: boolean | number
  registering_event_block_timestamp?: boolean | number
  registering_event_log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregated selection of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_aggregateGenqlSelection {
  aggregate?: end_of_block_range_scanned_data_aggregate_fieldsGenqlSelection
  nodes?: end_of_block_range_scanned_dataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_aggregate_fieldsGenqlSelection {
  avg?: end_of_block_range_scanned_data_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: end_of_block_range_scanned_data_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: end_of_block_range_scanned_data_max_fieldsGenqlSelection
  min?: end_of_block_range_scanned_data_min_fieldsGenqlSelection
  stddev?: end_of_block_range_scanned_data_stddev_fieldsGenqlSelection
  stddev_pop?: end_of_block_range_scanned_data_stddev_pop_fieldsGenqlSelection
  stddev_samp?: end_of_block_range_scanned_data_stddev_samp_fieldsGenqlSelection
  sum?: end_of_block_range_scanned_data_sum_fieldsGenqlSelection
  var_pop?: end_of_block_range_scanned_data_var_pop_fieldsGenqlSelection
  var_samp?: end_of_block_range_scanned_data_var_samp_fieldsGenqlSelection
  variance?: end_of_block_range_scanned_data_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface end_of_block_range_scanned_data_avg_fieldsGenqlSelection {
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

/** input type for incrementing numeric columns in table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_inc_input {
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
}

/** input type for inserting data into table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_insert_input {
  block_hash?: Scalars['String'] | null
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
}

/** aggregate max on columns */
export interface end_of_block_range_scanned_data_max_fieldsGenqlSelection {
  block_hash?: boolean | number
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface end_of_block_range_scanned_data_min_fieldsGenqlSelection {
  block_hash?: boolean | number
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: end_of_block_range_scanned_dataGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_on_conflict {
  constraint: end_of_block_range_scanned_data_constraint
  update_columns?: end_of_block_range_scanned_data_update_column[]
  where?: end_of_block_range_scanned_data_bool_exp | null
}

/** Ordering options when selecting data from "end_of_block_range_scanned_data". */
export interface end_of_block_range_scanned_data_order_by {
  block_hash?: order_by | null
  block_number?: order_by | null
  block_timestamp?: order_by | null
  chain_id?: order_by | null
}

/** primary key columns input for table: end_of_block_range_scanned_data */
export interface end_of_block_range_scanned_data_pk_columns_input {
  block_number: Scalars['Int']
  chain_id: Scalars['Int']
}

/** input type for updating data in table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_set_input {
  block_hash?: Scalars['String'] | null
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
}

/** aggregate stddev on columns */
export interface end_of_block_range_scanned_data_stddev_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface end_of_block_range_scanned_data_stddev_pop_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface end_of_block_range_scanned_data_stddev_samp_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface end_of_block_range_scanned_data_sum_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface end_of_block_range_scanned_data_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: end_of_block_range_scanned_data_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: end_of_block_range_scanned_data_set_input | null
  /** filter the rows which have to be updated */
  where: end_of_block_range_scanned_data_bool_exp
}

/** aggregate var_pop on columns */
export interface end_of_block_range_scanned_data_var_pop_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface end_of_block_range_scanned_data_var_samp_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface end_of_block_range_scanned_data_variance_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregated selection of "event_sync_state" */
export interface event_sync_state_aggregateGenqlSelection {
  aggregate?: event_sync_state_aggregate_fieldsGenqlSelection
  nodes?: event_sync_stateGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "event_sync_state" */
export interface event_sync_state_aggregate_fieldsGenqlSelection {
  avg?: event_sync_state_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: event_sync_state_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: event_sync_state_max_fieldsGenqlSelection
  min?: event_sync_state_min_fieldsGenqlSelection
  stddev?: event_sync_state_stddev_fieldsGenqlSelection
  stddev_pop?: event_sync_state_stddev_pop_fieldsGenqlSelection
  stddev_samp?: event_sync_state_stddev_samp_fieldsGenqlSelection
  sum?: event_sync_state_sum_fieldsGenqlSelection
  var_pop?: event_sync_state_var_pop_fieldsGenqlSelection
  var_samp?: event_sync_state_var_samp_fieldsGenqlSelection
  variance?: event_sync_state_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface event_sync_state_avg_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
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

/** input type for incrementing numeric columns in table "event_sync_state" */
export interface event_sync_state_inc_input {
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  log_index?: Scalars['Int'] | null
}

/** input type for inserting data into table "event_sync_state" */
export interface event_sync_state_insert_input {
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  is_pre_registering_dynamic_contracts?: Scalars['Boolean'] | null
  log_index?: Scalars['Int'] | null
}

/** aggregate max on columns */
export interface event_sync_state_max_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface event_sync_state_min_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "event_sync_state" */
export interface event_sync_state_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: event_sync_stateGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "event_sync_state" */
export interface event_sync_state_on_conflict {
  constraint: event_sync_state_constraint
  update_columns?: event_sync_state_update_column[]
  where?: event_sync_state_bool_exp | null
}

/** Ordering options when selecting data from "event_sync_state". */
export interface event_sync_state_order_by {
  block_number?: order_by | null
  block_timestamp?: order_by | null
  chain_id?: order_by | null
  is_pre_registering_dynamic_contracts?: order_by | null
  log_index?: order_by | null
}

/** primary key columns input for table: event_sync_state */
export interface event_sync_state_pk_columns_input {
  chain_id: Scalars['Int']
}

/** input type for updating data in table "event_sync_state" */
export interface event_sync_state_set_input {
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  is_pre_registering_dynamic_contracts?: Scalars['Boolean'] | null
  log_index?: Scalars['Int'] | null
}

/** aggregate stddev on columns */
export interface event_sync_state_stddev_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface event_sync_state_stddev_pop_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface event_sync_state_stddev_samp_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface event_sync_state_sum_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface event_sync_state_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: event_sync_state_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: event_sync_state_set_input | null
  /** filter the rows which have to be updated */
  where: event_sync_state_bool_exp
}

/** aggregate var_pop on columns */
export interface event_sync_state_var_pop_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface event_sync_state_var_samp_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface event_sync_state_variance_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  log_index?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** mutation root */
export interface mutation_rootGenqlSelection {
  /** delete data from the table: "BondingCurve" */
  delete_BondingCurve?: BondingCurve_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: BondingCurve_bool_exp
    }
  }
  /** delete single row from the table: "BondingCurve" */
  delete_BondingCurve_by_pk?: BondingCurveGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "Bounty" */
  delete_Bounty?: Bounty_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: Bounty_bool_exp
    }
  }
  /** delete data from the table: "BountyClaim" */
  delete_BountyClaim?: BountyClaim_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: BountyClaim_bool_exp
    }
  }
  /** delete single row from the table: "BountyClaim" */
  delete_BountyClaim_by_pk?: BountyClaimGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "BountyContributor" */
  delete_BountyContributor?: BountyContributor_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: BountyContributor_bool_exp
    }
  }
  /** delete single row from the table: "BountyContributor" */
  delete_BountyContributor_by_pk?: BountyContributorGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "BountyModule" */
  delete_BountyModule?: BountyModule_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: BountyModule_bool_exp
    }
  }
  /** delete single row from the table: "BountyModule" */
  delete_BountyModule_by_pk?: BountyModuleGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete single row from the table: "Bounty" */
  delete_Bounty_by_pk?: BountyGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "CurveDayData" */
  delete_CurveDayData?: CurveDayData_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: CurveDayData_bool_exp
    }
  }
  /** delete single row from the table: "CurveDayData" */
  delete_CurveDayData_by_pk?: CurveDayDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "CurveHourData" */
  delete_CurveHourData?: CurveHourData_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: CurveHourData_bool_exp
    }
  }
  /** delete single row from the table: "CurveHourData" */
  delete_CurveHourData_by_pk?: CurveHourDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "Deposit" */
  delete_Deposit?: Deposit_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: Deposit_bool_exp
    }
  }
  /** delete data from the table: "DepositVault" */
  delete_DepositVault?: DepositVault_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: DepositVault_bool_exp
    }
  }
  /** delete single row from the table: "DepositVault" */
  delete_DepositVault_by_pk?: DepositVaultGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete single row from the table: "Deposit" */
  delete_Deposit_by_pk?: DepositGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "IssuanceTokenDayData" */
  delete_IssuanceTokenDayData?: IssuanceTokenDayData_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: IssuanceTokenDayData_bool_exp
    }
  }
  /** delete single row from the table: "IssuanceTokenDayData" */
  delete_IssuanceTokenDayData_by_pk?: IssuanceTokenDayDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "IssuanceTokenHourData" */
  delete_IssuanceTokenHourData?: IssuanceTokenHourData_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: IssuanceTokenHourData_bool_exp
    }
  }
  /** delete single row from the table: "IssuanceTokenHourData" */
  delete_IssuanceTokenHourData_by_pk?: IssuanceTokenHourDataGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "LinearVesting" */
  delete_LinearVesting?: LinearVesting_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: LinearVesting_bool_exp
    }
  }
  /** delete single row from the table: "LinearVesting" */
  delete_LinearVesting_by_pk?: LinearVestingGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "ProjectFee" */
  delete_ProjectFee?: ProjectFee_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: ProjectFee_bool_exp
    }
  }
  /** delete single row from the table: "ProjectFee" */
  delete_ProjectFee_by_pk?: ProjectFeeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "ProtocolFee" */
  delete_ProtocolFee?: ProtocolFee_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: ProtocolFee_bool_exp
    }
  }
  /** delete single row from the table: "ProtocolFee" */
  delete_ProtocolFee_by_pk?: ProtocolFeeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "StreamingPaymentProcessor" */
  delete_StreamingPaymentProcessor?: StreamingPaymentProcessor_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: StreamingPaymentProcessor_bool_exp
    }
  }
  /** delete single row from the table: "StreamingPaymentProcessor" */
  delete_StreamingPaymentProcessor_by_pk?: StreamingPaymentProcessorGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "Swap" */
  delete_Swap?: Swap_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: Swap_bool_exp
    }
  }
  /** delete single row from the table: "Swap" */
  delete_Swap_by_pk?: SwapGenqlSelection & { __args: { id: Scalars['String'] } }
  /** delete data from the table: "Token" */
  delete_Token?: Token_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: Token_bool_exp
    }
  }
  /** delete single row from the table: "Token" */
  delete_Token_by_pk?: TokenGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "Transfer" */
  delete_Transfer?: Transfer_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: Transfer_bool_exp
    }
  }
  /** delete single row from the table: "Transfer" */
  delete_Transfer_by_pk?: TransferGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "Workflow" */
  delete_Workflow?: Workflow_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: Workflow_bool_exp
    }
  }
  /** delete data from the table: "WorkflowModule" */
  delete_WorkflowModule?: WorkflowModule_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: WorkflowModule_bool_exp
    }
  }
  /** delete data from the table: "WorkflowModuleType" */
  delete_WorkflowModuleType?: WorkflowModuleType_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: WorkflowModuleType_bool_exp
    }
  }
  /** delete single row from the table: "WorkflowModuleType" */
  delete_WorkflowModuleType_by_pk?: WorkflowModuleTypeGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete single row from the table: "WorkflowModule" */
  delete_WorkflowModule_by_pk?: WorkflowModuleGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete single row from the table: "Workflow" */
  delete_Workflow_by_pk?: WorkflowGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "chain_metadata" */
  delete_chain_metadata?: chain_metadata_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: chain_metadata_bool_exp
    }
  }
  /** delete single row from the table: "chain_metadata" */
  delete_chain_metadata_by_pk?: chain_metadataGenqlSelection & {
    __args: { chain_id: Scalars['Int'] }
  }
  /** delete data from the table: "dynamic_contract_registry" */
  delete_dynamic_contract_registry?: dynamic_contract_registry_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: dynamic_contract_registry_bool_exp
    }
  }
  /** delete single row from the table: "dynamic_contract_registry" */
  delete_dynamic_contract_registry_by_pk?: dynamic_contract_registryGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** delete data from the table: "end_of_block_range_scanned_data" */
  delete_end_of_block_range_scanned_data?: end_of_block_range_scanned_data_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: end_of_block_range_scanned_data_bool_exp
    }
  }
  /** delete single row from the table: "end_of_block_range_scanned_data" */
  delete_end_of_block_range_scanned_data_by_pk?: end_of_block_range_scanned_dataGenqlSelection & {
    __args: { block_number: Scalars['Int']; chain_id: Scalars['Int'] }
  }
  /** delete data from the table: "event_sync_state" */
  delete_event_sync_state?: event_sync_state_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: event_sync_state_bool_exp
    }
  }
  /** delete single row from the table: "event_sync_state" */
  delete_event_sync_state_by_pk?: event_sync_stateGenqlSelection & {
    __args: { chain_id: Scalars['Int'] }
  }
  /** delete data from the table: "persisted_state" */
  delete_persisted_state?: persisted_state_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: persisted_state_bool_exp
    }
  }
  /** delete single row from the table: "persisted_state" */
  delete_persisted_state_by_pk?: persisted_stateGenqlSelection & {
    __args: { id: Scalars['Int'] }
  }
  /** delete data from the table: "raw_events" */
  delete_raw_events?: raw_events_mutation_responseGenqlSelection & {
    __args: {
      /** filter the rows which have to be deleted */
      where: raw_events_bool_exp
    }
  }
  /** delete single row from the table: "raw_events" */
  delete_raw_events_by_pk?: raw_eventsGenqlSelection & {
    __args: { serial: Scalars['Int'] }
  }
  /** insert data into the table: "BondingCurve" */
  insert_BondingCurve?: BondingCurve_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: BondingCurve_insert_input[]
      /** upsert condition */
      on_conflict?: BondingCurve_on_conflict | null
    }
  }
  /** insert a single row into the table: "BondingCurve" */
  insert_BondingCurve_one?: BondingCurveGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: BondingCurve_insert_input
      /** upsert condition */
      on_conflict?: BondingCurve_on_conflict | null
    }
  }
  /** insert data into the table: "Bounty" */
  insert_Bounty?: Bounty_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: Bounty_insert_input[]
      /** upsert condition */
      on_conflict?: Bounty_on_conflict | null
    }
  }
  /** insert data into the table: "BountyClaim" */
  insert_BountyClaim?: BountyClaim_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: BountyClaim_insert_input[]
      /** upsert condition */
      on_conflict?: BountyClaim_on_conflict | null
    }
  }
  /** insert a single row into the table: "BountyClaim" */
  insert_BountyClaim_one?: BountyClaimGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: BountyClaim_insert_input
      /** upsert condition */
      on_conflict?: BountyClaim_on_conflict | null
    }
  }
  /** insert data into the table: "BountyContributor" */
  insert_BountyContributor?: BountyContributor_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: BountyContributor_insert_input[]
      /** upsert condition */
      on_conflict?: BountyContributor_on_conflict | null
    }
  }
  /** insert a single row into the table: "BountyContributor" */
  insert_BountyContributor_one?: BountyContributorGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: BountyContributor_insert_input
      /** upsert condition */
      on_conflict?: BountyContributor_on_conflict | null
    }
  }
  /** insert data into the table: "BountyModule" */
  insert_BountyModule?: BountyModule_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: BountyModule_insert_input[]
      /** upsert condition */
      on_conflict?: BountyModule_on_conflict | null
    }
  }
  /** insert a single row into the table: "BountyModule" */
  insert_BountyModule_one?: BountyModuleGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: BountyModule_insert_input
      /** upsert condition */
      on_conflict?: BountyModule_on_conflict | null
    }
  }
  /** insert a single row into the table: "Bounty" */
  insert_Bounty_one?: BountyGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: Bounty_insert_input
      /** upsert condition */
      on_conflict?: Bounty_on_conflict | null
    }
  }
  /** insert data into the table: "CurveDayData" */
  insert_CurveDayData?: CurveDayData_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: CurveDayData_insert_input[]
      /** upsert condition */
      on_conflict?: CurveDayData_on_conflict | null
    }
  }
  /** insert a single row into the table: "CurveDayData" */
  insert_CurveDayData_one?: CurveDayDataGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: CurveDayData_insert_input
      /** upsert condition */
      on_conflict?: CurveDayData_on_conflict | null
    }
  }
  /** insert data into the table: "CurveHourData" */
  insert_CurveHourData?: CurveHourData_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: CurveHourData_insert_input[]
      /** upsert condition */
      on_conflict?: CurveHourData_on_conflict | null
    }
  }
  /** insert a single row into the table: "CurveHourData" */
  insert_CurveHourData_one?: CurveHourDataGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: CurveHourData_insert_input
      /** upsert condition */
      on_conflict?: CurveHourData_on_conflict | null
    }
  }
  /** insert data into the table: "Deposit" */
  insert_Deposit?: Deposit_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: Deposit_insert_input[]
      /** upsert condition */
      on_conflict?: Deposit_on_conflict | null
    }
  }
  /** insert data into the table: "DepositVault" */
  insert_DepositVault?: DepositVault_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: DepositVault_insert_input[]
      /** upsert condition */
      on_conflict?: DepositVault_on_conflict | null
    }
  }
  /** insert a single row into the table: "DepositVault" */
  insert_DepositVault_one?: DepositVaultGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: DepositVault_insert_input
      /** upsert condition */
      on_conflict?: DepositVault_on_conflict | null
    }
  }
  /** insert a single row into the table: "Deposit" */
  insert_Deposit_one?: DepositGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: Deposit_insert_input
      /** upsert condition */
      on_conflict?: Deposit_on_conflict | null
    }
  }
  /** insert data into the table: "IssuanceTokenDayData" */
  insert_IssuanceTokenDayData?: IssuanceTokenDayData_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: IssuanceTokenDayData_insert_input[]
      /** upsert condition */
      on_conflict?: IssuanceTokenDayData_on_conflict | null
    }
  }
  /** insert a single row into the table: "IssuanceTokenDayData" */
  insert_IssuanceTokenDayData_one?: IssuanceTokenDayDataGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: IssuanceTokenDayData_insert_input
      /** upsert condition */
      on_conflict?: IssuanceTokenDayData_on_conflict | null
    }
  }
  /** insert data into the table: "IssuanceTokenHourData" */
  insert_IssuanceTokenHourData?: IssuanceTokenHourData_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: IssuanceTokenHourData_insert_input[]
      /** upsert condition */
      on_conflict?: IssuanceTokenHourData_on_conflict | null
    }
  }
  /** insert a single row into the table: "IssuanceTokenHourData" */
  insert_IssuanceTokenHourData_one?: IssuanceTokenHourDataGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: IssuanceTokenHourData_insert_input
      /** upsert condition */
      on_conflict?: IssuanceTokenHourData_on_conflict | null
    }
  }
  /** insert data into the table: "LinearVesting" */
  insert_LinearVesting?: LinearVesting_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: LinearVesting_insert_input[]
      /** upsert condition */
      on_conflict?: LinearVesting_on_conflict | null
    }
  }
  /** insert a single row into the table: "LinearVesting" */
  insert_LinearVesting_one?: LinearVestingGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: LinearVesting_insert_input
      /** upsert condition */
      on_conflict?: LinearVesting_on_conflict | null
    }
  }
  /** insert data into the table: "ProjectFee" */
  insert_ProjectFee?: ProjectFee_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: ProjectFee_insert_input[]
      /** upsert condition */
      on_conflict?: ProjectFee_on_conflict | null
    }
  }
  /** insert a single row into the table: "ProjectFee" */
  insert_ProjectFee_one?: ProjectFeeGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: ProjectFee_insert_input
      /** upsert condition */
      on_conflict?: ProjectFee_on_conflict | null
    }
  }
  /** insert data into the table: "ProtocolFee" */
  insert_ProtocolFee?: ProtocolFee_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: ProtocolFee_insert_input[]
      /** upsert condition */
      on_conflict?: ProtocolFee_on_conflict | null
    }
  }
  /** insert a single row into the table: "ProtocolFee" */
  insert_ProtocolFee_one?: ProtocolFeeGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: ProtocolFee_insert_input
      /** upsert condition */
      on_conflict?: ProtocolFee_on_conflict | null
    }
  }
  /** insert data into the table: "StreamingPaymentProcessor" */
  insert_StreamingPaymentProcessor?: StreamingPaymentProcessor_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: StreamingPaymentProcessor_insert_input[]
      /** upsert condition */
      on_conflict?: StreamingPaymentProcessor_on_conflict | null
    }
  }
  /** insert a single row into the table: "StreamingPaymentProcessor" */
  insert_StreamingPaymentProcessor_one?: StreamingPaymentProcessorGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: StreamingPaymentProcessor_insert_input
      /** upsert condition */
      on_conflict?: StreamingPaymentProcessor_on_conflict | null
    }
  }
  /** insert data into the table: "Swap" */
  insert_Swap?: Swap_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: Swap_insert_input[]
      /** upsert condition */
      on_conflict?: Swap_on_conflict | null
    }
  }
  /** insert a single row into the table: "Swap" */
  insert_Swap_one?: SwapGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: Swap_insert_input
      /** upsert condition */
      on_conflict?: Swap_on_conflict | null
    }
  }
  /** insert data into the table: "Token" */
  insert_Token?: Token_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: Token_insert_input[]
      /** upsert condition */
      on_conflict?: Token_on_conflict | null
    }
  }
  /** insert a single row into the table: "Token" */
  insert_Token_one?: TokenGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: Token_insert_input
      /** upsert condition */
      on_conflict?: Token_on_conflict | null
    }
  }
  /** insert data into the table: "Transfer" */
  insert_Transfer?: Transfer_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: Transfer_insert_input[]
      /** upsert condition */
      on_conflict?: Transfer_on_conflict | null
    }
  }
  /** insert a single row into the table: "Transfer" */
  insert_Transfer_one?: TransferGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: Transfer_insert_input
      /** upsert condition */
      on_conflict?: Transfer_on_conflict | null
    }
  }
  /** insert data into the table: "Workflow" */
  insert_Workflow?: Workflow_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: Workflow_insert_input[]
      /** upsert condition */
      on_conflict?: Workflow_on_conflict | null
    }
  }
  /** insert data into the table: "WorkflowModule" */
  insert_WorkflowModule?: WorkflowModule_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: WorkflowModule_insert_input[]
      /** upsert condition */
      on_conflict?: WorkflowModule_on_conflict | null
    }
  }
  /** insert data into the table: "WorkflowModuleType" */
  insert_WorkflowModuleType?: WorkflowModuleType_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: WorkflowModuleType_insert_input[]
      /** upsert condition */
      on_conflict?: WorkflowModuleType_on_conflict | null
    }
  }
  /** insert a single row into the table: "WorkflowModuleType" */
  insert_WorkflowModuleType_one?: WorkflowModuleTypeGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: WorkflowModuleType_insert_input
      /** upsert condition */
      on_conflict?: WorkflowModuleType_on_conflict | null
    }
  }
  /** insert a single row into the table: "WorkflowModule" */
  insert_WorkflowModule_one?: WorkflowModuleGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: WorkflowModule_insert_input
      /** upsert condition */
      on_conflict?: WorkflowModule_on_conflict | null
    }
  }
  /** insert a single row into the table: "Workflow" */
  insert_Workflow_one?: WorkflowGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: Workflow_insert_input
      /** upsert condition */
      on_conflict?: Workflow_on_conflict | null
    }
  }
  /** insert data into the table: "chain_metadata" */
  insert_chain_metadata?: chain_metadata_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: chain_metadata_insert_input[]
      /** upsert condition */
      on_conflict?: chain_metadata_on_conflict | null
    }
  }
  /** insert a single row into the table: "chain_metadata" */
  insert_chain_metadata_one?: chain_metadataGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: chain_metadata_insert_input
      /** upsert condition */
      on_conflict?: chain_metadata_on_conflict | null
    }
  }
  /** insert data into the table: "dynamic_contract_registry" */
  insert_dynamic_contract_registry?: dynamic_contract_registry_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: dynamic_contract_registry_insert_input[]
      /** upsert condition */
      on_conflict?: dynamic_contract_registry_on_conflict | null
    }
  }
  /** insert a single row into the table: "dynamic_contract_registry" */
  insert_dynamic_contract_registry_one?: dynamic_contract_registryGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: dynamic_contract_registry_insert_input
      /** upsert condition */
      on_conflict?: dynamic_contract_registry_on_conflict | null
    }
  }
  /** insert data into the table: "end_of_block_range_scanned_data" */
  insert_end_of_block_range_scanned_data?: end_of_block_range_scanned_data_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: end_of_block_range_scanned_data_insert_input[]
      /** upsert condition */
      on_conflict?: end_of_block_range_scanned_data_on_conflict | null
    }
  }
  /** insert a single row into the table: "end_of_block_range_scanned_data" */
  insert_end_of_block_range_scanned_data_one?: end_of_block_range_scanned_dataGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: end_of_block_range_scanned_data_insert_input
      /** upsert condition */
      on_conflict?: end_of_block_range_scanned_data_on_conflict | null
    }
  }
  /** insert data into the table: "event_sync_state" */
  insert_event_sync_state?: event_sync_state_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: event_sync_state_insert_input[]
      /** upsert condition */
      on_conflict?: event_sync_state_on_conflict | null
    }
  }
  /** insert a single row into the table: "event_sync_state" */
  insert_event_sync_state_one?: event_sync_stateGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: event_sync_state_insert_input
      /** upsert condition */
      on_conflict?: event_sync_state_on_conflict | null
    }
  }
  /** insert data into the table: "persisted_state" */
  insert_persisted_state?: persisted_state_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: persisted_state_insert_input[]
      /** upsert condition */
      on_conflict?: persisted_state_on_conflict | null
    }
  }
  /** insert a single row into the table: "persisted_state" */
  insert_persisted_state_one?: persisted_stateGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: persisted_state_insert_input
      /** upsert condition */
      on_conflict?: persisted_state_on_conflict | null
    }
  }
  /** insert data into the table: "raw_events" */
  insert_raw_events?: raw_events_mutation_responseGenqlSelection & {
    __args: {
      /** the rows to be inserted */
      objects: raw_events_insert_input[]
      /** upsert condition */
      on_conflict?: raw_events_on_conflict | null
    }
  }
  /** insert a single row into the table: "raw_events" */
  insert_raw_events_one?: raw_eventsGenqlSelection & {
    __args: {
      /** the row to be inserted */
      object: raw_events_insert_input
      /** upsert condition */
      on_conflict?: raw_events_on_conflict | null
    }
  }
  /** update data of the table: "BondingCurve" */
  update_BondingCurve?: BondingCurve_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: BondingCurve_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: BondingCurve_set_input | null
      /** filter the rows which have to be updated */
      where: BondingCurve_bool_exp
    }
  }
  /** update single row of the table: "BondingCurve" */
  update_BondingCurve_by_pk?: BondingCurveGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: BondingCurve_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: BondingCurve_set_input | null
      pk_columns: BondingCurve_pk_columns_input
    }
  }
  /** update multiples rows of table: "BondingCurve" */
  update_BondingCurve_many?: BondingCurve_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: BondingCurve_updates[]
    }
  }
  /** update data of the table: "Bounty" */
  update_Bounty?: Bounty_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Bounty_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Bounty_set_input | null
      /** filter the rows which have to be updated */
      where: Bounty_bool_exp
    }
  }
  /** update data of the table: "BountyClaim" */
  update_BountyClaim?: BountyClaim_mutation_responseGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BountyClaim_set_input | null
      /** filter the rows which have to be updated */
      where: BountyClaim_bool_exp
    }
  }
  /** update single row of the table: "BountyClaim" */
  update_BountyClaim_by_pk?: BountyClaimGenqlSelection & {
    __args: {
      /** sets the columns of the filtered rows to the given values */
      _set?: BountyClaim_set_input | null
      pk_columns: BountyClaim_pk_columns_input
    }
  }
  /** update multiples rows of table: "BountyClaim" */
  update_BountyClaim_many?: BountyClaim_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: BountyClaim_updates[]
    }
  }
  /** update data of the table: "BountyContributor" */
  update_BountyContributor?: BountyContributor_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: BountyContributor_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: BountyContributor_set_input | null
      /** filter the rows which have to be updated */
      where: BountyContributor_bool_exp
    }
  }
  /** update single row of the table: "BountyContributor" */
  update_BountyContributor_by_pk?: BountyContributorGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: BountyContributor_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: BountyContributor_set_input | null
      pk_columns: BountyContributor_pk_columns_input
    }
  }
  /** update multiples rows of table: "BountyContributor" */
  update_BountyContributor_many?: BountyContributor_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: BountyContributor_updates[]
    }
  }
  /** update data of the table: "BountyModule" */
  update_BountyModule?: BountyModule_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: BountyModule_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: BountyModule_set_input | null
      /** filter the rows which have to be updated */
      where: BountyModule_bool_exp
    }
  }
  /** update single row of the table: "BountyModule" */
  update_BountyModule_by_pk?: BountyModuleGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: BountyModule_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: BountyModule_set_input | null
      pk_columns: BountyModule_pk_columns_input
    }
  }
  /** update multiples rows of table: "BountyModule" */
  update_BountyModule_many?: BountyModule_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: BountyModule_updates[]
    }
  }
  /** update single row of the table: "Bounty" */
  update_Bounty_by_pk?: BountyGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Bounty_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Bounty_set_input | null
      pk_columns: Bounty_pk_columns_input
    }
  }
  /** update multiples rows of table: "Bounty" */
  update_Bounty_many?: Bounty_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: Bounty_updates[]
    }
  }
  /** update data of the table: "CurveDayData" */
  update_CurveDayData?: CurveDayData_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: CurveDayData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: CurveDayData_set_input | null
      /** filter the rows which have to be updated */
      where: CurveDayData_bool_exp
    }
  }
  /** update single row of the table: "CurveDayData" */
  update_CurveDayData_by_pk?: CurveDayDataGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: CurveDayData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: CurveDayData_set_input | null
      pk_columns: CurveDayData_pk_columns_input
    }
  }
  /** update multiples rows of table: "CurveDayData" */
  update_CurveDayData_many?: CurveDayData_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: CurveDayData_updates[]
    }
  }
  /** update data of the table: "CurveHourData" */
  update_CurveHourData?: CurveHourData_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: CurveHourData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: CurveHourData_set_input | null
      /** filter the rows which have to be updated */
      where: CurveHourData_bool_exp
    }
  }
  /** update single row of the table: "CurveHourData" */
  update_CurveHourData_by_pk?: CurveHourDataGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: CurveHourData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: CurveHourData_set_input | null
      pk_columns: CurveHourData_pk_columns_input
    }
  }
  /** update multiples rows of table: "CurveHourData" */
  update_CurveHourData_many?: CurveHourData_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: CurveHourData_updates[]
    }
  }
  /** update data of the table: "Deposit" */
  update_Deposit?: Deposit_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Deposit_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Deposit_set_input | null
      /** filter the rows which have to be updated */
      where: Deposit_bool_exp
    }
  }
  /** update data of the table: "DepositVault" */
  update_DepositVault?: DepositVault_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: DepositVault_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: DepositVault_set_input | null
      /** filter the rows which have to be updated */
      where: DepositVault_bool_exp
    }
  }
  /** update single row of the table: "DepositVault" */
  update_DepositVault_by_pk?: DepositVaultGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: DepositVault_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: DepositVault_set_input | null
      pk_columns: DepositVault_pk_columns_input
    }
  }
  /** update multiples rows of table: "DepositVault" */
  update_DepositVault_many?: DepositVault_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: DepositVault_updates[]
    }
  }
  /** update single row of the table: "Deposit" */
  update_Deposit_by_pk?: DepositGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Deposit_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Deposit_set_input | null
      pk_columns: Deposit_pk_columns_input
    }
  }
  /** update multiples rows of table: "Deposit" */
  update_Deposit_many?: Deposit_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: Deposit_updates[]
    }
  }
  /** update data of the table: "IssuanceTokenDayData" */
  update_IssuanceTokenDayData?: IssuanceTokenDayData_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: IssuanceTokenDayData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: IssuanceTokenDayData_set_input | null
      /** filter the rows which have to be updated */
      where: IssuanceTokenDayData_bool_exp
    }
  }
  /** update single row of the table: "IssuanceTokenDayData" */
  update_IssuanceTokenDayData_by_pk?: IssuanceTokenDayDataGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: IssuanceTokenDayData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: IssuanceTokenDayData_set_input | null
      pk_columns: IssuanceTokenDayData_pk_columns_input
    }
  }
  /** update multiples rows of table: "IssuanceTokenDayData" */
  update_IssuanceTokenDayData_many?: IssuanceTokenDayData_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: IssuanceTokenDayData_updates[]
    }
  }
  /** update data of the table: "IssuanceTokenHourData" */
  update_IssuanceTokenHourData?: IssuanceTokenHourData_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: IssuanceTokenHourData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: IssuanceTokenHourData_set_input | null
      /** filter the rows which have to be updated */
      where: IssuanceTokenHourData_bool_exp
    }
  }
  /** update single row of the table: "IssuanceTokenHourData" */
  update_IssuanceTokenHourData_by_pk?: IssuanceTokenHourDataGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: IssuanceTokenHourData_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: IssuanceTokenHourData_set_input | null
      pk_columns: IssuanceTokenHourData_pk_columns_input
    }
  }
  /** update multiples rows of table: "IssuanceTokenHourData" */
  update_IssuanceTokenHourData_many?: IssuanceTokenHourData_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: IssuanceTokenHourData_updates[]
    }
  }
  /** update data of the table: "LinearVesting" */
  update_LinearVesting?: LinearVesting_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: LinearVesting_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: LinearVesting_set_input | null
      /** filter the rows which have to be updated */
      where: LinearVesting_bool_exp
    }
  }
  /** update single row of the table: "LinearVesting" */
  update_LinearVesting_by_pk?: LinearVestingGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: LinearVesting_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: LinearVesting_set_input | null
      pk_columns: LinearVesting_pk_columns_input
    }
  }
  /** update multiples rows of table: "LinearVesting" */
  update_LinearVesting_many?: LinearVesting_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: LinearVesting_updates[]
    }
  }
  /** update data of the table: "ProjectFee" */
  update_ProjectFee?: ProjectFee_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: ProjectFee_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: ProjectFee_set_input | null
      /** filter the rows which have to be updated */
      where: ProjectFee_bool_exp
    }
  }
  /** update single row of the table: "ProjectFee" */
  update_ProjectFee_by_pk?: ProjectFeeGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: ProjectFee_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: ProjectFee_set_input | null
      pk_columns: ProjectFee_pk_columns_input
    }
  }
  /** update multiples rows of table: "ProjectFee" */
  update_ProjectFee_many?: ProjectFee_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: ProjectFee_updates[]
    }
  }
  /** update data of the table: "ProtocolFee" */
  update_ProtocolFee?: ProtocolFee_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: ProtocolFee_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: ProtocolFee_set_input | null
      /** filter the rows which have to be updated */
      where: ProtocolFee_bool_exp
    }
  }
  /** update single row of the table: "ProtocolFee" */
  update_ProtocolFee_by_pk?: ProtocolFeeGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: ProtocolFee_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: ProtocolFee_set_input | null
      pk_columns: ProtocolFee_pk_columns_input
    }
  }
  /** update multiples rows of table: "ProtocolFee" */
  update_ProtocolFee_many?: ProtocolFee_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: ProtocolFee_updates[]
    }
  }
  /** update data of the table: "StreamingPaymentProcessor" */
  update_StreamingPaymentProcessor?: StreamingPaymentProcessor_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: StreamingPaymentProcessor_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: StreamingPaymentProcessor_set_input | null
      /** filter the rows which have to be updated */
      where: StreamingPaymentProcessor_bool_exp
    }
  }
  /** update single row of the table: "StreamingPaymentProcessor" */
  update_StreamingPaymentProcessor_by_pk?: StreamingPaymentProcessorGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: StreamingPaymentProcessor_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: StreamingPaymentProcessor_set_input | null
      pk_columns: StreamingPaymentProcessor_pk_columns_input
    }
  }
  /** update multiples rows of table: "StreamingPaymentProcessor" */
  update_StreamingPaymentProcessor_many?: StreamingPaymentProcessor_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: StreamingPaymentProcessor_updates[]
    }
  }
  /** update data of the table: "Swap" */
  update_Swap?: Swap_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Swap_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Swap_set_input | null
      /** filter the rows which have to be updated */
      where: Swap_bool_exp
    }
  }
  /** update single row of the table: "Swap" */
  update_Swap_by_pk?: SwapGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Swap_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Swap_set_input | null
      pk_columns: Swap_pk_columns_input
    }
  }
  /** update multiples rows of table: "Swap" */
  update_Swap_many?: Swap_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: Swap_updates[]
    }
  }
  /** update data of the table: "Token" */
  update_Token?: Token_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Token_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Token_set_input | null
      /** filter the rows which have to be updated */
      where: Token_bool_exp
    }
  }
  /** update single row of the table: "Token" */
  update_Token_by_pk?: TokenGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Token_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Token_set_input | null
      pk_columns: Token_pk_columns_input
    }
  }
  /** update multiples rows of table: "Token" */
  update_Token_many?: Token_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: Token_updates[]
    }
  }
  /** update data of the table: "Transfer" */
  update_Transfer?: Transfer_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Transfer_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Transfer_set_input | null
      /** filter the rows which have to be updated */
      where: Transfer_bool_exp
    }
  }
  /** update single row of the table: "Transfer" */
  update_Transfer_by_pk?: TransferGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Transfer_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Transfer_set_input | null
      pk_columns: Transfer_pk_columns_input
    }
  }
  /** update multiples rows of table: "Transfer" */
  update_Transfer_many?: Transfer_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: Transfer_updates[]
    }
  }
  /** update data of the table: "Workflow" */
  update_Workflow?: Workflow_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Workflow_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Workflow_set_input | null
      /** filter the rows which have to be updated */
      where: Workflow_bool_exp
    }
  }
  /** update data of the table: "WorkflowModule" */
  update_WorkflowModule?: WorkflowModule_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: WorkflowModule_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: WorkflowModule_set_input | null
      /** filter the rows which have to be updated */
      where: WorkflowModule_bool_exp
    }
  }
  /** update data of the table: "WorkflowModuleType" */
  update_WorkflowModuleType?: WorkflowModuleType_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: WorkflowModuleType_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: WorkflowModuleType_set_input | null
      /** filter the rows which have to be updated */
      where: WorkflowModuleType_bool_exp
    }
  }
  /** update single row of the table: "WorkflowModuleType" */
  update_WorkflowModuleType_by_pk?: WorkflowModuleTypeGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: WorkflowModuleType_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: WorkflowModuleType_set_input | null
      pk_columns: WorkflowModuleType_pk_columns_input
    }
  }
  /** update multiples rows of table: "WorkflowModuleType" */
  update_WorkflowModuleType_many?: WorkflowModuleType_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: WorkflowModuleType_updates[]
    }
  }
  /** update single row of the table: "WorkflowModule" */
  update_WorkflowModule_by_pk?: WorkflowModuleGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: WorkflowModule_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: WorkflowModule_set_input | null
      pk_columns: WorkflowModule_pk_columns_input
    }
  }
  /** update multiples rows of table: "WorkflowModule" */
  update_WorkflowModule_many?: WorkflowModule_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: WorkflowModule_updates[]
    }
  }
  /** update single row of the table: "Workflow" */
  update_Workflow_by_pk?: WorkflowGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: Workflow_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: Workflow_set_input | null
      pk_columns: Workflow_pk_columns_input
    }
  }
  /** update multiples rows of table: "Workflow" */
  update_Workflow_many?: Workflow_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: Workflow_updates[]
    }
  }
  /** update data of the table: "chain_metadata" */
  update_chain_metadata?: chain_metadata_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: chain_metadata_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: chain_metadata_set_input | null
      /** filter the rows which have to be updated */
      where: chain_metadata_bool_exp
    }
  }
  /** update single row of the table: "chain_metadata" */
  update_chain_metadata_by_pk?: chain_metadataGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: chain_metadata_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: chain_metadata_set_input | null
      pk_columns: chain_metadata_pk_columns_input
    }
  }
  /** update multiples rows of table: "chain_metadata" */
  update_chain_metadata_many?: chain_metadata_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: chain_metadata_updates[]
    }
  }
  /** update data of the table: "dynamic_contract_registry" */
  update_dynamic_contract_registry?: dynamic_contract_registry_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: dynamic_contract_registry_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: dynamic_contract_registry_set_input | null
      /** filter the rows which have to be updated */
      where: dynamic_contract_registry_bool_exp
    }
  }
  /** update single row of the table: "dynamic_contract_registry" */
  update_dynamic_contract_registry_by_pk?: dynamic_contract_registryGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: dynamic_contract_registry_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: dynamic_contract_registry_set_input | null
      pk_columns: dynamic_contract_registry_pk_columns_input
    }
  }
  /** update multiples rows of table: "dynamic_contract_registry" */
  update_dynamic_contract_registry_many?: dynamic_contract_registry_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: dynamic_contract_registry_updates[]
    }
  }
  /** update data of the table: "end_of_block_range_scanned_data" */
  update_end_of_block_range_scanned_data?: end_of_block_range_scanned_data_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: end_of_block_range_scanned_data_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: end_of_block_range_scanned_data_set_input | null
      /** filter the rows which have to be updated */
      where: end_of_block_range_scanned_data_bool_exp
    }
  }
  /** update single row of the table: "end_of_block_range_scanned_data" */
  update_end_of_block_range_scanned_data_by_pk?: end_of_block_range_scanned_dataGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: end_of_block_range_scanned_data_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: end_of_block_range_scanned_data_set_input | null
      pk_columns: end_of_block_range_scanned_data_pk_columns_input
    }
  }
  /** update multiples rows of table: "end_of_block_range_scanned_data" */
  update_end_of_block_range_scanned_data_many?: end_of_block_range_scanned_data_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: end_of_block_range_scanned_data_updates[]
    }
  }
  /** update data of the table: "event_sync_state" */
  update_event_sync_state?: event_sync_state_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: event_sync_state_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: event_sync_state_set_input | null
      /** filter the rows which have to be updated */
      where: event_sync_state_bool_exp
    }
  }
  /** update single row of the table: "event_sync_state" */
  update_event_sync_state_by_pk?: event_sync_stateGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: event_sync_state_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: event_sync_state_set_input | null
      pk_columns: event_sync_state_pk_columns_input
    }
  }
  /** update multiples rows of table: "event_sync_state" */
  update_event_sync_state_many?: event_sync_state_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: event_sync_state_updates[]
    }
  }
  /** update data of the table: "persisted_state" */
  update_persisted_state?: persisted_state_mutation_responseGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: persisted_state_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: persisted_state_set_input | null
      /** filter the rows which have to be updated */
      where: persisted_state_bool_exp
    }
  }
  /** update single row of the table: "persisted_state" */
  update_persisted_state_by_pk?: persisted_stateGenqlSelection & {
    __args: {
      /** increments the numeric columns with given value of the filtered values */
      _inc?: persisted_state_inc_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: persisted_state_set_input | null
      pk_columns: persisted_state_pk_columns_input
    }
  }
  /** update multiples rows of table: "persisted_state" */
  update_persisted_state_many?: persisted_state_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: persisted_state_updates[]
    }
  }
  /** update data of the table: "raw_events" */
  update_raw_events?: raw_events_mutation_responseGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: raw_events_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: raw_events_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: raw_events_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: raw_events_delete_key_input | null
      /** increments the numeric columns with given value of the filtered values */
      _inc?: raw_events_inc_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: raw_events_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: raw_events_set_input | null
      /** filter the rows which have to be updated */
      where: raw_events_bool_exp
    }
  }
  /** update single row of the table: "raw_events" */
  update_raw_events_by_pk?: raw_eventsGenqlSelection & {
    __args: {
      /** append existing jsonb value of filtered columns with new jsonb value */
      _append?: raw_events_append_input | null
      /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
      _delete_at_path?: raw_events_delete_at_path_input | null
      /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
      _delete_elem?: raw_events_delete_elem_input | null
      /** delete key/value pair or string element. key/value pairs are matched based on their key value */
      _delete_key?: raw_events_delete_key_input | null
      /** increments the numeric columns with given value of the filtered values */
      _inc?: raw_events_inc_input | null
      /** prepend existing jsonb value of filtered columns with new jsonb value */
      _prepend?: raw_events_prepend_input | null
      /** sets the columns of the filtered rows to the given values */
      _set?: raw_events_set_input | null
      pk_columns: raw_events_pk_columns_input
    }
  }
  /** update multiples rows of table: "raw_events" */
  update_raw_events_many?: raw_events_mutation_responseGenqlSelection & {
    __args: {
      /** updates to execute, in order */
      updates: raw_events_updates[]
    }
  }
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregated selection of "persisted_state" */
export interface persisted_state_aggregateGenqlSelection {
  aggregate?: persisted_state_aggregate_fieldsGenqlSelection
  nodes?: persisted_stateGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "persisted_state" */
export interface persisted_state_aggregate_fieldsGenqlSelection {
  avg?: persisted_state_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: persisted_state_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: persisted_state_max_fieldsGenqlSelection
  min?: persisted_state_min_fieldsGenqlSelection
  stddev?: persisted_state_stddev_fieldsGenqlSelection
  stddev_pop?: persisted_state_stddev_pop_fieldsGenqlSelection
  stddev_samp?: persisted_state_stddev_samp_fieldsGenqlSelection
  sum?: persisted_state_sum_fieldsGenqlSelection
  var_pop?: persisted_state_var_pop_fieldsGenqlSelection
  var_samp?: persisted_state_var_samp_fieldsGenqlSelection
  variance?: persisted_state_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface persisted_state_avg_fieldsGenqlSelection {
  id?: boolean | number
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

/** input type for incrementing numeric columns in table "persisted_state" */
export interface persisted_state_inc_input {
  id?: Scalars['Int'] | null
}

/** input type for inserting data into table "persisted_state" */
export interface persisted_state_insert_input {
  abi_files_hash?: Scalars['String'] | null
  config_hash?: Scalars['String'] | null
  envio_version?: Scalars['String'] | null
  handler_files_hash?: Scalars['String'] | null
  id?: Scalars['Int'] | null
  schema_hash?: Scalars['String'] | null
}

/** aggregate max on columns */
export interface persisted_state_max_fieldsGenqlSelection {
  abi_files_hash?: boolean | number
  config_hash?: boolean | number
  envio_version?: boolean | number
  handler_files_hash?: boolean | number
  id?: boolean | number
  schema_hash?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface persisted_state_min_fieldsGenqlSelection {
  abi_files_hash?: boolean | number
  config_hash?: boolean | number
  envio_version?: boolean | number
  handler_files_hash?: boolean | number
  id?: boolean | number
  schema_hash?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "persisted_state" */
export interface persisted_state_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: persisted_stateGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "persisted_state" */
export interface persisted_state_on_conflict {
  constraint: persisted_state_constraint
  update_columns?: persisted_state_update_column[]
  where?: persisted_state_bool_exp | null
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

/** primary key columns input for table: persisted_state */
export interface persisted_state_pk_columns_input {
  id: Scalars['Int']
}

/** input type for updating data in table "persisted_state" */
export interface persisted_state_set_input {
  abi_files_hash?: Scalars['String'] | null
  config_hash?: Scalars['String'] | null
  envio_version?: Scalars['String'] | null
  handler_files_hash?: Scalars['String'] | null
  id?: Scalars['Int'] | null
  schema_hash?: Scalars['String'] | null
}

/** aggregate stddev on columns */
export interface persisted_state_stddev_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface persisted_state_stddev_pop_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface persisted_state_stddev_samp_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface persisted_state_sum_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface persisted_state_updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: persisted_state_inc_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: persisted_state_set_input | null
  /** filter the rows which have to be updated */
  where: persisted_state_bool_exp
}

/** aggregate var_pop on columns */
export interface persisted_state_var_pop_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface persisted_state_var_samp_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface persisted_state_variance_fieldsGenqlSelection {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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
  /** fetch aggregated fields from the table: "BountyContributor" */
  BountyContributor_aggregate?: BountyContributor_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "BountyModule" */
  BountyModule_aggregate?: BountyModule_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "LinearVesting" */
  LinearVesting_aggregate?: LinearVesting_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor_aggregate?: StreamingPaymentProcessor_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "Swap" */
  Swap_aggregate?: Swap_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "WorkflowModuleType" */
  WorkflowModuleType_aggregate?: WorkflowModuleType_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "WorkflowModule" */
  WorkflowModule_aggregate?: WorkflowModule_aggregateGenqlSelection & {
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
  /** fetch data from the table: "WorkflowModule" using primary key columns */
  WorkflowModule_by_pk?: WorkflowModuleGenqlSelection & {
    __args: { id: Scalars['String'] }
  }
  /** fetch aggregated fields from the table: "Workflow" */
  Workflow_aggregate?: Workflow_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "chain_metadata" */
  chain_metadata_aggregate?: chain_metadata_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "dynamic_contract_registry" */
  dynamic_contract_registry_aggregate?: dynamic_contract_registry_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_aggregate?: end_of_block_range_scanned_data_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "event_sync_state" */
  event_sync_state_aggregate?: event_sync_state_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "persisted_state" */
  persisted_state_aggregate?: persisted_state_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "raw_events" */
  raw_events_aggregate?: raw_events_aggregateGenqlSelection & {
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

/** aggregated selection of "raw_events" */
export interface raw_events_aggregateGenqlSelection {
  aggregate?: raw_events_aggregate_fieldsGenqlSelection
  nodes?: raw_eventsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "raw_events" */
export interface raw_events_aggregate_fieldsGenqlSelection {
  avg?: raw_events_avg_fieldsGenqlSelection
  count?:
    | {
        __args: {
          columns?: raw_events_select_column[] | null
          distinct?: Scalars['Boolean'] | null
        }
      }
    | boolean
    | number
  max?: raw_events_max_fieldsGenqlSelection
  min?: raw_events_min_fieldsGenqlSelection
  stddev?: raw_events_stddev_fieldsGenqlSelection
  stddev_pop?: raw_events_stddev_pop_fieldsGenqlSelection
  stddev_samp?: raw_events_stddev_samp_fieldsGenqlSelection
  sum?: raw_events_sum_fieldsGenqlSelection
  var_pop?: raw_events_var_pop_fieldsGenqlSelection
  var_samp?: raw_events_var_samp_fieldsGenqlSelection
  variance?: raw_events_variance_fieldsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface raw_events_append_input {
  block_fields?: Scalars['jsonb'] | null
  params?: Scalars['jsonb'] | null
  transaction_fields?: Scalars['jsonb'] | null
}

/** aggregate avg on columns */
export interface raw_events_avg_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
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

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface raw_events_delete_at_path_input {
  block_fields?: Scalars['String'][] | null
  params?: Scalars['String'][] | null
  transaction_fields?: Scalars['String'][] | null
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface raw_events_delete_elem_input {
  block_fields?: Scalars['Int'] | null
  params?: Scalars['Int'] | null
  transaction_fields?: Scalars['Int'] | null
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface raw_events_delete_key_input {
  block_fields?: Scalars['String'] | null
  params?: Scalars['String'] | null
  transaction_fields?: Scalars['String'] | null
}

/** input type for incrementing numeric columns in table "raw_events" */
export interface raw_events_inc_input {
  block_number?: Scalars['Int'] | null
  block_timestamp?: Scalars['Int'] | null
  chain_id?: Scalars['Int'] | null
  event_id?: Scalars['numeric'] | null
  log_index?: Scalars['Int'] | null
  serial?: Scalars['Int'] | null
}

/** input type for inserting data into table "raw_events" */
export interface raw_events_insert_input {
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

/** aggregate max on columns */
export interface raw_events_max_fieldsGenqlSelection {
  block_hash?: boolean | number
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  contract_name?: boolean | number
  db_write_timestamp?: boolean | number
  event_id?: boolean | number
  event_name?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  src_address?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface raw_events_min_fieldsGenqlSelection {
  block_hash?: boolean | number
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  contract_name?: boolean | number
  db_write_timestamp?: boolean | number
  event_id?: boolean | number
  event_name?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  src_address?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "raw_events" */
export interface raw_events_mutation_responseGenqlSelection {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number
  /** data from the rows affected by the mutation */
  returning?: raw_eventsGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** on_conflict condition type for table "raw_events" */
export interface raw_events_on_conflict {
  constraint: raw_events_constraint
  update_columns?: raw_events_update_column[]
  where?: raw_events_bool_exp | null
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

/** primary key columns input for table: raw_events */
export interface raw_events_pk_columns_input {
  serial: Scalars['Int']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface raw_events_prepend_input {
  block_fields?: Scalars['jsonb'] | null
  params?: Scalars['jsonb'] | null
  transaction_fields?: Scalars['jsonb'] | null
}

/** input type for updating data in table "raw_events" */
export interface raw_events_set_input {
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

/** aggregate stddev on columns */
export interface raw_events_stddev_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface raw_events_stddev_pop_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface raw_events_stddev_samp_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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

/** aggregate sum on columns */
export interface raw_events_sum_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface raw_events_updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: raw_events_append_input | null
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: raw_events_delete_at_path_input | null
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: raw_events_delete_elem_input | null
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: raw_events_delete_key_input | null
  /** increments the numeric columns with given value of the filtered values */
  _inc?: raw_events_inc_input | null
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: raw_events_prepend_input | null
  /** sets the columns of the filtered rows to the given values */
  _set?: raw_events_set_input | null
  /** filter the rows which have to be updated */
  where: raw_events_bool_exp
}

/** aggregate var_pop on columns */
export interface raw_events_var_pop_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface raw_events_var_samp_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface raw_events_variance_fieldsGenqlSelection {
  block_number?: boolean | number
  block_timestamp?: boolean | number
  chain_id?: boolean | number
  event_id?: boolean | number
  log_index?: boolean | number
  serial?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
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
  /** fetch aggregated fields from the table: "BountyContributor" */
  BountyContributor_aggregate?: BountyContributor_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "BountyModule" */
  BountyModule_aggregate?: BountyModule_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "LinearVesting" */
  LinearVesting_aggregate?: LinearVesting_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "StreamingPaymentProcessor" */
  StreamingPaymentProcessor_aggregate?: StreamingPaymentProcessor_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "Swap" */
  Swap_aggregate?: Swap_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "WorkflowModuleType" */
  WorkflowModuleType_aggregate?: WorkflowModuleType_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "WorkflowModule" */
  WorkflowModule_aggregate?: WorkflowModule_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "Workflow" */
  Workflow_aggregate?: Workflow_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "chain_metadata" */
  chain_metadata_aggregate?: chain_metadata_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "dynamic_contract_registry" */
  dynamic_contract_registry_aggregate?: dynamic_contract_registry_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "end_of_block_range_scanned_data" */
  end_of_block_range_scanned_data_aggregate?: end_of_block_range_scanned_data_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "event_sync_state" */
  event_sync_state_aggregate?: event_sync_state_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "persisted_state" */
  persisted_state_aggregate?: persisted_state_aggregateGenqlSelection & {
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
  /** fetch aggregated fields from the table: "raw_events" */
  raw_events_aggregate?: raw_events_aggregateGenqlSelection & {
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
export type MutationGenqlSelection = mutation_rootGenqlSelection
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

const BondingCurve_mutation_response_possibleTypes: string[] = [
  'BondingCurve_mutation_response',
]
export const isBondingCurve_mutation_response = (
  obj?: { __typename?: any } | null
): obj is BondingCurve_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBondingCurve_mutation_response"'
    )
  return BondingCurve_mutation_response_possibleTypes.includes(obj.__typename)
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

const BountyClaim_mutation_response_possibleTypes: string[] = [
  'BountyClaim_mutation_response',
]
export const isBountyClaim_mutation_response = (
  obj?: { __typename?: any } | null
): obj is BountyClaim_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyClaim_mutation_response"'
    )
  return BountyClaim_mutation_response_possibleTypes.includes(obj.__typename)
}

const BountyContributor_possibleTypes: string[] = ['BountyContributor']
export const isBountyContributor = (
  obj?: { __typename?: any } | null
): obj is BountyContributor => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyContributor"')
  return BountyContributor_possibleTypes.includes(obj.__typename)
}

const BountyContributor_aggregate_possibleTypes: string[] = [
  'BountyContributor_aggregate',
]
export const isBountyContributor_aggregate = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyContributor_aggregate"')
  return BountyContributor_aggregate_possibleTypes.includes(obj.__typename)
}

const BountyContributor_aggregate_fields_possibleTypes: string[] = [
  'BountyContributor_aggregate_fields',
]
export const isBountyContributor_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_aggregate_fields"'
    )
  return BountyContributor_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const BountyContributor_avg_fields_possibleTypes: string[] = [
  'BountyContributor_avg_fields',
]
export const isBountyContributor_avg_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyContributor_avg_fields"')
  return BountyContributor_avg_fields_possibleTypes.includes(obj.__typename)
}

const BountyContributor_max_fields_possibleTypes: string[] = [
  'BountyContributor_max_fields',
]
export const isBountyContributor_max_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyContributor_max_fields"')
  return BountyContributor_max_fields_possibleTypes.includes(obj.__typename)
}

const BountyContributor_min_fields_possibleTypes: string[] = [
  'BountyContributor_min_fields',
]
export const isBountyContributor_min_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyContributor_min_fields"')
  return BountyContributor_min_fields_possibleTypes.includes(obj.__typename)
}

const BountyContributor_mutation_response_possibleTypes: string[] = [
  'BountyContributor_mutation_response',
]
export const isBountyContributor_mutation_response = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_mutation_response"'
    )
  return BountyContributor_mutation_response_possibleTypes.includes(
    obj.__typename
  )
}

const BountyContributor_stddev_fields_possibleTypes: string[] = [
  'BountyContributor_stddev_fields',
]
export const isBountyContributor_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_stddev_fields"'
    )
  return BountyContributor_stddev_fields_possibleTypes.includes(obj.__typename)
}

const BountyContributor_stddev_pop_fields_possibleTypes: string[] = [
  'BountyContributor_stddev_pop_fields',
]
export const isBountyContributor_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_stddev_pop_fields"'
    )
  return BountyContributor_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const BountyContributor_stddev_samp_fields_possibleTypes: string[] = [
  'BountyContributor_stddev_samp_fields',
]
export const isBountyContributor_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_stddev_samp_fields"'
    )
  return BountyContributor_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const BountyContributor_sum_fields_possibleTypes: string[] = [
  'BountyContributor_sum_fields',
]
export const isBountyContributor_sum_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyContributor_sum_fields"')
  return BountyContributor_sum_fields_possibleTypes.includes(obj.__typename)
}

const BountyContributor_var_pop_fields_possibleTypes: string[] = [
  'BountyContributor_var_pop_fields',
]
export const isBountyContributor_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_var_pop_fields"'
    )
  return BountyContributor_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const BountyContributor_var_samp_fields_possibleTypes: string[] = [
  'BountyContributor_var_samp_fields',
]
export const isBountyContributor_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_var_samp_fields"'
    )
  return BountyContributor_var_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const BountyContributor_variance_fields_possibleTypes: string[] = [
  'BountyContributor_variance_fields',
]
export const isBountyContributor_variance_fields = (
  obj?: { __typename?: any } | null
): obj is BountyContributor_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyContributor_variance_fields"'
    )
  return BountyContributor_variance_fields_possibleTypes.includes(
    obj.__typename
  )
}

const BountyModule_possibleTypes: string[] = ['BountyModule']
export const isBountyModule = (
  obj?: { __typename?: any } | null
): obj is BountyModule => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule"')
  return BountyModule_possibleTypes.includes(obj.__typename)
}

const BountyModule_aggregate_possibleTypes: string[] = [
  'BountyModule_aggregate',
]
export const isBountyModule_aggregate = (
  obj?: { __typename?: any } | null
): obj is BountyModule_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_aggregate"')
  return BountyModule_aggregate_possibleTypes.includes(obj.__typename)
}

const BountyModule_aggregate_fields_possibleTypes: string[] = [
  'BountyModule_aggregate_fields',
]
export const isBountyModule_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyModule_aggregate_fields"'
    )
  return BountyModule_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_avg_fields_possibleTypes: string[] = [
  'BountyModule_avg_fields',
]
export const isBountyModule_avg_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_avg_fields"')
  return BountyModule_avg_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_max_fields_possibleTypes: string[] = [
  'BountyModule_max_fields',
]
export const isBountyModule_max_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_max_fields"')
  return BountyModule_max_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_min_fields_possibleTypes: string[] = [
  'BountyModule_min_fields',
]
export const isBountyModule_min_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_min_fields"')
  return BountyModule_min_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_mutation_response_possibleTypes: string[] = [
  'BountyModule_mutation_response',
]
export const isBountyModule_mutation_response = (
  obj?: { __typename?: any } | null
): obj is BountyModule_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyModule_mutation_response"'
    )
  return BountyModule_mutation_response_possibleTypes.includes(obj.__typename)
}

const BountyModule_stddev_fields_possibleTypes: string[] = [
  'BountyModule_stddev_fields',
]
export const isBountyModule_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_stddev_fields"')
  return BountyModule_stddev_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_stddev_pop_fields_possibleTypes: string[] = [
  'BountyModule_stddev_pop_fields',
]
export const isBountyModule_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyModule_stddev_pop_fields"'
    )
  return BountyModule_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_stddev_samp_fields_possibleTypes: string[] = [
  'BountyModule_stddev_samp_fields',
]
export const isBountyModule_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isBountyModule_stddev_samp_fields"'
    )
  return BountyModule_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_sum_fields_possibleTypes: string[] = [
  'BountyModule_sum_fields',
]
export const isBountyModule_sum_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_sum_fields"')
  return BountyModule_sum_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_var_pop_fields_possibleTypes: string[] = [
  'BountyModule_var_pop_fields',
]
export const isBountyModule_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_var_pop_fields"')
  return BountyModule_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_var_samp_fields_possibleTypes: string[] = [
  'BountyModule_var_samp_fields',
]
export const isBountyModule_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_var_samp_fields"')
  return BountyModule_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const BountyModule_variance_fields_possibleTypes: string[] = [
  'BountyModule_variance_fields',
]
export const isBountyModule_variance_fields = (
  obj?: { __typename?: any } | null
): obj is BountyModule_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBountyModule_variance_fields"')
  return BountyModule_variance_fields_possibleTypes.includes(obj.__typename)
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

const Bounty_mutation_response_possibleTypes: string[] = [
  'Bounty_mutation_response',
]
export const isBounty_mutation_response = (
  obj?: { __typename?: any } | null
): obj is Bounty_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isBounty_mutation_response"')
  return Bounty_mutation_response_possibleTypes.includes(obj.__typename)
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

const CurveDayData_mutation_response_possibleTypes: string[] = [
  'CurveDayData_mutation_response',
]
export const isCurveDayData_mutation_response = (
  obj?: { __typename?: any } | null
): obj is CurveDayData_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveDayData_mutation_response"'
    )
  return CurveDayData_mutation_response_possibleTypes.includes(obj.__typename)
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

const CurveHourData_mutation_response_possibleTypes: string[] = [
  'CurveHourData_mutation_response',
]
export const isCurveHourData_mutation_response = (
  obj?: { __typename?: any } | null
): obj is CurveHourData_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isCurveHourData_mutation_response"'
    )
  return CurveHourData_mutation_response_possibleTypes.includes(obj.__typename)
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

const DepositVault_mutation_response_possibleTypes: string[] = [
  'DepositVault_mutation_response',
]
export const isDepositVault_mutation_response = (
  obj?: { __typename?: any } | null
): obj is DepositVault_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isDepositVault_mutation_response"'
    )
  return DepositVault_mutation_response_possibleTypes.includes(obj.__typename)
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

const Deposit_mutation_response_possibleTypes: string[] = [
  'Deposit_mutation_response',
]
export const isDeposit_mutation_response = (
  obj?: { __typename?: any } | null
): obj is Deposit_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isDeposit_mutation_response"')
  return Deposit_mutation_response_possibleTypes.includes(obj.__typename)
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

const IssuanceTokenDayData_mutation_response_possibleTypes: string[] = [
  'IssuanceTokenDayData_mutation_response',
]
export const isIssuanceTokenDayData_mutation_response = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenDayData_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenDayData_mutation_response"'
    )
  return IssuanceTokenDayData_mutation_response_possibleTypes.includes(
    obj.__typename
  )
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

const IssuanceTokenHourData_mutation_response_possibleTypes: string[] = [
  'IssuanceTokenHourData_mutation_response',
]
export const isIssuanceTokenHourData_mutation_response = (
  obj?: { __typename?: any } | null
): obj is IssuanceTokenHourData_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isIssuanceTokenHourData_mutation_response"'
    )
  return IssuanceTokenHourData_mutation_response_possibleTypes.includes(
    obj.__typename
  )
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

const LinearVesting_aggregate_possibleTypes: string[] = [
  'LinearVesting_aggregate',
]
export const isLinearVesting_aggregate = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting_aggregate"')
  return LinearVesting_aggregate_possibleTypes.includes(obj.__typename)
}

const LinearVesting_aggregate_fields_possibleTypes: string[] = [
  'LinearVesting_aggregate_fields',
]
export const isLinearVesting_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isLinearVesting_aggregate_fields"'
    )
  return LinearVesting_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_avg_fields_possibleTypes: string[] = [
  'LinearVesting_avg_fields',
]
export const isLinearVesting_avg_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting_avg_fields"')
  return LinearVesting_avg_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_max_fields_possibleTypes: string[] = [
  'LinearVesting_max_fields',
]
export const isLinearVesting_max_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting_max_fields"')
  return LinearVesting_max_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_min_fields_possibleTypes: string[] = [
  'LinearVesting_min_fields',
]
export const isLinearVesting_min_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting_min_fields"')
  return LinearVesting_min_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_mutation_response_possibleTypes: string[] = [
  'LinearVesting_mutation_response',
]
export const isLinearVesting_mutation_response = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isLinearVesting_mutation_response"'
    )
  return LinearVesting_mutation_response_possibleTypes.includes(obj.__typename)
}

const LinearVesting_stddev_fields_possibleTypes: string[] = [
  'LinearVesting_stddev_fields',
]
export const isLinearVesting_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting_stddev_fields"')
  return LinearVesting_stddev_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_stddev_pop_fields_possibleTypes: string[] = [
  'LinearVesting_stddev_pop_fields',
]
export const isLinearVesting_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isLinearVesting_stddev_pop_fields"'
    )
  return LinearVesting_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_stddev_samp_fields_possibleTypes: string[] = [
  'LinearVesting_stddev_samp_fields',
]
export const isLinearVesting_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isLinearVesting_stddev_samp_fields"'
    )
  return LinearVesting_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_sum_fields_possibleTypes: string[] = [
  'LinearVesting_sum_fields',
]
export const isLinearVesting_sum_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting_sum_fields"')
  return LinearVesting_sum_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_var_pop_fields_possibleTypes: string[] = [
  'LinearVesting_var_pop_fields',
]
export const isLinearVesting_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isLinearVesting_var_pop_fields"')
  return LinearVesting_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_var_samp_fields_possibleTypes: string[] = [
  'LinearVesting_var_samp_fields',
]
export const isLinearVesting_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isLinearVesting_var_samp_fields"'
    )
  return LinearVesting_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const LinearVesting_variance_fields_possibleTypes: string[] = [
  'LinearVesting_variance_fields',
]
export const isLinearVesting_variance_fields = (
  obj?: { __typename?: any } | null
): obj is LinearVesting_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isLinearVesting_variance_fields"'
    )
  return LinearVesting_variance_fields_possibleTypes.includes(obj.__typename)
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

const ProjectFee_mutation_response_possibleTypes: string[] = [
  'ProjectFee_mutation_response',
]
export const isProjectFee_mutation_response = (
  obj?: { __typename?: any } | null
): obj is ProjectFee_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isProjectFee_mutation_response"')
  return ProjectFee_mutation_response_possibleTypes.includes(obj.__typename)
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

const ProtocolFee_mutation_response_possibleTypes: string[] = [
  'ProtocolFee_mutation_response',
]
export const isProtocolFee_mutation_response = (
  obj?: { __typename?: any } | null
): obj is ProtocolFee_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isProtocolFee_mutation_response"'
    )
  return ProtocolFee_mutation_response_possibleTypes.includes(obj.__typename)
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

const StreamingPaymentProcessor_aggregate_possibleTypes: string[] = [
  'StreamingPaymentProcessor_aggregate',
]
export const isStreamingPaymentProcessor_aggregate = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_aggregate => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_aggregate"'
    )
  return StreamingPaymentProcessor_aggregate_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_aggregate_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_aggregate_fields',
]
export const isStreamingPaymentProcessor_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_aggregate_fields"'
    )
  return StreamingPaymentProcessor_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_avg_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_avg_fields',
]
export const isStreamingPaymentProcessor_avg_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_avg_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_avg_fields"'
    )
  return StreamingPaymentProcessor_avg_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_max_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_max_fields',
]
export const isStreamingPaymentProcessor_max_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_max_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_max_fields"'
    )
  return StreamingPaymentProcessor_max_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_min_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_min_fields',
]
export const isStreamingPaymentProcessor_min_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_min_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_min_fields"'
    )
  return StreamingPaymentProcessor_min_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_mutation_response_possibleTypes: string[] = [
  'StreamingPaymentProcessor_mutation_response',
]
export const isStreamingPaymentProcessor_mutation_response = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_mutation_response"'
    )
  return StreamingPaymentProcessor_mutation_response_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_stddev_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_stddev_fields',
]
export const isStreamingPaymentProcessor_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_stddev_fields"'
    )
  return StreamingPaymentProcessor_stddev_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_stddev_pop_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_stddev_pop_fields',
]
export const isStreamingPaymentProcessor_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_stddev_pop_fields"'
    )
  return StreamingPaymentProcessor_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_stddev_samp_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_stddev_samp_fields',
]
export const isStreamingPaymentProcessor_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_stddev_samp_fields"'
    )
  return StreamingPaymentProcessor_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_sum_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_sum_fields',
]
export const isStreamingPaymentProcessor_sum_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_sum_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_sum_fields"'
    )
  return StreamingPaymentProcessor_sum_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_var_pop_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_var_pop_fields',
]
export const isStreamingPaymentProcessor_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_var_pop_fields"'
    )
  return StreamingPaymentProcessor_var_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_var_samp_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_var_samp_fields',
]
export const isStreamingPaymentProcessor_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_var_samp_fields"'
    )
  return StreamingPaymentProcessor_var_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const StreamingPaymentProcessor_variance_fields_possibleTypes: string[] = [
  'StreamingPaymentProcessor_variance_fields',
]
export const isStreamingPaymentProcessor_variance_fields = (
  obj?: { __typename?: any } | null
): obj is StreamingPaymentProcessor_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isStreamingPaymentProcessor_variance_fields"'
    )
  return StreamingPaymentProcessor_variance_fields_possibleTypes.includes(
    obj.__typename
  )
}

const Swap_possibleTypes: string[] = ['Swap']
export const isSwap = (obj?: { __typename?: any } | null): obj is Swap => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSwap"')
  return Swap_possibleTypes.includes(obj.__typename)
}

const Swap_aggregate_possibleTypes: string[] = ['Swap_aggregate']
export const isSwap_aggregate = (
  obj?: { __typename?: any } | null
): obj is Swap_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_aggregate"')
  return Swap_aggregate_possibleTypes.includes(obj.__typename)
}

const Swap_aggregate_fields_possibleTypes: string[] = ['Swap_aggregate_fields']
export const isSwap_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_aggregate_fields"')
  return Swap_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const Swap_avg_fields_possibleTypes: string[] = ['Swap_avg_fields']
export const isSwap_avg_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_avg_fields"')
  return Swap_avg_fields_possibleTypes.includes(obj.__typename)
}

const Swap_max_fields_possibleTypes: string[] = ['Swap_max_fields']
export const isSwap_max_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_max_fields"')
  return Swap_max_fields_possibleTypes.includes(obj.__typename)
}

const Swap_min_fields_possibleTypes: string[] = ['Swap_min_fields']
export const isSwap_min_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_min_fields"')
  return Swap_min_fields_possibleTypes.includes(obj.__typename)
}

const Swap_mutation_response_possibleTypes: string[] = [
  'Swap_mutation_response',
]
export const isSwap_mutation_response = (
  obj?: { __typename?: any } | null
): obj is Swap_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_mutation_response"')
  return Swap_mutation_response_possibleTypes.includes(obj.__typename)
}

const Swap_stddev_fields_possibleTypes: string[] = ['Swap_stddev_fields']
export const isSwap_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_stddev_fields"')
  return Swap_stddev_fields_possibleTypes.includes(obj.__typename)
}

const Swap_stddev_pop_fields_possibleTypes: string[] = [
  'Swap_stddev_pop_fields',
]
export const isSwap_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_stddev_pop_fields"')
  return Swap_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const Swap_stddev_samp_fields_possibleTypes: string[] = [
  'Swap_stddev_samp_fields',
]
export const isSwap_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_stddev_samp_fields"')
  return Swap_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const Swap_sum_fields_possibleTypes: string[] = ['Swap_sum_fields']
export const isSwap_sum_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_sum_fields"')
  return Swap_sum_fields_possibleTypes.includes(obj.__typename)
}

const Swap_var_pop_fields_possibleTypes: string[] = ['Swap_var_pop_fields']
export const isSwap_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_var_pop_fields"')
  return Swap_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const Swap_var_samp_fields_possibleTypes: string[] = ['Swap_var_samp_fields']
export const isSwap_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_var_samp_fields"')
  return Swap_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const Swap_variance_fields_possibleTypes: string[] = ['Swap_variance_fields']
export const isSwap_variance_fields = (
  obj?: { __typename?: any } | null
): obj is Swap_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isSwap_variance_fields"')
  return Swap_variance_fields_possibleTypes.includes(obj.__typename)
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

const Token_mutation_response_possibleTypes: string[] = [
  'Token_mutation_response',
]
export const isToken_mutation_response = (
  obj?: { __typename?: any } | null
): obj is Token_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isToken_mutation_response"')
  return Token_mutation_response_possibleTypes.includes(obj.__typename)
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

const Transfer_mutation_response_possibleTypes: string[] = [
  'Transfer_mutation_response',
]
export const isTransfer_mutation_response = (
  obj?: { __typename?: any } | null
): obj is Transfer_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isTransfer_mutation_response"')
  return Transfer_mutation_response_possibleTypes.includes(obj.__typename)
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

const WorkflowModuleType_aggregate_possibleTypes: string[] = [
  'WorkflowModuleType_aggregate',
]
export const isWorkflowModuleType_aggregate = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModuleType_aggregate"')
  return WorkflowModuleType_aggregate_possibleTypes.includes(obj.__typename)
}

const WorkflowModuleType_aggregate_fields_possibleTypes: string[] = [
  'WorkflowModuleType_aggregate_fields',
]
export const isWorkflowModuleType_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_aggregate_fields"'
    )
  return WorkflowModuleType_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModuleType_avg_fields_possibleTypes: string[] = [
  'WorkflowModuleType_avg_fields',
]
export const isWorkflowModuleType_avg_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_avg_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_avg_fields"'
    )
  return WorkflowModuleType_avg_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModuleType_max_fields_possibleTypes: string[] = [
  'WorkflowModuleType_max_fields',
]
export const isWorkflowModuleType_max_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_max_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_max_fields"'
    )
  return WorkflowModuleType_max_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModuleType_min_fields_possibleTypes: string[] = [
  'WorkflowModuleType_min_fields',
]
export const isWorkflowModuleType_min_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_min_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_min_fields"'
    )
  return WorkflowModuleType_min_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModuleType_mutation_response_possibleTypes: string[] = [
  'WorkflowModuleType_mutation_response',
]
export const isWorkflowModuleType_mutation_response = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_mutation_response"'
    )
  return WorkflowModuleType_mutation_response_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModuleType_stddev_fields_possibleTypes: string[] = [
  'WorkflowModuleType_stddev_fields',
]
export const isWorkflowModuleType_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_stddev_fields"'
    )
  return WorkflowModuleType_stddev_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModuleType_stddev_pop_fields_possibleTypes: string[] = [
  'WorkflowModuleType_stddev_pop_fields',
]
export const isWorkflowModuleType_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_stddev_pop_fields"'
    )
  return WorkflowModuleType_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModuleType_stddev_samp_fields_possibleTypes: string[] = [
  'WorkflowModuleType_stddev_samp_fields',
]
export const isWorkflowModuleType_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_stddev_samp_fields"'
    )
  return WorkflowModuleType_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModuleType_sum_fields_possibleTypes: string[] = [
  'WorkflowModuleType_sum_fields',
]
export const isWorkflowModuleType_sum_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_sum_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_sum_fields"'
    )
  return WorkflowModuleType_sum_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModuleType_var_pop_fields_possibleTypes: string[] = [
  'WorkflowModuleType_var_pop_fields',
]
export const isWorkflowModuleType_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_var_pop_fields"'
    )
  return WorkflowModuleType_var_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModuleType_var_samp_fields_possibleTypes: string[] = [
  'WorkflowModuleType_var_samp_fields',
]
export const isWorkflowModuleType_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_var_samp_fields"'
    )
  return WorkflowModuleType_var_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModuleType_variance_fields_possibleTypes: string[] = [
  'WorkflowModuleType_variance_fields',
]
export const isWorkflowModuleType_variance_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModuleType_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModuleType_variance_fields"'
    )
  return WorkflowModuleType_variance_fields_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModule_aggregate_possibleTypes: string[] = [
  'WorkflowModule_aggregate',
]
export const isWorkflowModule_aggregate = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModule_aggregate"')
  return WorkflowModule_aggregate_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_aggregate_fields_possibleTypes: string[] = [
  'WorkflowModule_aggregate_fields',
]
export const isWorkflowModule_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModule_aggregate_fields"'
    )
  return WorkflowModule_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_avg_fields_possibleTypes: string[] = [
  'WorkflowModule_avg_fields',
]
export const isWorkflowModule_avg_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModule_avg_fields"')
  return WorkflowModule_avg_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_max_fields_possibleTypes: string[] = [
  'WorkflowModule_max_fields',
]
export const isWorkflowModule_max_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModule_max_fields"')
  return WorkflowModule_max_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_min_fields_possibleTypes: string[] = [
  'WorkflowModule_min_fields',
]
export const isWorkflowModule_min_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModule_min_fields"')
  return WorkflowModule_min_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_mutation_response_possibleTypes: string[] = [
  'WorkflowModule_mutation_response',
]
export const isWorkflowModule_mutation_response = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModule_mutation_response"'
    )
  return WorkflowModule_mutation_response_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_stddev_fields_possibleTypes: string[] = [
  'WorkflowModule_stddev_fields',
]
export const isWorkflowModule_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModule_stddev_fields"')
  return WorkflowModule_stddev_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_stddev_pop_fields_possibleTypes: string[] = [
  'WorkflowModule_stddev_pop_fields',
]
export const isWorkflowModule_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModule_stddev_pop_fields"'
    )
  return WorkflowModule_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_stddev_samp_fields_possibleTypes: string[] = [
  'WorkflowModule_stddev_samp_fields',
]
export const isWorkflowModule_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModule_stddev_samp_fields"'
    )
  return WorkflowModule_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const WorkflowModule_sum_fields_possibleTypes: string[] = [
  'WorkflowModule_sum_fields',
]
export const isWorkflowModule_sum_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflowModule_sum_fields"')
  return WorkflowModule_sum_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_var_pop_fields_possibleTypes: string[] = [
  'WorkflowModule_var_pop_fields',
]
export const isWorkflowModule_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModule_var_pop_fields"'
    )
  return WorkflowModule_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_var_samp_fields_possibleTypes: string[] = [
  'WorkflowModule_var_samp_fields',
]
export const isWorkflowModule_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModule_var_samp_fields"'
    )
  return WorkflowModule_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const WorkflowModule_variance_fields_possibleTypes: string[] = [
  'WorkflowModule_variance_fields',
]
export const isWorkflowModule_variance_fields = (
  obj?: { __typename?: any } | null
): obj is WorkflowModule_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isWorkflowModule_variance_fields"'
    )
  return WorkflowModule_variance_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_aggregate_possibleTypes: string[] = ['Workflow_aggregate']
export const isWorkflow_aggregate = (
  obj?: { __typename?: any } | null
): obj is Workflow_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_aggregate"')
  return Workflow_aggregate_possibleTypes.includes(obj.__typename)
}

const Workflow_aggregate_fields_possibleTypes: string[] = [
  'Workflow_aggregate_fields',
]
export const isWorkflow_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_aggregate_fields"')
  return Workflow_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_avg_fields_possibleTypes: string[] = ['Workflow_avg_fields']
export const isWorkflow_avg_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_avg_fields"')
  return Workflow_avg_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_max_fields_possibleTypes: string[] = ['Workflow_max_fields']
export const isWorkflow_max_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_max_fields"')
  return Workflow_max_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_min_fields_possibleTypes: string[] = ['Workflow_min_fields']
export const isWorkflow_min_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_min_fields"')
  return Workflow_min_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_mutation_response_possibleTypes: string[] = [
  'Workflow_mutation_response',
]
export const isWorkflow_mutation_response = (
  obj?: { __typename?: any } | null
): obj is Workflow_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_mutation_response"')
  return Workflow_mutation_response_possibleTypes.includes(obj.__typename)
}

const Workflow_stddev_fields_possibleTypes: string[] = [
  'Workflow_stddev_fields',
]
export const isWorkflow_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_stddev_fields"')
  return Workflow_stddev_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_stddev_pop_fields_possibleTypes: string[] = [
  'Workflow_stddev_pop_fields',
]
export const isWorkflow_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_stddev_pop_fields"')
  return Workflow_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_stddev_samp_fields_possibleTypes: string[] = [
  'Workflow_stddev_samp_fields',
]
export const isWorkflow_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_stddev_samp_fields"')
  return Workflow_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_sum_fields_possibleTypes: string[] = ['Workflow_sum_fields']
export const isWorkflow_sum_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_sum_fields"')
  return Workflow_sum_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_var_pop_fields_possibleTypes: string[] = [
  'Workflow_var_pop_fields',
]
export const isWorkflow_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_var_pop_fields"')
  return Workflow_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_var_samp_fields_possibleTypes: string[] = [
  'Workflow_var_samp_fields',
]
export const isWorkflow_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_var_samp_fields"')
  return Workflow_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const Workflow_variance_fields_possibleTypes: string[] = [
  'Workflow_variance_fields',
]
export const isWorkflow_variance_fields = (
  obj?: { __typename?: any } | null
): obj is Workflow_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isWorkflow_variance_fields"')
  return Workflow_variance_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_possibleTypes: string[] = ['chain_metadata']
export const ischain_metadata = (
  obj?: { __typename?: any } | null
): obj is chain_metadata => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata"')
  return chain_metadata_possibleTypes.includes(obj.__typename)
}

const chain_metadata_aggregate_possibleTypes: string[] = [
  'chain_metadata_aggregate',
]
export const ischain_metadata_aggregate = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata_aggregate"')
  return chain_metadata_aggregate_possibleTypes.includes(obj.__typename)
}

const chain_metadata_aggregate_fields_possibleTypes: string[] = [
  'chain_metadata_aggregate_fields',
]
export const ischain_metadata_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ischain_metadata_aggregate_fields"'
    )
  return chain_metadata_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_avg_fields_possibleTypes: string[] = [
  'chain_metadata_avg_fields',
]
export const ischain_metadata_avg_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata_avg_fields"')
  return chain_metadata_avg_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_max_fields_possibleTypes: string[] = [
  'chain_metadata_max_fields',
]
export const ischain_metadata_max_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata_max_fields"')
  return chain_metadata_max_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_min_fields_possibleTypes: string[] = [
  'chain_metadata_min_fields',
]
export const ischain_metadata_min_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata_min_fields"')
  return chain_metadata_min_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_mutation_response_possibleTypes: string[] = [
  'chain_metadata_mutation_response',
]
export const ischain_metadata_mutation_response = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ischain_metadata_mutation_response"'
    )
  return chain_metadata_mutation_response_possibleTypes.includes(obj.__typename)
}

const chain_metadata_stddev_fields_possibleTypes: string[] = [
  'chain_metadata_stddev_fields',
]
export const ischain_metadata_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata_stddev_fields"')
  return chain_metadata_stddev_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_stddev_pop_fields_possibleTypes: string[] = [
  'chain_metadata_stddev_pop_fields',
]
export const ischain_metadata_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ischain_metadata_stddev_pop_fields"'
    )
  return chain_metadata_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_stddev_samp_fields_possibleTypes: string[] = [
  'chain_metadata_stddev_samp_fields',
]
export const ischain_metadata_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ischain_metadata_stddev_samp_fields"'
    )
  return chain_metadata_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const chain_metadata_sum_fields_possibleTypes: string[] = [
  'chain_metadata_sum_fields',
]
export const ischain_metadata_sum_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ischain_metadata_sum_fields"')
  return chain_metadata_sum_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_var_pop_fields_possibleTypes: string[] = [
  'chain_metadata_var_pop_fields',
]
export const ischain_metadata_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ischain_metadata_var_pop_fields"'
    )
  return chain_metadata_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_var_samp_fields_possibleTypes: string[] = [
  'chain_metadata_var_samp_fields',
]
export const ischain_metadata_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ischain_metadata_var_samp_fields"'
    )
  return chain_metadata_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const chain_metadata_variance_fields_possibleTypes: string[] = [
  'chain_metadata_variance_fields',
]
export const ischain_metadata_variance_fields = (
  obj?: { __typename?: any } | null
): obj is chain_metadata_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ischain_metadata_variance_fields"'
    )
  return chain_metadata_variance_fields_possibleTypes.includes(obj.__typename)
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

const dynamic_contract_registry_aggregate_possibleTypes: string[] = [
  'dynamic_contract_registry_aggregate',
]
export const isdynamic_contract_registry_aggregate = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_aggregate => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_aggregate"'
    )
  return dynamic_contract_registry_aggregate_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_aggregate_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_aggregate_fields',
]
export const isdynamic_contract_registry_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_aggregate_fields"'
    )
  return dynamic_contract_registry_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_avg_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_avg_fields',
]
export const isdynamic_contract_registry_avg_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_avg_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_avg_fields"'
    )
  return dynamic_contract_registry_avg_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_max_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_max_fields',
]
export const isdynamic_contract_registry_max_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_max_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_max_fields"'
    )
  return dynamic_contract_registry_max_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_min_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_min_fields',
]
export const isdynamic_contract_registry_min_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_min_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_min_fields"'
    )
  return dynamic_contract_registry_min_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_mutation_response_possibleTypes: string[] = [
  'dynamic_contract_registry_mutation_response',
]
export const isdynamic_contract_registry_mutation_response = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_mutation_response"'
    )
  return dynamic_contract_registry_mutation_response_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_stddev_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_stddev_fields',
]
export const isdynamic_contract_registry_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_stddev_fields"'
    )
  return dynamic_contract_registry_stddev_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_stddev_pop_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_stddev_pop_fields',
]
export const isdynamic_contract_registry_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_stddev_pop_fields"'
    )
  return dynamic_contract_registry_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_stddev_samp_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_stddev_samp_fields',
]
export const isdynamic_contract_registry_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_stddev_samp_fields"'
    )
  return dynamic_contract_registry_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_sum_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_sum_fields',
]
export const isdynamic_contract_registry_sum_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_sum_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_sum_fields"'
    )
  return dynamic_contract_registry_sum_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_var_pop_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_var_pop_fields',
]
export const isdynamic_contract_registry_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_var_pop_fields"'
    )
  return dynamic_contract_registry_var_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_var_samp_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_var_samp_fields',
]
export const isdynamic_contract_registry_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_var_samp_fields"'
    )
  return dynamic_contract_registry_var_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const dynamic_contract_registry_variance_fields_possibleTypes: string[] = [
  'dynamic_contract_registry_variance_fields',
]
export const isdynamic_contract_registry_variance_fields = (
  obj?: { __typename?: any } | null
): obj is dynamic_contract_registry_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isdynamic_contract_registry_variance_fields"'
    )
  return dynamic_contract_registry_variance_fields_possibleTypes.includes(
    obj.__typename
  )
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

const end_of_block_range_scanned_data_aggregate_possibleTypes: string[] = [
  'end_of_block_range_scanned_data_aggregate',
]
export const isend_of_block_range_scanned_data_aggregate = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_aggregate => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_aggregate"'
    )
  return end_of_block_range_scanned_data_aggregate_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_aggregate_fields_possibleTypes: string[] =
  ['end_of_block_range_scanned_data_aggregate_fields']
export const isend_of_block_range_scanned_data_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_aggregate_fields"'
    )
  return end_of_block_range_scanned_data_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_avg_fields_possibleTypes: string[] = [
  'end_of_block_range_scanned_data_avg_fields',
]
export const isend_of_block_range_scanned_data_avg_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_avg_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_avg_fields"'
    )
  return end_of_block_range_scanned_data_avg_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_max_fields_possibleTypes: string[] = [
  'end_of_block_range_scanned_data_max_fields',
]
export const isend_of_block_range_scanned_data_max_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_max_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_max_fields"'
    )
  return end_of_block_range_scanned_data_max_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_min_fields_possibleTypes: string[] = [
  'end_of_block_range_scanned_data_min_fields',
]
export const isend_of_block_range_scanned_data_min_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_min_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_min_fields"'
    )
  return end_of_block_range_scanned_data_min_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_mutation_response_possibleTypes: string[] =
  ['end_of_block_range_scanned_data_mutation_response']
export const isend_of_block_range_scanned_data_mutation_response = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_mutation_response"'
    )
  return end_of_block_range_scanned_data_mutation_response_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_stddev_fields_possibleTypes: string[] = [
  'end_of_block_range_scanned_data_stddev_fields',
]
export const isend_of_block_range_scanned_data_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_stddev_fields"'
    )
  return end_of_block_range_scanned_data_stddev_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_stddev_pop_fields_possibleTypes: string[] =
  ['end_of_block_range_scanned_data_stddev_pop_fields']
export const isend_of_block_range_scanned_data_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_stddev_pop_fields"'
    )
  return end_of_block_range_scanned_data_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_stddev_samp_fields_possibleTypes: string[] =
  ['end_of_block_range_scanned_data_stddev_samp_fields']
export const isend_of_block_range_scanned_data_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_stddev_samp_fields"'
    )
  return end_of_block_range_scanned_data_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_sum_fields_possibleTypes: string[] = [
  'end_of_block_range_scanned_data_sum_fields',
]
export const isend_of_block_range_scanned_data_sum_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_sum_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_sum_fields"'
    )
  return end_of_block_range_scanned_data_sum_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_var_pop_fields_possibleTypes: string[] = [
  'end_of_block_range_scanned_data_var_pop_fields',
]
export const isend_of_block_range_scanned_data_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_var_pop_fields"'
    )
  return end_of_block_range_scanned_data_var_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_var_samp_fields_possibleTypes: string[] =
  ['end_of_block_range_scanned_data_var_samp_fields']
export const isend_of_block_range_scanned_data_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_var_samp_fields"'
    )
  return end_of_block_range_scanned_data_var_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const end_of_block_range_scanned_data_variance_fields_possibleTypes: string[] =
  ['end_of_block_range_scanned_data_variance_fields']
export const isend_of_block_range_scanned_data_variance_fields = (
  obj?: { __typename?: any } | null
): obj is end_of_block_range_scanned_data_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isend_of_block_range_scanned_data_variance_fields"'
    )
  return end_of_block_range_scanned_data_variance_fields_possibleTypes.includes(
    obj.__typename
  )
}

const event_sync_state_possibleTypes: string[] = ['event_sync_state']
export const isevent_sync_state = (
  obj?: { __typename?: any } | null
): obj is event_sync_state => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isevent_sync_state"')
  return event_sync_state_possibleTypes.includes(obj.__typename)
}

const event_sync_state_aggregate_possibleTypes: string[] = [
  'event_sync_state_aggregate',
]
export const isevent_sync_state_aggregate = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isevent_sync_state_aggregate"')
  return event_sync_state_aggregate_possibleTypes.includes(obj.__typename)
}

const event_sync_state_aggregate_fields_possibleTypes: string[] = [
  'event_sync_state_aggregate_fields',
]
export const isevent_sync_state_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_aggregate_fields"'
    )
  return event_sync_state_aggregate_fields_possibleTypes.includes(
    obj.__typename
  )
}

const event_sync_state_avg_fields_possibleTypes: string[] = [
  'event_sync_state_avg_fields',
]
export const isevent_sync_state_avg_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isevent_sync_state_avg_fields"')
  return event_sync_state_avg_fields_possibleTypes.includes(obj.__typename)
}

const event_sync_state_max_fields_possibleTypes: string[] = [
  'event_sync_state_max_fields',
]
export const isevent_sync_state_max_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isevent_sync_state_max_fields"')
  return event_sync_state_max_fields_possibleTypes.includes(obj.__typename)
}

const event_sync_state_min_fields_possibleTypes: string[] = [
  'event_sync_state_min_fields',
]
export const isevent_sync_state_min_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isevent_sync_state_min_fields"')
  return event_sync_state_min_fields_possibleTypes.includes(obj.__typename)
}

const event_sync_state_mutation_response_possibleTypes: string[] = [
  'event_sync_state_mutation_response',
]
export const isevent_sync_state_mutation_response = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_mutation_response"'
    )
  return event_sync_state_mutation_response_possibleTypes.includes(
    obj.__typename
  )
}

const event_sync_state_stddev_fields_possibleTypes: string[] = [
  'event_sync_state_stddev_fields',
]
export const isevent_sync_state_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_stddev_fields"'
    )
  return event_sync_state_stddev_fields_possibleTypes.includes(obj.__typename)
}

const event_sync_state_stddev_pop_fields_possibleTypes: string[] = [
  'event_sync_state_stddev_pop_fields',
]
export const isevent_sync_state_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_stddev_pop_fields"'
    )
  return event_sync_state_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const event_sync_state_stddev_samp_fields_possibleTypes: string[] = [
  'event_sync_state_stddev_samp_fields',
]
export const isevent_sync_state_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_stddev_samp_fields"'
    )
  return event_sync_state_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const event_sync_state_sum_fields_possibleTypes: string[] = [
  'event_sync_state_sum_fields',
]
export const isevent_sync_state_sum_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isevent_sync_state_sum_fields"')
  return event_sync_state_sum_fields_possibleTypes.includes(obj.__typename)
}

const event_sync_state_var_pop_fields_possibleTypes: string[] = [
  'event_sync_state_var_pop_fields',
]
export const isevent_sync_state_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_var_pop_fields"'
    )
  return event_sync_state_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const event_sync_state_var_samp_fields_possibleTypes: string[] = [
  'event_sync_state_var_samp_fields',
]
export const isevent_sync_state_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_var_samp_fields"'
    )
  return event_sync_state_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const event_sync_state_variance_fields_possibleTypes: string[] = [
  'event_sync_state_variance_fields',
]
export const isevent_sync_state_variance_fields = (
  obj?: { __typename?: any } | null
): obj is event_sync_state_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "isevent_sync_state_variance_fields"'
    )
  return event_sync_state_variance_fields_possibleTypes.includes(obj.__typename)
}

const mutation_root_possibleTypes: string[] = ['mutation_root']
export const ismutation_root = (
  obj?: { __typename?: any } | null
): obj is mutation_root => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}

const persisted_state_possibleTypes: string[] = ['persisted_state']
export const ispersisted_state = (
  obj?: { __typename?: any } | null
): obj is persisted_state => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ispersisted_state"')
  return persisted_state_possibleTypes.includes(obj.__typename)
}

const persisted_state_aggregate_possibleTypes: string[] = [
  'persisted_state_aggregate',
]
export const ispersisted_state_aggregate = (
  obj?: { __typename?: any } | null
): obj is persisted_state_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ispersisted_state_aggregate"')
  return persisted_state_aggregate_possibleTypes.includes(obj.__typename)
}

const persisted_state_aggregate_fields_possibleTypes: string[] = [
  'persisted_state_aggregate_fields',
]
export const ispersisted_state_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_aggregate_fields"'
    )
  return persisted_state_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_avg_fields_possibleTypes: string[] = [
  'persisted_state_avg_fields',
]
export const ispersisted_state_avg_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ispersisted_state_avg_fields"')
  return persisted_state_avg_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_max_fields_possibleTypes: string[] = [
  'persisted_state_max_fields',
]
export const ispersisted_state_max_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ispersisted_state_max_fields"')
  return persisted_state_max_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_min_fields_possibleTypes: string[] = [
  'persisted_state_min_fields',
]
export const ispersisted_state_min_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ispersisted_state_min_fields"')
  return persisted_state_min_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_mutation_response_possibleTypes: string[] = [
  'persisted_state_mutation_response',
]
export const ispersisted_state_mutation_response = (
  obj?: { __typename?: any } | null
): obj is persisted_state_mutation_response => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_mutation_response"'
    )
  return persisted_state_mutation_response_possibleTypes.includes(
    obj.__typename
  )
}

const persisted_state_stddev_fields_possibleTypes: string[] = [
  'persisted_state_stddev_fields',
]
export const ispersisted_state_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_stddev_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_stddev_fields"'
    )
  return persisted_state_stddev_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_stddev_pop_fields_possibleTypes: string[] = [
  'persisted_state_stddev_pop_fields',
]
export const ispersisted_state_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_stddev_pop_fields"'
    )
  return persisted_state_stddev_pop_fields_possibleTypes.includes(
    obj.__typename
  )
}

const persisted_state_stddev_samp_fields_possibleTypes: string[] = [
  'persisted_state_stddev_samp_fields',
]
export const ispersisted_state_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_stddev_samp_fields"'
    )
  return persisted_state_stddev_samp_fields_possibleTypes.includes(
    obj.__typename
  )
}

const persisted_state_sum_fields_possibleTypes: string[] = [
  'persisted_state_sum_fields',
]
export const ispersisted_state_sum_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "ispersisted_state_sum_fields"')
  return persisted_state_sum_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_var_pop_fields_possibleTypes: string[] = [
  'persisted_state_var_pop_fields',
]
export const ispersisted_state_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_var_pop_fields"'
    )
  return persisted_state_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_var_samp_fields_possibleTypes: string[] = [
  'persisted_state_var_samp_fields',
]
export const ispersisted_state_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_var_samp_fields"'
    )
  return persisted_state_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const persisted_state_variance_fields_possibleTypes: string[] = [
  'persisted_state_variance_fields',
]
export const ispersisted_state_variance_fields = (
  obj?: { __typename?: any } | null
): obj is persisted_state_variance_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "ispersisted_state_variance_fields"'
    )
  return persisted_state_variance_fields_possibleTypes.includes(obj.__typename)
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

const raw_events_aggregate_possibleTypes: string[] = ['raw_events_aggregate']
export const israw_events_aggregate = (
  obj?: { __typename?: any } | null
): obj is raw_events_aggregate => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_aggregate"')
  return raw_events_aggregate_possibleTypes.includes(obj.__typename)
}

const raw_events_aggregate_fields_possibleTypes: string[] = [
  'raw_events_aggregate_fields',
]
export const israw_events_aggregate_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_aggregate_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_aggregate_fields"')
  return raw_events_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_avg_fields_possibleTypes: string[] = ['raw_events_avg_fields']
export const israw_events_avg_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_avg_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_avg_fields"')
  return raw_events_avg_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_max_fields_possibleTypes: string[] = ['raw_events_max_fields']
export const israw_events_max_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_max_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_max_fields"')
  return raw_events_max_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_min_fields_possibleTypes: string[] = ['raw_events_min_fields']
export const israw_events_min_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_min_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_min_fields"')
  return raw_events_min_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_mutation_response_possibleTypes: string[] = [
  'raw_events_mutation_response',
]
export const israw_events_mutation_response = (
  obj?: { __typename?: any } | null
): obj is raw_events_mutation_response => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_mutation_response"')
  return raw_events_mutation_response_possibleTypes.includes(obj.__typename)
}

const raw_events_stddev_fields_possibleTypes: string[] = [
  'raw_events_stddev_fields',
]
export const israw_events_stddev_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_stddev_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_stddev_fields"')
  return raw_events_stddev_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_stddev_pop_fields_possibleTypes: string[] = [
  'raw_events_stddev_pop_fields',
]
export const israw_events_stddev_pop_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_stddev_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_stddev_pop_fields"')
  return raw_events_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_stddev_samp_fields_possibleTypes: string[] = [
  'raw_events_stddev_samp_fields',
]
export const israw_events_stddev_samp_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_stddev_samp_fields => {
  if (!obj?.__typename)
    throw new Error(
      '__typename is missing in "israw_events_stddev_samp_fields"'
    )
  return raw_events_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_sum_fields_possibleTypes: string[] = ['raw_events_sum_fields']
export const israw_events_sum_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_sum_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_sum_fields"')
  return raw_events_sum_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_var_pop_fields_possibleTypes: string[] = [
  'raw_events_var_pop_fields',
]
export const israw_events_var_pop_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_var_pop_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_var_pop_fields"')
  return raw_events_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_var_samp_fields_possibleTypes: string[] = [
  'raw_events_var_samp_fields',
]
export const israw_events_var_samp_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_var_samp_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_var_samp_fields"')
  return raw_events_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const raw_events_variance_fields_possibleTypes: string[] = [
  'raw_events_variance_fields',
]
export const israw_events_variance_fields = (
  obj?: { __typename?: any } | null
): obj is raw_events_variance_fields => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "israw_events_variance_fields"')
  return raw_events_variance_fields_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (
  obj?: { __typename?: any } | null
): obj is subscription_root => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

export const enumBondingCurveConstraint = {
  BondingCurve_pkey: 'BondingCurve_pkey' as const,
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
  sellFee: 'sellFee' as const,
  sellReserveRatio: 'sellReserveRatio' as const,
  virtualCOL: 'virtualCOL' as const,
  virtualISS: 'virtualISS' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumBondingCurveUpdateColumn = {
  address: 'address' as const,
  bcType: 'bcType' as const,
  buyFee: 'buyFee' as const,
  buyReserveRatio: 'buyReserveRatio' as const,
  chainId: 'chainId' as const,
  collateralToken_id: 'collateralToken_id' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  issuanceToken_id: 'issuanceToken_id' as const,
  sellFee: 'sellFee' as const,
  sellReserveRatio: 'sellReserveRatio' as const,
  virtualCOL: 'virtualCOL' as const,
  virtualISS: 'virtualISS' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumBountyClaimConstraint = {
  BountyClaim_pkey: 'BountyClaim_pkey' as const,
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

export const enumBountyClaimUpdateColumn = {
  bounty_id: 'bounty_id' as const,
  claimed: 'claimed' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  details: 'details' as const,
  id: 'id' as const,
}

export const enumBountyContributorConstraint = {
  BountyContributor_pkey: 'BountyContributor_pkey' as const,
}

export const enumBountyContributorSelectColumn = {
  address: 'address' as const,
  bountyClaim_id: 'bountyClaim_id' as const,
  claimAmount: 'claimAmount' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
}

export const enumBountyContributorUpdateColumn = {
  address: 'address' as const,
  bountyClaim_id: 'bountyClaim_id' as const,
  claimAmount: 'claimAmount' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
}

export const enumBountyModuleConstraint = {
  BountyModule_pkey: 'BountyModule_pkey' as const,
}

export const enumBountyModuleSelectColumn = {
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumBountyModuleUpdateColumn = {
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumBountyConstraint = {
  Bounty_pkey: 'Bounty_pkey' as const,
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

export const enumBountyUpdateColumn = {
  bountyModule_id: 'bountyModule_id' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  details: 'details' as const,
  id: 'id' as const,
  locked: 'locked' as const,
  maximumPayoutAmount: 'maximumPayoutAmount' as const,
  minimumPayoutAmount: 'minimumPayoutAmount' as const,
}

export const enumCurveDayDataConstraint = {
  CurveDayData_pkey: 'CurveDayData_pkey' as const,
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

export const enumCurveDayDataUpdateColumn = {
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

export const enumCurveHourDataConstraint = {
  CurveHourData_pkey: 'CurveHourData_pkey' as const,
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

export const enumCurveHourDataUpdateColumn = {
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

export const enumDepositVaultConstraint = {
  DepositVault_pkey: 'DepositVault_pkey' as const,
}

export const enumDepositVaultSelectColumn = {
  address: 'address' as const,
  balance: 'balance' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  token_id: 'token_id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumDepositVaultUpdateColumn = {
  address: 'address' as const,
  balance: 'balance' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  token_id: 'token_id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumDepositConstraint = {
  Deposit_pkey: 'Deposit_pkey' as const,
}

export const enumDepositSelectColumn = {
  amount: 'amount' as const,
  blockTimestamp: 'blockTimestamp' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  depositVault_id: 'depositVault_id' as const,
  depositor: 'depositor' as const,
  id: 'id' as const,
}

export const enumDepositUpdateColumn = {
  amount: 'amount' as const,
  blockTimestamp: 'blockTimestamp' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  depositVault_id: 'depositVault_id' as const,
  depositor: 'depositor' as const,
  id: 'id' as const,
}

export const enumIssuanceTokenDayDataConstraint = {
  IssuanceTokenDayData_pkey: 'IssuanceTokenDayData_pkey' as const,
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

export const enumIssuanceTokenDayDataUpdateColumn = {
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

export const enumIssuanceTokenHourDataConstraint = {
  IssuanceTokenHourData_pkey: 'IssuanceTokenHourData_pkey' as const,
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

export const enumIssuanceTokenHourDataUpdateColumn = {
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

export const enumLinearVestingConstraint = {
  LinearVesting_pkey: 'LinearVesting_pkey' as const,
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

export const enumLinearVestingUpdateColumn = {
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

export const enumProjectFeeConstraint = {
  ProjectFee_pkey: 'ProjectFee_pkey' as const,
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

export const enumProjectFeeUpdateColumn = {
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

export const enumProtocolFeeConstraint = {
  ProtocolFee_pkey: 'ProtocolFee_pkey' as const,
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

export const enumProtocolFeeUpdateColumn = {
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

export const enumStreamingPaymentProcessorConstraint = {
  StreamingPaymentProcessor_pkey: 'StreamingPaymentProcessor_pkey' as const,
}

export const enumStreamingPaymentProcessorSelectColumn = {
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumStreamingPaymentProcessorUpdateColumn = {
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  workflow_id: 'workflow_id' as const,
}

export const enumSwapConstraint = {
  Swap_pkey: 'Swap_pkey' as const,
}

export const enumSwapSelectColumn = {
  amountCOL: 'amountCOL' as const,
  amountISS: 'amountISS' as const,
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

export const enumSwapUpdateColumn = {
  amountCOL: 'amountCOL' as const,
  amountISS: 'amountISS' as const,
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

export const enumTokenConstraint = {
  Token_pkey: 'Token_pkey' as const,
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

export const enumTokenUpdateColumn = {
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

export const enumTransferConstraint = {
  Transfer_pkey: 'Transfer_pkey' as const,
}

export const enumTransferSelectColumn = {
  amount: 'amount' as const,
  blockTimestamp: 'blockTimestamp' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  depositVault_id: 'depositVault_id' as const,
  id: 'id' as const,
  recipient: 'recipient' as const,
}

export const enumTransferUpdateColumn = {
  amount: 'amount' as const,
  blockTimestamp: 'blockTimestamp' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  depositVault_id: 'depositVault_id' as const,
  id: 'id' as const,
  recipient: 'recipient' as const,
}

export const enumWorkflowModuleTypeConstraint = {
  WorkflowModuleType_pkey: 'WorkflowModuleType_pkey' as const,
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

export const enumWorkflowModuleTypeUpdateColumn = {
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

export const enumWorkflowModuleConstraint = {
  WorkflowModule_pkey: 'WorkflowModule_pkey' as const,
}

export const enumWorkflowModuleSelectColumn = {
  address: 'address' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  moduleType_id: 'moduleType_id' as const,
  orchestrator: 'orchestrator' as const,
}

export const enumWorkflowModuleUpdateColumn = {
  address: 'address' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  id: 'id' as const,
  moduleType_id: 'moduleType_id' as const,
  orchestrator: 'orchestrator' as const,
}

export const enumWorkflowConstraint = {
  Workflow_pkey: 'Workflow_pkey' as const,
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

export const enumWorkflowUpdateColumn = {
  authorizer_id: 'authorizer_id' as const,
  chainId: 'chainId' as const,
  db_write_timestamp: 'db_write_timestamp' as const,
  fundingManager_id: 'fundingManager_id' as const,
  id: 'id' as const,
  optionalModules: 'optionalModules' as const,
  orchestrator: 'orchestrator' as const,
  paymentProcessor_id: 'paymentProcessor_id' as const,
}

export const enumChainMetadataConstraint = {
  chain_metadata_pkey: 'chain_metadata_pkey' as const,
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

export const enumChainMetadataUpdateColumn = {
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

export const enumDynamicContractRegistryConstraint = {
  dynamic_contract_registry_pkey: 'dynamic_contract_registry_pkey' as const,
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

export const enumDynamicContractRegistryUpdateColumn = {
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

export const enumEndOfBlockRangeScannedDataConstraint = {
  end_of_block_range_scanned_data_pkey:
    'end_of_block_range_scanned_data_pkey' as const,
}

export const enumEndOfBlockRangeScannedDataSelectColumn = {
  block_hash: 'block_hash' as const,
  block_number: 'block_number' as const,
  block_timestamp: 'block_timestamp' as const,
  chain_id: 'chain_id' as const,
}

export const enumEndOfBlockRangeScannedDataUpdateColumn = {
  block_hash: 'block_hash' as const,
  block_number: 'block_number' as const,
  block_timestamp: 'block_timestamp' as const,
  chain_id: 'chain_id' as const,
}

export const enumEventSyncStateConstraint = {
  event_sync_state_pkey: 'event_sync_state_pkey' as const,
}

export const enumEventSyncStateSelectColumn = {
  block_number: 'block_number' as const,
  block_timestamp: 'block_timestamp' as const,
  chain_id: 'chain_id' as const,
  is_pre_registering_dynamic_contracts:
    'is_pre_registering_dynamic_contracts' as const,
  log_index: 'log_index' as const,
}

export const enumEventSyncStateUpdateColumn = {
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

export const enumPersistedStateConstraint = {
  persisted_state_pkey: 'persisted_state_pkey' as const,
}

export const enumPersistedStateSelectColumn = {
  abi_files_hash: 'abi_files_hash' as const,
  config_hash: 'config_hash' as const,
  envio_version: 'envio_version' as const,
  handler_files_hash: 'handler_files_hash' as const,
  id: 'id' as const,
  schema_hash: 'schema_hash' as const,
}

export const enumPersistedStateUpdateColumn = {
  abi_files_hash: 'abi_files_hash' as const,
  config_hash: 'config_hash' as const,
  envio_version: 'envio_version' as const,
  handler_files_hash: 'handler_files_hash' as const,
  id: 'id' as const,
  schema_hash: 'schema_hash' as const,
}

export const enumRawEventsConstraint = {
  raw_events_pkey: 'raw_events_pkey' as const,
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

export const enumRawEventsUpdateColumn = {
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
