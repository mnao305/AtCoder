'use strict'

function Main (input) {
  const tmp = input.split(' ').map(n => Number(n))
  tmp.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
  })
  console.log(tmp[0] * 10 + tmp[1] + tmp[2])
}
//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
