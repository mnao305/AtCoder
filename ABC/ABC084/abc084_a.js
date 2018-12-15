'use strict'

function Main (INPUT) {
  const M = Number(INPUT.split('\n')[0])
  console.log(48 - M)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
