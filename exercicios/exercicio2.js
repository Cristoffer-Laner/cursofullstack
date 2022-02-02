function triang(lado1, lado2, lado3) {
  let lados = [lado1, lado2, lado3]
  if (lado1 == lado2 && lado2 == lado3) {
    return 'Os três lados do triângulo são iguais, portanto o triângulo é Equilátero.'
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    return 'Pelo menos dois lados do triângulo são iguais, portanto o triângulo é Isósceles.'
  } else {
    return 'Os três lados do triângulo são de diferentes tamanhos, portanto o triângulo é Escaleno.'
  }
}

console.log(triang(1, 2, 3))
