<div align="center">

[![npm latest package][npm-latest-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![License][license-image]][license-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![Follow on Twitter][twitter-image]][twitter-url]

</div>

## Inverter / GraphQL Typesafe / Query / Subscription

GraphQL Typesafe / Query / Subscription for [InverterNetwork](https://github.com/InverterNetwork).

## Summary

This package contains < GraphQL Typesafe / Query / Subscription > for [InverterNetwork](https://github.com/InverterNetwork).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the last releases.

## Install

```bash
pnpm add @inverter-network/graphql
```

## Usage

```ts
import { Client, query, subscription } from '@inverter-network/graphql'

// By default, the client will use the hardcoded url -> InverterNetwork Production
Client.updateUrl('<OPTIONAL_GRAPHQL_URL>')

const fields = {
  Token: {
    __args: {
      where: {
        address: {
          _eq: '0x961bB3932A7efAa9aDcc7409e1fea090479E8312',
        },
        chainId: {
          _eq: 1101,
        },
      },
    },
    chainId: 1,
    address: 1,
    name: 1,
    decimals: 1,
    symbol: 1,
    totalSupply: 1,
  },
} as const

// Query
const tokens = await query(fields)

// Subscription
const sub = subscription(fields)

sub.addCallback((data) => {
  console.log(data)
})
```

## License

This package is licensed - see the [LICENSE](./LICENSE) file for details.

[ci-image]: https://badgen.net/github/checks/InverterNetwork/indexer/main?label=ci
[ci-url]: https://github.com/InverterNetwork/indexer/actions/workflows/ci.yaml
[npm-url]: https://npmjs.org/package/@inverter-network/graphql
[twitter-url]: https://twitter.com/inverternetwork
[twitter-image]: https://img.shields.io/twitter/follow/inverternetwork.svg?label=follow+InverterNetwork
[license-image]: https://img.shields.io/badge/License-LGPL%20v3-blue
[license-url]: ./LICENSE
[npm-latest-image]: https://img.shields.io/npm/v/@inverter-network/graphql/latest.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/@inverter-network/graphql.svg
