function getNumber () {
  return 7
}

function getObject () {
  return {key: 'value'}
}

function getString () {
  return 'I am a string!'
}

function getBoolean () {
  return true
}

function getFunction () {
  var someFunc = function () {
  }
  return someFunc
}

function getNull () {
  return null
}

module.exports = {
  getNumber: getNumber,
  getObject: getObject,
  getString: getString,
  getBoolean: getBoolean,
  getFunction: getFunction,
  getNull: getNull
}
