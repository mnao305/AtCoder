'use strict'

function Main (input) {
  const tmp = input.split('\n')[0].split(' ')
  const one = tmp[0] * tmp[1]
  const two = tmp[2] * tmp[3]

  if (one < two) {
    console.log(two)
  } else {
    console.log(one)
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
