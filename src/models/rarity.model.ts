import { Base } from "./base.model";

/**
 * Defines the scarcity tier and visual grade of a character.
 * Rarity typically dictates the base stat potential and the maximum level scaling available to the entity.
 */
export interface Rarity extends Base {

  /** The numerical value associated with the tier (e.g., 5). Useful for sorting. */
  readonly value: number;
  
  /** The string representation of the rarity icon (e.g. ✦✦✦✦✦) */
  readonly icon: string;
}
