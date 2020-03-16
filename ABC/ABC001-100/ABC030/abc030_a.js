'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  if (N[1] / N[0] == N[3] / N[2]) {
    console.log('DRAW')
  } else {
    console.log(N[1] / N[0] > N[3] / N[2] ? 'TAKAHASHI' : 'AOKI')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
