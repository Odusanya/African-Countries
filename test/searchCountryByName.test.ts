import { test, expect } from 'vitest'
import searchCountryByName from '../src/searchCountryByName'
import type { Country } from '../src/utils/getCountriesData';

// Test case: Check if the function returns an array when a valid country name is provided
test('searchCountryByName should return an array when a valid country name is provided', () => {
  const result = searchCountryByName('uganda');
  expect(Array.isArray(result)).toBe(true);
});

// Test case: Check if the function returns a string message when no country matches the search parameters
test('searchCountryByName should return a string message when no country matches the search parameters', () => {
  const result = searchCountryByName('NonExistentCountry');
  expect(result).toBe('No country matches your search parameters.');
});

// Test case: Check if the function returns an array of partial country objects when specific keys are provided
test('searchCountryByName should return an array of partial country objects when specific keys are provided', () => {
  const keys: (keyof Country)[] = ['name', 'population'];
  const result = searchCountryByName('uganda', keys);
  expect(result[0]).toHaveProperty('name');
  expect(result[0]).toHaveProperty('population');
  expect(result[0]).not.toHaveProperty('area');
});

// Test case: Check if the function returns an array of full country objects when no keys are provided
test('searchCountryByName should return an array of full country objects when no keys are provided', () => {
  const result = searchCountryByName('uganda');

  expect(result[0]).toHaveProperty('name');
  expect(result[0]).toHaveProperty('population');
  expect(result[0]).toHaveProperty('area');
  expect(result[0]).toHaveProperty('capitalCity');
  expect(result[0]).toHaveProperty('flagEmoji');
  expect(result[0]).toHaveProperty('currency');
  expect(result[0]).toHaveProperty('officialLanguage');
  expect(result[0]).toHaveProperty('altSpellings');
  expect(result[0]).toHaveProperty('subRegion');
  expect(result[0]).toHaveProperty('phoneCode');
  expect(result[0]).toHaveProperty('internetUsers');
});