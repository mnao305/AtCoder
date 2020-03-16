'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const H = input[0].split(' ')[0]
  const C = input.slice(1)

  for (let i = 0; i < H; i++) {
    console.log(C[i])
    console.log(C[i])
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
