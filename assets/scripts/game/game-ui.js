'use strict'
const store = require('../store')
const logic = require('./logic')
const gameEvents = require('./game-events')

const createGameSuccess = (data) => {
  $('#message').text('Player X goes first')
  $('#create-game').addClass('hidden')
  // store.gamesPlayed++
  // $('#gamesPlayed').text('Games Played: ' + store.gamesPlayed)
}

const createGameFailure = () => {
  $('#message').text('Please try "Start Game" again')
}

const updateGameSuccess = (data) => {
  logic.whoWins()
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
    $('#gamesPlayed').text('Games Played: ' + store.gamesPlayed + ' ')
    $('#gamesWon').text('Wins: ' + store.gamesWon + ' ')
    $('#gamesLost').text('Losses: ' + store.gamesLost + ' ')
    $('#gamesDraw').text('Draws: ' + store.gamesDraw + ' ')
  }
}

const updateGameFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
