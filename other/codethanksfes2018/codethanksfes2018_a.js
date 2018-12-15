'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  let T = input[0]
  let A = input[1]
  let B = input[2]
  let C = input[3]
  let D = input[4]
  let ans = 0
  if (C <= T) {
    ans += D
    T -= C
  }
  if (A <= T) {
    ans += B
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
