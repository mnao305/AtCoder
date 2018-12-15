'use strict'

function Main (INPUT) {
  const N = INPUT.split(' ').map(n => Number(n))
  console.log(N[0] % 16 == 0 && N[1] % 9 == 0 ? '16:9' : '4:3')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
