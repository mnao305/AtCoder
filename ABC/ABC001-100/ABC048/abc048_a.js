'use strict'

function Main (input) {
  const tmp = input.split('\n')[0]
  const S = tmp.split(' ')[1]

  const x = S.substr(0, 1)
  console.log(`A${x}C`)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
