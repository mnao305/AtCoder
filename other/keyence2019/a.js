'use strict'

const main = (INPUT) => {
  const N = INPUT.split('\n')[0].split(' ')
  let ans = 'NO'
  if (N.indexOf('1') >= 0 && N.indexOf('9') >= 0 && N.indexOf('7') >= 0 && N.indexOf('4') >= 0) {
    ans = 'YES'
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
