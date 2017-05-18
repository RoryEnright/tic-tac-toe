'use strict'

const player1 = 'X'
const player2 = 'O'

let currentPlayer = 'X'
if (currentPlayer === 'X') {
  currentPlayer = 'O'
} else {
  currentPlayer = 'X'
}

// const currentTurn = function (id) {
//   $('#indexform').val(id)
//   $('#moveForm').val(currentPlayer)
//   currentPlayer = currentPlayer === player1 ? player2 : player1
//   return currentPlayer
// }

// const updateCell = function () {
//   if ($(this).html() === '' && $('#gameOverForm').val() === 'false') {
//     const id = this.id
//     $(this).html(currentPlayer)
//     gameBoard[id] = currentPlayer
//     currentTurn(id)
//     turnCounter()
//     $('#game_info').submit()
//   }
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
    return true
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
    return true
  }
}
const Draw = function () {
  if(playerXWins === false && playerOwins === false || turnCounter === 9)
  return 'Draw!'
}

// const gameOver = function () {
//   if (playerXWins === true)
// } else if (playerOwins === true)
// } else if ()

module.exports = {
  playerXWins,
  playerOWins
}
