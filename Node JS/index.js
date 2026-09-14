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
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/cadastro', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/usersform.html`)
})

app.get('/sobre', (req, res) => {
    res.sendFile(`${basePath}/sobre.html`)
})

app.get('/contato', (req, res) => {
    res.sendFile(`${basePath}/contato.html`)
})

app.listen(port, () => {
<<<<<<< HEAD
    console.log(`O servidor está rodando na porta: ${port}`) 
})

app.get('/login', (req, res) => {
    res.sendFile(`${basePath}/login.html`)
})

=======
    console.log(`O servidor está rodando na porta ${port}`)
})
>>>>>>> c041800 (Aula 14/09)
