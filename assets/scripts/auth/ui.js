'use strict'
const gameEvents = require('../game/game-events')
const gameApi = require('../game/game-api')
const gameUi = require('../game/game-ui')

const signUpSuccess = (data) => {
  $('#sign-up').hide('slow')
  $('#message').text('Thanks for signing up!  Please sign in')
}

const signUpFailure = () => {
  $('#message').text('Email already taken or check that passwords match')
}

const signInSuccess = (data) => {
  $('#sign-up').hide('slow')
  $('#sign-in').hide('slow')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#create-game').removeClass('hidden')
  $('#gameStats').removeClass('hidden')
  $('#message').text('Click on "start game" to get rolling')
  gameApi.getIndex()
  .then(gameUi.getIndexSucess)
  .catch(gameUi.getIndexFailure)
}

const signInFailure = () => {
  $('#message').text('Please check email and password')
}

const signOutSuccess = (data) => {
  $('#sign-in').show('slow')
  $('#sign-up').show('slow')
  $('#sign-out').addClass('hidden')
  $('#message').text('Please sign up or sign in')
  $('#gameStats').addClass('hidden')
  $('#0').off('click', gameEvents.onSelectTile).text('+')
  $('#1').off('click', gameEvents.onSelectTile).text('+')
  $('#2').off('click', gameEvents.onSelectTile).text('+')
  $('#3').off('click', gameEvents.onSelectTile).text('+')
  $('#4').off('click', gameEvents.onSelectTile).text('+')
  $('#5').off('click', gameEvents.onSelectTile).text('+')
  $('#6').off('click', gameEvents.onSelectTile).text('+')
  $('#7').off('click', gameEvents.onSelectTile).text('+')
  $('#8').off('click', gameEvents.onSelectTile).text('+')
}

const signOutFailure = () => {
  $('#message').text('Try signing out again')
}

const changePasswordSuccess = (data) => {
  $('#message').text('Password has been updated')
}

const changePasswordFailure = () => {
  $('#message').text('Make sure your passwords match and try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
