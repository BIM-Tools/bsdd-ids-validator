import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { fetchBsddDictionaries, fetchBsddClass, fetchBsddDictionaryClasses } from '../bsdd/bsddService';

vi.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

describe('BSDD Service Tests', () => {
  beforeAll(() => {
  });
  
  afterAll(() => {
  });

  it('fetchBsddDictionaries should fetch dictionaries from the API', async () => {
    const dictionaries = await fetchBsddDictionaries();
    expect(dictionaries).toBeInstanceOf(Array);
    expect(dictionaries.length).toBeGreaterThan(0);
  });

  it('fetchBsddClass should fetch a class from the API', async () => {
    const uri = 'https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/1.1/class/apple';
    const languageCode = 'en-GB';
    const classData = await fetchBsddClass(uri, languageCode);
    expect(classData).toHaveProperty('uri', uri);
    expect(classData).toHaveProperty('code', 'apple');
  });

  it('fetchBsddDictionaryClasses should fetch dictionary classes from the API', async () => {
    const uri = 'https://identifier.buildingsmart.org/uri/bs-agri/fruitvegs/latest';
    const classType = 'Class';
    const languageCode = 'en-GB';

    const dictionaryClasses = await fetchBsddDictionaryClasses(uri,  classType, languageCode);
    expect(dictionaryClasses).toBeInstanceOf(Array);
    expect(dictionaryClasses.length).toBeGreaterThan(0);
  });

  it('fetchBsddDictionaryClasses should use cache for repeated calls with the same parameters', async () => {
    const uri = 'https://identifier.buildingsmart.org/uri/volkerwesselsbvgo/basis_bouwproducten_oene/0.1';
    const classType = 'Class';
    const languageCode = 'en-GB';
  
    const startFirstCall = performance.now();
    const firstCall = await fetchBsddDictionaryClasses(uri, classType, languageCode);
    const endFirstCall = performance.now();
  
    const startSecondCall = performance.now();
    const secondCall = await fetchBsddDictionaryClasses(uri, classType, languageCode);
    const endSecondCall = performance.now();
  
    const firstCallDuration = endFirstCall - startFirstCall;
    const secondCallDuration = endSecondCall - startSecondCall;
  
    expect(firstCall).toBe(secondCall);
    expect(secondCallDuration).toBeLessThan(firstCallDuration);
  });
});

