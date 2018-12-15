'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').slice(1, -1).map(n => Number(n))
  input.sort((a, b) => a - b)
  console.log(input[0])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
