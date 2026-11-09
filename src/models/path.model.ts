import { Base } from "./base.model";

/**
 * Defines a character's gameplay role.
 * The Path determines which Light Cones a character can equip and their general combat niche.
 */
export interface Path extends Base {

  /** URL to the high-resolution icon representing the Path's symbol.
   */
  readonly icon_url: string;
}
