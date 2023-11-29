import { test, expect } from 'vitest'
import getCountryByCode from '../src/getCountryByCode'
import type { Country } from '../src/utils/getCountriesData';

// Test case when the country code is valid and no properties are specified
test('getCountryByCode - valid country code, no properties', () => {
  const result: Partial<Country> | string = getCountryByCode('NG');
  // Expect the result to be an object and to have a name property equal to 'United States'
  expect(typeof result).toBe('object');
  (typeof result === 'object') && expect(result.name).toBe('Nigeria');

})

// Test case when the country code is valid and properties are specified
test('getCountryByCode - valid country code, with properties', () => {
  const result: Partial<Country> | string = getCountryByCode('NG', ['name', 'population'])
  // Expect the result to be an object and to only have the specified properties
  expect(typeof result).toBe('object');
  expect(result).toHaveProperty('name');
  expect(result).toHaveProperty('population');
  expect(Object.keys(result)).toHaveLength(2);
})

// Test case when the country code is invalid
test('getCountryByCode - invalid country code', () => {
  const result = getCountryByCode('XYZ')
  // Expect the result to be a string message indicating that the country was not found
  expect(typeof result).toBe('string')
  expect(result).toBe('Country not found for code: XYZ')
})
