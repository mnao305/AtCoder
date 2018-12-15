'use strict'

function Main (INPUT) {
  const A = INPUT.split(' ').map(n => Number(n))
  A.sort((a, b) => a - b)
  console.log((A[1] - A[0]) + (A[2] - A[1]))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
