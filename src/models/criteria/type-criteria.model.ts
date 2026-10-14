/**
 * Represents the criteria used to filter types across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface TypeSearchCriteria {
    /** The name of the type to filter by. */
    name?: string;
  }
  