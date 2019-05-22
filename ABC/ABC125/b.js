'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const N = input[0]
  const V = input[1].split(' ').map(n => Number(n))
  const C = input[2].split(' ').map(n => Number(n))
  let ans = 0
  for (let i = 0; i < N; i++) {
    if (V[i] > C[i]) {
      ans += V[i] - C[i]
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
