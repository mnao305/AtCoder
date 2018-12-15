'use strict'

function Main (INPUT) {
  const X = INPUT.split('\n')[0]
  const S = 'ABCDE'

  for (let i = 0; i < S.length; i++) {
    if (X == S[i]) {
      console.log(i + 1)
    }
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
