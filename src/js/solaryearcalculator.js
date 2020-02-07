export class SolarYearCalculator {
  constructor(person) {
   this.person = person;
  }

  convertEarthYearsToMercuryYears(years) {
    const mercuryYearPerEarthYear = .24;
    let convertToMercuryYears = parseFloat(years/mercuryYearPerEarthYear).toFixed(2);
    return Number(convertToMercuryYears);
  }

  convertAgeToVenusYears() {
    let ageInEarthYears = this.person.getAge();
    const venusYearPerEarthYear = .62;
    let convertToVenusYears = parseFloat(ageInEarthYears/venusYearPerEarthYear).toFixed(2);
    return Number(convertToVenusYears);
  }

  convertAgeToMarsYears() {
    let ageInEarthYears = this.person.getAge();
    const marsYearPerEarthYear = 1.88;
    let convertToMarsYears = parseFloat(ageInEarthYears/marsYearPerEarthYear).toFixed(2);
    return Number(convertToMarsYears);
  }

  convertAgeToJupiterYears() {
    let ageInEarthYears = this.person.getAge();
    const jupiterYearPerEarthYear = 11.86;
    let convertAgeToJupiterYears = parseFloat(ageInEarthYears/jupiterYearPerEarthYear).toFixed(2);
    return Number(convertAgeToJupiterYears);
  }

 
}