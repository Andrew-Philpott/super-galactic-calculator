import { Person } from './../src/js/person.js';

describe('Person', () => {

  test('should correctly create a person object with an age', () => {
    let age = 20;
    let person = new Person();

    let ageFromPerson = person.age;
    expect(age).toEqual(ageFromPerson);
  });
});