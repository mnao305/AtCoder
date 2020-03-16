'use strict'

const main = (arg) => {
  const input = arg.split('\n')
  const tmp = input.shift()
  const A = Number(tmp[0])
  const B = Number(tmp[1])
  const M = Number(tmp[2])

  const aAry = input.shift().split(' ').map(n => Number(n))
  const bAry = input.shift().split(' ').map(n => Number(n))
  let ans = Math.min(...aAry) + Math.min(...bAry)

  for (let i = 0; i < input.length; i++) {
    const tmp = input[i].split(' ')

    if (ans > aAry[tmp[0] - 1] + bAry[tmp[1] - 1] - tmp[2]) {
      ans = aAry[tmp[0] - 1] + bAry[tmp[1] - 1] - tmp[2]
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
