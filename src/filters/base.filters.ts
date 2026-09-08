import { PaginatedResult } from '../types/pagination.types';
import {
    isValidId,
    sanitizeSearchString,
} from '../utils/filter.utils';
import { paginate } from '../utils/pagination.utils';

export interface FilterableEntity {
    id: number;
    name: string;
}

export const createBaseFilters = <T extends FilterableEntity>(
    list: T[],
) => {
    const map = new Map<number, T>(
        list.map((item) => [item.id, item]),
    );

    const emptyResult = (
        page: number,
        size: number,
    ): PaginatedResult<T> => ({
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
        all: (
            page: number = 1,
            size: number = 999,
        ): PaginatedResult<T> =>
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
       * Filters entities based on a partial match within their name.
       * @param searchValue - The string value to search for within entity names.
       * @param matcher - function for filtering the list of entities.
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

            const filtered = list.filter((item) =>
                matcher(item, search),
            );

            return paginate(filtered, page, size);
        },
    };
};