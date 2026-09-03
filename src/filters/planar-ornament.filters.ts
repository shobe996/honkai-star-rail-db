import { planarOrnaments } from '../data';
import { PlanarOrnament } from '../types';
import { PaginatedResult } from '../types/pagination.types';
import {
    isValidId,
    matches,
    sanitizeSearchString,
    toDateKey,
    toTimestamp,
} from '../utils/filter.utils';
import { paginate } from '../utils/pagination.utils';

const planarOrnamentList = Object.values(planarOrnaments);
const planarOrnamentMap = new Map<number, PlanarOrnament>(
    Object.values(planarOrnaments).map((c) => [c.id, c]),
);

export const planarOrnamentFilters = {
    /**
       * Returns all planar ornaments in the data set with optional pagination.
       * @param page - The current page number (starts at 1).
       * @param size - The number of planar ornaments to return per page (defaults to 999).
       * @returns An array of planar ornaments for the requested page.
       */
    all: (page: number = 1, size: number = 999): PaginatedResult<PlanarOrnament> =>
        paginate(planarOrnamentList, page, size),

    /**
       * Finds a planar ornaments by their unique identifier.
       * @param id - The unique numerical ID of the planar ornaments.
       * @returns The matching planar ornaments object, or null if not found or ID is invalid.
       */
    byId: (id: number): PlanarOrnament | null => {
        if (!isValidId(id)) return null;
        return planarOrnamentMap.get(id) ?? null;
    },

    /**
       * Filters planar ornaments based on a partial match within their name.
       * @param name - The string to search for within planar ornaments names.
       * @param page - The current page number (starts at 1).
       * @param size - The number of planar ornaments to return per page (defaults to 999).
       * @returns An array of planar ornaments whose names contain the search string.
       */
    byName: (
        name: string,
        page: number = 1,
        size: number = 999,
    ): PaginatedResult<PlanarOrnament> => {
        const search = sanitizeSearchString(name);
        if (!search) return { data: [], total: 0, hasMore: false, page, size };
        const filtered = planarOrnamentList.filter((c) =>
            c.name.toLowerCase().includes(search),
        );
        return paginate(filtered, page, size);
    },

    /**
      * Filters planar ornaments based on a partial match within their name.
      * @param name - The string to search for within planar ornaments names.
      * @param page - The current page number (starts at 1).
      * @param size - The number of planar ornaments to return per page (defaults to 999).
      * @returns An array of planar ornaments whose names contain the search string.
      */
    byEffect: (
        effect: string,
        page: number = 1,
        size: number = 999
    ): PaginatedResult<PlanarOrnament> => {
        const search = sanitizeSearchString(effect);
        if (!search) return { data: [], total: 0, hasMore: false, page, size };
        const filtered = planarOrnamentList.filter((c) =>
            c.two_set_effect.toLowerCase().includes(search),
        );
        return paginate(filtered, page, size);
    }
}