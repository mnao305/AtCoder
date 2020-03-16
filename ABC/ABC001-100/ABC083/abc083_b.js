'use strict'

function Main (input) {
  const tmp = input.split(' ')
  const N = parseInt(tmp[0], 10)
  const A = parseInt(tmp[1], 10)
  const B = parseInt(tmp[2], 10)
  let sum = 0

  for (let i = 1; i <= N; i++) {
    let tmp = i
    if (tmp >= 10) {
      let tmpStr = tmp + ''
      tmp = 0
      for (let j = 0; j < tmpStr.length; j++) {
        tmp += parseInt(tmpStr[j], 10)
      }
    }
    if (tmp >= A && tmp <= B) {
      sum += i
    }
  }

  console.log(sum)
}
//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
