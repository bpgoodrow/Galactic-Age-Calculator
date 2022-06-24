import { AgeCalculator } from './../src/galactic-age.js'

describe('AgeCalculator', () => {

  test('should correctly create an AgeCalculator object with one integer for age', () => {
    const newAge = new AgeCalculator(31);
    expect(newAge.currentAge).toEqual(31);
  });

  test('it should correctly create an AgeCalculator object that returns current age in mercuryYears', () => {
    const mercuryYears = new AgeCalculator(31);
    expect(mercuryYears.mercuryAge()).toEqual(129);
  });

  test('it should correctly create an AgeCalculator object that returns current age in venusYears', () => {
    const venusYears = new AgeCalculator(31);
    expect(venusYears.venusAge()).toEqual(50);
  });

  test('it should correctly create an AgeCalculator object that returns current age in marsYears', () => {
    const marsYears = new AgeCalculator(31);
    expect(marsYears.marsAge()).toEqual(16.49);
  });

  test('It should correctly create an AgeCalculator object that returns current age in jupiterYears', () => {
    const jupiterYears = new AgeCalculator(31);
    expect(jupiterYears.jupiterAge()).toEqual(2.61);
  });

  test('It should correctly create an AgeCalculator object that returns life expectacy of currentAge and demographic in mercuryYears', () => {
    const mercuryLifeLeft = new AgeCalculator(31, 78);
    expect(mercuryLifeLeft.mercuryExpectancy()).toEqual(196);
  });

  test('It should correctly create an AgeCalculator object that returns life expectancy of currentAge and demographic in venusYears', () => {
    const venusLifeLeft = new AgeCalculator(31, 78);
    expect(venusLifeLeft.venusExpectancy()).toEqual(76);
  });

  test('It should correctly create an AgeCalculator object that returns life expectancy of currentAge and demographic in marsYears', () => {
    const marsLifeLeft = new AgeCalculator(31, 78);
    expect(marsLifeLeft.marsExpectancy()).toEqual(25)
  });

  test('It should correctly create an AgeCalculator object that returns life expectancy of currentAge and demographic in jupiterYears', () => {
    const jupiterLifeLeft = new AgeCalculator(31, 78);
    expect(jupiterLifeLeft.jupiterExpectancy()).toEqual(3.96)
  });

  test('It should correctly create an AgeCalculator object that returns life expectancy of currentAge and demographic in mercuryYears in positive value if current age is over demographic age', () => {
    const mercuryLifeLeft = new AgeCalculator(80, 78);
    expect(mercuryLifeLeft.mercuryExpectancy()).toEqual(8);
  });

  test('It should correctly create an AgeCalculator object that returns life expectancy of currentAge and demographic in venusYears in positive value if current age is over demographic age', () => {
    const venusLifeLeft = new AgeCalculator(80, 78);
    expect(venusLifeLeft.venusExpectancy()).toEqual(3);
  });

  test('It should correctly create an AgeCalculator object that returns life expectancy of currentAge and demographic in marsYears in positive value if current age is over demographic age', () => {
    const marsLifeLeft = new AgeCalculator(80, 78);
    expect(marsLifeLeft.marsExpectancy()).toEqual(1.06);
  });

  test('It should correctly create an AgeCalculator object that returns life expectancy of currentAge and demographic in jupiterYears in positive value if current age is over demographic age', () => {
    const jupiterLifeLeft = new AgeCalculator(80, 78);
    expect(jupiterLifeLeft.jupiterExpectancy()).toEqual(.17);
  });

});