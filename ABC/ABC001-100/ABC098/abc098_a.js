'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  let ans = Math.max(N[0] + N[1], N[0] - N[1], N[0] * N[1])
  if (ans === -0) ans = 0
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
