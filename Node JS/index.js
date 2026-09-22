const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/login', (req, res) => {
    res.sendFile(`${basePath}/login.html`)
})

app.get('/cadastro', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

app.get('/sobre', (req, res) => {
    res.sendFile(`${basePath}/sobre.html`)
})

app.get('/contato', (req, res) => {
    res.sendFile(`${basePath}/contato.html`)
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`)
})
