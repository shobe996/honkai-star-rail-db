import { factions } from '../data';

/** Derived literal type of all available Faction keys. */
export type FactionName = keyof typeof factions;

/**
 * Represents a group or organization within the game world (e.g., "Astral Express", "Amphoreus").
 * Factions categorize characters and often relate to specific story arcs or regional lore.
 */
export interface Faction {
  /** Unique internal identifier for the faction. */
  readonly id: number;
  /** The display name of the faction (e.g., 'The Cremators').
   * This is typically the localized string shown to players in the UI.
   */
  readonly name: string;
}
