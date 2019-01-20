'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0].split(' ')
  console.log(N[1] * N[0] / 2)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
