'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  const train = input[0] < input[1] ? input[0] : input[1]
  const bus = input[2] < input[3] ? input[2] : input[3]
  console.log(train + bus)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
