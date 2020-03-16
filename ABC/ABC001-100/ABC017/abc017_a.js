'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const a = input[0].split(' ').map(n => Number(n))
  const b = input[1].split(' ').map(n => Number(n))
  const c = input[2].split(' ').map(n => Number(n))

  console.log((a[0] * (a[1] / 10)) + (b[0] * (b[1] / 10)) + (c[0] * (c[1] / 10)))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
