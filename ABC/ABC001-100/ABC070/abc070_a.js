'use strict'

function Main (INPUT) {
  const N = INPUT.split('\n')[0]
  if (N.split('').reverse().join('') == N) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
