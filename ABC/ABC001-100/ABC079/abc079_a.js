'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0]
  if ((input[0] == input[1] && input[1] == input[2]) || (input[1] == input[2] && input[2] == input[3])) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
