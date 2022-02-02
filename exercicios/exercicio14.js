function frutas(fruta) {
  switch (fruta) {
    case 'maçã':
      return 'não vendemos essa fruta aqui'
    case 'kiwi':
      return 'estamos com escassez de kiwi'
    case 'melancia':
      return 'aqui está, são 3 reais o kg'
    default:
      return 'fruta inválida'
  }
}

console.log(frutas('melancia'))
console.log(frutas('kiwi'))
console.log(frutas('maçã'))
console.log(frutas('pedrinho'))

// DO PROFESSOR
function venderFruta(fruta) {
  switch (fruta) {
    case 'maçã':
      console.log('Não vendemos esta fruta aqui.')
      break
    case 'kiwi':
      console.log('Estamos com escassez de kiwi.')
      break
    case 'melancia':
      console.log('Aqui está, custa R$ 3,00 o quilo.')
      break
    default:
      console.log('Erro, fruta inválida.')
  }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')
