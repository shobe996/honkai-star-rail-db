import { cavernRelics } from '../data';
import { CavernRelic } from '../types';
import { PaginatedResult } from '../types/pagination.types';
import {
    isValidId,
    matches,
    sanitizeSearchString,
    toDateKey,
    toTimestamp,
} from '../utils/filter.utils';
import { paginate } from '../utils/pagination.utils';

const cavernRelicList = Object.values(cavernRelics);
const cavernRelicMap = new Map<number, CavernRelic>(
    Object.values(cavernRelics).map((c) => [c.id, c]),
);

export const cavernRelicFilters = {
    /**
       * Returns all cavern relics in the data set with optional pagination.
       * @param page - The current page number (starts at 1).
       * @param size - The number of cavern relics to return per page (defaults to 999).
       * @returns An array of cavern relics for the requested page.
       */
    all: (page: number = 1, size: number = 999): PaginatedResult<CavernRelic> =>
        paginate(cavernRelicList, page, size),

    /**
       * Finds a cavern relics by their unique identifier.
       * @param id - The unique numerical ID of the cavern relics.
       * @returns The matching cavern relics object, or null if not found or ID is invalid.
       */
    byId: (id: number): CavernRelic | null => {
        if (!isValidId(id)) return null;
        return cavernRelicMap.get(id) ?? null;
    },

    /**
       * Filters cavern relics based on a partial match within their name.
       * @param name - The string to search for within cavern relics names.
       * @param page - The current page number (starts at 1).
       * @param size - The number of cavern relics to return per page (defaults to 999).
       * @returns An array of cavern relics whose names contain the search string.
       */
    byName: (
        name: string,
        page: number = 1,
        size: number = 999,
    ): PaginatedResult<CavernRelic> => {
        const search = sanitizeSearchString(name);
        if (!search) return { data: [], total: 0, hasMore: false, page, size };
        const filtered = cavernRelicList.filter((c) =>
            c.name.toLowerCase().includes(search),
        );
        return paginate(filtered, page, size);
    },

    /**
      * Filters cavern relics based on a partial match within their name.
      * @param name - The string to search for within cavern relics names.
      * @param page - The current page number (starts at 1).
      * @param size - The number of cavern relics to return per page (defaults to 999).
      * @returns An array of cavern relics whose names contain the search string.
      */
    byEffect: (
        effect: string,
        page: number = 1,
        size: number = 999
    ): PaginatedResult<CavernRelic> => {
        const search = sanitizeSearchString(effect);
        if (!search) return { data: [], total: 0, hasMore: false, page, size };
        const filtered = cavernRelicList.filter((c) =>
            c.two_set_effect.toLowerCase().includes(search) || c.four_set_effect.toLowerCase().includes(search),
        );
        return paginate(filtered, page, size);
    }
};