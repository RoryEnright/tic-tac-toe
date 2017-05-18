'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
// const gameLogic = require('./gameLogic')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  authEvents.addHandlers()
})

// $(() => {
//   gameLogic.gameHandlers()
// })

require('./example')
