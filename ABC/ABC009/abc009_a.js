'use strict'

function Main (INPUT) {
  const N = Number(INPUT)
  console.log(Math.ceil(N / 2))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
