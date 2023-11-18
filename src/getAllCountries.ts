import { countries } from './utils/getCountriesData';
import type { Country } from './utils/getCountriesData';

type CountryKeys = (keyof Country)[];

/**
 * Function to get all countries with optional specific keys.
 * @param {CountryKeys} countryKeys - An array of specific keys of the country object to return, optional. e.g ['name', 'population', etc]
 * @returns {Country[]} - An array of country objects with specified keys or all country objects.
 */
function getAllCountries(countryKeys?: CountryKeys): Country[] {
  // If specific parameters are provided, return only the specified keys for all countries
  if (countryKeys && countryKeys.length > 0) {
    return countries.map(country => {
      const newCountry: Partial<Country> = {};
      // Iterate through each parameter and add it to the new country object
      countryKeys.forEach((param) => {
        if (param in country) {
          newCountry[param] = country[param] as any; // Preserve the type of the country parameter
        }
      });
      return newCountry as Country; // Return the new country object with specified keys
    });
  }
  // If no specific parameters are provided, return all countries
  return Object.values(countries);
}

export default getAllCountries;
