'use strict'

const main = (INPUT) => {
  let S = INPUT.split('\n')[0]
  let ans = 0
  let cnt = 0
  for (let i = 0; i < S.length; i++) {
    if (S[i] == 'W') {
      ans += cnt
    } else {
      cnt++
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
