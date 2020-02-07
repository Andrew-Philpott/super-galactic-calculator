import { SolarYearCalculator } from './../src/js/solaryearcalculator.js';
import { Person } from '../src/js/person.js';

describe('SolarYearCalculator', () => {

  test('should correctly create a SolarYearCalculator', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personFromCalculator = calculator.person;

    expect(person).toEqual(personFromCalculator);
  });

  test('should correctly convert the Earth years number to a number with 2 decimal points derived from the earth years number divided by .24 and rounding to the nearest whole number for the second digit', () => {
    let earthYears = 20;
    let calculator = new SolarYearCalculator();
    let earthYearsToMercuryYears = 83.33;

    expect(calculator.convertEarthYearsToMercuryYears(earthYears)).toEqual(earthYearsToMercuryYears);
  });

  test('should correctly convert the Earth years number to a number with 2 decimal points derived from the earth years number divided by .62 and rounding to the nearest whole number for the second digit', () => {
    let earthYears = 20;
    let calculator = new SolarYearCalculator();
    let personsObjectAgeInVenusYears = 32.26;

    expect(calculator.convertEarthYearsToVenusYears(earthYears)).toEqual(personsObjectAgeInVenusYears);
  });

  test('should correctly convert the Earth years number to a number with 2 decimal points derived from the earth years number divided by 1.88 and rounding to the nearest whole number for the second digit', () => {
    let earthYears = 20;
    let calculator = new SolarYearCalculator();
    let personsObjectAgeInMarsYears = 10.64;

    expect(calculator.convertEarthYearsToMarsYears(earthYears)).toEqual(personsObjectAgeInMarsYears);
  });

  test('should correctly convert the Earth years number to a number with 2 decimal points derived from the earth years number divided by 11.86 and rounding to the nearest whole number for the second digit', () => {
    let earthYears = 20;
    let calculator = new SolarYearCalculator();
    let personsObjectAgeInJupiterYears = 1.69;

    expect(calculator.convertEarthYearsToJupiterYears(earthYears)).toEqual(personsObjectAgeInJupiterYears);
  });

});