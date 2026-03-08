/**
 * Paginates an array by returning a specific slice based on the page number and page size.
 * If the requested page is less than 1, it defaults to page 1.
 *
 * @template T - The type of items in the array.
 * @param data - The source array to paginate.
 * @param page - The current page number (1-based index).
 * @param size - The number of items to display per page.
 * @returns A PaginatedResult containing the data slice and metadata.
 */
export const paginate = <T>(data: T[], page: number, size: number): T[] => {
  // Ensure page and size are at least 1 to prevent unexpected slice behavior
  // This defaults invalid inputs (like 0 or negative numbers) to a sane baseline
  const currentPage = Math.max(1, page);
  const pageSize = Math.max(1, size);

  // Calculate the starting index:
  // For page 1, (1-1) * size = 0. For page 2, (2-1) * size = size.
  const startIndex = (currentPage - 1) * pageSize;

  // Return the specific slice for the requested page
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedData,
    total: data.length,
    // hasMore is true if the current page slice does not reach the end of the total data
    hasMore: startIndex + paginatedData.length < data.length,
    page: currentPage,
    size: pageSize,
  };
};
