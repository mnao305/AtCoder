'use strict'

function Main (INPUT) {
  const W = INPUT.split('\n')[0]
  console.log(`${W}s`)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
