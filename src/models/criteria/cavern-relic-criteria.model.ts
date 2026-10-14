/**
 * Represents the criteria used to filter characters across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface CavernRelicSearchCriteria {
  /** The name of the cavern relic to filter by. */
  name?: string;

  /** The effect of the cavern relic to filter by. */
  effect?: string;
}
