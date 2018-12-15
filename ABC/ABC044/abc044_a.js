'use strict'

function Main (input) {
  const tmp = input.split('\n')
  const N = tmp[0]
  const K = tmp[1]
  const X = parseInt(tmp[2], 10)
  const Y = parseInt(tmp[3], 10)

  let sum = 0

  for (let i = 1; i <= N; i++) {
    if (i <= K) {
      sum += X
    } else {
      sum += Y
    }
  }
  console.log(sum)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
