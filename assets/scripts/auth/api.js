'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
  // .then((response) => {
  //   store.userToken = response.user.token
  //   return store.userToken
  // })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
  .then((response) => {
    console.log('This is the response when logging in: ', response)
    store.userToken = response.user.token
    store.id = response.user.id
  })
}

// const signOut = function () {
//   return $.ajax({
//     method: 'DELETE',
//     url: config.ApiOrigin + '/sign-out/' + response.user.id,
//     headers: {
//       Authorization: 'Token token=' + response.user.token
//     }
//   })
// }
//
// const changePassword = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.ApiOrigin + '/change-password/' + response.user.id,
//     headers: {
//       Authorization: 'Token token=' + response.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  signUp,
  signIn
  // signOut,
  // changePassword
}
