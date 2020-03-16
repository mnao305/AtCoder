'use strict'

function Main (input) {
  const C = input.split('\n')[0]
  const vowel = ['a', 'e', 'i', 'o', 'u']
  let out = 'consonant'

  vowel.forEach((e) => {
    if (C == e) {
      out = 'vowel'
    }
  })

  console.log(out)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
