const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')
const port = 3000

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'SenhaLocal_4M_2026',
    database: 'bd_livros_4M',
    port: 3306
})

conn.connect((err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log('Conectado ao banco de dados!')

    app.listen(port, () => {
        console.log(`O servidor está rodando na porta ${port}`)
    })
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty


    const sql = 'INSERT INTO BOOKS (title, pageqty) VALUES (?, ?)'

    conn.query(sql, [title, pageqty], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).send('Erro ao cadastrar livro.')
        }

        res.redirect('/')
    })
})