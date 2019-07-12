# African Countries ![NPM](https://img.shields.io/npm/l/@odusanya/african-countries.svg?style=popout) ![GitHub package.json version](https://img.shields.io/github/package-json/v/odusanya/African-countries.svg)

A lightweight library of all the countries in Africa and their country codes (ISO Alpha-2 and Alpha-3)

## Installation

```bash
npm install @odusanya/african-countries
```

Or you can install via yarn, run this line in your terminal:

```bash
yarn add @odusanya/african-countries
```

## Usage

```javascript
//  for ES6
import countriesInAfrica from '@odusanya/african-countries';

// for ES5
var countriesInAfrica = require('@odusanya/african-countries');
```

### Basic Examples

1. Console log `countriesInAfrica` to print a JSON Object containing all the countries in Africa and their respective country codes (ISO Alpha-2 and Alpha-3), in the format below:

```js
  {
    [countryOneName]: {
      countryCode: {
        'alpha-2': CO,
        'alpha-3': CON
      }
    },
    [countryTwoName]: {
      countryCode: {
        'alpha-2': CT,
        'alpha-3': CTN
      }
    }
  }
```

<br>
2. Create an array of all the countries in Africa.

```js
const countriesArray = [];
for (const countryName in africanCountries) {
	countriesArray.push(countryName);
}
```

<br>
3. Access the country code for specific countries, e.g `Nigeria`

```javascript
console.log(africanCountries['nigeria'].countryCode);
// { alpha-2: 'NG', alpha-3: 'NGA' }
```

### Roadmap

Next steps for this projects includes adding the following to the JSON Object

- Country's Flag
  - Emoji
  - EmojiU
- Capital
- Language(s)
- Dial Code
- Currency

### Contribution

Feel free to send a PR to fix, update or add new entry anytime.
