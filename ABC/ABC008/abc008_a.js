'use strict'

function Main (INPUT) {
  const n = INPUT.split(' ').map(n => Number(n))
  console.log(n[1] - n[0] + 1)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
