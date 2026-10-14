import { paths } from '../data/paths';
import { Path } from '../models';
import { PathSearchCriteria } from '../models/criteria/path-criteria.model';
import { PaginatedResult } from '../models/pagination.model';
import { SortOptions } from '../models/sort-options.model';
import { matches } from '../utils/filter.utils';
import { AttributeCheck, createBaseFilters } from './base.filters';

// Path values
const pathList = Object.values(paths);

// Base filters for paths.
const baseFilters = createBaseFilters<Path>(pathList);

// Attribute checks for paths.
const pathAttributesChecks: AttributeCheck<Path, PathSearchCriteria>[] = [
  {
    isActive: (c) => !!c.name?.trim(),
    test: (item, c) => matches(item.name, c.name),
  },
];

/**
 * Filters for paths based on various criteria.
 */
export const pathFilters = {
  //Base filters for paths.
  ...baseFilters,

  /**
   * Filters paths based on multiple criteria.
   * Performs an OR operation across fields (matches if any provided criteria match).
   * @param criteria - Object containing search parameters.
   * @param page - Current page number.
   * @param size - Items per page.
   * @param sort - Sorting options for the results.
   * @returns Array of paths matching at least one criterion.
   */
  byAttributes: (
    criteria: PathSearchCriteria,
    page: number = 1,
    size: number = 999,
    sort?: SortOptions<Path>,
  ): PaginatedResult<Path> =>
    baseFilters.byAttributes(criteria, pathAttributesChecks, page, size, sort),
};
