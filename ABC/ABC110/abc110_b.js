'use strict'

const main = INPUT => {
  const input = INPUT.split('\n')
  const X = Number(input[0].split(' ')[2])
  const Y = Number(input[0].split(' ')[3])
  const x = input[1].split(' ').map(n => Number(n)).sort((a, b) => b - a)[0]
  const y = input[2].split(' ').map(n => Number(n)).sort((a, b) => a - b)[0]
  let ans = 'War'

  for (let i = X + 1; i <= Y; i++) {
    if (x < i && y >= i) {
      ans = 'No War'
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
