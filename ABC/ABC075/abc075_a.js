'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ')
  if (input[0] == input[1]) {
    console.log(input[2])
  } else {
    console.log(input[0] == input[2] ? input[1] : input[0])
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
