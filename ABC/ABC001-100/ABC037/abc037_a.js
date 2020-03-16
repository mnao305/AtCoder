'use strict'

function Main (INPUT) {
  const input = INPUT.split(' ').map(n => Number(n))
  let ans
  if (input[0] < input[1]) {
    ans = Math.floor(input[2] / input[0])
  } else {
    ans = Math.floor(input[2] / input[1])
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
