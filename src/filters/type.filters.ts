import { types } from '../data';
import { Type } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const typeList = Object.values(types);

export const typeFilters = {
  all: (): Type[] => typeList,
  byId: (id: number): Type | null => {
    if (!isValidId(id)) return null;
    return typeList.find((t) => t.id === id) ?? null;
  },
  byName: (name: string): Type | null => {
    const search = sanitizeSearchString(name);
    if (!search) return null;
    return (
      typeList.find((t) => {
        const normalizedDataName = t.name.trim().toLowerCase();
        return normalizedDataName === search;
      }) ?? null
    );
  },
};
