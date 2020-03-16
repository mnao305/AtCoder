'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0].split(' ').map(n => Number(n))

  if (N[0] <= 5) {
    console.log(0)
  } else if (N[0] <= 12) {
    console.log(N[1] / 2)
  } else {
    console.log(N[1])
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
