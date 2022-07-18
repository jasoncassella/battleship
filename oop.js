class Ship {
  constructor(length) {
    this.length = length;
    this.hitLocations = [];
    this.hasSunk = false;
  }

  hit(number) {
    this.hitLocations.push(number);
  }

  isSunk() {
    if (this.length === this.hitLocations.length) {
      this.hasSunk === true;
      return true;
    }
    else return false;
  }

}