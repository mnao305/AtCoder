'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ').map(n => Number(n))
  let X = input[0]
  let Y = input[1]
  let ans = 'No'
  if ((X + Y) % 4 == 0) {
    let Z = (X + Y) / 4
    if ((X - Z) >= 0 && (Y - Z) >= 0 && (X - Z) % 2 == 0 && (Y - Z) % 2 == 0) {
      ans = 'Yes'
    }
  }
  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
