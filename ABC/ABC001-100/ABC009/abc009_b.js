'use strict'

function Main (INPUT) {
  let input = INPUT.split('\n').map(n => Number(n))
  input.shift()
  input = input.filter((x, i, self) => self.indexOf(x) === i)
  input.sort((a, b) => b - a)
  console.log(input[1])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
