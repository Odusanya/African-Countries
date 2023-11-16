import fs from 'fs';
import path from 'path';

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

const data = fs.readFileSync(path.resolve(process.cwd(), './data/countries.json'), 'utf-8');
const countries: Country[] = JSON.parse(data);


export {
  countries
}