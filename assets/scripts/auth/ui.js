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
  $('#sign-up').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#sign-in').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#change-password').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#create-game').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#gameStats').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#sign-out').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#message').text('Click on "start game" to get rolling')
  gameApi.getIndex()
  .then(gameUi.getIndexSucess)
  .catch(gameUi.getIndexFailure)
}

const signInFailure = () => {
  $('#message').text('Please check email and password or sign up again')
  $('#sign-up').show('slow')
}

const signOutSuccess = (data) => {
  $('#sign-in').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#sign-up').show('slow')
  $('#sign-up').fadeIn('slow', function () {
    $(this).removeClass('hidden')
  })
  $('#sign-out').fadeOut('slow', function () {
    $(this).addClass('hidden')
    $('#row1').fadeOut(2500).addClass('hidden')
    $('#row2').fadeOut(1500).addClass('hidden')
    $('#row3').fadeOut(500).addClass('hidden')
  })
  $('#message').text('Please sign up or sign in')
  $('#gameStats').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
  $('#create-game').fadeOut('slow', function () {
    $(this).addClass('hidden')
  })
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
