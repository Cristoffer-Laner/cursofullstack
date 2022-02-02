function verificaDia(numero) {
  switch (numero) {
    case 7:
    case 1:
      console.log('fim de semana')
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log('dia útil')
      break
    default:
      console.log('dia inválido')
      break
  }
}

verificaDia(3)

//DO PROFESSOR
function classificaDia(numero) {
  switch (numero) {
    case 1:
      return 'Fim de semana'
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 'Dia útil'
    case 7:
      return 'Fim de semana'
    default:
      return 'Dia inválido'
  }
}

console.log(classificaDia(1))
console.log(classificaDia(2))
console.log(classificaDia(3))
console.log(classificaDia(4))
console.log(classificaDia(5))
console.log(classificaDia(6))
console.log(classificaDia(7))
console.log(classificaDia('a'))
