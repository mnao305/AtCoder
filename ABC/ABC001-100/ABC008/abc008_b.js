'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  const N = Number(input[0])
  input.shift()
  let cnt = {}
  for (let i = 0; i < N; i++) {
    cnt[input[i]] = cnt[input[i]] ? cnt[input[i]] + 1 : 1
  }
  const keys = Object.keys(cnt)
  let max = keys[0]
  for (let i = 1; i < Object.keys(cnt).length; i++) {
    if (cnt[max] < cnt[keys[i]]) {
      max = keys[i]
    }
  }
  console.log(max)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
