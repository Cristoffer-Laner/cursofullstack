const fs = require('fs')

const produto = {
    nome: 'carro',
    preco: 123.456,
    marca: 'Audi',
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado2.json', JSON.stringify(produto), 
err => console.log(err || 'Arquivo salvo!'))