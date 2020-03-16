'use strict'

function Main (INPUT) {
  const N = Number(INPUT)

  console.log(N * 2)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
