/**
 * Represents the criteria used to filter characters across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface CharacterSearchCriteria {
  /** The name of the character to filter by. */
  name?: string;

  /** The description text to filter by. */
  description?: string;

  /** The name of the Path to filter by (e.g., 'Destruction'). */
  path?: string;

  /** The name of the Combat Type/Element to filter by (e.g., 'Fire'). */
  type?: string;

  /** The name of the Faction to filter by (e.g., 'Astral Express'). */
  faction?: string;

  /** The star rarity value to filter by (e.g., 4 or 5). */
  rarity?: number;
}
