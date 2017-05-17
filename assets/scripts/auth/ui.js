'use strict'

const signUpSuccess = (data) => {
  console.log(data)
  console.log('hello')
}

const signUpFailure = (error) => {
  console.error(error)
}

// const signInSuccess = (data) => {
//   console.log(data)
// }
//
// const signInFailure = (error) => {
//   console.error(error)
// }

module.exports = {
  signUpSuccess,
  signUpFailure
//   signInSuccess,
//   signInFailure
}
