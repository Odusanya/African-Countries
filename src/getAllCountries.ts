import { countries } from './utils/getCountriesData';
import type { Country } from './utils/getCountriesData';

type CountryKeys = (keyof Country)[];

const getAllCountries = (params?: CountryKeys): Country[] => {

  if (params && params.length > 0) {
    return countries.map(country => {
      const newCountry: Partial<Country> = {};
      params.forEach((param) => {
        if (param in country) {
          newCountry[param] = country[param] as any; // vist this later
        }
      });
      return newCountry as Country;
    });
  }

  return Object.values(countries);
}

export default getAllCountries;
