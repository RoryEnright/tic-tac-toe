const gameApi = require('./game-api')
const gameUi = require('./game-ui')

const onCreateGame = function (event) {
  // event.preventDefault()
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const gameHandlers = () => {
  $('#create-game').on('click', onCreateGame)
}

module.exports = {
  gameHandlers
}
