'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n').map(n => Number(n))
  let yen = input[0] - input[1]
  const B = input[2]
  while (yen >= B) {
    yen -= B
  }
  console.log(yen)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
