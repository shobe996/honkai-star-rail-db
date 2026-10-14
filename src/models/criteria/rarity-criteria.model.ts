/**
 * Represents the criteria used to filter rarities across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface RaritySearchCriteria {
    /** The name of the rarity to filter by. */
    name?: string;
  
    /** The value of the rarity to filter by. */
    value?: number;
  }
  