'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const S = input[0]
  const N = Number(input[1])
  let cnt = 0
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S.length; j++) {
      cnt++
      if (cnt == N) {
        console.log(S[i] + S[j])
        break
      }
    }
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
