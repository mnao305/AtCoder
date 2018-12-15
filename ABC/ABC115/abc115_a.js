'use strict'

const main = INPUT => {
  const N = Number(INPUT.split('\n')[0])
  console.log(`Christmas${' Eve'.repeat(25 - N)}`)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
