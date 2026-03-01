/**
 * Normalizes and validates a search input string.
 * Trims whitespace, converts to lowercase, and enforces a maximum length.
 * @param input - The raw input to be sanitized.
 * @param maxLength - The maximum allowed character count (default: 100).
 * @returns The sanitized string, or null if the input is invalid or empty.
 */
export const sanitizeSearchString = (
  input: unknown,
  maxLength = 100,
): string | null => {
  // 1. Type Guard: Ensure we only process strings to prevent runtime crashes
  if (typeof input !== 'string') {
    return null;
  }

  // 2. Security/Performance: Prevent ReDoS or memory issues with massive strings
  if (input.length > maxLength) {
    return null;
  }

  const clean = input.trim().toLowerCase();

  // 3. Validation: If the string was just spaces, it's not a valid search
  if (clean.length === 0) {
    return null;
  }

  return clean;
};

/**
 * Validates if a value is a valid unique identifier.
 * Ensures the value is a positive, safe integer.
 * @param id - The value to check.
 * @returns True if the value is a number, an integer, and greater than zero.
 */
export const isValidId = (id: unknown): id is number => {
  return typeof id === 'number' && Number.isSafeInteger(id) && id > 0;
};
