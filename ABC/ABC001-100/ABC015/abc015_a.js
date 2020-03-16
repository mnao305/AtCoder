'use strict'

function Main (INPUT) {
  const S = INPUT.split('\n')
  console.log(S[0].length > S[1].length ? S[0] : S[1])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
