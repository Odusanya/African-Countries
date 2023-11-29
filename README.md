# African Countries Data ![NPM](https://img.shields.io/npm/l/@odusanya/african-countries.svg?style=popout) ![GitHub package.json version](https://img.shields.io/github/package-json/v/odusanya/African-countries.svg)

This is a lightweight JSON repository of all the 54 WHO recognised countries in Africa.

Each country object contains the following details:
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

You can install this package via npm or yarn:

1. Via npm: 

``` js
npm install @odusanya/african-countries
```

2. Via yarn:
``` js
yarn add @odusanya/african-countries
```

## Usage
You can import the package in your JavaScript file like this:

``` js
// ES6
import countries from '@odusanya/african-countries';

// ES5
var countries = require('@odusanya/african-countries');
```

The package provides the following functions:

- getAllCountries(): Returns an array of all the countries in Africa.
- getCountryByCode(code): Returns the country object for the given country code.
- searchCountryByName(name): Returns an array of countries that match the given name.

A sample country object looks like this

Examples

Here are some examples of how you can use these functions:

1. Get all countries:
``` js
const allCountries = countries.getAllCountries();
console.log(allCountries.length); // 54 
console.log(allCountries); 
```

2. Get country by code:
``` js
const country = countries.getCountryByCode('ml');
console.log(country);
```

3. Search country by name:
``` js
const countries = countries.searchCountryByName('Gambia');
console.log(countries); 
```

### License

This package is licensed under the MIT license.
Source

The country data is sourced from the [ISO (International Organization for Standardization)](https://www.iso.org/iso-3166-country-codes.html).

### Contribution

Contributions are welcome! Feel free to send a PR to fix, update or add new entry anytime.

### Roadmap

Future updates may include visa requirements for each country and automatic project documentation.
