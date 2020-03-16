'use strict'

function Main (input) {
  const tmp = input.split('\n')[0]
  const a = parseInt(tmp.split(' ')[0], 10)
  const b = parseInt(tmp.split(' ')[1], 10)
  const c = parseInt(tmp.split(' ')[2], 10)

  if (a + b == c || a + c == b || b + c == a) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
