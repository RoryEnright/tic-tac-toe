'use strict'

const config = require('../config')
const store = require('../store')

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
    store.game = response.game
    store.over = response.over
  })
}

// const gameIndex = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.userToken
//     },
//     data
//   })
//   .then((response) => {
//
//   })
// }

const updateGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: {'game':
    {'cell':
    {'index': store.game.cell.index, 'value': store.game.cell.value
    }
    },
      'over': store.game.over
    }
  })
  .then((response) => {
    console.log('Response is ', response)
    store.game.cells = response.game.cells
  })
}

module.exports = {
  // gameIndex,
  createGame,
  updateGame
}
