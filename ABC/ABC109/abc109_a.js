'use strict'

function Main (inputs) {
  const input = inputs.split(' ')
  const a = input[0]
  const b = input[1]
  let output = 'No'

  for (let c = 1; c <= 3; c++) {
    if ((a * b * c) % 2 == 1) {
      output = 'Yes'
      break
    }
  }
  console.log(output)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
