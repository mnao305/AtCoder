'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ')
  const A = parseInt(input[0], 10)
  const B = parseInt(input[1], 10)
  const C = parseInt(input[2], 10)
  if (C >= A && C <= B) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
