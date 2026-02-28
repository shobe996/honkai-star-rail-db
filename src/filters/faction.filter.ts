import { factions } from '../data';
import { Faction } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const factionList = Object.values(factions);

export const factionFilters = {
  /**
   * Returns all factions in the data set.
   * @returns An array of all available factions.
   */
  all: (): Faction[] => factionList,

  /**
   * Finds a faction by its unique identifier.
   * @param id - The unique numerical ID of the faction.
   * @returns The matching faction object, or null if not found or ID is invalid.
   */
  byId: (id: number): Faction | null => {
    if (!isValidId(id)) return null;
    return factionList.find((f) => f.id === id) ?? null;
  },

  /**
   * Filters factions based on a partial match within their name.
   * Case-insensitive.
   * @param name - The string to search for within path names.
   * @returns An array of factions whose names contain the search string.
   */
  byName: (name: string): Faction[] => {
    const search = sanitizeSearchString(name);
    if (!search) return [];
    return factionList.filter((f) => {
      const normalizedDataName = f.name.toLowerCase();
      return normalizedDataName.includes(search);
    });
  },
};
