'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ')
  const A = parseInt(input[0], 10)
  const B = parseInt(input[1], 10)

  if (A % 3 == 0 || B % 3 == 0 || (A + B) % 3 == 0) {
    console.log('Possible')
  } else {
    console.log('Impossible')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
