---
name: 🐛 Bug Report
about: Report a data error or a bug in the filtering logic.
title: '[BUG]: '
labels: bug, high-priority
assignees: ''

---

### 🔍 Nature of the Bug
- [ ] **Data Error**: (e.g., Acheron's base SPD is incorrect at Level 80)
- [ ] **Logic Error**: (e.g., `characterFilters.byFaction` is missing a specific character)
- [ ] **Type Error**: (e.g., A TypeScript interface is missing a property)

### 📝 Description
Provide a clear and concise description of what the bug is.

### 🚶 Steps to Reproduce
If this is a logic bug, please provide a code snippet:
```typescript
import { characterFilters } from 'honkai-star-rail-db';

// Example of the failing code:
const results = characterFilters.byFaction('Astral Express');
console.log(results); // Expected X, but got Y