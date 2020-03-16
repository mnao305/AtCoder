'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ')
  const num = parseInt(input[0] + input[1] + input[2], 10)
  console.log(num % 4 == 0 ? 'YES' : 'NO')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
