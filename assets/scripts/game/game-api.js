'use strict'

const config = require('../config')
// const store = require('../store')

// const gameIndex = function (game) {
//   console.log(game)
//   return $.ajax({
//     url: config.apiOrigin + '/games[?over=]/',
//     method: 'GET',
//     games
//   })
// }

const createGame = function (game) {
  console.log(game)
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    game
  })
}

module.exports = {
  createGame
}
