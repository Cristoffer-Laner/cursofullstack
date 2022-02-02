const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerConteudo (_, conteudo) {
    console.log(conteudo.toString())
}

console.log('Inicio...')
fs.readFile(caminho, lerConteudo)
console.log('Fim...');


console.log('Início sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim sync...');