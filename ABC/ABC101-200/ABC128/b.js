'use strict'

const main = (INPUT) => {
  let input = INPUT.split('\n')
  const N = input[0]
  input.shift()
  let ary = input.map(v => v.split(' '))
  ary.sort((a, b) => {
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    if (Number(a[1]) > Number(b[1])) return -1
    if (Number(a[1]) < Number(b[1])) return 1
    return 0
  })

  ary = ary.map(v => v.join(' '))

  for (let i = 0; i < N; i++) {
    console.log(input.indexOf(ary[i]) + 1)
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
