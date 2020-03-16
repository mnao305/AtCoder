'use strict'

function Main (INPUT) {
  const m = Number(INPUT)
  const km = m / 1000
  if (m < 100) {
    console.log('00')
  } else if (km <= 5) {
    let tmp = `00${km * 10}`.slice(-2)
    console.log(tmp)
  } else if (km <= 30) {
    console.log(km + 50)
  } else if (km >= 35 && km <= 70) {
    console.log(((km - 30) / 5) + 80)
  } else {
    console.log('89')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
