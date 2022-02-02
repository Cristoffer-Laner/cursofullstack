function calculadora(num1, string, num2) {
  switch (string) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    case '%':
      return num1 % num2
    case '**':
      return num1 ** num2
    default:
      return 'operação inválida'
  }
}

console.log(calculadora(3, '-', 5))
console.log(calculadora(3, '+', 5))
console.log(calculadora(3, '*', 5))
console.log(calculadora(3, '/', 5))
console.log(calculadora(3, '**', 5))
console.log(calculadora(3, '%', 5))
console.log(calculadora(3, 'b', 5))
