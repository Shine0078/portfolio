export function formatDate(dateString: string): string {
  const [year, month = 1] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));

  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(date);
}
