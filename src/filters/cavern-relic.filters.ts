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
import { createBaseFilters } from './base.filters';

const cavernRelicList = Object.values(cavernRelics);
const cavernRelicMap = new Map<number, CavernRelic>(
    Object.values(cavernRelics).map((c) => [c.id, c]),
);

const baseFilters = createBaseFilters<CavernRelic>(cavernRelicList);

export const cavernRelicFilters = {
    ...baseFilters,

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
    ): PaginatedResult<CavernRelic> => baseFilters.bySearch(
        effect,
        (relic, search) =>
            relic.two_set_effect.toLowerCase().includes(search) ||
            relic.four_set_effect.toLowerCase().includes(search),
        page,
        size,
    )
};