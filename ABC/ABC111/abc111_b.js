'use strict'

function Main (INPUT) {
  const N = Number(INPUT.split('\n')[0])
  const ary = [111, 222, 333, 444, 555, 666, 777, 888, 999]

  for (let i = 0; i < ary.length; i++) {
    let tmp = ary[i] - N
    if (tmp >= 0) {
      console.log(ary[i])
      break
    }
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
