function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const resultado = 'Aprovado'

console.log(tag `${aluno} está ${resultado}.`)


function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })

    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11

console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)