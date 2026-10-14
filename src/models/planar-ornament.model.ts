import { PlanarOrnamentImages } from './planar-ornament-image.model';

/**
 * Represents a planar ornament in the game.
 */
export interface PlanarOrnament {
  /** The unique numerical identifier for the planar ornament. */
  id: number;

  /** The name of the planar ornament. */
  name: string;

  /** The type of set to which the planar ornament belongs. */
  set: '2-Piece-Set';

  /** The effect granted by equipping two pieces of this set. */
  two_set_effect: string;
  
  /** The icons associated with the planar ornament. */
  icons: PlanarOrnamentImages;
}
