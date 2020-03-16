'use strict'

function Main (INPUT) {
  const N = INPUT.split('\n').map(n => Number(n))
  console.log(N[0] - N[1])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
