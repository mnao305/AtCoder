'use strict'

function Main (INPUT) {
  const N = Number(INPUT.split('\n')[0])
  let s = ('0' + (N % 60)).slice(-2)
  let m = ('0' + Math.floor(N / 60 % 60)).slice(-2)
  let h = ('0' + Math.floor(N / 60 / 60)).slice(-2)
  console.log(`${h}:${m}:${s}`)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
