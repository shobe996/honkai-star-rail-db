/**
 * Represents the criteria used to filter lightCones across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface LightConeSearchCriteria {
  /** The name of the lightCone to filter by. */
  name?: string;

  /** The name of the Path to filter by (e.g., 'Destruction'). */
  path?: string;

  /** The effect text to filter by. */
  effect?: string;

  /** The star rarity value to filter by (e.g., 4 or 5). */
  rarity?: number;
}
