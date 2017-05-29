'use strict'
const store = require('../store')
const logic = require('./logic')
const gameEvents = require('./game-events')
const gameApi = require('./game-api')

const createGameSuccess = (data) => {
  $('#message').text('Player X goes first')
  $('#create-game').fadeOut('slow', function () {
    $(this).addClass('hidden')
    $('#row1').fadeIn(500).removeClass('hidden')
    $('#row2').fadeIn(1500).removeClass('hidden')
    $('#row3').fadeIn(2000).removeClass('hidden')
  })
  $('#change-password').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
}

const createGameFailure = () => {
  $('#message').text('Please try "Start Game" again')
}

const clearBoardSuccess = (data) => {
  store.moves = 0
  store.currentPlayer = 'X'
  store.game = {}
  store.game.value = ''
  store.game.over = false
  gameApi.createGame(data)
  .then(getIndexSuccess)
  .catch(getIndexFailure)
}

const clearBoardFailure = () => {
}

const getIndexSuccess = (data) => {
}

const getIndexFailure = () => {

}

const updateGameSuccess = (data) => {
  logic.whoWins()
  $('#message').text('It is ' + store.currentPlayer + "'s turn")
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
    $('#message').text(store.winner)
    $('#gamesLost').text('Losses: ' + store.gamesLost + ' ')
    $('#gamesDraw').text('Draws: ' + store.gamesDraw + ' ')
    $('#create-game').fadeIn('slow', function () {
      $(this).removeClass('hidden')
    })
    store.gamesPlayed++
    $('#gamesPlayed').text('Games Played: ' + store.gamesPlayed)
    gameApi.updateGame()
    .then(getIndexSuccess)
    .catch(getIndexFailure)
  }
}

const updateGameFailure = () => {
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  clearBoardSuccess,
  clearBoardFailure,
  getIndexSuccess,
  getIndexFailure
}
