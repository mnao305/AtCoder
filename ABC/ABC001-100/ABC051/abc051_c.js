'use strict'

function Main (INPUT) {
  const input = INPUT.split('\n')[0].split(' ')
  const sx = input[0]
  const sy = input[1]
  const tx = input[2]
  const ty = input[3]
  let ans = ''

  for (let i = 0; i < ty - sy; i++) {
    ans += 'U'
  }
  for (let i = 0; i < tx - sx; i++) {
    ans += 'R'
  }
  for (let i = 0; i < ty - sy; i++) {
    ans += 'D'
  }
  for (let i = 0; i <= tx - sx; i++) {
    ans += 'L'
  }

  for (let i = 0; i <= ty - sy; i++) {
    ans += 'U'
  }
  for (let i = 0; i <= tx - sx; i++) {
    ans += 'R'
  }
  ans += 'DR'
  for (let i = 0; i <= ty - sy; i++) {
    ans += 'D'
  }
  for (let i = 0; i <= tx - sx; i++) {
    ans += 'L'
  }
  ans += 'U'

  console.log(ans)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
