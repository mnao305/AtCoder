'use strict'
function Main (input) {
  const tmp = input.split(' ')
  let five = 0
  let seven = 0
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] == 5) {
      five++
    } else if (tmp[i] == 7) {
      seven++
    }
  }
  if (five == 2 && seven == 1) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
