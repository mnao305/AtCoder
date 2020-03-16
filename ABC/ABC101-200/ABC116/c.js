'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const N = Number(input[0])
  const h = input[1].split(' ').map(n => Number(n))
  let i = 0
  let ans = 0
  while (total(h) > 0) {
    while (h[i] <= 0) {
      i++
    }
    for (let j = i; j < N && h[j] > 0; j++) {
      h[j]--
    }
    ans++
  }
  console.log(ans)
}

const total = (h) => {
  let total = h.reduce((p, c) => {
    return p + c
  })
  return total
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
