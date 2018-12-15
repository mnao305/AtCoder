'use strict'

function Main (INPUT) {
  const N = INPUT.split('\n')[0]
  console.log(`ABC${N}`)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
