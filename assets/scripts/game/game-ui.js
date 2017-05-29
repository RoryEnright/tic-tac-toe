'use strict'
const store = require('../store')
const logic = require('./logic')
const gameEvents = require('./game-events')

const createGameSuccess = (data) => {
  console.log('game created!')
}

const createGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  logic.whoWins()
  console.log('game passes through logic!')
  console.log(store.game.over)
  if (store.game.over === true) {
    $('#0').off('click', gameEvents.onSelectCell)
    $('#1').off('click', gameEvents.onSelectCell)
    $('#2').off('click', gameEvents.onSelectCell)
    $('#3').off('click', gameEvents.onSelectCell)
    $('#4').off('click', gameEvents.onSelectCell)
    $('#5').off('click', gameEvents.onSelectCell)
    $('#6').off('click', gameEvents.onSelectCell)
    $('#7').off('click', gameEvents.onSelectCell)
    $('#8').off('click', gameEvents.onSelectCell)
    $('#message').text('Player ' + store.winner + ' is the winner!')
    console.log(store.winner)
  }
}

const updateGameFailure = (error) => {
  console.error(error)
}

const gameOverSuccess = () => {
  if (store.winner === 'X') {
    $('message').text('Player X wins!')
  } else if (store.winner === 'O') {
    $('message').text('Player O wins!')
  } else if (store.winner === 'Draw') {
    $('message').text('Game is a draw!')
  }
}
const gameOverFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameOverSuccess,
  gameOverFailure
}
