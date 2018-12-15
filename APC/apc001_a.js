'use strict'

function Main (INPUT) {
  const input = INPUT.split(' ').map(n => Number(n))
  const X = input[0]
  const Y = input[1]
  let ans = -1
  if (X % Y != 0) {
    ans = X
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
