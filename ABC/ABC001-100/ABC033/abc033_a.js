'use strict'

function Main (INPUT) {
  const N = Number(INPUT)
  console.log(N % 1111 != 0 ? 'DIFFERENT' : 'SAME')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
