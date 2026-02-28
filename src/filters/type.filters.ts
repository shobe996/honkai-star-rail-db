import { types } from '../data';
import { Type } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const typeList = Object.values(types);

export const typeFilters = {
  /**
   * Returns all types in the data set.
   * @returns An array of all available types.
   */
  all: (): Type[] => typeList,

  /**
   * Finds a type by their unique identifier.
   * @param id - The unique numerical ID of the type.
   * @returns The matching type object, or null if not found or ID is invalid.
   */
  byId: (id: number): Type | null => {
    if (!isValidId(id)) return null;
    return typeList.find((t) => t.id === id) ?? null;
  },

  /**
   * Filters types based on a partial match within their name.
   * Case-insensitive.
   * @param name - The string to search for within type names.
   * @returns An array of types whose names contain the search string.
   */
  byName: (name: string): Type[] => {
    const search = sanitizeSearchString(name);
    if (!search) return [];
    return typeList.filter((t) => {
      const normalizedDataName = t.name.trim().toLowerCase();
      return normalizedDataName.includes(search);
    });
  },
};
