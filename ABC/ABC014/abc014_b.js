'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const n = Number(input[0].split(' ')[0])
  const X = Number(input[0].split(' ')[1]).toString(2).split('').reverse()
  const a = input[1].split(' ').map(n => Number(n))
  let ans = 0
  for (let i = 0; i < X.length; i++) {
    if (X[i] == 1) {
      ans += a[i]
    }
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
