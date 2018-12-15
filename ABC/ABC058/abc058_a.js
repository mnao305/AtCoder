'use strict'

function Main (input) {
  const tmp = input.split('\n')[0].split(' ')

  if (tmp[1] - tmp[0] == tmp[2] - tmp[1]) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
