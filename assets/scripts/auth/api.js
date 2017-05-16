'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.ApiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
  })
}

const signIn = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.ApiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
  .then((response) => {
    store.userToken = response.user.token
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.ApiOrigin + '/sign-out/' + response.user.id,
    headers: {
      Authorization: 'Token token=' + response.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.ApiOrigin + '/change-password/' + response.user.id,
    headers: {
      Authorization: 'Token token=' + response.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
