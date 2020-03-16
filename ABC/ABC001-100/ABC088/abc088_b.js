'use strict'

function Main (input) {
  let tmp = input.split('\n')
  const N = parseInt(tmp[0], 10)
  let ary = tmp[1].split(' ')
  let alice = 0
  let bob = 0

  for (let i = 0; i < N; i++) {
    let max = Math.max(...ary)
    let id = ary.indexOf(`${max}`)
    ary.splice(id, 1)

    if (i % 2 == 0) {
      alice += max
    } else {
      bob += max
    }
  }

  console.log(alice - bob)
}
//* この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
