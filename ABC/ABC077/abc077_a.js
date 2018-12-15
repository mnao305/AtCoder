'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const a = input[0]
  const b = input[1]

  console.log(a[0] == b[2] && a[1] == b[1] && a[2] == b[0] ? 'YES' : 'NO')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
