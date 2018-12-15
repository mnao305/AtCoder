'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const S = input[0]
  const T = input[1]
  let ans = 'You can win'
  const arr = ['a', 't', 'c', 'o', 'd', 'e', 'r']

  for (let i = 0; i < S.length; i++) {
    if (S[i] != T[i]) {
      if (S[i] == '@' || T[i] == '@') {
        if (S[i] == '@') {
          if (!(arr.indexOf(T[i]) >= 0)) {
            ans = 'You will lose'
          }
        } else {
          if (!(arr.indexOf(S[i]) >= 0)) {
            ans = 'You will lose'
          }
        }
      } else {
        ans = 'You will lose'
      }
    }
  }

  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
