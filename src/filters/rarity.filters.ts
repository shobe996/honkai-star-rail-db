import { rarities } from '../data';
import { Rarity } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const rarityList = Object.values(rarities);

export const rarityFilters = {
  /**
   * Returns all rarities in the data set.
   * @returns An array of all available rarities.
   */
  all: (): Rarity[] => rarityList,

  /**
   * Finds a rarity by its unique identifier.
   * @param id - The unique numerical ID of the rarity.
   * @returns The matching rarity object, or null if not found or ID is invalid.
   */
  byId: (id: number): Rarity | null => {
    if (!isValidId(id)) return null;
    return rarityList.find((r) => r.id === id) ?? null;
  },

  /**
   * Filters rarities based on a partial match within their name.
   * Case-insensitive.
   * @param name - The string to search for within rarity names.
   * @returns An array of rarities whose names contain the search string.
   */
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

  /**
   * Filters the rarity list by a specific star-rating or numeric value.
   * * @param val - The numeric rarity level to filter by (e.g., 4 or 5).
   * @returns An array of Rarity objects that match the specified value.
   */
  byValue: (val: 4 | 5): Rarity[] => rarityList.filter((r) => r.value === val),
};
