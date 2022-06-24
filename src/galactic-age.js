export class AgeCalculator {
  constructor(currentAge, demographic) {
    this.currentAge = currentAge;
    this.demographic = demographic;
  }

  mercuryAge() {
    if (this.currentAge === this.currentAge) {
      return (Math.round(this.currentAge / .24));
    }
  }

  venusAge() {
    if (this.currentAge === this.currentAge) {
      return (Math.round(this.currentAge / .62));
    }
  }

  marsAge() {
    if (this.currentAge === this.currentAge) {
      return (parseFloat((this.currentAge / 1.88).toFixed(2)))
    }
  }

  jupiterAge() {
    if (this.currentAge === this.currentAge) {
      return (parseFloat((this.currentAge / 11.86).toFixed(2)));
    }
  }

  mercuryExpectancy() {
    if ((this.currentAge === this.currentAge) && (this.demographic === this.demographic)) {
      return (Math.round((this.demographic - this.currentAge) / .24));
    }
  }

}