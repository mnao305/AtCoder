'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  let i = 1
  let tmp = []
  while (input[0] >= i && input[1] >= i) {
    if (input[0] % i == 0 && input[1] % i == 0) {
      tmp.push(i)
    }
    i++
  }
  tmp.reverse()
  console.log(tmp[input[2] - 1])
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
