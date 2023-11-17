import { countries } from './utils/getCountriesData';
import type { Country } from './utils/getCountriesData';

function searchCountryByName(searchParam: string, countryKeys?: string[]): Partial<Country>[] | string {
  let filteredCountries = countries.filter(country => 
    country.name?.toLowerCase().includes(searchParam.toLowerCase()) || 
    country.altSpellings?.toLowerCase().includes(searchParam.toLowerCase())
  );

  if (filteredCountries.length === 0) {
    return 'No country matches your search parameters.';
  }

  // To be visited later
  // if (countryKeys) {
  //   return filteredCountries.map(country => {
  //     let result: Partial<Country> = {};
  //     for (let key of countryKeys) {
  //       let kim: keyof Country = key;
  //       const value = country[key as keyof Country];
  //       result[kim] = typeof value !== 'undefined' && value !== null ? value : undefined;
  //     }
  //     return result;      
  //   });
  // } else {
    return filteredCountries;
  // }
}

export default searchCountryByName;