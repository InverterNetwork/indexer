# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.9.31](https://github.com/InverterNetwork/indexer/compare/v0.9.30...v0.9.31) (2025-03-20)


### Features

* owner is indexed for blacklist issuance token ([fceba78](https://github.com/InverterNetwork/indexer/commit/fceba78f00c26ad5f838a82441af84416821f194))

### [0.9.30](https://github.com/InverterNetwork/indexer/compare/v0.9.29...v0.9.30) (2025-03-19)

### [0.9.29](https://github.com/InverterNetwork/indexer/compare/v0.9.28...v0.9.29) (2025-03-19)


### Bug Fixes

* historical role type for blacklist ([505d791](https://github.com/InverterNetwork/indexer/commit/505d791f7ddb5ec0add104158fde018da8e26f20))

### [0.9.28](https://github.com/InverterNetwork/indexer/compare/v0.9.27...v0.9.28) (2025-03-19)


### Features

* historical role has been added ([0f2d7bd](https://github.com/InverterNetwork/indexer/commit/0f2d7bd4360fa16992c1d0acc25cec310d8cc5b4))
* **schema:** add base interfaces for fees and interval data ([2835dce](https://github.com/InverterNetwork/indexer/commit/2835dcef7c2f87d49facbf1732c5613e73f95687))
* **schema:** refactor schema types and add parse-schema script ([d962bef](https://github.com/InverterNetwork/indexer/commit/d962bef9e91230354b0a876cef3e573f164b9cc5))


### Bug Fixes

* enhance dev script for better process management ([ec18665](https://github.com/InverterNetwork/indexer/commit/ec186653a722e2656757fa3d3f23e0f3fb233eda))
* streamline dev script in package.json ([0fd7009](https://github.com/InverterNetwork/indexer/commit/0fd700925d45e5947b2432daba58a488f0194e93))
* update scripts and package.json for codegen process ([33a49e3](https://github.com/InverterNetwork/indexer/commit/33a49e3d941b720aa31e97b4c833cd1b986a68e9))

### [0.9.27](https://github.com/InverterNetwork/indexer/compare/v0.9.26...v0.9.27) (2025-03-12)

### [0.9.26](https://github.com/InverterNetwork/indexer/compare/v0.9.25...v0.9.26) (2025-03-11)

### [0.9.25](https://github.com/InverterNetwork/indexer/compare/v0.9.24...v0.9.25) (2025-03-11)

### [0.9.24](https://github.com/InverterNetwork/indexer/compare/v0.9.23...v0.9.24) (2025-03-11)


### Bug Fixes

* blacklist manager schema updated ([2a05904](https://github.com/InverterNetwork/indexer/commit/2a05904fb17183f7280d5fddc37204b883c3c140))

### [0.9.23](https://github.com/InverterNetwork/indexer/compare/v0.9.22...v0.9.23) (2025-03-10)


### Bug Fixes

* updated to latest blacklist issuance token ([a9baaa9](https://github.com/InverterNetwork/indexer/commit/a9baaa93fd25f41ddad09d1646947c860ee8d45e))

### [0.9.22](https://github.com/InverterNetwork/indexer/compare/v0.9.21...v0.9.22) (2025-03-06)


### Features

* **factory:** add staking module metadata functions and events ([d1190c0](https://github.com/InverterNetwork/indexer/commit/d1190c0d061d62171cea8642b43d425b2e809bda))
* **schema:** update MigratingPIM entity with additional data relations ([51bc6e3](https://github.com/InverterNetwork/indexer/commit/51bc6e31491cb7b39c48c5f85abb12c53652c2da))


### Bug Fixes

* **ci:** update ( envio changed the cmd ) migration setup command in workflow ([d0ebea0](https://github.com/InverterNetwork/indexer/commit/d0ebea0157a799d9727dc712f7922701541f4262))
* **factory:** resolve workflow reference in migrating PIM handler ([994c218](https://github.com/InverterNetwork/indexer/commit/994c218636a4818f5884185231eb9ddb6a04e9ef))

### [0.9.21](https://github.com/InverterNetwork/indexer/compare/v0.9.21-alpha.0...v0.9.21) (2025-03-05)

### [0.9.20](https://github.com/InverterNetwork/indexer/compare/v0.9.19...v0.9.20) (2025-03-01)


### Bug Fixes

* **ci:** improve database detection and logging in blue-green deployment ([92ab669](https://github.com/InverterNetwork/indexer/commit/92ab6694a3d6c1b5a36a6f2015cbf77864186c83))
* **ci:** simplify database detection in ECS deployment workflow ([5acb554](https://github.com/InverterNetwork/indexer/commit/5acb554b43b08450edfeb3be8d8ba2f86dbf926e))

### [0.9.19](https://github.com/InverterNetwork/indexer/compare/v0.9.18...v0.9.19) (2025-03-01)


### Features

* adds prod.yml ([04e2b0f](https://github.com/InverterNetwork/indexer/commit/04e2b0f9f98865f7e0f3615f9035f992aecc0e41))
* enhance blue-green database switching with health check ([57d5f7e](https://github.com/InverterNetwork/indexer/commit/57d5f7ec85368bd830c1e733dc633b0f7c28c3d7))


### Bug Fixes

* add dynamic database selection for blue-green deployment ([31583b5](https://github.com/InverterNetwork/indexer/commit/31583b5e6de7afd2dec4b0fdeb2b211e5aff08bc))
* improve database detection in blue-green deployment ([cd8a6db](https://github.com/InverterNetwork/indexer/commit/cd8a6dbc0b5c4783fa2367889bf61f75cf0dbaa3))
* reduce ECS service stability wait timeout and add sleep ([19b565c](https://github.com/InverterNetwork/indexer/commit/19b565cac11424db46f31486805ebd2aa47a7382))
* refine database switching logic in CI/CD workflow ([e3112fa](https://github.com/InverterNetwork/indexer/commit/e3112fa95ab0bcc7966088db7ed7c5df17a5be11))
* remove database health check logic from CI/CD workflow ([1345f01](https://github.com/InverterNetwork/indexer/commit/1345f013f1e58e6b5220f41e986397d50119b914))

### [0.9.18](https://github.com/InverterNetwork/indexer/compare/v0.9.17...v0.9.18) (2025-02-21)


### Features

* add market capitalization to interval data entities ([cf7df54](https://github.com/InverterNetwork/indexer/commit/cf7df54244f57f1a2cc04faaac8a6930b4467933))
* add market capitalization to Token entity ([84e5ea4](https://github.com/InverterNetwork/indexer/commit/84e5ea41fa0e1384206877b7742b8bfb67eb5a47))

### [0.9.17](https://github.com/InverterNetwork/indexer/compare/v0.9.16...v0.9.17) (2025-02-19)


### Features

* update Migrating PIM Factory schema and mappings ([45428c2](https://github.com/InverterNetwork/indexer/commit/45428c2ee565a3499c88491be47f8758a99367f6))


### Bug Fixes

* unique ids for linear vestings ([755f204](https://github.com/InverterNetwork/indexer/commit/755f20457bf880cf3991df2b6d0ee0b2cd97b6f8))

### [0.9.16](https://github.com/InverterNetwork/indexer/compare/v0.9.15...v0.9.16) (2025-02-18)


### Features

* add support for Migrating PIM Factory ([56ff157](https://github.com/InverterNetwork/indexer/commit/56ff157774572f8ba99d60cafb9b6920a13b0888))
* improve MigrationConfig handling with decimal formatting ([a1e6a0d](https://github.com/InverterNetwork/indexer/commit/a1e6a0d59802d1d5c265f40a7b7fa5b111c06a5f))


### Bug Fixes

* indent bug ([557cfd0](https://github.com/InverterNetwork/indexer/commit/557cfd079762ad47c46b130e4fe1b9eb0ea606b3))
* paymentQueueExecuted event added ([5ebcd01](https://github.com/InverterNetwork/indexer/commit/5ebcd01d30f5fb9cf5d1e2f6a899f0914c21296c))
* reserve deposited event has been added ([13a00e6](https://github.com/InverterNetwork/indexer/commit/13a00e60c0ed2b827c072f800c5c54fa0b299fdb))

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
