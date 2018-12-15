'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const s = input[0]
  const i = Number(input[1]) - 1
  console.log(s.substr(i, 1))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
