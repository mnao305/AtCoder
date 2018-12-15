'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  if (N[0] == N[1]) {
    console.log(N[2])
  } else {
    console.log(N[0] == N[2] ? N[1] : N[0])
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
