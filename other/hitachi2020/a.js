'use strict'

const main = (arg) => {
  const S = arg.split('\n')[0]
  console.log(S.split('hi').filter(v => v).length ? 'No' : 'Yes')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
