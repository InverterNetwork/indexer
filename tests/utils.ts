import BigNumber from 'bignumber.js'

// Implementation of BigDecimal to avoid dependency on 'generated'
export const BigDecimal = (value: string | number | BigNumber): BigNumber => {
  return new BigNumber(value)
}

// Implementation of ZERO_BD to avoid dependency on '../src/utils'
export const ZERO_BD = BigDecimal('0')
export const ONE_BD = BigDecimal('1')
