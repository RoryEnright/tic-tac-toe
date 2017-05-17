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
    console.log('Response is ', response)
    store.userToken = response.user.token
    store.id = response.user.id
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/sign-out/' + store.id,
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

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
  signIn,
  signOut
  // changePassword
}
