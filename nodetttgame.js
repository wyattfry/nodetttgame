const prompt = require('prompt');
console.log('Welcome to NodeJS Tic Tac Toe!');
prompt.start();
// prompt.get(['username', 'email'], (err, res) => {
//   console.log(res.username);
//   console.log(res.email);
// });
class TTTGame {
  constructor() {
    this.board = [[0,0,0],[0,0,0],[0,0,0]];
    this.renderPairs = {
      '-1': 'X',
      '0': '-',
      '1': 'O'
    };
  }
  print() {
    let output = '';
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board.length; col++) {
        output += this.renderPairs[this.board[row][col]];
      }
      output += '\n';
    }
    return output;
  }
}

const g = new TTTGame();
console.log('current board:\n', g.print());
