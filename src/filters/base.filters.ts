import { PaginatedResult } from '../types/pagination.types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';
import { paginate } from '../utils/pagination.utils';

// Represents the possible values that can be used for sorting.
type SortValue = string | number | Date | null | undefined;

/**
 * Options for sorting a list of items.
 */
export interface SortOptions<T> {
  /**
   * Function to extract the value to sort by from an item.
   */
  by: (item: T) => SortValue;

  /**
   * The direction of the sort, either ascending ('asc') or descending ('desc').
   */
  direction?: 'asc' | 'desc';
}

/**
 * Base filters and utilities for filtering entities.
 */
export interface FilterableEntity {
  /**
   * The unique numerical ID of the entity.
   */
  id: number;

  /**
   * The name of the entity.
   */
  name: string;
}

/**
 * Object containing checks for filtering attributes of entities.
 */
export interface AttributeCheck<T, C> {
  /**
   * Determines if the attribute check is active based on the provided criteria.
   */
  isActive: (criteria: C) => boolean;

  /**
   * Tests if the item matches the criteria for this attribute check.
   */
  test: (item: T, criteria: C) => boolean;
}

// Utility function for sorting items based on the provided sort options.
const sortItems = <T>(items: T[], options: SortOptions<T>): T[] => {
  // Determine the sort direction based on the provided options.
  const direction = options.direction === 'desc' ? -1 : 1;

  return [...items].sort((left, right) => {
    // Extract the values to compare from the left and right items.
    const leftValue = options.by(left);
    const rightValue = options.by(right);

    // Handle cases where one or both values are null or undefined.
    if (!leftValue) return rightValue == null ? 0 : 1;
    if (!rightValue) return -1;

    // Convert the values to comparable types (numbers or timestamps for dates).
    const leftComparable =
      leftValue instanceof Date ? leftValue.getTime() : leftValue;
    const rightComparable =
      rightValue instanceof Date ? rightValue.getTime() : rightValue;

    // Compare the values and determine the sort order.
    const comparison =
      typeof leftComparable === 'string' && typeof rightComparable === 'string'
        ? leftComparable.localeCompare(rightComparable)
        : leftComparable < rightComparable
          ? -1
          : leftComparable > rightComparable
            ? 1
            : 0;

    return comparison * direction;
  });
};

// Checks if an entity matches all active attribute checks based on the provided criteria.
const matchesAttributes = <T, C>(
  item: T,
  criteria: C,
  checks: AttributeCheck<T, C>[],
): boolean => {
  const active = checks.filter((check) => check.isActive(criteria));
  return (
    active.length === 0 || active.every((check) => check.test(item, criteria))
  );
};

/**
 * Factory function to create base filters for a list of entities.
 * @param list - The list of entities to create filters for.
 * @returns An object containing various filtering methods for the entities.
 */
export const createBaseFilters = <T extends FilterableEntity>(list: T[]) => {
  const map = new Map<number, T>(list.map((item) => [item.id, item]));

  const emptyResult = (page: number, size: number): PaginatedResult<T> => ({
    data: [],
    total: 0,
    hasMore: false,
    page,
    size,
  });

  return {
    /**
     * Returns all entities in the data set with optional pagination.
     * @param page - The current page number (starts at 1).
     * @param size - The number of entities to return per page (defaults to 999).
     * @returns An array of entities for the requested page.
     */
    all: (page: number = 1, size: number = 999): PaginatedResult<T> =>
      paginate(list, page, size),

    /**
     * Finds a entity by their unique identifier.
     * @param id - The unique numerical ID of the entity.
     * @returns The matching entity object, or null if not found or ID is invalid.
     */
    byId: (id: number): T | null => {
      if (!isValidId(id)) return null;
      return map.get(id) ?? null;
    },

    /**
     * Filters entity based on a partial match within their name.
     * @param name - The string to search for within entity names.
     * @param page - The current page number (starts at 1).
     * @param size - The number of entity to return per page (defaults to 999).
     * @returns An array of entity whose names contain the search string.
     */
    byName: (
      name: string,
      page: number = 1,
      size: number = 999,
    ): PaginatedResult<T> => {
      const search = sanitizeSearchString(name);

      if (!search) {
        return {
          data: [],
          total: 0,
          hasMore: false,
          page,
          size,
        };
      }

      const filtered = list.filter((item) =>
        item.name.toLowerCase().includes(search),
      );

      return paginate(filtered, page, size);
    },

    /**
     * Filters entities based on a custom search function.
     * @param searchValue - The string value to search for within entities.
     * @param matcher - Function for filtering the list of entities.
     * @param page - The current page number (starts at 1).
     * @param size - The number of entity to return per page (defaults to 999).
     * @returns An array of entity whose names contain the search string.
     */
    bySearch: (
      searchValue: string,
      matcher: (item: T, search: string) => boolean,
      page: number = 1,
      size: number = 999,
    ): PaginatedResult<T> => {
      const search = sanitizeSearchString(searchValue);

      if (!search) {
        return emptyResult(page, size);
      }

      const filtered = list.filter((item) => matcher(item, search));

      return paginate(filtered, page, size);
    },

    /**
     * Filters entities based on multiple criteria.
     * @param criteria - Object containing search parameters.
     * @param page - Current page number.
     * @param size - Items per page.
     * @returns Array of entities matching at least one criteria.
     */
    byAttributes: <C>(
      criteria: C,
      checks: AttributeCheck<T, C>[],
      page: number = 1,
      size: number = 999,
      sort?: SortOptions<T>,
    ): PaginatedResult<T> => {
      const filtered = list.filter((item) =>
        matchesAttributes(item, criteria, checks),
      );
      return paginate(sort ? sortItems(filtered, sort) : filtered, page, size);
    },
  };
};
