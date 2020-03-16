'use strict'

function Main (INPUT) {
  const n = Number(INPUT)
  console.log(n - 1)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
