'use strict'

function Main (input) {
  const tmp = input.split('\n')
  const a = parseInt(tmp[0], 10)
  const b = parseInt(tmp[1], 10)
  const h = parseInt(tmp[2], 10)
  console.log((a + b) * h / 2)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
