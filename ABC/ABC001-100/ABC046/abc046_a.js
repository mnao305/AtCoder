'use strict'

function Main (input) {
  const tmp = input.split('\n')
  const ary = tmp[0].split(' ')

  let after = ary.filter((x, i, self) => self.indexOf(x) === i)
  console.log(after.length)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
