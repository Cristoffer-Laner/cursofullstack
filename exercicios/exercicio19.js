function calcularPedido(codigo, qtd) {
  switch (codigo) {
    case 100:
      console.log(`R$${(3 * qtd).toFixed(2)}`)
      break
    case 200:
      console.log(`R$${(4 * qtd).toFixed(2)}`)
      break
    case 300:
      console.log(`R$${(5.5 * qtd).toFixed(2)}`)
      break
    case 400:
      console.log(`R$${(7.5 * qtd).toFixed(2)}`)
      break
    case 500:
      console.log(`R$${(3.5 * qtd).toFixed(2)}`)
      break
    case 600:
      console.log(`R$${(2.8 * qtd).toFixed(2)}`)
      break
    default:
      console.log('Produto não existente.')
  }
}

calcularPedido(100, 1)
calcularPedido(200, 2)
calcularPedido(300, 3)
calcularPedido(400, 4)
calcularPedido(500, 5)
calcularPedido(600, 6)
calcularPedido(900, 7)
