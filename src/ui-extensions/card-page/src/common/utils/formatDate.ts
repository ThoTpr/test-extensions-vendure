/**
 * Format a date
 * @param value The date to format
 * @param formatOption String containing the format options (DMY, HMS, Y, M, D, H, m, s)
 * @returns The formatted date
 */
export const formatDate = (
  value: Date | undefined | null,
  formatOption: string = "DMY"
): string => {
  if (!value) return "N/A";

  const options: Intl.DateTimeFormatOptions = {
    second: formatOption.includes("s") ? "2-digit" : undefined,
    minute: formatOption.includes("m") ? "2-digit" : undefined,
    hour: formatOption.includes("H") ? "2-digit" : undefined,
    day: formatOption.includes("D") ? "2-digit" : undefined,
    month: formatOption.includes("M") ? "2-digit" : undefined,
    year: formatOption.includes("Y") ? "numeric" : undefined,
  };

  const result = value.toLocaleDateString("fr-FR", options);

  return result;
};
