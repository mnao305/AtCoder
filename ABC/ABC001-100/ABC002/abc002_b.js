'use strict'

function Main (INPUT) {
  let W = INPUT.split('\n')[0].split('')
  const S = ['a', 'i', 'u', 'e', 'o']

  for (let i = 0; i < S.length; i++) {
    W = W.filter((a) => {
      return a !== S[i]
    })
  }
  console.log(W.join(''))
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
