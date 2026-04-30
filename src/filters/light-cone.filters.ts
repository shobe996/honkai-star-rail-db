import { lightCones } from '../data/light-cones';
import { LightCone } from '../types/light-cone.types';
import { LightConeSearchCriteria } from '../types/light-cones/light-cone-criteria.types';
import { PaginatedResult } from '../types/pagination.types';
import {
  isValidId,
  matches,
  sanitizeSearchString,
} from '../utils/filter.utils';
import { paginate } from '../utils/pagination.utils';

const lightConeList = Object.values(lightCones);
const lightConeMap = new Map<number, LightCone>(
  Object.values(lightCones).map((c) => [c.id, c]),
);

export const lightConeFilters = {
  /**
   * Returns all lightCones in the data set with optional pagination.
   * @param page - The current page number (starts at 1).
   * @param size - The number of lightCones to return per page (defaults to 999).
   * @returns An array of lightCones for the requested page.
   */
  all: (page: number = 1, size: number = 999): PaginatedResult<LightCone> =>
    paginate(lightConeList, page, size),

  /**
   * Finds a lightCone by their unique identifier.
   * @param id - The unique numerical ID of the lightCone.
   * @returns The matching lightCone object, or null if not found or ID is invalid.
   */
  byId: (id: number): LightCone | null => {
    if (!isValidId(id)) return null;
    return lightConeMap.get(id) ?? null;
  },

  /**
   * Filters lightCones based on a partial match within their name.
   * @param name - The string to search for within lightCone names.
   * @param page - The current page number (starts at 1).
   * @param size - The number of lightCones to return per page (defaults to 999).
   * @returns An array of lightCones whose names contain the search string.
   */
  byName: (
    name: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<LightCone> => {
    const search = sanitizeSearchString(name);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };
    const filtered = lightConeList.filter((c) =>
      c.name.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Retrieves lightCones belonging to a specific Path.
   * @param pathName - The name of the Path (e.g., 'Destruction').
   * @param page - The current page number (starts at 1).
   * @param size - The number of lightCones to return per page (defaults to 999).
   * @returns An array of lightCones following the specified Path.
   */
  byPath: (
    pathName: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<LightCone> => {
    const search = sanitizeSearchString(pathName);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };
    const filtered = lightConeList.filter((c) =>
      c.path.name.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Filters lightCones by their star rarity.
   * @param stars - The rarity level (4 or 5).
   * @param page - The current page number (starts at 1).
   * @param size - The number of lightCones to return per page (defaults to 999).
   * @returns An array of lightCones matching the rarity value.
   */
  byRarity: (
    stars: number,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<LightCone> => {
    if (stars < 4 || stars > 5)
      return { data: [], total: 0, hasMore: false, page, size };
    const filtered = lightConeList.filter((c) => c.rarity.value === stars);
    return paginate(filtered, page, size);
  },

  /**
   * Performs a broad search across multiple fields.
   * @param query - The search term to match against multiple lightCone fields.
   * @param page - The current page number (starts at 1).
   * @param size - The number of lightCones to return per page (defaults to 999).
   * @returns An array of lightCones matching the query.
   */
  searchLightConess: (
    query: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<LightCone> => {
    const search = sanitizeSearchString(query);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };

    const filtered = lightConeList.filter(
      (c) =>
        c.name.toLowerCase().includes(search) ||
        c.path.name.toLowerCase().includes(search) ||
        c.effect.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Filters lightCones based on multiple criteria.
   * Performs an OR operation across fields (matches if any provided criteria match).
   * @param criteria - Object containing search parameters.
   * @param page - Current page number.
   * @param size - Items per page.
   * @returns Array of lightCones matching at least one criterion.
   */
  byAttributes: (
    criteria: LightConeSearchCriteria,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<LightCone> => {
    const filtered = lightConeList.filter((c) => {
      // Check if any filter is actually active
      const isNameActive = criteria.name?.trim();
      const isEffectActive = criteria.effect?.trim();
      const isPathActive = criteria.path?.trim();
      const isRarityActive =
        criteria.rarity !== undefined &&
        criteria.rarity !== null &&
        !isNaN(criteria.rarity);

      // If no filters are active, return all lightCones
      if (
        !isNameActive &&
        !isEffectActive &&
        !isPathActive &&
        !isRarityActive
      ) {
        return true;
      }

      // Return true only if all active filters pass
      return (
        (isNameActive ? matches(c.name, criteria.name) : true) &&
        (isEffectActive ? matches(c.effect, criteria.effect) : true) &&
        (isPathActive ? matches(c.path?.name, criteria.path) : true) &&
        (isRarityActive ? c.rarity?.value === criteria.rarity : true)
      );
    });

    return paginate(filtered, page, size);
  },
};
