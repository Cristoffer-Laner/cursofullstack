function verificaAnoBissexto(ano) {
  if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0) {
    return `o ano ${ano} é bissexto`
  } else if (ano % 4 == 0 && ano % 100 != 0 && ano % 400 != 0) {
    return `o ano ${ano} é bissexto`
  } else if (ano % 4 != 0 && ano % 100 != 0 && ano % 400 != 0) {
    return `o ano ${ano} NÃO é bissexto`
  } else if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 != 0) {
    return `o ano ${ano} NÃO é bissexto`
  }
}

console.log(verificaAnoBissexto(2021))

// DO PROFESSOR
function calcularAnoBissexto(ano) {
  if (ano <= 0) {
    return false
  } else if (ano % 400 == 0) {
    return true
  } else if (ano % 100 == 0) {
    return false
  } else if (ano % 4 == 0) {
    return true
  } else {
    return false
  }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))
