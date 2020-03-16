'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  const X = input[2] - input[0]
  const Y = input[3] - input[1]

  console.log(input[2] - Y, input[3] + X, input[0] - Y, input[1] + X)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
