/**
 * Represents the criteria used to filter factions across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface FactionSearchCriteria {
    /** The name of the faction to filter by. */
    name?: string;
  }
  