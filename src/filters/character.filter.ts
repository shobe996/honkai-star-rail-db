import { characters } from '../data';
import { Character } from '../types/characters';
import { CharacterSearchCriteria } from '../types/characters/character-criteria.types';
import { PaginatedResult } from '../types/pagination.types';
import {
  isValidId,
  matches,
  sanitizeSearchString,
} from '../utils/filter.utils';
import { paginate } from '../utils/pagination.utils';

const characterList = Object.values(characters);
const characterMap = new Map<number, Character>(
  Object.values(characters).map((c) => [c.id, c]),
);

export const characterFilters = {
  /**
   * Returns all characters in the data set with optional pagination.
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters for the requested page.
   */
  all: (page: number = 1, size: number = 999): PaginatedResult<Character> =>
    paginate(characterList, page, size),

  /**
   * Finds a character by their unique identifier.
   * @param id - The unique numerical ID of the character.
   * @returns The matching character object, or null if not found or ID is invalid.
   */
  byId: (id: number): Character | null => {
    if (!isValidId(id)) return null;
    return characterMap.get(id) ?? null;
  },

  /**
   * Filters characters based on a partial match within their name.
   * @param name - The string to search for within character names.
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters whose names contain the search string.
   */
  byName: (
    name: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<Character> => {
    const search = sanitizeSearchString(name);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };
    const filtered = characterList.filter((c) =>
      c.name.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Filters characters based on a partial match within their description.
   * @param description - The string to search for within character descriptions.
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters whose descriptions contain the search string.
   */
  byDescription: (
    description: string,
    page: number = 1,
    size: number = 10,
  ): PaginatedResult<Character> => {
    const search = sanitizeSearchString(description);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };
    const filtered = characterList.filter((c) =>
      c.desc.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Retrieves characters belonging to a specific Path.
   * @param pathName - The name of the Path (e.g., 'Destruction').
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters following the specified Path.
   */
  byPath: (
    pathName: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<Character> => {
    const search = sanitizeSearchString(pathName);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };
    const filtered = characterList.filter((c) =>
      c.path.name.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Retrieves characters of a specific Combat Type (Element).
   * @param typeName - The name of the Type (e.g., 'Fire').
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters matching the specified Combat Type.
   */
  byType: (
    typeName: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<Character> => {
    const search = sanitizeSearchString(typeName);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };
    const filtered = characterList.filter((c) =>
      c.type.name.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Retrieves characters belonging to a specific Faction.
   * @param factionName - The name of the Faction.
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters belonging to the specified Faction.
   */
  byFaction: (
    factionName: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<Character> => {
    const search = sanitizeSearchString(factionName);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };
    const filtered = characterList.filter((c) =>
      c.faction.name.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },

  /**
   * Filters characters by their star rarity.
   * @param stars - The rarity level (4 or 5).
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters matching the rarity value.
   */
  byRarity: (
    stars: number,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<Character> => {
    if (stars < 4 || stars > 5)
      return { data: [], total: 0, hasMore: false, page, size };
    const filtered = characterList.filter((c) => c.rarity.value === stars);
    return paginate(filtered, page, size);
  },

  /**
   * Performs a broad search across multiple fields.
   * @param query - The search term to match against multiple character fields.
   * @param page - The current page number (starts at 1).
   * @param size - The number of characters to return per page (defaults to 999).
   * @returns An array of characters matching the query.
   */
  searchCharacters: (
    query: string,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<Character> => {
    const search = sanitizeSearchString(query);
    if (!search) return { data: [], total: 0, hasMore: false, page, size };

    const filtered = characterList.filter(
      (c) =>
        c.name.toLowerCase().includes(search) ||
        c.desc.toLowerCase().includes(search) ||
        c.faction.name.toLowerCase().includes(search) ||
        c.path.name.toLowerCase().includes(search) ||
        c.type.name.toLowerCase().includes(search),
    );
    return paginate(filtered, page, size);
  },
  /**
   * Filters characters based on multiple criteria.
   * Performs an OR operation across fields (matches if any provided criteria match).
   * @param criteria - Object containing search parameters.
   * @param page - Current page number.
   * @param size - Items per page.
   * @returns Array of characters matching at least one criterion.
   */
  byAttributes: (
    criteria: CharacterSearchCriteria,
    page: number = 1,
    size: number = 999,
  ): PaginatedResult<Character> => {
    const filtered = characterList.filter((c) => {
      // Check if any filter is actually active
      const isNameActive = criteria.name?.trim();
      const isDescActive = criteria.description?.trim();
      const isPathActive = criteria.path?.trim();
      const isTypeActive = criteria.type?.trim();
      const isFactionActive = criteria.faction?.trim();
      const isRarityActive =
        criteria.rarity !== undefined &&
        criteria.rarity !== null &&
        !isNaN(criteria.rarity);

      // If no filters are active, return all characters
      if (
        !isNameActive &&
        !isDescActive &&
        !isPathActive &&
        !isTypeActive &&
        !isFactionActive &&
        !isRarityActive
      ) {
        return true;
      }

      // Return true only if all active filters pass
      return (
        (isNameActive ? matches(c.name, criteria.name) : true) &&
        (isDescActive ? matches(c.desc, criteria.description) : true) &&
        (isPathActive ? matches(c.path?.name, criteria.path) : true) &&
        (isTypeActive ? matches(c.type?.name, criteria.type) : true) &&
        (isFactionActive ? matches(c.faction?.name, criteria.faction) : true) &&
        (isRarityActive ? c.rarity?.value === criteria.rarity : true)
      );
    });

    return paginate(filtered, page, size);
  },
};
