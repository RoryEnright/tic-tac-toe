const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  $('#0').on('click', onSelectCell)
  $('#1').on('click', onSelectCell)
  $('#2').on('click', onSelectCell)
  $('#3').on('click', onSelectCell)
  $('#4').on('click', onSelectCell)
  $('#5').on('click', onSelectCell)
  $('#6').on('click', onSelectCell)
  $('#7').on('click', onSelectCell)
  $('#8').on('click', onSelectCell)
  store.moves = 0
  store.currentPlayer = 'X'
  const data = getFormFields(event.target)
  event.preventDefault()
  gameApi.createGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const switchPlayers = function () {
  if (store.currentPlayer === 'X') {
    store.game.cell.value = 'X'
    store.currentPlayer = 'O'
  } else {
    store.game.cell.value = 'O'
    store.currentPlayer = 'X'
  }
}

const onSelectCell = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.game.cell = {}
  store.game.cell.index = this.dataset.game
  switchPlayers()
  store.moves++
  $(this).text(store.game.cell.value)
  $(this).off()
  gameApi.updateGame(data)
  .then(gameUi.selectCellSuccess)
  .catch(gameUi.selectCellFailure)
}

const gameHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  $('#update-game').on('click', onSelectCell)

}

module.exports = {
  gameHandlers,
  onSelectCell
}
