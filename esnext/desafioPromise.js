const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(path) {
    return new Promise(resolve => {
        fs.readFile(path, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.toUpperCase())
    .then(conteudo => conteudo.split('\n')) // faz com que as linhas virem um array de 3 posições
    .then(linhas => linhas[1])
    .then(console.log)