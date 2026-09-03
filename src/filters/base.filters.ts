import { PaginatedResult } from '../types/pagination.types';
import {
    isValidId,
    sanitizeSearchString,
} from './filter.utils';
import { paginate } from './pagination.utils';

export interface FilterableEntity {
    id: number;
    name: string;
}

export const createBaseFilters = <T extends FilterableEntity>(
    list: readonly T[],
) => {
    const map = new Map<number, T>(
        list.map((item) => [item.id, item]),
    );

    return {
        all: (
            page: number = 1,
            size: number = 999,
        ): PaginatedResult<T> =>
            paginate(list, page, size),

        byId: (id: number): T | null => {
            if (!isValidId(id)) return null;
            return map.get(id) ?? null;
        },

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
    };
};