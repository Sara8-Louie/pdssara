const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/cadastro', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`)
})