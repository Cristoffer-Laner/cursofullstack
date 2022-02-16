function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        console.log(`Nº de tentativas: ${tentativas}`)
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw {tentativas: tentativas,
                mensagem: "Excedeu o número máx. de tentativas!"}
        } else {            
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)