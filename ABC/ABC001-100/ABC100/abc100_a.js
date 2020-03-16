'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  if (N[0] <= 8 && N[1] <= 8) {
    console.log('Yay!')
  } else {
    console.log(':(')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
