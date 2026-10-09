import { planarOrnaments } from '../data';
import { PlanarOrnament } from '../types';
import { PaginatedResult } from '../types/pagination.types';
import { PlanarOrnamentSearchCriteria } from '../types/planar-ornaments/planar-ornament-criteria.types';
import { matches } from '../utils/filter.utils';
import { AttributeCheck, createBaseFilters, SortOptions } from './base.filters';

/**
 * Planar ornaments values
 */
const planarOrnamentList = Object.values(planarOrnaments);

/**
 * Base filters for planar ornaments.
 */
const baseFilters = createBaseFilters<PlanarOrnament>(planarOrnamentList);

/**
 * Attribute checks for planar ornaments.
 */
const planarOrnamentAttributesChecks: AttributeCheck<
  PlanarOrnament,
  PlanarOrnamentSearchCriteria
>[] = [
  {
    isActive: (criteria) => !!criteria.name?.trim(),
    test: (item, criteria) => matches(item.name, criteria.name),
  },
  {
    isActive: (criteria) => !!criteria.effect?.trim(),
    test: (item, criteria) => matches(item.two_set_effect, criteria.effect),
  },
];

export const planarOrnamentFilters = {
  ...baseFilters,

  /**
   * Filters planar ornaments based on multiple criteria.
   * @param criteria - Object containing search parameters.
   * @param page - Current page number.
   * @param size - Items per page.
   * @returns Array of planar ornaments matching at least one criterion.
   */
  byAttributes: (
    criteria: PlanarOrnamentSearchCriteria,
    page: number = 1,
    size: number = 999,
    sort?: SortOptions<PlanarOrnament>,
  ): PaginatedResult<PlanarOrnament> =>
    baseFilters.byAttributes(
      criteria,
      planarOrnamentAttributesChecks,
      page,
      size,
      sort,
    ),
};
