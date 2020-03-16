'use strict'

const main = INPUT => {
  let input = INPUT.split('\n')
  const N = Number(input[0].split(' ')[0])
  const K = Number(input[0].split(' ')[1])
  const h = input
    .slice(1, N + 1)
    .map(n => Number(n))
    .sort((a, b) => a - b)

  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0; i <= h.length - K; i++) {
    let tmp = h[i + K - 1] - h[i]
    if (tmp < ans) {
      ans = tmp
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))
