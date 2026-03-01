import { CharacterStats } from './character-stats.types';

/**
 * A container for a character's growth milestones.
 * Includes baseline stats at the start of their journey (Level 1) and at their level cap (Level 80).
 */
export interface CharacterLevelStats {
  /** The character's base attributes at Level 1.
   * This is the starting point before any character ascensions or leveling.
   */
  readonly level1: CharacterStats;

  /** The character's base attributes at the maximum level cap (Level 80).
   * These values include all natural growth from levels and ascensions,
   * but exclude external modifiers like Light Cones or Traces.
   */
  readonly level80: CharacterStats;
}
