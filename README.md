# Inverter Protocol Indexer

## Requirements

- you have **pnpm** installed
- you have **docker** installed
- you have **envio** installed

## Getting started

Install dependencies:

```
pnpm install
```

Generate code:

```
pnpm codegen
```

Run envio indexer locally with docker:

```
pnpm dev
```

Explore the graphql endpoint for indexed data:

- visit [http://localhost:8080](http://localhost:8080)
- use the password `testing` to explore the graphql interface

## Compiling

Make sure you have your docker `pnpm dev` running with your latest changes.

```
pnpm compile
```

## Releasing

```
pnpm release

# Once ready to publish, run:

pnpm release:pub
```
