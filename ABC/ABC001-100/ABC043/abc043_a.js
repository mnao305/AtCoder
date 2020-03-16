'use strict'

function Main (input) {
  const N = input.split('\n')[0]
  let a = 0
  for (let i = 1; i <= N; i++) {
    a += i
  }
  console.log(a)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
