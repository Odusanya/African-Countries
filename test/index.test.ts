import { test, expect } from 'vitest'
import { getAllCountries, getCountryByCode, searchCountryByName } from '../src/index'

test('getAllCountries function exists', () => {
  expect(typeof getAllCountries).toBe('function')
})

test('getCountryByCode function exists', () => {
  expect(typeof getCountryByCode).toBe('function')
})

test('searchCountryByName function exists', () => {
  expect(typeof searchCountryByName).toBe('function')
})

