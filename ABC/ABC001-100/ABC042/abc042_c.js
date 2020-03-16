'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const N = input[0].split(' ')[0].split('').map(n => Number(n)).reverse()
  const D = input[1].split(' ').map(n => Number(n))
  const ary = []
  for (let i = 0; i <= 9; i++) {
    if (D.indexOf(i) == -1) {
      ary.push(i)
    }
  }
  let flag
  for (let i = 0; i < N.length; i++) {
    while (true) {
      if (ary.indexOf(N[i]) >= 0) {
        if (flag && i == N.length - 1) {
          for (let j = 0; j < i; j++) {
            N[j] = ary[0]
          }
          i = 0
          flag = false
          continue
        }
        break
      }
      N[i] = N[i] + 1
      flag = true
      if (N[i] >= 10) {
        if (i == N.length - 1) {
          N.push(1)
          N[i] = 0
        } else {
          N[i + 1] = N[i + 1] + 1
          N[i] = 0
        }
      }
    }
  }

  console.log(N.reverse().join(''))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
