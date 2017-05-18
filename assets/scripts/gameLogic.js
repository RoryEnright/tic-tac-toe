'use strict'

const playerX = 'X'
const playerO = 'O'

// const turns = function () {
//   let turns = 0
// }

const cells = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

const playerXWins = function () {
  // rows
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
    (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
    (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
// columns
    (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
    (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
    (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
    // diagonal
    (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
    (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')) {
    return 'Player X Wins!!!'
  }
}
const playerOWins = function () {
  // rows
  if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
    (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
    (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
// columns
    (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
    (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
    (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
    // diagonal
    (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
    (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')) {
    return 'Player O Wins!!!'
  }
}

module.exports = {
  playerXWins,
  playerOWins
}
