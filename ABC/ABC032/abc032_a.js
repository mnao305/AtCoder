'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  const a = input[0]
  const b = input[1]
  let n = input[2]
  while (!(n % a == 0 && n % b == 0)) {
    n++
  }
  console.log(n)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
