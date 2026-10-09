import { characters } from '../data';
import { Character } from '../types/characters';
import { CharacterSearchCriteria } from '../types/characters/character-criteria.types';
import { PaginatedResult } from '../types/pagination.types';
import { matches } from '../utils/filter.utils';
import type { AttributeCheck, SortOptions } from './base.filters';
import { createBaseFilters } from './base.filters';

// Character values
const characterList = Object.values(characters);

// Base filters for characters.
const baseFilters = createBaseFilters<Character>(characterList);

// Attribute checks for characters.
const characterAttributesChecks: AttributeCheck<
  Character,
  CharacterSearchCriteria
>[] = [
  {
    isActive: (c) => !!c.name?.trim(),
    test: (item, c) => matches(item.name, c.name),
  },
  {
    isActive: (c) => !!c.description?.trim(),
    test: (item, c) => matches(item.desc, c.description),
  },
  {
    isActive: (c) => !!c.path?.trim(),
    test: (item, c) => matches(item.path?.name, c.path),
  },
  {
    isActive: (c) => !!c.type?.trim(),
    test: (item, c) => matches(item.type?.name, c.type),
  },
  {
    isActive: (c) => !!c.faction?.trim(),
    test: (item, c) => matches(item.faction?.name, c.faction),
  },
  {
    isActive: (c) =>
      c.rarity !== undefined && c.rarity !== null && !isNaN(c.rarity),
    test: (item, c) => item.rarity?.value === c.rarity,
  },
  {
    isActive: (c) => !!c.releaseDate,
    test: (item, c) => item.release_date.getTime() === c.releaseDate?.getTime(),
  },
  {
    isActive: (c) => !!c.dateRange && c.dateRange.length === 2,
    test: (item, c) => {
      const [start, end] = c.dateRange ?? [];
      if (!start || !end) return false;
      const charTime = item.release_date.getTime();
      return charTime >= start.getTime() && charTime <= end.getTime();
    },
  },
];

/**
 * Filters for characters based on various criteria.
 */
export const characterFilters = {
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
    criteria: CharacterSearchCriteria,
    page: number = 1,
    size: number = 999,
    sort?: SortOptions<Character>,
  ): PaginatedResult<Character> =>
    baseFilters.byAttributes(
      criteria,
      characterAttributesChecks,
      page,
      size,
      sort,
    ),
};
