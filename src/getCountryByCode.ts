import { countries } from './utils/getCountriesData';
import type { Country, CountryCode } from './utils/getCountriesData';

/**
 * Function to search for a country by name or alternative spellings.
 * @param {string} countryCode - The IS04 country code, for the country you're looking for, e.g. GH, NG.
 * @param {string[]} countryProps - Specific keys of the country object to return, 
 * @returns {Partial<Country> | string} - An array of partial country objects or a string message if no country is found.
 */

// Define a type for the keys of the Country object
type CountryKeys = keyof Country;

// Function to get a country by its code
function getCountryByCode(countryCode: string, countryProps?: CountryKeys[]): Partial<Country> | string {
  // Convert the country code to uppercase and get the country from the countries object
  const country = countries[countryCode.toUpperCase() as CountryCode] as Partial<Country> | undefined;

  // If the country is not found, return a message
  if (!country) {
    return `Country not found for code: ${countryCode}`;
  }

  // If no parameters are provided, return the whole country object
  if (!countryProps) {
    return country;
  }

  // If parameters are provided, return only the specified keys
  const result: Partial<Country> = countryProps?.reduce((acc: Partial<Country>, currentParam: keyof Country | {}) => {
    const key = currentParam as keyof Country;
      // Add the current parameter to the accumulator object
      return {
        ...acc,
        [key]: country[key]
      }
  }, { name: country.name }) // Start with an object that only contains the country's name

  // Return the result
  return result;
}

export default getCountryByCode;