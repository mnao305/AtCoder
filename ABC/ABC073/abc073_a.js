'use strict'

function Main (INPUT) {
  const N = INPUT.split('\n')[0].split('').map(n => Number(n))
  if (N[0] == 9 || N[1] == 9) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
