const gameBoard = document.querySelector('#gameBoard');

class GameBoard {
  // call ship function to place ships at specific coordinates


}

const board = new GameBoard();


function createBoard() {
  for (i = 0; i < 64; i++) {
    const square = document.createElement('div');
    gameBoard.appendChild(square).className = 'square';
  }
}

createBoard();