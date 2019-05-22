'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  console.log(N[0] / N[1])
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
