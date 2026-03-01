import { rarities } from '../data';

/** Derived literal type of all available Rarity keys. */
export type RarityName = keyof typeof rarities;

/**
 * Defines the scarcity tier and visual grade of a character.
 * Rarity typically dictates the base stat potential and the maximum level scaling available to the entity.
 */
export interface Rarity {
  /** Unique internal identifier for the rarity tier. */
  readonly id: number;
  /** The string representation of the rarity (e.g., '5-Star'). */
  readonly name: string;
  /** The numerical value associated with the tier (e.g., 5). Useful for sorting. */
  readonly value: number;
  /** The string representation of the rarity icon (e.g. ✦✦✦✦✦) */
  readonly icon: string;
}
