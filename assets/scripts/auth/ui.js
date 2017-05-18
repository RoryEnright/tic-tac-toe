'use strict'

const signUpSuccess = (data) => {
  $('#sign-up').hide('slow')
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  $('#sign-up').hide('slow')
  $('#sign-in').hide('slow')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#create-game').removeClass('hidden')
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  $('#sign-in').show('slow')
  $('#sign-up').show('slow')
  $('#sign-out').addClass('hidden')
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('this is data', data)
}

const changePasswordFailure = (error) => {
  console.error(error)
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
