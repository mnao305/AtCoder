'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const a = input[0].split(' ').map(n => Number(n))
  const b = input[1].split(' ').map(n => Number(n))
  let ans = (a[0] * b[0]) + (a[1] * b[1])
  ans -= b[0] + b[1] >= a[3] ? a[2] * (b[0] + b[1]) : 0
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
