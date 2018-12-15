'use strict'

function Main (input) {
  const s = input.split('\n')[0]

  console.log(s.replace(/,/g, ' '))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
