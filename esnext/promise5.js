function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else (
            resolve(valor)
        )
    })
}

funcionarOuNao('Deu certo!', 0.5)
    .then(v => console.log(`Sucesso: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))