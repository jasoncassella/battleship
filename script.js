const gameBoard = document.querySelector('#gameBoard');

class Ship {
  constructor(length) {
    this.length = length;
    this.hitLocations = [];
    this.sunkStatus = false;
  }

  hit(x, y) {
    if (this.length > 0) {

      this.hitLocations.push({ x, y });
    }
  }

  isSunk() {
    if (this.length === this.hitLocations.length) {
      return true;
    }
    else return false;
  }
}

class GameBoard {
  constructor(shipLocations) {
    this.shipLocations = shipLocations;
    this.missedLocations = [];
  }
  receiveAttack(x, y) {

  }
}

const board = new GameBoard({
  player: 'player-1',
  carrier: [1, 2, 3, 4, 5]
});

console.log(board.shipLocations.carrier);


// function createBoard() {
//   for (i = 0; i < 64; i++) {
//     const square = document.createElement('div');
//     gameBoard.appendChild(square).className = 'square';
//   }
// }

// createBoard();

let carrier = new Ship(5);

carrier.hit(1, 1);
carrier.hit(2, 2);
carrier.hit(3, 3);
carrier.hit(4, 4);
carrier.hit(5, 5);

console.log(carrier.hitLocations);

console.log(carrier.isSunk());