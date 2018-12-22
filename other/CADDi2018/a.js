'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0]
  let cnt = 0
  for (let i = 0; i < N.length; i++) {
    if (N[i] == 2) {
      cnt++
    }
  }
  console.log(cnt)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
