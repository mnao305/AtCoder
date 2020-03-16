'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const n = Number(input[0])
  const a = input[1].split(' ').map(n => Number(n))
  let cnt = 0

  for (let i = 0; i < n; i++) {
    while (a[i] % 3 == 2 || a[i] % 2 == 0) {
      a[i]--
      cnt++
    }
  }
  console.log(cnt)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
