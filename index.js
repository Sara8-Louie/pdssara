const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const port = 3000

app.engine ('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/', (req, res)=>{
    const user = {
        name: 'Sara',
        email: 'sara@example.com',
        age: 18
    }
    
    const palavra ='LALA LISA LA DIVA SAWADIKA THERES SHE GO!'
    const auth = true;
    res.render('home', { user, palavra, auth })

})

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`)
})
