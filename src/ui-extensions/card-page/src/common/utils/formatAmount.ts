export const formatAmount = (value?: number) => {
  return value !== undefined ? value / 100 + " €" : "N/A";
};
