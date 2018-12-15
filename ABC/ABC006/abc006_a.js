'use strict'

function Main (INPUT) {
  const N = Number(INPUT)
  console.log(N % 3 == 0 ? 'YES' : 'NO')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
