import { paths } from '../data';

/** Derived literal type of all available Path keys. */
export type PathName = keyof typeof paths;

/**
 * Defines a character's gameplay role.
 * The Path determines which Light Cones a character can equip and their general combat niche.
 */
export interface Path {
  /** Unique internal identifier for the Path. */
  readonly id: number;

  /** The display name of the Path (e.g., 'Destruction', 'The Hunt').
   * This is used for UI labels and filtering.
   */
  readonly name: string;

  /** URL to the high-resolution icon representing the Path's symbol.
   */
  readonly icon_url: string;
}
