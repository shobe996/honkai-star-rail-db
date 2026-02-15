import { rarities } from '../data/rarities';
import { Rarity } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const rarityList = Object.values(rarities);

export const rarityFilters = {
  all: (): Rarity[] => rarityList,
  byId: (id: number): Rarity | null => {
    const validId = isValidId(id);
    if (!validId) return null;
    return rarityList.find((r) => r.id === id) ?? null;
  },
  byName: (name: string): Rarity | null => {
    const search = sanitizeSearchString(name);
    if (!search) return null;
    return rarityList.find((r) => {
    const normalizedDataName = r.name.trim().toLowerCase();
    return normalizedDataName === search;
  }) ?? null;
  },
  byValue: (val: 4 | 5): Rarity[] => rarityList.filter((r) => r.rarity === val),
};
