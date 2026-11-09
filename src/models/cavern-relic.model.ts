import { Base } from '..';
import { CavernRelicImages } from './cavern-relic-images.model';

/**
 * Represents a cavern relic in the game.
 */
export interface CavernRelic extends Base {
  /** The type of set to which the cavern relic belongs. */
  set: '4-Piece-Set';

  /** The effect granted by equipping two pieces of this set. */
  two_set_effect: string;

  /** The effect granted by equipping four pieces of this set. */
  four_set_effect: string;

  /** The icons associated with the cavern relic. */
  icons: CavernRelicImages;
}
