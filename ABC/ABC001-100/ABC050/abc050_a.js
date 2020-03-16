'use strict'

function Main (input) {
  const tmp = input.split('\n')[0].split(' ')
  console.log(eval(tmp[0] + tmp[1] + tmp[2]))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
