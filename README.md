# African Countries ![NPM](https://img.shields.io/npm/l/@odusanya/african-countries.svg?style=popout) ![GitHub package.json version](https://img.shields.io/github/package-json/v/odusanya/African-countries.svg)

A lightweight JSON repository of all the 54 WHO recognised countries in Africa. 

Each country object also returns the following:
- Country Code
- Country Name
- Calling Code
- Official Language
- Capital
- Currency
- Country Flag
- Internet users
- Population

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Installation

1. Via npm: `npm install @odusanya/african-countries`

2. Via yarn: `yarn add @odusanya/african-countries`

## Usage

``` js
// ES6
import countries from '@odusanya/african-countries';

// ES5
var countries = require('@odusanya/african-countries');
```

### More Info

A sample country object looks like this

```json
  {
    'Code': 'ML',
    'Country Name': 'Mali',
    'Calling Code': 223,
    'Official Language': 'French',
    'Capital': 'Bamako',
    'Currency': 'West African CFA franc',
    'Country Flag': '🇲🇱',
    'Internet users': 249800,
    'Population': 16455903
  }
```

### Common Use cases

`const { listCountries, getCountryFromCode } = countries;`

1. Get country info using country code

``` js
console.log(getCountryFromCode('ml')); 

// Output
{
  'Code': 'ML',
  'Country Name': 'Mali',
  'Calling Code': 223,
  'Official Language': 'French',
  'Capital': 'Bamako',
  'Currency': 'West African CFA franc',
  'Country Flag': '🇲🇱',
  'Internet users': 249800,
  'Population': 16455903
}
```


2. Get an array of all the countries in Africa

```js
const countriesData = listCountries();
console.log(countriesData.length); // 54 
console.log(countriesData); 
// Output
[
  ...
    {
    Code: 'GM',
    'Country Name': 'Gambia',
    'Calling Code': 220,
    'Official Language': 'English',
    Capital: 'Banjul',
    Currency: 'Dalasi',
    'Country Flag': '🇬🇲',
    'Internet users': null,
    Population: 1857181
  },
  {
    Code: 'GN',
    'Country Name': 'Guinea',
    'Calling Code': 224,
    'Official Language': 'French',
    Capital: 'Conakry',
    Currency: 'Guinean franc',
    'Country Flag': '🇬🇳',
    'Internet users': 95000,
    Population: 11474383
  },
  {
    Code: 'GW',
    'Country Name': 'Guinea-Bissau',
    'Calling Code': 245,
    'Official Language': 'Portuguese',
    Capital: 'Bissau',
    Currency: 'West African CFA franc',
    'Country Flag': '🇬🇼',
    'Internet users': 37100,
    Population: 1693398
  }
  ...
]
```

## License

MIT

## Source
 - [ISO (International Organization for Standardization)](https://www.iso.org/iso-3166-country-codes.html)
>ISO makes the list of alpha-2 country codes available for internal use and non-commercial purposes free of charge.

### Contribution

Feel free to send a PR to fix, update or add new entry anytime.
