'use strict'

function Main (input) {
  const N = parseInt(input.split('\n')[0], 10)
  const x = 800 * N
  let y = 0
  if (N >= 15) {
    y = Math.floor(N / 15) * 200
  }
  console.log(x - y)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
