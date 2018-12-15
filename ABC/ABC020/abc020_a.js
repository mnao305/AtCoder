'use strict'

function Main (INPUT) {
  const Q = INPUT.split('\n')[0]
  console.log(Q == 1 ? 'ABC' : 'chokudai')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
