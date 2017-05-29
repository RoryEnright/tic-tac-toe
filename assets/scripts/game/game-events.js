const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('../store')
const logic = require('./logic')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  event.preventDefault()
  $('#0').on('click', onSelectCell).text('+')
  $('#1').on('click', onSelectCell).text('+')
  $('#2').on('click', onSelectCell).text('+')
  $('#3').on('click', onSelectCell).text('+')
  $('#4').on('click', onSelectCell).text('+')
  $('#5').on('click', onSelectCell).text('+')
  $('#6').on('click', onSelectCell).text('+')
  $('#7').on('click', onSelectCell).text('+')
  $('#8').on('click', onSelectCell).text('+')
  store.moves = 0
  store.currentPlayer = 'X'
  const data = getFormFields(event.target)
  gameApi.createGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const onSelectCell = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.game.cell = {}
  store.game.cell.index = this.dataset.id
  logic.switchPlayers()
  $(this).text(store.game.cell.value)
  $(this).off()
  store.moves++
  gameApi.updateGame(data)
  .then(gameUi.updateGameSuccess)
  .catch(gameUi.updateGameFailure)
}

const clearBoard = function (event) {
  event.preventDefault()
  $('#0').on('click', onSelectCell).text('+')
  $('#1').on('click', onSelectCell).text('+')
  $('#2').on('click', onSelectCell).text('+')
  $('#3').on('click', onSelectCell).text('+')
  $('#4').on('click', onSelectCell).text('+')
  $('#5').on('click', onSelectCell).text('+')
  $('#6').on('click', onSelectCell).text('+')
  $('#7').on('click', onSelectCell).text('+')
  $('#8').on('click', onSelectCell).text('+')
  const data = getFormFields(event.target)
  gameApi.getIndex(data)
  .then(gameUi.clearBoardSuccess)
  .catch(gameUi.clearBoardFailure)
}

const gameHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  $('#update-game').on('click', onSelectCell)
  $('#reset-board').on('click', clearBoard)
}

module.exports = {
  gameHandlers,
  onSelectCell,
  clearBoard
}
