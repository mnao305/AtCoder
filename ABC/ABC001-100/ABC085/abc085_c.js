'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  const N = input[0]
  const Y = input[1]

  for (let a = 0; a <= N; a++) {
    for (let b = 0; a + b <= N; b++) {
      let total = a * 10000 + b * 5000 + ((N - a - b) * 1000)
      if (total == Y) {
        console.log(a, b, N - a - b)
        return
      }
    }
  }
  console.log(-1, -1, -1)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
