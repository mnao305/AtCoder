'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')
  let ans = [[], [], [], []]

  let k = 3
  for (let i = 0; i < 4; i++) {
    let tmp = input[i].split(' ')
    let l = 3
    for (let j = 0; j < 4; j++) {
      ans[k][l] = tmp[j]
      l--
    }
    k--
  }
  console.log(ans[0].join(' '))
  console.log(ans[1].join(' '))
  console.log(ans[2].join(' '))
  console.log(ans[3].join(' '))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
