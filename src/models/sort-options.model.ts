// Represents the possible values that can be used for sorting.
type SortValue = string | number | Date | null | undefined;

/**
 * Options for sorting a list of items.
 */
export interface SortOptions<T> {
  /**
   * Function to extract the value to sort by from an item.
   */
  by: (item: T) => SortValue;

  /**
   * The direction of the sort, either ascending ('asc') or descending ('desc').
   */
  direction?: 'asc' | 'desc';
}
