'use strict'

const config = require('../config')
const store = require('../store')

// const gameIndex = function (game) {
//   console.log(game)
//   return $.ajax({
//     url: config.apiOrigin + '/games[?over=]/',
//     method: 'GET',
//     games
//   })
// }

const createGame = function (data) {
  console.log('game creating')
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: '{}'
  })
  .then((response) => {
    console.log('Response is ', response)
    store.gameId = response.game.id
    store.over = response.over
  })
}

const updateGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/games/' + store.gameId,
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: {'game':
    {'cell':
    {'index': store.game.cell.index, 'value': store.game.cell.value
    }
    }
    }
  })
  .then((response) => {
    store.game.cells = response.game.cells
  })
}

module.exports = {
  createGame,
  updateGame
}
