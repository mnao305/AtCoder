'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  if (input[0] + input[1] == input[2] + input[3]) {
    console.log('Balanced')
  } else {
    console.log(input[0] + input[1] > input[2] + input[3] ? 'Left' : 'Right')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
