'use strict'
const store = require('../store')
const logic = require('./logic')
const gameEvents = require('./game-events')
const gameApi = require('./game-api')

const createGameSuccess = (data) => {
  $('#message').text('Player X goes first')
  $('#create-game').addClass('hidden')
  // $('#reset-board').removeClass('hidden')
  // gameApi.getIndex(data)
  //   .then(getIndexSucess)
  //   .catch(getIndexFailure)
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

const clearBoardFailure = (error) => {
  console(error).error
}

const getIndexSuccess = (data) => {
}

const getIndexFailure = (error) => {
  console(error).error
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
    $('#message').text(store.winner)
    $('#gamesLost').text('Losses: ' + store.gamesLost + ' ')
    $('#gamesDraw').text('Draws: ' + store.gamesDraw + ' ')
    $('#create-game').removeClass('hidden')
    store.gamesPlayed++
    $('#gamesPlayed').text('Games Played: ' + store.gamesPlayed)
    // $('#reset-board').addClass('hidden')
    gameApi.updateGame()
    .then(getIndexSuccess)
    .catch(getIndexFailure)
  }
  console.log(store.moves)
}

const updateGameFailure = (error) => {
  console.error(error)
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
