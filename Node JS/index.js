const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {
    req.authStatus = true
    if (req.authStatus == true) {
        console.log('Está logado, pode continuar')
        next()
    }
}
app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/cadastro', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`) 
})

app.get('/login', (req, res) => {
    res.sendFile(`${basePath}/login.html`)
})

