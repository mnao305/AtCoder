'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  let a = Number(input[0] < input[1]) + Number(input[0] < input[2])
  let b = Number(input[1] < input[0]) + Number(input[1] < input[2])
  let c = Number(input[2] < input[0]) + Number(input[2] < input[1])
  console.log(a + 1)
  console.log(b + 1)
  console.log(c + 1)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
