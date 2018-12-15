'use strict'

function Main (INPUT) {
  const S = INPUT.split('')
  let y = 700
  for (let i = 0; i < S.length; i++) {
    y += S[i] == 'o' ? 100 : 0
  }
  console.log(y)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
