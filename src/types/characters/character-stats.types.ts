import { Stats } from '../stats.types';

/**
 * The base numerical attributes of a character, excluding bonuses from equipment or buffs.
 * This structure is used for snapshots at specific level milestones (Level 1 and Level 80).
 */
export interface CharacterStats extends Stats {
  /** * The base Speed value of the character.
   * Determines the frequency of the character's turns and their initial position in the Action Bar.
   */
  readonly base_speed: number;
}
