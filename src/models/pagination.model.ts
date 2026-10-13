/**
 * Represents a paginated slice of data, including metadata for UI state management.
 * * @template T - The type of items contained in the data array.
 */
export interface PaginatedResult<T> {
  /** The subset of data for the current page. */
  data: T[];

  /** The total number of items available across all pages. */
  total: number;

  /** Indicates if there are more items available after the current page. */
  hasMore: boolean;

  /** The current page number (1-based). */
  page: number;

  /** The number of items requested per page. */
  size: number;
}
