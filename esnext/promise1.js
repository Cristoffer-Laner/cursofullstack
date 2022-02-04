const primeiroElemento = elemento => elemento[0]

const segundoElemento = elemento => elemento[1]

const letraMinuscula = letra => letra.toLowerCase()

const letraMaiuscula = letra => letra.toUpperCase()

p = new Promise((resolve, reject) => {
    resolve(['Ana', 'Bia', 'Lucas', 'Cris'])
})
    .then(segundoElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)