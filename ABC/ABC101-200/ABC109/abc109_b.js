'use strict'

const main = (INPUT) => {
  const N = Number(INPUT.split('\n')[0])
  const W = INPUT.split('\n').slice(1)
  let ans = 'Yes'

  for (let i = 0; i < W.length - 1; i++) {
    for (let j = i + 1; j < W.length; j++) {
      if (W[i] == W[j]) {
        ans = 'No'
      }
    }
  }
  for (var i = 0; i < N - 1; i++) {
    if (W[i].slice(-1) != W[i + 1].slice(0, 1)) {
      ans = 'No'
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
