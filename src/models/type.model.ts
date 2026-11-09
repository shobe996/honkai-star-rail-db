import { Base } from "./base.model";

/**
 * Represents the elemental combat affinity of a character (e.g., Fire, Ice, Quantum).
 * The Type determines which elemental weaknesses the character can exploit
 * to trigger a Weakness Break on enemies.
 */
export interface Type extends Base {
  
  /** URL to the official elemental icon asset. */
  readonly icon_url: string;
}
