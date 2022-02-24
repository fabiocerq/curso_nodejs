const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine) //como partials está ativado, não pode ser engine só no handlebars puro
app.set('view engine','handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c']


    res.render('dashboard', {items})
})

app.get('/post', (req,res) => {
    const post = {
        title: "Aprender Node.js",
        category: "JavaScript",
        body: "Este artigo vai te ensinar a progrmar em JS",
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const post = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Este artigo vai te ensinar a progrmar em JS",
            comments: 4
        },
        {
            title: "Aprender API Restfull",
            category: "API em Node.js",
            body: "Este artigo vai te ensinar a progrmar APIS em Node.js",
            comments: 15
        }
    ]

    res.render('blog', {post})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Fábio',
        surname: 'Cerqueira'
    };

    const auth = true;

    const approved = false;

    res.render('home', {user: user, auth, approved})
})

app.listen(3000, () => {
    console.log("App rodando!")
})