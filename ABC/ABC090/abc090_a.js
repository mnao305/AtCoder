'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  console.log(input[0][0] + input[1][1] + input[2][2])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
