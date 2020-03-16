'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  const x = input[0]
  const a = input[1]
  const b = input[2]
  if (Math.abs(x - a) < Math.abs(x - b)) {
    console.log('A')
  } else {
    console.log('B')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
