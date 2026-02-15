import { paths } from '../data';
import { Path } from '../types';
import { isValidId, sanitizeSearchString } from '../utils/filter.utils';

const pathList = Object.values(paths);

export const pathFilters = {
  all: (): Path[] => pathList,
  byId: (id: number): Path | null => {
    if (!isValidId(id)) return null;
    return pathList.find((p) => p.id === id) ?? null;
  },
  byName: (name: string): Path | null => {
    const search = sanitizeSearchString(name);
    if (!search) return null;
    return (
      pathList.find((p) => {
        const normalizedDataName = p.name.trim().toLowerCase();
        return normalizedDataName === search;
      }) ?? null
    );
  },
};
