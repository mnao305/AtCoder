'use strict'

function Main (INPUT) {
  const A = INPUT.split('\n')[0]
  if (A > 'a') {
    console.log('a')
  } else {
    console.log('-1')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
