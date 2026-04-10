import { Path } from '../path.types';
import { Rarity } from '../rarity.types';
import { LightConeLevelStats } from './light-cone-level-stats.types';

/**
 * The core data model for a light cone.
 * Combines combat metadata (Path), and numerical scaling data.
 */
export interface LightCone {
  /** The unique numerical identifier for the light cone. */
  readonly id: number;

  /** The official localized name of the light cone (e.g., 'Arrows'). */
  readonly name: string;

  /** URL to the light cone's icon asset. */
  readonly icon_url: string;

  /** A brief effect description for the light cone. */
  readonly effect: string;

  /** The gameplay role (e.g., Destruction, Preservation). */
  readonly path: Path;

  /** The light cone's star-grade (3-star, 4-star or 5-star). */
  readonly rarity: Rarity;

  /** The base numerical attributes at Level 1 and Level 80.
   * Note: These exclude bonuses from Light Cones, Relics, and Traces.
   */
  readonly stats: LightConeLevelStats;
}
