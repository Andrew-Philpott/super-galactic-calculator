import { SolarYearCalculator } from './../src/js/solaryearcalculator.js';
import { Person } from '../src/js/person.js';

describe('SolarYearCalculator', () => {

  test('should correctly create a SolarYearCalculator', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personFromCalculator = calculator.person;

    expect(person).toEqual(personFromCalculator);
  });

  test('should correctly convert the stored person object age to a number to 2 decimal points', () => {
    let person = new Person(20);
    let calculator = new SolarYearCalculator(person);
    let personObjectsAgeInMercuryYears = 83.33;

    expect(calculator.convertAgeToMercuryYears()).toEqual(personObjectsAgeInMercuryYears);
  });
});