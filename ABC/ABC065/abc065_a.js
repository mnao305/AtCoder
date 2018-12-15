'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ')
  const X = parseInt(input[0], 10)
  if (parseInt(input[1], 10) >= parseInt(input[2], 10)) {
    console.log('delicious')
  } else {
    const day = Math.abs(parseInt(input[1], 10) - parseInt(input[2], 10))
    console.log(X >= day ? 'safe' : 'dangerous')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
