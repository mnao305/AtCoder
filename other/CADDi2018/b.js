'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const N = Number(input[0].split(' ')[0])
  const H = Number(input[0].split(' ')[1])
  const W = Number(input[0].split(' ')[2])
  const ary = input.slice(1)

  let cnt = 0
  for (let i = 0; i < N; i++) {
    let A = Number(ary[i].split(' ')[0])
    let B = Number(ary[i].split(' ')[1])
    if (H <= A && W <= B) {
      cnt++
    }
  }
  console.log(cnt)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
