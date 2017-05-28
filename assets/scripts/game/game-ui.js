'use strict'

const createGameSuccess = (data) => {
  console.log('game created!')
}

const createGameFailure = (error) => {
  console.error(error)
}

const cellSelectSuccess = (data) => {
  console.log('game updated!')
}

const cellSelectFailure = (error) => {
  console.error(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  cellSelectSuccess,
  cellSelectFailure
}
