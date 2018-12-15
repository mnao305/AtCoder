'use strict'

function Main (input) {
  const tmp = input.split('\n')[0].split(' ')
  const s = tmp[0].substr(0, 1) + tmp[1].substr(0, 1) + tmp[2].substr(0, 1)
  console.log(s.toUpperCase())
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
