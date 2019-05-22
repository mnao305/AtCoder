'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const K = Number(input[0].split(' ')[1])

  let S = input[1].split('')

  S[K - 1] = S[K - 1].toLowerCase()
  console.log(S.join(''))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
