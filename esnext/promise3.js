function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)

        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 15)
    .then(numero => numero * 10)
    .then(numX10 => `o numero gerado foi ${numX10}`)
    .then(console.log)