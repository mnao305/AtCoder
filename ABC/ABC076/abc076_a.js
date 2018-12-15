'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  const R = input[0]
  const G = input[1]

  console.log(G + (G - R))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
