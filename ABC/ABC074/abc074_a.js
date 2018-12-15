'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  const N = input[0]
  const A = input[1]
  console.log(N * N - A)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
