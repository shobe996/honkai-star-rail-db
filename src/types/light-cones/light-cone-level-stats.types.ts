import { Stats } from '../stats.types';

/**
 * A container for a light cone's growth milestones.
 * Includes baseline stats at the start of their journey (Level 1) and at their level cap (Level 80).
 */
export interface LightConeLevelStats {
  /** The light cone's base attributes at Level 1.
   * This is the starting point before any light cone ascensions or leveling.
   */
  readonly level1: Stats;

  /** The light cone's base attributes at the maximum level cap (Level 80).
   * These values include all natural growth from levels and ascensions,
   * but exclude external modifiers like Light Cones or Traces.
   */
  readonly level80: Stats;
}
