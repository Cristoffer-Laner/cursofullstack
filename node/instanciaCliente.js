const contadorA = require('./instanciaUnica') //retorna um objeto literal
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor); //apontam para o mesmo local na memória, require faz cache

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor); //valores independentes