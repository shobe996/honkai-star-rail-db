# Honkai Star Rail DB

**A type-safe database for Honkai: Star Rail characters and assets.**

This library provides a structured, fully typed dataset of Honkai: Star Rail characters, including their lore, combat metadata (Paths, Elements), and base growth statistics. It is designed to be used in applications that require reliable character data with built-in TypeScript support and filtering utilities.

---

## 📍 Table of Contents

- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Features](#-features)
- [Key Interfaces](#-key-interfaces)
- [Usage Examples](#-usage-examples)
  - [Character Filters](#character-filters)
  - [Faction Filters](#faction-filters)
  - [Path Filters](#path-filters)
  - [Rarity Filters](#rarity-filters)
  - [Type (Element) Filters](#type-element-filters)
- [Development](#-development)
- [Pre-commit Hooks](#-pre-commit-hooks)
- [Contributing](#-contributing)
- [How to Suggest Changes](#how-to-suggest-changes)
- [Legal & License](#️-legal--license)

---

## 🚀 Prerequisites

Before installing, ensure your environment meets the following requirements based on the project's engines:

- **Node.js**: Version `22.0.0` or higher.
- **npm**: Version `10.0.0` or higher.
- **TypeScript**: If you are using this in a TypeScript project, version `5.9.3` or higher is recommended.

---

## 📦 Installation

You can install the package via npm:

```bash
npm install honkai-star-rail-db
```

Or using yarn:

```bash
yarn add honkai-star-rail-db
```

---

## 🛠 Features

- **Full Type Safety**: Comprehensive interfaces for Characters, Paths, Factions, and more.

- **Milestone Stats**: Access to base stats at Level 1 and Level 80 for every character.

- **Built-in Filters**: Efficient utility functions to search by name, ID, rarity, or combat type.

- **Zero Dependencies**: Minimal footprint as it only utilizes native TypeScript features.

- **Development Ready**: Pre-configured with Husky, ESLint, and Prettier for contributors.

---

## 📖 Key Interfaces

The library is organized into logical domains. Here are the core data structures:

**Character**

The central model contains biographical and combat data.

- **Path**: Gameplay role (e.g., Destruction, Harmony).

- **Type**: Elemental affinity (e.g., Fire, Quantum).

- **Faction**: The group or world the character belongs to (e.g., Astral Express).

- **Stats**: Baseline attributes at Level 1 and Level 80.

**CharacterStats**

Includes foundational attributes used for scaling:

- `base_hp`: The foundation for HP% bonuses.

- `base_atk`: Used for damage output and DoT calculations.

- `base_def`: Determines damage mitigation.

- `base_speed`: Determines turn frequency in the Action Bar.

---

## 💻 Usage Examples

### Character Filters

Most character filters now support optional pagination parameters (page and size). If left blank, they default to a large page size to ensure you receive all results by default.

```typescript
import { Character, characterFilters } from 'honkai-star-rail-db';

// Get all characters (page 1, 10 items per page)
const allChars: Character[] = characterFilters.all(1, 10);

// Search by name with pagination (page 2, 5 items per page)
const march: Character[] = characterFilters.byName('March 7th', 2, 5);

// Filter by Path or Faction (defaults to all results)
const destructionChars: Character[] = characterFilters.byPath('Destruction');
const expressCrew: Character[] = characterFilters.byFaction('Astral Express');

// Broad search
const globalSearch: Character[] = characterFilters.searchCharacters(
  'Quantum',
  1,
  20,
);

// Find single character by ID (non-paginated)
const acheron: Character | null = characterFilters.byId(1308);

// Find characters that are either 'Destruction' path OR 'Fire' type
const results = characterFilters.byAttributes({
  path: 'Destruction',
  type: 'Fire',
});

// Find characters matching one or more criteria simultaneously. It performs an **OR** operation, meaning it will return any character that satisfies at least one of the provided search parameters.
const customSearch = characterFilters.byAttributes({
  name: 'March',
  faction: 'Astral Express',
});
```



```typescript

```

### Faction Filters

```typescript
import { Faction, factionFilters } from 'honkai-star-rail-db';

const allFactions: Faction[] = factionFilters.all();
const stellaronHunters: Faction | null = factionFilters.byId(2);
const searchFaction: Faction[] = factionFilters.byName('Genius Society');
```

### Path Filters

```typescript
import { Path, pathFilters } from 'honkai-star-rail-db';

const allPaths: Path[] = pathFilters.all();
const huntPath: Path | null = pathFilters.byId(3);
const searchPath: Path[] = pathFilters.byName('Nihility');
```

### Rarity Filters

```typescript
import { Rarity, rarityFilters } from 'honkai-star-rail-db';

const allRarities: Rarity[] = rarityFilters.all();
const legendary: Rarity | null = rarityFilters.byId(5);
const searchRarity: Rarity[] = rarityFilters.byName('5-Star');
const onlyFiveStars: Rarity[] = rarityFilters.byValue(5);
```

### Type (Element) Filters

```typescript
import { Type, typeFilters } from 'honkai-star-rail-db';

const allTypes: Type[] = typeFilters.all();
const lightning: Type | null = typeFilters.byId(4);
const searchType: Type[] = typeFilters.byName('Imaginary');
```

---

## 🛠 Development

If you wish to contribute or modify the library, use the following commands:

- **Build**: `npm run build` — Compiles TypeScript to JavaScript in the `/dist` folder.
- **Lint**: `npm run lint` — Checks the code for stylistic or programmatic errors.
- **Format**: `npm run format:fix` — Automatically fixes code formatting using Prettier.
- **Audit**: `npm audit` — Scans the project for vulnerabilities in dependencies.

### 🪝 Pre-commit Hooks

This project uses **Husky** to run a series of safety checks before any code is committed to the repository.

1. **Lint & Format**: Runs `lint-staged` to automatically fix formatting and **alphabetically sort imports/exports.**
2. **Security Audit**: Runs `npm audit` to check for known vulnerabilities in dependencies.
3. **Production Build**: Runs `npm run build` to ensure the TypeScript code compiles successfully.

**If any of these steps fail, the commit will be aborted.** You must resolve the issues (e.g., fixing a type error or updating a vulnerable package) before you can successfully save your changes.

---

## 🤝 Contributing

Suggestions and data updates are welcome! If you find a bug, a typo in the character stats, or want to suggest a new character to be added, please use the repository's issue tracker.

### How to Suggest Changes

The best way to contribute is to **open an issue** in the [GitHub repository](https://github.com/shobe996/honkai-star-rail-db/issues).

- **Data Updates**: Use the "New Character Data" template to provide missing or updated stats.
- **Bug Reports**: Use the "Bug Report" template if you find an error in the filtering logic or existing data.

> **Note**: I am currently the sole developer for this project. While I am not accepting Pull Requests at this time, I will review all submitted issues and implement the necessary changes or fixes as soon as possible.

---

## ⚖️ Legal & License

### Disclaimer

This project is a fan-made database and is **not** affiliated with or endorsed by **HoYoverse**.

- **Assets**: All game assets, including images, icons, and character descriptions accessed via this library, are the intellectual property of HoYoverse.
- **Usage**: This library is provided for personal, educational, and fan-use purposes. Users are responsible for complying with the game's Terms of Service when using these assets.
- **Accuracy**: Data is provided "as is" and may be subject to change as the game updates.

### License

This project is licensed under the **ISC License**. See the [LICENSE](./LICENSE) file for the full license text.
