'use strict'

function Main (INPUT) {
  const N = Number(INPUT)
  if (N <= 59) {
    console.log('Bad')
  } else if (N <= 89) {
    console.log('Good')
  } else {
    console.log(N <= 99 ? 'Great' : 'Perfect')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
