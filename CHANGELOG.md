# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.9.15](https://github.com/InverterNetwork/indexer/compare/v0.9.14...v0.9.15) (2025-02-08)


### Bug Fixes

* update external price setter event handlers to use correct caller parameter ([905dc3d](https://github.com/InverterNetwork/indexer/commit/905dc3d79ed576e4051e1c1a20c0dfedbebd3287))
* update ID generation and add transaction hash for ExternalPrice entity ([fb85c8c](https://github.com/InverterNetwork/indexer/commit/fb85c8c2ca9f5c13fac1619edd8acec730e49022))

### [0.9.14](https://github.com/InverterNetwork/indexer/compare/v0.9.13...v0.9.14) (2025-02-08)


### Features

* enhance oracle price tracking with max fees and external price history ([2a46d20](https://github.com/InverterNetwork/indexer/commit/2a46d202204fe052f25667c17fa202c20940f1c0))

### [0.9.13](https://github.com/InverterNetwork/indexer/compare/v0.9.12...v0.9.13) (2025-02-07)


### Bug Fixes

* add await to updateRole calls in role event handlers ([ab03081](https://github.com/InverterNetwork/indexer/commit/ab03081d015d020b3bcf1e0186924f78143e38c0))

### [0.9.12](https://github.com/InverterNetwork/indexer/compare/v0.9.11...v0.9.12) (2025-02-05)

### [0.9.11](https://github.com/InverterNetwork/indexer/compare/v0.9.10...v0.9.11) (2025-02-04)


### Bug Fixes

* timestamp and txhash added to roles ([2925658](https://github.com/InverterNetwork/indexer/commit/2925658b2683342c85378230fe4cbb55199d7ff1))

### [0.9.10](https://github.com/InverterNetwork/indexer/compare/v0.9.9...v0.9.10) (2025-02-04)


### Features

* add transaction hash tracking across multiple entities ([ec295c3](https://github.com/InverterNetwork/indexer/commit/ec295c3218bd748f8135ac64c20bd9461d301154))

### [0.9.9](https://github.com/InverterNetwork/indexer/compare/v0.9.8...v0.9.9) (2025-02-04)


### Bug Fixes

* redemptionState ([540e65c](https://github.com/InverterNetwork/indexer/commit/540e65cc06113f2849e384692ed243feddd0792b))
* swap and payment order schema with fees ([3d56ff4](https://github.com/InverterNetwork/indexer/commit/3d56ff4d3f5f0de9e9fff1a20c90bf4f3bb9992b))

### [0.9.8](https://github.com/InverterNetwork/indexer/compare/v0.9.7...v0.9.8) (2025-02-02)

### [0.9.7](https://github.com/InverterNetwork/indexer/compare/v0.9.6...v0.9.7) (2025-02-02)

### [0.9.6](https://github.com/InverterNetwork/indexer/compare/v0.9.5...v0.9.6) (2025-02-02)


### Features

* add AUT_Roles module support for role management ([d42a458](https://github.com/InverterNetwork/indexer/commit/d42a4581ea2bed686d77e8b0ddf2fdc71b88bdb5))
* add debug logging for BigDecimal calculations ([f738766](https://github.com/InverterNetwork/indexer/commit/f7387662d11c9572ba64c621f0ee84885a517c26))
* add new public aggregation tables for redemption and oracle price tracking ([81c8e47](https://github.com/InverterNetwork/indexer/commit/81c8e470f7ba547822608d33ba6cae36ce0486db))
* add token references and improve price setter handling ([8d13ba5](https://github.com/InverterNetwork/indexer/commit/8d13ba5476cf0c2ce81a02f404de7a9656d41458))
* enhance AWS configuration and image tag management in GitHub Actions workflow ([4d1ba83](https://github.com/InverterNetwork/indexer/commit/4d1ba8323465ffb1aa3bc71524f43adb05786db2))
* enhance indexer-dev task definition update in GitHub Actions workflow ([a5be8cc](https://github.com/InverterNetwork/indexer/commit/a5be8cc08daf595956c7ef9dbc4f9e2e963b05f0))
* enhance role management with dynamic role derivation and metadata ([d2b58c8](https://github.com/InverterNetwork/indexer/commit/d2b58c87355ec83cb9cf8902e4da80c6138b2183))
* enhance token address derivation and add debug logging ([c4b6e5d](https://github.com/InverterNetwork/indexer/commit/c4b6e5d9ab5bfc952970f7c00b68220913abb376))
* **External Price FM:** has been added ([a38e638](https://github.com/InverterNetwork/indexer/commit/a38e63861c0b688009cbfc15ea9cbdb6e8743348))
* **ExternalPrice:** fees and swaps have been added ([529d349](https://github.com/InverterNetwork/indexer/commit/529d3497d00bf0e7d1d49cf33192d0313a25b4d4))
* payment order has been init'ed ([3a59908](https://github.com/InverterNetwork/indexer/commit/3a59908c58d1caec20b0ff44fb9144c52a864c6e))
* payment order model improved ([d88b3ee](https://github.com/InverterNetwork/indexer/commit/d88b3eed34980bcfbc01a5ab2b5759606a8fb50c))
* price setter has been indexed ([ba6ac16](https://github.com/InverterNetwork/indexer/commit/ba6ac1633f20f356b6e54df4beb0ce9bb684e19c))
* redemption has been added ([1ee4cb9](https://github.com/InverterNetwork/indexer/commit/1ee4cb9a2c178d980469bf442318770310f817f0))


### Bug Fixes

* add grant permissions to workflow commands ([e9a6584](https://github.com/InverterNetwork/indexer/commit/e9a6584f3686e720cca4ed11a92ca2229c6733f1))
* improve ECR image retrieval and task definition update in GitHub Actions workflow ([239b98e](https://github.com/InverterNetwork/indexer/commit/239b98e7158a89492ebc983cf0e356f8bb9f9a48))
* improve GitHub Actions workflow image verification and tag handling ([11ec264](https://github.com/InverterNetwork/indexer/commit/11ec26443cd790eacf82436984072f9075eed1e5))
* no need to index TokenSet events in FM ([a1259fb](https://github.com/InverterNetwork/indexer/commit/a1259fbebe1dae06b1641194aede446210817179))
* refactor GitHub Actions workflow image tag and output handling ([79a9634](https://github.com/InverterNetwork/indexer/commit/79a9634e74b8db521cc834c81fa9641884fde49b))
* refine GitHub Actions workflow build and Slack notification conditions ([26fcd37](https://github.com/InverterNetwork/indexer/commit/26fcd3753fef2ca84733be6fcdd4e82ecff12ac9))
* schema of payment order has been refactored ([43b603d](https://github.com/InverterNetwork/indexer/commit/43b603df97819b8a0183fb85a5552826e3a5a2b5))
* timestamps datatype updated to Int ([e60d83e](https://github.com/InverterNetwork/indexer/commit/e60d83e2c2506155240abd9724c8a361e3e79b0b))
* updated abi for external price fm ([53a7e70](https://github.com/InverterNetwork/indexer/commit/53a7e706530f17fcb709d88c8c99c01e75cc84d3))
* updating payment order has been fixed ([425633f](https://github.com/InverterNetwork/indexer/commit/425633fb98293f1e48e1e19ae5b8ab293ed035bc))

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
