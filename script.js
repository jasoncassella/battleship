const gameBoard = document.querySelector('#gameBoard');

class Ship {
  constructor(length) {
    this.length = length;
    this.hitLocation = [];
    this.sunkStatus = false;
  }

  hit(number) {
    this.hitLocation.push(number);
  }

  isSunk() {
    if (this.length === this.hitLocation.length) {
      return true;
    }
    else return false;

  }
}



// class GameBoard {
//   // call ship function to place ships at specific coordinates
// }

// const board = new GameBoard();


// function createBoard() {
//   for (i = 0; i < 64; i++) {
//     const square = document.createElement('div');
//     gameBoard.appendChild(square).className = 'square';
//   }
// }

// createBoard();

let carrier = new Ship(5);

carrier.hit(1);
carrier.hit(2);
carrier.hit(3);
carrier.hit(4);
carrier.hit(5);

console.log(carrier.isSunk());