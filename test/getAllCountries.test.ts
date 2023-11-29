import { test, expect } from 'vitest'
import getAllCountries from '../src/getAllCountries'
import type { Country } from '../src/utils/getCountriesData';

// Define a test suite for the getAllCountries function
test('getAllCountries should return an array', () => {
  const result = getAllCountries();
  expect(Array.isArray(result)).toBe(true);
});

// Test case: Check if the function returns an array of countries
test('getAllCountries should return an array of countries', () => {
  const result = getAllCountries();
  expect(result[0]).toHaveProperty('name');
  expect(result[0]).toHaveProperty('population');
});

// Test case: Check if the function returns specific keys when provided
test('getAllCountries should return specific keys when provided', () => {
  const keys: (keyof Country)[] = ['name', 'population'];
  const result = getAllCountries(keys);
  expect(result[0]).toHaveProperty('name');
  expect(result[0]).toHaveProperty('population');
  expect(result[0]).not.toHaveProperty('area');
});
