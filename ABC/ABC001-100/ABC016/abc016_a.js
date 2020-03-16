'use strict'

function Main (INPUT) {
  const N = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  console.log(N[0] % N[1] == 0 ? 'YES' : 'NO')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
