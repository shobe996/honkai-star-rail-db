export const sanitizeSearchString = (input: unknown, maxLength = 100): string | null => {
  if (typeof input !== 'string') {
    return null;
  }

  if (input.length > maxLength) {
    return null;
  }

  const clean = input.trim().toLowerCase();

  if (clean.length === 0) {
    return null;
  }

  return clean;
};

export const isValidId = (id: unknown): id is number => {
  return typeof id === 'number' && Number.isSafeInteger(id) && id > 0;
};