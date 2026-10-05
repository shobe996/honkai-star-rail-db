import { lightCones } from '../data/light-cones';
import { LightCone } from '../types/light-cone.types';
import { LightConeSearchCriteria } from '../types/light-cones/light-cone-criteria.types';
import { PaginatedResult } from '../types/pagination.types';
import {
  matches,
} from '../utils/filter.utils';
import { AttributeCheck, createBaseFilters } from './base.filters';

/**
 * Light cone values
 */
const lightConeList = Object.values(lightCones);

/**
 * Base filters for light cones.
 */
const baseFilters = createBaseFilters<LightCone>(lightConeList);

/**
 * Attribute checks for light cones.
 */
const lightConeAttributesChecks: AttributeCheck<
  LightCone,
  LightConeSearchCriteria
>[] = [
  {
    isActive: (criteria) => !!criteria.name?.trim(),
    test: (item, criteria) => matches(item.name, criteria.name),
  },
  {
    isActive: (criteria) => !!criteria.path?.trim(),
    test: (item, criteria) => matches(item.path.name, criteria.path),
  },
  {
    isActive: (criteria) => !!criteria.effect?.trim(),
    test: (item, criteria) => matches(item.effect, criteria.effect),
  },
  {
    isActive: (criteria) => !!criteria.rarity,
    test: (item, criteria) =>
      matches(item.rarity.value, criteria.rarity),
  },
];

/**
 * Filters for light cones based on various criteria.
 */
export const lightConeFilters = {
  /**
   * Base filters for light cones.
   */
  ...baseFilters,

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
  ): PaginatedResult<LightCone> =>
    baseFilters.byAttributes(criteria, lightConeAttributesChecks, page, size),
};
