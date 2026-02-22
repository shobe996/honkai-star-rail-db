import { characters } from '../data';
import { Character } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const characterList = Object.values(characters);

export const characterFilters = {
  /**
   * Returns all characters in the data set.
   * @returns An array of all available characters.
   */
  all: (): Character[] => characterList,

  /**
   * Finds a character by their unique identifier.
   * @param id - The unique numerical ID of the character.
   * @returns The matching character object, or null if not found or ID is invalid.
   */
  byId: (id: number): Character | null => {
    if (!isValidId(id)) return null;
    return characterList.find((c) => c.id === id) ?? null;
  },

  /**
   * Filters characters based on a partial match within their name.
   * Case-insensitive.
   * @param name - The string to search for within character names.
   * @returns An array of characters whose names contain the search string.
   */
  byName: (name: string): Character[] => {
    const search = sanitizeSearchString(name);
    if (!search) return [];
    return (
      characterList.filter((c) => {
        const normalizedDataName = c.name.toLowerCase();
        return normalizedDataName.includes(search);
      }) ?? []
    );
  },

  /**
   * Filters characters based on a partial match within their description.
   * Case-insensitive.
   * @param description - The string to search for within character descriptions.
   * @returns An array of characters whose descriptions contain the search string.
   */
  byDescription: (description: string): Character[] => {
    const search = sanitizeSearchString(description);
    if (!search) return [];
    return (
      characterList.filter((c) => {
        const normalizedDataName = c.desc.toLowerCase();
        return normalizedDataName.toLowerCase().includes(search);
      }) ?? []
    );
  },

  /**
   * Retrieves characters belonging to a specific Path.
   * Performs an exact match (case-insensitive).
   * @param pathName - The name of the Path (e.g., 'Destruction', 'Harmony').
   * @returns An array of characters following the specified Path.
   */
  byPath: (pathName: string): Character[] => {
    const search = sanitizeSearchString(pathName);
    if (!search) return [];
    return characterList.filter((c) => c.path.name.toLowerCase() === search);
  },

  /**
   * Retrieves characters of a specific Combat Type (Element).
   * Performs an exact match (case-insensitive).
   * @param typeName - The name of the Type (e.g., 'Fire', 'Quantum').
   * @returns An array of characters matching the specified Combat Type.
   */
  byType: (typeName: string): Character[] => {
    const search = sanitizeSearchString(typeName);
    if (!search) return [];
    return characterList.filter((c) => c.type.name.toLowerCase() === search);
  },

  /**
   * Retrieves characters belonging to a specific Faction.
   * Performs an exact match (case-insensitive).
   * @param factionName - The name of the Faction (e.g., 'Amphoreus').
   * @returns An array of characters belonging to the specified Faction.
   */
  byFaction: (factionName: string): Character[] => {
    const search = sanitizeSearchString(factionName);
    if (!search) return [];
    return characterList.filter((c) => c.faction.name.toLowerCase() === search);
  },

  /**
   * Filters characters by their star rarity.
   * @param stars - The rarity level (typically 4 or 5).
   * @returns An array of characters matching the rarity value.
   */
  byRarity: (stars: number): Character[] => {
    if (stars < 4 || stars > 5) return [];
    return characterList.filter((c) => c.rarity.rarity === stars);
  },

  /**
   * Performs a broad search across name, description, faction, path, and type.
   * Useful for general-purpose search bars.
   * @param query - The search term to match against multiple character fields.
   * @returns An array of characters matching the query in any of the fields.
   */
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
