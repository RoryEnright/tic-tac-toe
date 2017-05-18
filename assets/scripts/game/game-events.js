const gameApi = require('./game-api')
const gameUi = require('./game-ui')

const onCreateGame = function (event) {
  event.preventDefault()
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const onUpdateGame = function (event) {
  gameApi.updateGame()
  .then(gameUi.updateGameSuccess)
  .catch(gameUi.updateGameFailure)
}

const gameHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  $('#update-game').on('click', onUpdateGame)
}

module.exports = {
  gameHandlers
}
