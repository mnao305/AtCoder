'use strict'

function Main (input) {
  const tmp = input.split('\n')
  let a = tmp[1].split(' ')
  const len = tmp[0]
  let cnt = 0

  let i = 0
  while (true) {
    if (a[i] % 2 == 1) {
      break
    }
    i++
    if (!(i < len)) {
      cnt++
      i = 0
      for (let j = 0; j < len; j++) {
        a[j] /= 2
      }
    }
  }
  console.log(cnt)
}
//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
