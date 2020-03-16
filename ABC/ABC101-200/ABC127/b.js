'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  const ans = []
  ans[0] = N[0] * N[2] - N[1]
  for (let i = 1; i < 10; i++) {
    ans[i] = N[0] * ans[i - 1] - N[1]
  }
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i])
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
