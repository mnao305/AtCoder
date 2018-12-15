'use strict'

function Main (INPUT) {
  const input = INPUT.split(' ').map(n => Number(n))
  console.log(input[0] % input[1] == 0 ? 0 : 1)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
