'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/game-events')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  authEvents.addHandlers()
})

$(() => {
  gameEvents.gameHandlers()
})

require('./example')
