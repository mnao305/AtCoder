'use strict'

function Main (input) {
  const x = input.split('\n')[0]

  if (x < 1200) {
    console.log('ABC')
  } else {
    console.log('ARC')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
