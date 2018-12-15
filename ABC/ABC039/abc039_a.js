'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  const ans = (N[0] * N[1] * 2) + (N[0] * N[2] * 2) + (N[1] * N[2] * 2)
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
