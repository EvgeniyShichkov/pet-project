export const commonUrl = (sectionNumber: number, id?: number): string => {
  let baseUrl;
  if (id) {
    baseUrl = `section:${sectionNumber}/id:${id}`;
  } else {
    baseUrl = `section:${sectionNumber}`;
  }
  return baseUrl;
};
