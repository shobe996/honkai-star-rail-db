import { factions } from '../data';
import { Faction } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const factionList = Object.values(factions);

export const factionFilters = {
  all: (): Faction[] => factionList,
  byId: (id: number): Faction | null => {
    if (!isValidId(id)) return null;
    return factionList.find((r) => r.id === id) ?? null;
  },
  byName: (name: string): Faction | null => {
    const search = sanitizeSearchString(name);
    if (!search) return null;
    return (
      factionList.find((r) => {
        const normalizedDataName = r.name.toLowerCase();
        return normalizedDataName === search;
      }) ?? null
    );
  },
};
