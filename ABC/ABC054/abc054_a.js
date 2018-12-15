'use strict'

function Main (input) {
  const tmp = input.split('\n')[0].split(' ')
  let A = parseInt(tmp[0], 10)
  let B = parseInt(tmp[1], 10)
  if (A == 1) {
    A += 13
  }
  if (B == 1) {
    B += 13
  }

  if (A == B) {
    console.log('Draw')
  } else if (A > B) {
    console.log('Alice')
  } else {
    console.log('Bob')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
