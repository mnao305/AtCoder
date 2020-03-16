'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  if (input[0] == 1) {
    console.log('Hello World')
  } else {
    console.log(input[1] + input[2])
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
