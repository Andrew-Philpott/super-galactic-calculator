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

  test('Should convert a persons age to an equivalent amount of Mercury years if Mercury is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Mercury';

    expect(calculator.getPersonsAgeInNonEarthYearsForPlanet(planet)).toEqual(83.33);
  });

  test('Should convert a persons age to an equivalent amount of Venus years if Venus is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Venus';

    expect(calculator.getPersonsAgeInNonEarthYearsForPlanet(planet)).toEqual(32.26);
  });

  test('Should convert a persons age to an equivalent amount of Mars years if Mars is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Mars';

    expect(calculator.getPersonsAgeInNonEarthYearsForPlanet(planet)).toEqual(10.64);
  });

  test('Should convert a persons age to an equivalent amount of Jupiter years if Jupiter is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Jupiter';

    expect(calculator.getPersonsAgeInNonEarthYearsForPlanet(planet)).toEqual(1.69);
  });

  test('Should convert a persons life expectancy to an equivalent amount of Mercury years if Mercury is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Mercury';

    expect(calculator.getPersonsLifeExpectancyInNonEarthYearsForPlanet(planet)).toEqual(305.83);
  });

  test('Should convert a persons life expectancy to an equivalent amount of Venus years if Venus is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Venus';

    expect(calculator.getPersonsLifeExpectancyInNonEarthYearsForPlanet(planet)).toEqual(118.39);
  });

  test('Should convert a persons life expectancy to an equivalent amount of Mars years if Mars is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Mars';

    expect(calculator.getPersonsLifeExpectancyInNonEarthYearsForPlanet(planet)).toEqual(39.04);
  });

  test('Should convert a persons life expectancy to an equivalent amount of Jupiter years if Jupiter is passed in', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Jupiter';

    expect(calculator.getPersonsLifeExpectancyInNonEarthYearsForPlanet(planet)).toEqual(6.19);
  });

  test('Should calculate the number of years a person has left to live on the planet in terms of the planets years', () => {
    let person = new Person(20, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Mercury';

    expect(calculator.calculateNumberOfYearsPersonHasLeftToLiveOnPlanet(planet)).toEqual(222.5);
  });

  test('Should notify the player of the expected time they have left to live on the planet given their life expectancy. If the persons age is greater than the life expectancy then they should be notified of the number of years theyve lived past the life expectancy, otherwise it should notify them of the time they have left.', () => {
    let person = new Person(90, 'Male');
    let calculator = new SolarYearCalculator(person);
    let planet = 'Mercury';
    let numberOfYearsToLive = calculator.calculateNumberOfYearsPersonHasLeftToLiveOnPlanet(planet);
    let message = calculator.notifyPersonOnLifeExpectationsForLivingOnPlanet(numberOfYearsToLive);
    expect(message).toEqual(`You're ${numberOfYearsToLive} years older than the life expectancy.`);
  });
});