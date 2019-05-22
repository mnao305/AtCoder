'use strict'

const main = (INPUT) => {
  const S = INPUT.split('\n')[0]
  const mae = S.slice(0, 2)
  const usiro = S.slice(2)
  if (mae >= '01' && mae <= '12' && usiro >= '01' && usiro <= '12') {
    console.log('AMBIGUOUS')
  } else if (mae >= '00' && mae <= '99' && usiro >= '01' && usiro <= '12') {
    console.log('YYMM')
  } else if (mae >= '01' && mae <= '12' && usiro >= '00' && usiro <= '99') {
    console.log('MMYY')
  } else {
    console.log('NA')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
