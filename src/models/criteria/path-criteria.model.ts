/**
 * Represents the criteria used to filter paths across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface PathSearchCriteria {
    /** The name of the path to filter by. */
    name?: string;
  }
  