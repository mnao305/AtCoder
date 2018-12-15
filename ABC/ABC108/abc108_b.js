'use strict'

function Main (input) {
  const tmp = input.split('\n')
  const k = input
  let cnt = 0

  for (let i = 2; i <= k; i += 2) {
    for (let j = 1; j <= k; j += 2) {
      cnt++
    }
  }
  console.log(cnt)
}
//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
