'use strict'

const main = (INPUT) => {
  const a = INPUT.split('\n')[0].split(' ')
  if (a.every(v => v == a[0])) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
