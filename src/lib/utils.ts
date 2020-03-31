export function getWikipediaMobileUrl(url: string) {
  return url !== undefined ? url.replace("wikipedia", "m.wipedia") : "";
}
export function cheackYear(year: string) {
  const currentYear = new Date().getFullYear();
  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    return String(currentYear);
  }
  return year;
}
export function roundCheack(round: number) {
  if (round >= 100) {
    return 1;
  }
  return round;
}

export function paginationOptions(pageElements: number , page: number){
  const offset = (page - 1) * pageElements;
  const limit = pageElements;
  const filter = `limit=${limit}&offset=${offset}`;
  return filter;
}