import { characters } from '../data';
import { Character } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const characterList = Object.values(characters);

export const characterFilters = {
  all: (): Character[] => characterList,

  byId: (id: number): Character | null => {
    if (!isValidId(id)) return null;
    return characterList.find((c) => c.id === id) ?? null;
  },

  byName: (name: string): Character[] => {
    const search = sanitizeSearchString(name);
    if (!search) return [];
    return (
      characterList.filter((c) => {
        const normalizedDataName = c.name.toLowerCase();
        return normalizedDataName.includes(search);
      }) ?? null
    );
  },

  byDescription: (description: string): Character[] => {
    const search = sanitizeSearchString(description);
    if (!search) return [];
    return (
      characterList.filter((c) => {
        const normalizedDataName = c.desc.toLowerCase();
        return normalizedDataName.toLowerCase().includes(search);
      }) ?? null
    );
  },

  byPath: (pathName: string): Character[] => {
    const search = sanitizeSearchString(pathName);
    if (!search) return [];
    return characterList.filter((c) => c.path.name.toLowerCase() === search);
  },

  byType: (typeName: string): Character[] => {
    const search = sanitizeSearchString(typeName);
    if (!search) return [];
    return characterList.filter((c) => c.type.name.toLowerCase() === search);
  },

  byFaction: (factionName: string): Character[] => {
    const search = sanitizeSearchString(factionName);
    if (!search) return [];
    return characterList.filter((c) => c.faction.name.toLowerCase() === search);
  },

  byRarity: (stars: number): Character[] => {
    if (stars < 4 || stars > 5) return [];
    return characterList.filter((c) => c.rarity.rarity === stars);
  },

  searchCharacters: (query: string): Character[] => {
    const search = sanitizeSearchString(query);
    if (!search) return [];

    return characterList.filter(
      (c) =>
        c.name.toLowerCase().includes(search) ||
        c.desc.toLowerCase().includes(search) ||
        c.faction.name.toLowerCase().includes(search) ||
        c.path.name.toLowerCase().includes(search) ||
        c.type.name.toLowerCase().includes(search),
    );
  },
};
