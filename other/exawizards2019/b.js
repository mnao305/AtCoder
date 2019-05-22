'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0]
  const s = INPUT.split('\n')[1]

  let R = 0
  let B = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'R') {
      R++
    } else {
      B++
    }
  }
  if (R > B) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
