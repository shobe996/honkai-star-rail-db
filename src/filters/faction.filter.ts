import { factions } from '../data/factions';
import { Faction } from '../models';
import { FactionSearchCriteria } from '../models/criteria/faction-criteria.model';
import { PaginatedResult } from '../models/pagination.model';
import { SortOptions } from '../models/sort-options.model';
import { matches } from '../utils/filter.utils';
import { AttributeCheck, createBaseFilters } from './base.filters';

// Faction values
const factionList = Object.values(factions);

// Base filters for factions.
const baseFilters = createBaseFilters<Faction>(factionList);

// Attribute checks for factions.
const factionAttributesChecks: AttributeCheck<
  Faction,
  FactionSearchCriteria
>[] = [
  {
    isActive: (c) => !!c.name?.trim(),
    test: (item, c) => matches(item.name, c.name),
  },
];

/**
 * Filters for factions based on various criteria.
 */
export const factionFilters = {
  //Base filters for factions.
  ...baseFilters,

  /**
   * Filters factions based on multiple criteria.
   * Performs an OR operation across fields (matches if any provided criteria match).
   * @param criteria - Object containing search parameters.
   * @param page - Current page number.
   * @param size - Items per page.
   * @param sort - Sorting options for the results.
   * @returns Array of factions matching at least one criterion.
   */
  byAttributes: (
    criteria: FactionSearchCriteria,
    page: number = 1,
    size: number = 999,
    sort?: SortOptions<Faction>,
  ): PaginatedResult<Faction> =>
    baseFilters.byAttributes(
      criteria,
      factionAttributesChecks,
      page,
      size,
      sort,
    ),
};
