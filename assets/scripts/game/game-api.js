'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: '{}'
  })
  .then((response) => {
    store.game = response.game
    store.over = response.over
  })
}

const getIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then((response) => {
    store.gamesPlayed = response.games.length
    $('#gamesPlayed').text('Games Played: ' + store.gamesPlayed)
    store.games = response.games
  })
}

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
    store.game.cells = response.game.cells
  })
}

module.exports = {
  getIndex,
  createGame,
  updateGame
}
