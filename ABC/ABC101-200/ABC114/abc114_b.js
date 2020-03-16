'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split('')
  let min = Number(input[0] + input[1] + input[2])
  for (let i = 1; i <= input.length - 3; i++) {
    let tmp = Number(input[i] + input[i + 1] + input[i + 2])
    if (Math.abs(753 - min) > Math.abs(753 - tmp)) {
      min = tmp
    }
  }
  console.log(Math.abs(753 - min))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
