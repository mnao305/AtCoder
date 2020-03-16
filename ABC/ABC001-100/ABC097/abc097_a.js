'use strict'

function Main (INPUT) {
  const input = INPUT.split(' ').map(n => Number(n))
  const a = input[0]
  const b = input[1]
  const c = input[2]
  const d = input[3]

  if ((Math.abs(a - b) <= d && Math.abs(b - c) <= d) || Math.abs(a - c) <= d) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
