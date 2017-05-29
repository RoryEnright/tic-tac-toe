'use strict'

const store = require('../store')

const switchPlayers = function () {
  if (store.currentPlayer === 'X') {
    store.game.cell.value = 'X'
    store.currentPlayer = 'O'
  } else {
    store.game.cell.value = 'O'
    store.currentPlayer = 'X'
  }
}

const whoWins = function () {
  // rows
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') ||
    (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') ||
    (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') ||
// columns
    (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') ||
    (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') ||
    (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') ||
    // diagonal
    (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') ||
    (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X')) {
    store.winner = 'Player X is the winner!'
    store.gamesWon++
    store.game.over = true
    return store.game.over
  } else if ((store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') ||
    (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') ||
    (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') ||
// columns
    (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') ||
    (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') ||
    (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') ||
    // diagonal
    (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') ||
    (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O')) {
    store.winner = 'Player O is the winner!'
    store.gamesLost++
    store.game.over = true
  } else if (store.moves > 8) {
    store.winner = 'Game is a Draw!'
    store.gamesDraw++
    store.game.over = true
    return store.game.over
  } else {
    store.game.over = false
    return store.game.over
  }
}

module.exports = {
  whoWins,
  switchPlayers
}
