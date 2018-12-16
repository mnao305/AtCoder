'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')
  const H = input[0].split(' ')[0]
  let W = input[0].split(' ')[1]
  const a = input.slice(1)
  let ans = []
  for (let i = 0; i < H; i++) {
    if (a[i].indexOf('#') != -1) {
      ans.push(a[i])
    }
  }

  for (let i = 0; i < W; i++) {
    let cnt = 0
    for (let j = 0; j < ans.length; j++) {
      if (ans[j][i] == '#') {
        cnt++
      }
    }

    if (cnt == 0) {
      for (let j = 0; j < ans.length; j++) {
        let tmp = ans[j].split('')
        tmp.splice(i, 1)
        ans[j] = tmp.join('')
      }
      i--
      W--
    }
  }
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i])
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
