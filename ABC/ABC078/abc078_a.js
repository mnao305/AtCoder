'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ')
  if (input[0] == input[1]) {
    console.log('=')
  } else {
    console.log(input[0] > input[1] ? '>' : '<')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
