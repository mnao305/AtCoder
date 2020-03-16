'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  let tmp = input[0].split(' ').map(n => Number(n))
  const N = tmp[0]
  const S = tmp[1]
  const T = tmp[2]
  input.shift()
  let W = Number(input[0])
  let day = W >= S && W <= T ? 1 : 0

  for (let i = 1; i < N; i++) {
    W += Number(input[i])
    if (W >= S && W <= T) {
      day++
    }
  }
  console.log(day)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
