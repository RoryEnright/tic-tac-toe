'use strict'

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('this is data', data)
  console.log('hello')
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  console.log('this is data', data)
  console.log('hello')
}

const signOutFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
