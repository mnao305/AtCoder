'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const N = Number(input[0])
  const A = input[1].split('')
  const B = input[2].split('')
  const C = input[3].split('')
  let cnt = 0

  for (let i = 0; i < N; i++) {
    if (A[i] == B[i] && A[i] == B[i] && B[i] == C[i]) {
      continue
    }
    if (A[i] != B[i] && A[i] != C[i] && B[i] != C[i]) {
      cnt += 2
    } else if (((A[i] == B[i] && A[i] != C[i]) || (A[i] != B[i] && A[i] == C[i])) || ((A[i] == B[i] && A[i] != C[i]) || (A[i] != B[i] && A[i] == C[i]) || B[i] == C[i])) {
      cnt++
    }
  }

  console.log(cnt)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
