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
}

module.exports = {
  createGame
}
