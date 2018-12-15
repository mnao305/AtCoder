'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split('')
  let ans = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'B') {
      ans.pop()
    } else {
      ans.push(input[i])
    }
  }
  console.log(ans.join(''))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
