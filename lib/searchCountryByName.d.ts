import type { Country } from './utils/getCountriesData';
/**
 * Function to search for a country by name or alternative spellings.
 * @param {string} searchParam - The search parameter.
 * @param {string[]} countryProps - Specific keys of the country object to return,
 * @returns {Partial<Country>[] | string} - An array of partial country objects or a string message if no country is found.
 */
declare function searchCountryByName(searchParam: string, countryProps?: string[]): Partial<Country>[] | string;
export default searchCountryByName;
