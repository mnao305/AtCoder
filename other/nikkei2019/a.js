'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  const N = input[0]
  const A = input[1]
  const B = input[2]

  const max = A < B ? A : B
  const min = (A + B) - N < 0 ? 0 : (A + B) - N

  console.log(max, min)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
