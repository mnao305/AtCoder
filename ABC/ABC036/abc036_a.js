'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  console.log(Math.ceil(N[1] / N[0]))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
