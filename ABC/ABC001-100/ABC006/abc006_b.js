'use strict'

function Main (INPUT) {
  const n = Number(INPUT.split('\n')[0]) - 1
  let t = [0, 0, 1]
  if (n >= 3) {
    for (let i = 3; i <= n; i++) {
      t[i] = (t[i - 1] + t[i - 2] + t[i - 3]) % 10007
    }
    console.log(t[n])
  } else {
    console.log(t[n])
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
