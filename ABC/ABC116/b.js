'use strict'

const main = (INPUT) => {
  const s = Number(INPUT.split('\n')[0])
  const a = [s]
  let ans
  while (true) {
    let tmp = a[a.length - 1]
    let add
    if (tmp % 2 == 0) {
      add = tmp / 2
    } else {
      add = tmp * 3 + 1
    }
    if (a.indexOf(add) >= 0) {
      ans = a.length + 1
      break
    } else {
      a.push(add)
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
