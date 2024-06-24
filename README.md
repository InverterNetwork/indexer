# Inverter Protocol Indexer

## Requirements
* you have **pnpm** installed
* you have **docker** installed
* you have **envio** installed

## Getting started

Run tests:
```
pnpm test
```

Generate code: 
```
envio codegen
```

Run envio indexer locally with docker:
```
envio local docker up
```

Start indexing:
```
envio dev
```

Explore the graphql endpoint for indexed data:
* visit [http://localhost:8080](http://localhost:8080)
* use the password `testing` to explore the graphql interface