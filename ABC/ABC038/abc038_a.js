'use strict'

function Main (INPUT) {
  const S = INPUT.split('\n')[0].slice(-1)
  console.log(S == 'T' ? 'YES' : 'NO')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
