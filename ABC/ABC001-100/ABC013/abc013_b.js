'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  let a = input[0]
  const b = input[1]
  let cnt = 0
  let c = a
  while (!(a == b || c == b)) {
    c--
    a++
    cnt++
    if (a >= 10) {
      a = 0
    }
    if (c < 0) {
      c = 9
    }
  }
  console.log(cnt)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
