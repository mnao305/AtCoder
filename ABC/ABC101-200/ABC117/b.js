'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const N = Number(input[0])
  const L = input[1].split(' ').map(n => Number(n)).sort((a, b) => b - a)
  let sum = 0
  for (let i = 1; i < N; i++) {
    sum += L[i]
  }
  if (L[0] < sum) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
