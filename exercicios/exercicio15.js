function comprarHatch(nome) {
  switch (nome) {
    case 'hatch':
      console.log('Compra efetuada com sucesso!')
      break
    case 'sedans':
    case 'motocicletas':
    case 'sedans':
    case 'caminhonetes':
      console.log('Tem certeza que não prefere esse modelo?')
      break
    default:
      console.log('Não trabalhamos com esse tipo de automóvel aqui.')
  }
}

comprarHatch('hatch')
comprarHatch('sedans')
comprarHatch('motocicletas')
comprarHatch('caminhonetes')
comprarHatch('jipe')

//DO PROFESSOR
function escolherCarro(modelo) {
  switch (modelo) {
    case 'hatch':
      return 'Compra efetuada com sucesso.'
    case 'sedan':
    case 'motocicleta':
    case 'caminhonete':
      return 'Tem certeza que não prefere este modelo?'
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui.'
  }
}

console.log(escolherCarro('hatch'))
console.log(escolherCarro('motocicleta'))
console.log(escolherCarro('sedan'))
console.log(escolherCarro('caminhonete'))
console.log(escolherCarro('jetski'))
