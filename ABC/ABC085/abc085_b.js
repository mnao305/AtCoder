'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  const N = input[0]
  const a = input.slice(1, N + 1)
  console.log(new Set(a).size)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
