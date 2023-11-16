import { countries } from './utils/getCountriesData';
import type { Country, CountryCode } from './utils/getCountriesData';

type CountryKeys = keyof Country[];

const getCountryByCode = (countryCode: string, params?: CountryKeys[]): Partial<Country> => {
  const country = countries[countryCode.toUpperCase() as CountryCode] as Partial<Country> | undefined;

  if (!country) {
    throw new Error(`Country not found for code: ${countryCode}`);
  }

  if (!params) {
    return country;
  }

  const result: Partial<Country> = params
    .reduce((acc: Partial<Country>, currentParam: any) => {
      return {
        ...acc,
        [currentParam]: country[currentParam as keyof Country]
      }
  }, { name: country.name })

  return result;
}

export default getCountryByCode;