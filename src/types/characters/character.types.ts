import { Faction } from '../faction.types';
import { Path } from '../path.types';
import { Rarity } from '../rarity.types';
import { Type } from '../type.types';
import { CharacterLevelStats } from './character-level-stats.types';

/**
 * The core data model for a playable unit.
 * Combines biographical information, combat metadata (Path/Type), and numerical scaling data.
 */
export interface Character {
  /** The unique numerical identifier for the character. */
  readonly id: number;

  /** The official localized name of the character (e.g., 'March 7th'). */
  readonly name: string;

  /** URL to the character's square portrait or avatar asset. */
  readonly icon_url: string;

  /** A brief lore description or flavor text for the character. */
  readonly desc: string;

  /** The gameplay role (e.g., Destruction, Preservation). */
  readonly path: Path;

  /** The group or world the character belongs to (e.g., 'Astral Express'). */
  readonly faction: Faction;

  /** The character's star-grade (4-star or 5-star). */
  readonly rarity: Rarity;

  /** The character's elemental damage type (e.g., Fire, Quantum). */
  readonly type: Type;

  /** The base numerical attributes at Level 1 and Level 80.
   * Note: These exclude bonuses from Light Cones, Relics, and Traces.
   */
  readonly stats: CharacterLevelStats;
}
