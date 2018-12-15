'use strict'

function Main (INPUT) {
  let input = INPUT.split('\n').slice(1)
  input.sort()
  let ans = ''
  for (let i = 0; i < input.length; i++) {
    ans += input[i]
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
