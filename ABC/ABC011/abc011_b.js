'use strict'

function Main (INPUT) {
  let S = INPUT.split('\n')[0]
  S = S.toLowerCase()
  S = S.split('')
  S[0] = S[0].toUpperCase()
  console.log(S.join(''))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
