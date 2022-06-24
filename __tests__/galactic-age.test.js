import { AgeCalculator } from './../src/galactic-age.js'

describe('AgeCalculator', () => {

  test('should correctly create an AgeCalculator object with one integer for age', () => {
    const newAge = new AgeCalculator(31, 31, 31, 31);
    expect(newAge.mercuryAge).toEqual(31);
  });

  test('it should correctly create an AgeCalculator object that returns current age in mercuryYears', () => {
    const mercuryYears = new AgeCalculator(31, 31, 31, 31);
    expect(mercuryYears.planetAge()).toEqual(129)
  });

  test('it should correctly create an AgeCalculator object that returns current age in venusYears', () => {
    const venusYears = new AgeCalculator(31, 31, 31, 31);
    expect(venusYears.planetAge()).toEqual(50);
  });
});