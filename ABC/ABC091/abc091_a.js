'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  console.log((N[0] + N[1]) - N[2] >= 0 ? 'Yes' : 'No')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
