import rawCountriesData from './../../data/countries.json?raw';

export interface Country {
  capitalCity: string;
  flagEmoji: string;
  name: string;
  currency: string;
  officialLanguage: string;
  altSpellings: string;
  subRegion: string;
  area: string;
  phoneCode: number;
  internetUsers: number;
  population: number;
}

export type CountryCode = keyof typeof countries;

const countries: Country[] = JSON.parse(rawCountriesData);

export {
  countries
}