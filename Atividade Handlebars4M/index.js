
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

const produtos = [
    { id: 0, nome: 'Camisa' },
    { id: 1, nome: 'Tênis' },
    { id: 2, nome: 'Bola' }
]

app.get('/', (req, res) => {
    res.render('home', { produtos })
})

app.get('/produto/:id', (req, res) => {
    const produto = produtos[parseInt(req.params.id)]

    if (!produto) {
        return res.status(404).send('Produto não encontrado')
    }

    res.render('produto', { produto })
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})

