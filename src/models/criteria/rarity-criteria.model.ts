import { BaseCriteria } from './base.criteria';

/**
 * Represents the criteria used to filter rarities across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface RaritySearchCriteria extends BaseCriteria {
  
    /** The value of the rarity to filter by. */
    value?: number;
  }
  