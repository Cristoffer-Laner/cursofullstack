function aumentoSalario(plano, salario) {
  switch (plano) {
    case 'A':
    case 'a':
      return salario * 1.1
    case 'B':
    case 'b':
      return salario * 1.15
    case 'C':
    case 'c':
      return salario * 1.2
    default:
      return 'Plano inválido.'
  }
}

console.log(aumentoSalario('a', 1000))
console.log(aumentoSalario('A', 1000))
console.log(aumentoSalario('b', 1000))
console.log(aumentoSalario('c', 1000))
console.log(aumentoSalario(7, 1000))
console.log(aumentoSalario('', 1000))
