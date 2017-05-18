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

const createGame = function () {
  console.log('game creating')
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then((response) => {
    console.log('Response is ', response)
    store.gameId = response.game.id
  })
}

const updateGame = function (game) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/games/' + store.gameId,
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    game
  })
}

module.exports = {
  createGame,
  updateGame
}
