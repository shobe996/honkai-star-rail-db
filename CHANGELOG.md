# Changelog

## [1.1.7](https://github.com/shobe996/honkai-star-rail-db/compare/v1.1.6...v1.1.7) (2026-03-07)


### Bug Fixes

* modify prepare script to use install.mjs ([e5b115e](https://github.com/shobe996/honkai-star-rail-db/commit/e5b115edef39f08420e066587657a59a5f197622))



## [1.1.6](https://github.com/shobe996/honkai-star-rail-db/compare/v1.1.5...v1.1.6) (2026-03-07)


### Bug Fixes

* add --ignore-scripts flag to npm publish command ([4a93621](https://github.com/shobe996/honkai-star-rail-db/commit/4a93621492b270ee42febc13e87c42230b49797a))



## [1.1.5](https://github.com/shobe996/honkai-star-rail-db/compare/v1.1.4...v1.1.5) (2026-03-07)


### Bug Fixes

* remove prepublishOnly script and revert publish yaml and scripts to default setup ([d613cd9](https://github.com/shobe996/honkai-star-rail-db/commit/d613cd9c70b848b97d10e01920d32087d06ca991))
* revert the version from 1.1.0 to 1.1.4 ([a912552](https://github.com/shobe996/honkai-star-rail-db/commit/a9125525099cc7d42637818c81d0c61fd4a61433))



## [1.1.4](https://github.com/shobe996/honkai-star-rail-db/compare/v1.1.3...v1.1.4) (2026-03-07)


### Bug Fixes

* ensure devDependencies are installed in CI ([5ba8d41](https://github.com/shobe996/honkai-star-rail-db/commit/5ba8d41f8dbb7dd52d11b996ddeda4c3275374b3))



## [1.1.3](https://github.com/shobe996/honkai-star-rail-db/compare/v1.1.2...v1.1.3) (2026-03-07)


### Bug Fixes

* update scripts to point to the local binary in node_modules ([eb8b074](https://github.com/shobe996/honkai-star-rail-db/commit/eb8b074fc8bcbf84af41e1d7e52d62a123aace53))

## [1.1.2](https://github.com/shobe996/honkai-star-rail-db/compare/v1.1.1...v1.1.2) (2026-03-07)


### Bug Fixes

* update lint:fix script for flat config compatibility ([e14031a](https://github.com/shobe996/honkai-star-rail-db/commit/e14031a040a216f2893452eefe34eb96490dc0c7))

## [1.1.1](https://github.com/shobe996/honkai-star-rail-db/compare/v1.1.0...v1.1.1) (2026-03-07)


### Bug Fixes

* update lint script for flat config compatibility ([9bee5f8](https://github.com/shobe996/honkai-star-rail-db/commit/9bee5f837baf06019b7571492bf6dde44c2c5316))

# [1.1.0](https://github.com/shobe996/honkai-star-rail-db/compare/v1.0.0...v1.1.0) (2026-03-07)


### Features

* **character:** add Sparxie into character dataset ([db995fa](https://github.com/shobe996/honkai-star-rail-db/commit/db995fa0eeeb8a41730f9a97269196002f350329))

# 1.0.0 (2026-03-01)

### Added
- **Initial Release**: Full type-safe database for Honkai: Star Rail.
- Character metadata: Stats (Lv. 1 & 80), Elements, Paths, and Factions.
- Filter utilities: Comprehensive filtering for characters by multiple attributes.
- CI/CD: Automated NPM publishing via GitHub Actions.
- Developer Experience: Husky hooks, Prettier, and ESLint configuration.

### Bug Fixes

*  implement interface Type ([490fb4d](https://github.com/shobe996/honkai-star-rail-db/commit/490fb4d292220cd380024211a9ee9c3dc9b5d745))
* change byName method to return array instead of single object ([35096d3](https://github.com/shobe996/honkai-star-rail-db/commit/35096d3306f8e9a47957e0f8aa7f6611d383056a))
* change byName method to use filter instead find ([7158197](https://github.com/shobe996/honkai-star-rail-db/commit/71581976536cf8ee79c97d3d35918c7d1844881e))
* change byName method to use filter instead find ([7af479b](https://github.com/shobe996/honkai-star-rail-db/commit/7af479b91641826828fc80d7347d5a369297e9f6))
* change byName method to use filter instead find ([b38763b](https://github.com/shobe996/honkai-star-rail-db/commit/b38763b81ae450d5fddec511926734692c8b9986))
* change desc property value for characters: Fu Xuan, Dan Heng • Imbibitor Lunae, Topaz & Numby, Huohuo, and Hanya ([944f5b3](https://github.com/shobe996/honkai-star-rail-db/commit/944f5b3616f6b37511db5f23268fdda172ad85f3))
* change return type from null to empty array ([6f65150](https://github.com/shobe996/honkai-star-rail-db/commit/6f65150acba46fd37ce444d0c67fd47533d0e7da))
* change type to interface ([614eb16](https://github.com/shobe996/honkai-star-rail-db/commit/614eb16da11c0f64b009eec406e081e6c3de9ca3))
* move .github folder to root level ([0de4152](https://github.com/shobe996/honkai-star-rail-db/commit/0de4152d987dd279a9482e6c872eab674a255d88))
* order of rarities ([2c44b7f](https://github.com/shobe996/honkai-star-rail-db/commit/2c44b7f8fc90f35c09a28e28ed29aab59e45c48e))
* remove unnecessary check ([076e5e7](https://github.com/shobe996/honkai-star-rail-db/commit/076e5e7352e42dd8f2a193f86ab7d958807c3a3c))
* rename arguments of filter functions ([79b0779](https://github.com/shobe996/honkai-star-rail-db/commit/79b07796a4bfb2eca08a6ac50f2dc8b57e829650))
* replace find with filter ([a0b6e92](https://github.com/shobe996/honkai-star-rail-db/commit/a0b6e92a0a1805a04302c881b19dc3944ac7bf4a))
* replace variable isValid with inline if check ([db9ff8e](https://github.com/shobe996/honkai-star-rail-db/commit/db9ff8e1d991d8015c043d2aa9ca353d5e6d2f44))
* simplify data import in fillters ([e38eab2](https://github.com/shobe996/honkai-star-rail-db/commit/e38eab2806cd97cef59046e2d7ab6d5cfe2bb9d8))
* use local prettier instead global one ([35be4a4](https://github.com/shobe996/honkai-star-rail-db/commit/35be4a4f36afef2286433f65c4e37753e6906bdf))

### Features

* add bug_report template for github ([2927609](https://github.com/shobe996/honkai-star-rail-db/commit/2927609da41e4772e5789d5f0164875ecf9eaaac))
* add filter byDescription ([501768c](https://github.com/shobe996/honkai-star-rail-db/commit/501768cb6a97d8e4aecea287ad973cc1bec10054))
* add publish YML file for automatic deploy when release is ready ([095610b](https://github.com/shobe996/honkai-star-rail-db/commit/095610b601af06ca99aac81b7e58a19fdb859c73))
* **character:** add character module and characters from 1.0 patch ([bf714c7](https://github.com/shobe996/honkai-star-rail-db/commit/bf714c7c8ec4ecd982a819c693ceceaab685503a))
* **character:** add character Yao Guang ([fbf29a8](https://github.com/shobe996/honkai-star-rail-db/commit/fbf29a8fd552e6eab03f398e57b0db626b2bffb0))
* **character:** add characters from 1.1 to 1.6 patch ([9fe6264](https://github.com/shobe996/honkai-star-rail-db/commit/9fe626427f872f22c47fd07780a4a5afdb5482d5))
* **character:** add characters from 2.0 to 2.7 patch ([ef88ab2](https://github.com/shobe996/honkai-star-rail-db/commit/ef88ab29c9c47af662a2299ee671b1bcc0239f75))
* **character:** add characters from 3.0 to 3.8 patch ([9ca9646](https://github.com/shobe996/honkai-star-rail-db/commit/9ca9646080bfe92e6f4591ab8e2eb1be5b6b7e03))
* **faction:** add faction module ([9b796ac](https://github.com/shobe996/honkai-star-rail-db/commit/9b796accc9558d1efd24fe311b3ba85895b2aea0))
* implement search by multiple fields ([6172a1d](https://github.com/shobe996/honkai-star-rail-db/commit/6172a1dfb00f61d7c36fea65727234044ef97c4c))
* **path:** add path module ([6cca102](https://github.com/shobe996/honkai-star-rail-db/commit/6cca102b5700db3442265193813310c26d1fe71e))
* **rarity:** add rarity module and input validation utilities ([2afbc2a](https://github.com/shobe996/honkai-star-rail-db/commit/2afbc2a50717a4bc79ae7611a84aaf85f8f94b1c))
* **type:** add type module ([b327801](https://github.com/shobe996/honkai-star-rail-db/commit/b3278012468d81f02a5127ca1bddac7f2dfe8b3a))

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



