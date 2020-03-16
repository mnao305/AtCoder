'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  let N = input[0]
  let A = input[1]

  while (N >= 500) {
    N -= 500
  }
  console.log(N - A <= 0 ? 'Yes' : 'No')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
