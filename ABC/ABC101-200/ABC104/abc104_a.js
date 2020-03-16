'use strict'

function Main (INPUT) {
  const R = INPUT
  if (R < 1200) {
    console.log('ABC')
  } else {
    console.log(R < 2800 ? 'ARC' : 'AGC')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
