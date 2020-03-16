'use strict'

function Main (input) {
  const tmp = input.split('\n')
  const A = tmp[0]
  const B = tmp[1]
  const C = tmp[2]
  const X = tmp[3]
  let cnt = 0

  for (let a = 0; a <= A; a++) {
    for (let b = 0; b <= B; b++) {
      for (let c = 0; c <= C; c++) {
        let total = a * 500 + b * 100 + c * 50
        if (total == X) {
          cnt++
        }
      }
    }
  }
  console.log(cnt)
}
//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
