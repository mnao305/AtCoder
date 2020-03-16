'use strict'

function Main (INPUT) {
  let N = Number(INPUT)
  while (N % 2 != 0) {
    N += N
  }
  console.log(N)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
