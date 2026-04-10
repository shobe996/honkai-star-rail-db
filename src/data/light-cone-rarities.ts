import { Rarity } from '../types';

export const rarities = {
  Three_Star: {
    id: 1719,
    name: '3-Star',
    value: 3,
    icon: '✦'.repeat(3),
  },
  Four_Star: {
    id: 1725,
    name: '4-Star',
    value: 4,
    icon: '✦'.repeat(4),
  },
  Five_Star: {
    id: 1738,
    name: '5-Star',
    value: 5,
    icon: '✦'.repeat(5),
  },
} as const satisfies Record<string, Rarity>;
