import { countries } from './utils/getCountriesData';
import type { Country } from './utils/getCountriesData';

/**
 * Function to search for a country by name or alternative spellings.
 * @param {string} searchParam - The search parameter.
 * @param {string[]} countryProps - Specific keys of the country object to return, 
 * @returns {Partial<Country>[] | string} - An array of partial country objects or a string message if no country is found.
 */
function searchCountryByName(searchParam: string, countryProps?: string[]): Partial<Country>[] | string {
  // Convert the search parameter to lower case for case insensitive search.
  const lowerCaseSearchParam = searchParam.toLowerCase();

  // Filter the countries by name or alternative spellings.
  let filteredCountries = Object.values(countries).filter(country =>
    country.name?.toLowerCase().includes(lowerCaseSearchParam) ||
    country.altSpellings?.toLowerCase().includes(lowerCaseSearchParam)
  );

  // If no country is found, return a message.
  if (filteredCountries.length === 0) {
    return 'No country matches your search parameters.';
  }

  // If country keys are provided, return only the specified keys.
  if (countryProps) {
    return filteredCountries.map(country => {
      // Reduce the country object to only the specified keys.
      return countryProps?.reduce((acc: Partial<Country>, currentParam: any) => {
        return {
          ...acc,
          [currentParam]: country[currentParam as keyof Country]
        }
      }, { name: country.name })
    });
  }

  // If no country keys are provided, return the full country objects.
  return filteredCountries;
}

export default searchCountryByName;