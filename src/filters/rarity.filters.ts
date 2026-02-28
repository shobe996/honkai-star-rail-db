import { rarities } from '../data';
import { Rarity } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const rarityList = Object.values(rarities);

export const rarityFilters = {
  all: (): Rarity[] => rarityList,
  byId: (id: number): Rarity | null => {
    if (!isValidId(id)) return null;
    return rarityList.find((r) => r.id === id) ?? null;
  },
  byName: (name: string): Rarity[] => {
    const search = sanitizeSearchString(name);
    if (!search) return [];
    return (
      rarityList.filter((r) => {
        const normalizedDataName = r.name.trim().toLowerCase();
        return normalizedDataName.includes(search);
      }) ?? null
    );
  },
  byValue: (val: 4 | 5): Rarity[] => rarityList.filter((r) => r.value === val),
};
