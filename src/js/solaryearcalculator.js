export class SolarYearCalculator {
  constructor(person) {
   this.person = person;
  }

  convertEarthYearsToMercuryYears(years) {
    const mercuryYearPerEarthYear = .24;
    let convertToMercuryYears = parseFloat(years/mercuryYearPerEarthYear).toFixed(2);
    return Number(convertToMercuryYears);
  }

  convertEarthYearsToVenusYears(years) {
    const venusYearPerEarthYear = .62;
    let convertToVenusYears = parseFloat(years/venusYearPerEarthYear).toFixed(2);
    return Number(convertToVenusYears);
  }

  convertEarthYearsToMarsYears(years) {
    const marsYearPerEarthYear = 1.88;
    let convertToMarsYears = parseFloat(years/marsYearPerEarthYear).toFixed(2);
    return Number(convertToMarsYears);
  }

  convertEarthYearsToJupiterYears(years) {
    const jupiterYearPerEarthYear = 11.86;
    let convertAgeToJupiterYears = parseFloat(years/jupiterYearPerEarthYear).toFixed(2);
    return Number(convertAgeToJupiterYears);
  }
}