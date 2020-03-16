'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const N = Number(input[0])
  const T = Number(input[1].split(' ')[0])
  const A = Number(input[1].split(' ')[1])
  const H = input[2].split(' ').map(n => Number(n))
  let ans = 1

  for (let i = 1; i < N; i++) {
    if (Math.abs(A - (T - H[i] * 0.006)) < Math.abs(A - (T - H[ans - 1] * 0.006))) {
      ans = i + 1
    }
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
