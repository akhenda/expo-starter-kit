export const requireField = (fieldName: string) => (value: string) => {
  if (String(value).length === 0) return `${fieldName} is required`;

  return true;
};
