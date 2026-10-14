import { characterRarities } from '../data/character-rarities';
import { lightConeRarities } from '../data/light-cone-rarities';
import { Rarity } from '../models';
import { RaritySearchCriteria } from '../models/criteria/rarity-criteria.model';
import { PaginatedResult } from '../models/pagination.model';
import { SortOptions } from '../models/sort-options.model';
import { matches } from '../utils/filter.utils';
import { AttributeCheck, createBaseFilters } from './base.filters';

// Factory function to create filters for rarities.
const createRarityFilters = (data: Record<string, Rarity>) => {
  // Rarity values
  const list = Object.values(data);

  // Attribute checks for characters.
  const rarityAttributesChecks: AttributeCheck<Rarity, RaritySearchCriteria>[] =
    [
      {
        isActive: (c) => !!c.name?.trim(),
        test: (item, c) => matches(item.name, c.name),
      },
      {
        isActive: (c) => !!c.value,
        test: (item, c) => matches(item.value, c.value),
      },
    ];

  // Base filters for characters.
  const baseFilters = createBaseFilters<Rarity>(list);

  return {
    //Base filters for characters.
    ...baseFilters,

    /**
     * Filters characters based on multiple criteria.
     * Performs an OR operation across fields (matches if any provided criteria match).
     * @param criteria - Object containing search parameters.
     * @param page - Current page number.
     * @param size - Items per page.
     * @param sort - Sorting options for the results.
     * @returns Array of characters matching at least one criterion.
     */
    byAttributes: (
      criteria: RaritySearchCriteria,
      page: number = 1,
      size: number = 999,
      sort?: SortOptions<Rarity>,
    ): PaginatedResult<Rarity> =>
      baseFilters.byAttributes(
        criteria,
        rarityAttributesChecks,
        page,
        size,
        sort,
      ),
  };
};

/**
 * Filters for character rarities and light cone rarities.
 */
export const characterRarityFilters = createRarityFilters(characterRarities);
export const lightConeRarityFilters = createRarityFilters(lightConeRarities);
