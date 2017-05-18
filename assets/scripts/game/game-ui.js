'use strict'

const createGameSuccess = () => {
  console.log('game created!')
}

const createGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = () => {
  console.log('game updated!')
}

const updateGameFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
