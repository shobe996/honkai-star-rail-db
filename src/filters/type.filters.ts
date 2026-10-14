import { types } from '../data/types';
import { Type } from '../models';
import { TypeSearchCriteria } from '../models/criteria/type-criteria.model';
import { PaginatedResult } from '../models/pagination.model';
import { SortOptions } from '../models/sort-options.model';
import { AttributeCheck, createBaseFilters } from '../utils/base.filters';
import { matches } from '../utils/filter.utils';

// Type values
const typeList = Object.values(types);

// Base filters for types
const baseFilters = createBaseFilters<Type>(typeList);

// Attribute checks for types.
const typeAttributesChecks: AttributeCheck<Type, TypeSearchCriteria>[] = [
  {
    isActive: (criteria) => !!criteria.name?.trim(),
    test: (item, criteria) => matches(item.name, criteria.name),
  },
];

export const typeFilters = {
  /**
   * Base filters for types.
   */
  ...baseFilters,

  /**
   * Filters types based on multiple criteria.
   * @param criteria - Object containing search parameters.
   * @param page - Current page number.
   * @param size - Items per page.
   * @param sort - Sorting options for the results.
   * @returns Array of types matching at least one criterion.
   */
  byAttributes: (
    criteria: TypeSearchCriteria,
    page: number = 1,
    size: number = 999,
    sort?: SortOptions<Type>,
  ): PaginatedResult<Type> =>
    baseFilters.byAttributes(criteria, typeAttributesChecks, page, size, sort),
};
