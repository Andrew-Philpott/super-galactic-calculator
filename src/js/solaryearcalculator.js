export class SolarYearCalculator {
  constructor(person) {
   this.person = person;
  }

  convertAgeToMercuryYears() {
    let ageInEarthYears = this.person.getAge();
    const mercuryYearPerEarthYear = .24;
    let convertToMercuryYears = parseFloat(ageInEarthYears/mercuryYearPerEarthYear).toFixed(2);
    return Number(convertToMercuryYears);
  }

  convertAgeToVenusYears() {

  }
}