'use strict'

function Main (INPUT) {
  const N = Number(INPUT)

  console.log(N)
  for (let i = 0; i < N; i++) {
    console.log(1)
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
