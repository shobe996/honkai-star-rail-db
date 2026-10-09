import { cavernRelics } from '../data';
import { CavernRelic } from '../types';
import { CavernRelicSearchCriteria } from '../types/cavern-relics/cavern-relic-criteria.types';
import { PaginatedResult } from '../types/pagination.types';
import { matches } from '../utils/filter.utils';
import { AttributeCheck, createBaseFilters, SortOptions } from './base.filters';

// Cavern relic values
const cavernRelicList = Object.values(cavernRelics);

// Base filters for cavern relics
const baseFilters = createBaseFilters<CavernRelic>(cavernRelicList);

// Attribute checks for cavern relics.
const cavernRelicAttributesChecks: AttributeCheck<
  CavernRelic,
  CavernRelicSearchCriteria
>[] = [
  {
    isActive: (criteria) => !!criteria.name?.trim(),
    test: (item, criteria) => matches(item.name, criteria.name),
  },
  {
    isActive: (criteria) => !!criteria.effect?.trim(),
    test: (item, criteria) =>
      matches(item.two_set_effect, criteria.effect) ||
      matches(item.four_set_effect, criteria.effect),
  },
];

/**
 * Filters for cavern relics based on various criteria.
 */
export const cavernRelicFilters = {
  /**
   * Base filters for cavern relics.
   */
  ...baseFilters,

  /**
   * Filters cavern relics based on multiple criteria.
   * @param criteria - Object containing search parameters.
   * @param page - Current page number.
   * @param size - Items per page.
   * @param sort - Sorting options for the results.
   * @returns Array of cavern relics matching at least one criterion.
   */
  byAttributes: (
    criteria: CavernRelicSearchCriteria,
    page: number = 1,
    size: number = 999,
    sort?: SortOptions<CavernRelic>,
  ): PaginatedResult<CavernRelic> =>
    baseFilters.byAttributes(
      criteria,
      cavernRelicAttributesChecks,
      page,
      size,
      sort,
    ),
};
