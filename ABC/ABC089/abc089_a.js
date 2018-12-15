'use strict'

function Main (INPUT) {
  let N = INPUT
  let cnt = 0
  while (N >= 3) {
    N -= 3
    cnt++
  }
  console.log(cnt)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
