import { Person } from './../src/js/person.js';

describe('Person', () => {

  test('should correctly create a person object with an age', () => {
    let age = 20;
    let person = new Person(age);

    let ageFromPerson = person.age;
    expect(age).toEqual(ageFromPerson);
  });

  test('should correctly return a persons age', () => {
    let age = 20;
    let person = new Person(age);

    let ageFromPerson = person.getAge();
    expect(age).toEqual(ageFromPerson);
  });  

  test('should correctly create a person object with a gender', () => {
    let age = 20;
    let gender = 'Male';
    let person = new Person(age, gender);

    let genderFromPerson = person.gender;
    expect(gender).toEqual(genderFromPerson);
  });
});