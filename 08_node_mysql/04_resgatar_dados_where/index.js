const { response } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/books/insertbooks', (req, res) => {
    const title = req.body.title
    const pages = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pages}')`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        };

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books'

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        };

        const books = data
        /* console.log(books) */

        res.render('books', { books })
    });
})

app.get('/books/:id', (req, res) => {

    const id = req.params.id;
    const sql = `SELECT * FROM books WHERE id=${id}`

    conn.query(sql, function(err, data) {
        if (err) {
            console.log(err)
            return
        };

        const book = data[0]

        res.render('book', {book})
    }) 
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

conn.connect(function (err) {
    if (err) {
        console.log(err)
    };

    console.log('Conectado ao MySQL.');

    app.listen(3000);
})