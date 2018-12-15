'use strict'

function Main (INPUT) {
  const N = Number(INPUT)
  let yen = 0
  for (let i = 1; i <= N; i++) {
    yen += (10000 * i) * (1 / N)
  }
  console.log(Math.round(yen))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
