import { types } from '../data';

/** Derived literal type of all available Type keys. */
export type TypeName = keyof typeof types;

/**
 * Represents the elemental combat affinity of a character (e.g., Fire, Ice, Quantum).
 * The Type determines which elemental weaknesses the character can exploit
 * to trigger a Weakness Break on enemies.
 */
export interface Type {
  /** Unique internal identifier for the combat type. */
  readonly id: number;
  /** The display name of the element (e.g., 'Lightning'). */
  readonly name: string;
  /** URL to the official elemental icon asset. */
  readonly icon_url: string;
}
