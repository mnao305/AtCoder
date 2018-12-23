'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  const N = input[0]
  const P = input[1]

  let ans
  if (N == 1) {
    ans = P
  } else {
    for (let i = 0; Math.pow(i, N) <= P; i++) {
      if (P % Math.pow(i, N) == 0) {
        ans = i
      }
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
