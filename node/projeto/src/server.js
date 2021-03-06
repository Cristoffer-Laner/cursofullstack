const porta = 3003
const express = require('express')
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const novoProduto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(novoProduto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const prodDeletado = bancoDeDados.deletarProduto(req.params.id)
    res.send(prodDeletado)
})

app.listen(porta, () => console.log(`Servidor está executando na porta ${porta}`))