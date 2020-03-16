'use strict'

function Main (INPUT) {
  const N = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  console.log(N[1], N[0])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
