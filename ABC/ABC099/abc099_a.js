'use strict'

function Main (INPUT) {
  const N = INPUT
  console.log(N > 999 ? 'ABD' : 'ABC')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
