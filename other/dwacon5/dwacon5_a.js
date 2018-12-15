'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const N = Number(input[0])
  const a = input[1].split(' ').map(n => Number(n))

  let tmp = 0
  for (let i = 0; i < N; i++) {
    tmp += a[i]
  }
  const avr = tmp / N
  let ans = 0
  for (let i = 1; i < N; i++) {
    if (Math.abs(a[i] - avr) < Math.abs(a[ans] - avr)) {
      ans = i
    }
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
