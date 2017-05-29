const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('../store')
const logic = require('./logic')
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
  store.moves = 1
  store.currentPlayer = 'X'
  const data = getFormFields(event.target)
  event.preventDefault()
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
  store.moves++
  $(this).text(store.game.cell.value)
  $(this).off()
  gameApi.updateGame(data)
  .then(gameUi.updateGameSuccess)
  .catch(gameUi.updateGameFailure)
}

// const gameOver = function (event) {
//   if (store.game.over === 1) {
//     $('#0').off('click', onSelectCell)
//     $('#1').off('click', onSelectCell)
//     $('#2').off('click', onSelectCell)
//     $('#3').off('click', onSelectCell)
//     $('#4').off('click', onSelectCell)
//     $('#5').off('click', onSelectCell)
//     $('#6').off('click', onSelectCell)
//     $('#7').off('click', onSelectCell)
//     $('#8').off('click', onSelectCell)
//     const data = getFormFields(event.target)
//     gameUi.gameOverSuccess(data)
//     gameApi.updateGame(data)
//       .then(gameUi.updateGameSuccess)
//       .catch(gameUi.updateGameFailure)
//   }
// }

const gameHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  $('#update-game').on('click', onSelectCell)
}

module.exports = {
  gameHandlers,
  onSelectCell,
  // gameOver
}
