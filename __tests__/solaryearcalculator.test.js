import { SolarYearCalculator } from './../src/js/solaryearcalculator.js';
import { Person } from '../src/js/person.js';

describe('SolarYearCalculator', () => {

  test('should correctly create a SolarYearCalculator', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personFromCalculator = calculator.person;

    expect(person).toEqual(personFromCalculator);
  });

  test('should correctly convert the stored person object age to a number with 2 decimal points derived from the persons age divided by .24 and rounding to the nearest whole number for the second digit', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personObjectsAgeInMercuryYears = 83.33;

    expect(calculator.convertAgeToMercuryYears()).toEqual(personObjectsAgeInMercuryYears);
  });

  test('should correctly convert the stored person object age to a number with 2 decimal points derived from the persons age divided by .62 and rounding to the nearest whole number for the second digit', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personsObjectAgeInVenusYears = 32.26;

    expect(calculator.convertAgeToVenusYears()).toEqual(personsObjectAgeInVenusYears);
  });

  test('should correctly convert the stored person object age to a number with 2 decimal points derived from the persons age divided by 1.88 and rounding to the nearest whole number for the second digit', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personsObjectAgeInMarsYears = 10.64;

    expect(calculator.convertAgeToMarsYears()).toEqual(personsObjectAgeInMarsYears);
  });
  
  test('should correctly convert the stored person object age to a number with 2 decimal points derived from the persons age divided by 11.86 and rounding to the nearest whole number for the second digit', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personsObjectAgeInJupiterYears = 1.69;

    expect(calculator.convertAgeToJupiterYears()).toEqual(personsObjectAgeInJupiterYears);
  });

});