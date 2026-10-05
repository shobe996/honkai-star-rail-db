import { CavernRelicImages } from './cavern-relic-images.types';

export interface CavernRelic {
  id: number;
  name: string;
  set: '4-Piece-Set';
  two_set_effect: string;
  four_set_effect: string;
  icons: CavernRelicImages;
}
