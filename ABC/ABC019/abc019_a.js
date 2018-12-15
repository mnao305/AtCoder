'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n)).sort((a, b) => a - b)
  console.log(N[1])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
