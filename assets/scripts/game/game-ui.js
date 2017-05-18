'use strict'

const createGameSuccess = () => {
  console.log('game created!')
}

const createGameFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
