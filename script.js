const gameBoard = document.querySelector('#gameBoard');


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

function createBoard() {
  for (i = 0; i < 64; i++) {
    const square = document.createElement('div');
    gameBoard.appendChild(square).className = 'square';
  }
}

createBoard();