'use strict'

function Main (input) {
  const tmp = input.split('\n')[0].split(' ')
  const A = parseInt(tmp[0], 10)
  const B = parseInt(tmp[1], 10)
  let time = A + B

  if (time >= 24) {
    time -= 24
  }

  console.log(time)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
