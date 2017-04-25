function callsTheFunction (func1) {
  func1()
}

function callsProperty (obj) {
  obj.increment()
}

function map (arr, func) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]))
  }
  return newArr
}

function filter (arr, func) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function find (arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      return arr[i]
    }
  }
}

module.exports = {
  callsTheFunction: callsTheFunction,
  callsProperty: callsProperty,
  map: map,
  filter: filter,
  find: find
}
