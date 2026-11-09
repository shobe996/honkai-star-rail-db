import { Base } from '..';
import { PlanarOrnamentImages } from './planar-ornament-image.model';

/**
 * Represents a planar ornament in the game.
 */
export interface PlanarOrnament extends Base {
  /** The type of set to which the planar ornament belongs. */
  set: '2-Piece-Set';

  /** The effect granted by equipping two pieces of this set. */
  two_set_effect: string;

  /** The icons associated with the planar ornament. */
  icons: PlanarOrnamentImages;
}
