'use strict'

function Main (INPUT) {
  const N = Number(INPUT.split('\n')[0])
  console.log(N != 12 ? N + 1 : 1)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
