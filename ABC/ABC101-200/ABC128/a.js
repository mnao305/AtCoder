'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0].split(' ').map(n => Number(n))

  const tmp = N[0] * 3 + N[1]
  const ans = Math.floor(tmp / 2)
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
