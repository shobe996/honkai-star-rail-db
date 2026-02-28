import { paths } from '../data';
import { Path } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const pathList = Object.values(paths);

// TODO: add method descriptions
export const pathFilters = {
  /**
   * Returns all paths in the data set.
   * @returns An array of all available paths.
   */
  all: (): Path[] => pathList,

  /**
   * Finds a path by its unique identifier.
   * @param id - The unique numerical ID of the path.
   * @returns The matching path object, or null if not found or ID is invalid.
   */
  byId: (id: number): Path | null => {
    if (!isValidId(id)) return null;
    return pathList.find((p) => p.id === id) ?? null;
  },

  /**
   * Filters paths based on a partial match within their name.
   * Case-insensitive.
   * @param name - The string to search for within path names.
   * @returns An array of paths whose names contain the search string.
   */
  byName: (name: string): Path[] => {
    const search = sanitizeSearchString(name);
    if (!search) return [];
    return pathList.filter((p) => {
      const normalizedDataName = p.name.trim().toLowerCase();
      return normalizedDataName.includes(search);
    });
  },
};
