'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  let ans = 0
  for (let i = 1; i * input[0] < input[2] + 0.5; i++) {
    ans += input[1]
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
