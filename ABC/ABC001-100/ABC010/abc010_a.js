'use strict'

function Main (INPUT) {
  const s = INPUT.split('\n')[0]
  console.log(s + 'pp')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
