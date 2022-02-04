function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator + min)
    
            resolve(aleatorio)
        }, tempo * 1000)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 10, 4),
        gerarNumerosEntre(1, 10, 0.5),
        gerarNumerosEntre(1, 10, 1),
        gerarNumerosEntre(1, 10, 3)
    ])
}

gerarVariosNumeros()
    .then(console.log)