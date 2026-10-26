const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const produtos = [
    {
        id: 1,
        nome: 'Caneca',
        preco: 20,
        descrição: 'Caneca bege.',
        imagem: 'https://greta.studio/cdn/shop/collections/LISO_1.jpg?v=1716566900'
    },
    {
        id: 2,
        nome: 'Caderno',
        preco: 15,
        descrição: 'Caderno simples para anotações.',
        imagem: 'https://images.unsplash.com/photo-1611079830811-865ff4428d17?fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
    },
    {
        id: 3,
        nome: 'Bolsa',
        preco: 40,
        descrição: 'Bolsa marrom.',
        imagem: 'https://www.canussa.com/cdn/shop/files/Canussa_SesionEspacioPalm-19.webp?v=1710932305&width=1100'
    }
]

app.get('/', (req, res) => {
    res.render('home', { produtos })
})

app.get('/produto/:id', (req, res) => {
    const produto = produtos.find(
        p => p.id === Number(req.params.id)
    )

    if (!produto) {
        return res.status(404).send('Produto nao encontrado.')
    }

    res.render('produto', { produto })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
