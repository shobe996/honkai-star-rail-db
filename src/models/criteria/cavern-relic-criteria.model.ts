import { BaseCriteria } from './base.criteria';

/**
 * Represents the criteria used to filter characters across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface CavernRelicSearchCriteria extends BaseCriteria {

  /** The effect of the cavern relic to filter by. */
  effect?: string;
}
