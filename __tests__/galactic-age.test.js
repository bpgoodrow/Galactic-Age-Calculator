import { AgeCalculator } from './../src/galactic-age.js'

describe('AgeCalculator', () => {

  test('should correctly create an AgeCalculator object with one integer for age', () => {
    const newAge = new AgeCalculator(31);
    expect(newAge.currentAge).toEqual(31);
  });

  test('it should correctly create an AgeCalculator object that returns current age in mercuryYears', () => {
    const mercuryYears = new AgeCalculator(31);
    expect(mercuryYears.mercuryAge()).toEqual(129)
  });

  test('it should correctly create an AgeCalculator object that returns current age in venusYears', () => {
    const venusYears = new AgeCalculator(31);
    expect(venusYears.venusAge()).toEqual(50);
  });

  test('it should correctly create an AgeCalculator object that returns current age in marsYears', () => {
    const marsYears = new AgeCalculator(31);
    expect(marsYears.marsAge()).toEqual(16.49)
  });

  test('It should correctly create an AgeCalculator object that returns current age in jupiterYears', () => {
    const jupiterYears = new AgeCalculator(31);
    expect(jupiterYears.jupiterAge()).toEqual(2.61);
  });

  test('It should correctly create an AgeCalculator object that returns life expectacy of currentAge and demographic in mercuryYears', () => {
    const mercuryLifeLeft = new AgeCalculator(31);
    expect(mercuryLifeLeft.lifeExpectancy()).toEqual(198)
  });

});