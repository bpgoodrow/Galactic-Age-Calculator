export class AgeCalculator {
  constructor(currentAge, demographic) {
    this.currentAge = currentAge;
    this.demographic = demographic;
  }

  mercuryAge() {
    return (Math.round(this.currentAge / .24));
  }

  venusAge() {
    return (Math.round(this.currentAge / .62));
  }

  marsAge() {
    return (parseFloat((this.currentAge / 1.88).toFixed(2)))
  }

  jupiterAge() {
    return (parseFloat((this.currentAge / 11.86).toFixed(2)));
  }

  mercuryExpectancy() {
    return (Math.abs((Math.round((this.demographic - this.currentAge) / .24))));
  }

  venusExpectancy() {
    return (Math.abs((Math.round((this.demographic - this.currentAge) / .62))));
  }

  marsExpectancy() {
    return (Math.abs((parseFloat(((this.demographic - this.currentAge) / 1.88).toFixed(2)))));
  }

  jupiterExpectancy() {
    return (Math.abs((parseFloat(((this.demographic - this.currentAge) / 11.86).toFixed(2)))));
  }

}