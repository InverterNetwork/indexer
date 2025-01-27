# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.9.5](https://github.com/InverterNetwork/indexer/compare/v0.9.4...v0.9.5) (2025-01-27)


### Features

* add service stability check to ECS deployment workflow ([da5394d](https://github.com/InverterNetwork/indexer/commit/da5394d88ce0250587f72d15a9522ee1737f345a))
* optimize GitHub Actions workflow with change detection ([2b09153](https://github.com/InverterNetwork/indexer/commit/2b09153c7adef33ec9f4a1b16139250533c67cbe))


### Bug Fixes

* improve Slack notification logic in GitHub Actions workflow ([c94fa17](https://github.com/InverterNetwork/indexer/commit/c94fa17d162912480930e151e20d92c0534392a6))

### [0.9.4](https://github.com/InverterNetwork/indexer/compare/v0.9.3...v0.9.4) (2025-01-27)


### Features

* add USD value tracking for tokens and vault operations ([9e85ac8](https://github.com/InverterNetwork/indexer/commit/9e85ac8d977fb4b05f10068565b3de2eab079d1b))
* enhance token utility functions and Dockerfile deployment options ([9f5e364](https://github.com/InverterNetwork/indexer/commit/9f5e3646e9337fd321efe3b465c61843060ab483))

### [0.9.3](https://github.com/InverterNetwork/indexer/compare/v0.9.2...v0.9.3) (2025-01-27)


### Features

* add Docker build and run script for local development ([d791bdb](https://github.com/InverterNetwork/indexer/commit/d791bdbc190b0891fffce3568c7d470cc9968197))
* add ECS task definition for indexer development environment ([710e1ea](https://github.com/InverterNetwork/indexer/commit/710e1eaaaac3a4a5833fdefe6df3e565371cb048))
* add flexible Dockerfile command execution modes ([e23841b](https://github.com/InverterNetwork/indexer/commit/e23841be5109b9ba1a431eccfddebfcc4babda9c))
* add GraphiQL Explorer plugin to improve GraphQL interface ([36522fb](https://github.com/InverterNetwork/indexer/commit/36522fbdd7c4fa41b4578f0f1456c24408359ba0))
* enhance migration and permission management scripts ([251f920](https://github.com/InverterNetwork/indexer/commit/251f9204eb0c2e302d6af262f945c7d374bcc731))
* improve Dockerfile runtime environment variable handling ([d7588a6](https://github.com/InverterNetwork/indexer/commit/d7588a6620f8fee8c7e9f5b3fe465a39b06371c2))

### [0.9.2](https://github.com/InverterNetwork/indexer/compare/v0.9.1...v0.9.2) (2025-01-24)


### Features

* add configuration for public aggregation tables and update docker-compose service ([888b0b8](https://github.com/InverterNetwork/indexer/commit/888b0b8d447100e3cbaf7ac913ae34aaa3ca4e11))


### Bug Fixes

* update production script to use docker-compose for improved deployment ([0cb1c0f](https://github.com/InverterNetwork/indexer/commit/0cb1c0f5ee7faa9853ab6b2f49462927d1a386c1))

### [0.9.1](https://github.com/InverterNetwork/indexer/compare/v0.9.0...v0.9.1) (2025-01-23)

## 0.9.0 (2025-01-22)

### Features

- add geckoterm integration for USD price retrieval ([3f6fbed](https://github.com/InverterNetwork/indexer/commit/3f6fbed07280310b46bd4f96320951ba6c8ee957))
- add GraphQL testing setup and enhance client functionality ([fdd4faf](https://github.com/InverterNetwork/indexer/commit/fdd4faf302c70839b62106560a1b867ca7fa490b))
- adds `chainId` to all entities ([5aa623a](https://github.com/InverterNetwork/indexer/commit/5aa623aac38dc814b9f42be3732dfc47af727b15))
- adds fee claims to bc entity ([1a9b62d](https://github.com/InverterNetwork/indexer/commit/1a9b62de95d614d78fdeb7c9923767494ec46bde))
- adds indexing for sales ([5233f75](https://github.com/InverterNetwork/indexer/commit/5233f75b135d5aa986dd8b586886ebf50340b6cc))
- adds timestamp to swaps ([49bc05a](https://github.com/InverterNetwork/indexer/commit/49bc05a2fde3c8884510ad666a6a21f1b2831e18))
- enhance funding manager with module_id integration and schema updates ([e076376](https://github.com/InverterNetwork/indexer/commit/e076376bf316788c6b5d9e3e775a01c5efedc672))
- enhance funding manager with new market data structures and fee handling ([dfd0245](https://github.com/InverterNetwork/indexer/commit/dfd02457ce51e54e89474ac1619029b5098c32f1))
- enhance GraphQL client with subscription management and usage examples ([05de1bd](https://github.com/InverterNetwork/indexer/commit/05de1bdbd8d4dd554744f2be7c47fa894b86e462))
- establishes one-to-many ([43dcbe1](https://github.com/InverterNetwork/indexer/commit/43dcbe111307b38b17ff87e0630c7f563c472021))
- index amounts, addresses ([02920b9](https://github.com/InverterNetwork/indexer/commit/02920b99c40f9a02a10eda18d6d91db4250c0940))
- index bonding curves ([e16f9d1](https://github.com/InverterNetwork/indexer/commit/e16f9d1a2eb5185da862b34d686ef175235249ce))
- index collateral token for bc ([71898bd](https://github.com/InverterNetwork/indexer/commit/71898bd12e59910d45004125f77285b7172988fc))
- index workflows ([ac4f239](https://github.com/InverterNetwork/indexer/commit/ac4f2398976685b05aa269e99c119b7db7f6ba89))
- indexes base sepolia ([2a9807f](https://github.com/InverterNetwork/indexer/commit/2a9807fb671d70dcc3403a9f029fd10f6df05d2b))
- indexes BC creations and configurations ([c136936](https://github.com/InverterNetwork/indexer/commit/c136936f87e8cb7cdbabacd669dcdc0cf1430ad0))
- indexes buy txs as Swaps ([339b69c](https://github.com/InverterNetwork/indexer/commit/339b69ce1dd63074b4b10ad506032e892c07b1dd))
- indexes module types, modules created and workflows ([c5e47ad](https://github.com/InverterNetwork/indexer/commit/c5e47ad1b8fb3fdc14c2aa3efbaa1d88b751b06a))
- indexes new vestings ([ab4188e](https://github.com/InverterNetwork/indexer/commit/ab4188e40046f6a8a723a12cde93e027691ca742))
- indexes OrchestratorCreated ([48bf950](https://github.com/InverterNetwork/indexer/commit/48bf950cb0d3719148ea0c6f26441065026ccd23))
- one-to-one module and type ([198d96e](https://github.com/InverterNetwork/indexer/commit/198d96ee4a91ea743a7a34c601b96c036618c6f0))
- token infos on swaps ([98d12c3](https://github.com/InverterNetwork/indexer/commit/98d12c3a0ae97ba5a7d391b1a1d9cabb105cbb0a))
- update supplies ([2510cfe](https://github.com/InverterNetwork/indexer/commit/2510cfeb1019eee567adb13ccc6f54fe6b019c26))

### Bug Fixes

- id for linear vesting ([52f556d](https://github.com/InverterNetwork/indexer/commit/52f556d5acb1f28459e66670f796567dba1db3a7))
- new deployment & virtual supplies ([4beddde](https://github.com/InverterNetwork/indexer/commit/4beddde9c29c52ad7918d0c063cbb9be94d8a6a5))
- new event format (envio bump) ([b6aa530](https://github.com/InverterNetwork/indexer/commit/b6aa530f0ffd59bc676fe7b138beb08079aa71f4))
- price calc ([dfa67e8](https://github.com/InverterNetwork/indexer/commit/dfa67e8899720c267ddf6e40247982161c73317a))
- rounding error on token amounts ([48433de](https://github.com/InverterNetwork/indexer/commit/48433dee5a7ed42e9b1bb9fd21ba00f22c5aba34))
- standardize workflow_id generation in event handlers ([625f10f](https://github.com/InverterNetwork/indexer/commit/625f10f8ee991bcff260c97ad105d87be336d1c6))
- total virtual issuance includes prot fees ([4b3c8ba](https://github.com/InverterNetwork/indexer/commit/4b3c8ba93c90ccd5fe2844a40b957d15a0166d95))
- type ([4f29ef0](https://github.com/InverterNetwork/indexer/commit/4f29ef0e893960336386e063c59884891d158f37))
- update orchestrator ID generation in event handler ([d906f5f](https://github.com/InverterNetwork/indexer/commit/d906f5fc8c3fe817762d052872245547bbab76fe))
- update README for InverterNetwork GraphQL package ([2ce7a2f](https://github.com/InverterNetwork/indexer/commit/2ce7a2f0cc00b207e72991bcd65fcc503a22a525))
