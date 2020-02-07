export class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender
    this.lifeExpectancy;
    if(this.gender === 'Male') {
      this.lifeExpectancy = 73.4;
    } else {
      this.lifeExpectancy = 80.1;
    }
  }

  getAge() {
    return this.age;
  }

  getLifeExpectancy() {
    return this.lifeExpectancy;
  }
  
}