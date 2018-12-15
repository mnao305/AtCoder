'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  const X = input[0]
  const t = input[1]

  console.log(X - t > 0 ? X - t : 0)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
