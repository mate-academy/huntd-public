const BASE_URL = 'https://secure.geonames.org/searchJSON?q=';
const GEO_USER = 'yasik2255';

function getSearchLink(city: string): string {
  return `${BASE_URL}${city}&maxRows=1&username=${GEO_USER}`;
};

function getCityLink(city: string): string {
  return `https://www.google.com/maps?q=${city}`;
};

export const geoService = {
  getSearchLink,
  getCityLink,
};
