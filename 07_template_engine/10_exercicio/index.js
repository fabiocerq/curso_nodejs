const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

/* app.get('/camisa', (req,res) => {
    res.render('camisa')
})

app.get('/calca', (req,res) => {
    res.render('calca')
})

app.get('/bone', (req,res) => {
    res.render('bone')
}) */

const products = [
    {
        id: '1',
        name: "Camisa T-Shirt",
        price: 48.99
    },
    {
        id: '2',
        name: "Boné Aba Reta",
        price: 55.00,
    },
    {
        id: '3',
        name: "Calça Slim",
        price: 89.99
    }
]

app.get('/', (req, res) => {

/*     const product = [
        {
            ID: 'camisa',
            name: "Camisa T-Shirt",
            price: 48.99
        },
        {
            ID: 'bone',
            name: "Boné Aba Reta",
            price: 55.00,
        },
        {
            ID: 'calca',
            name: "Calça Slim",
            price: 89.99
        }
    ]
 */
    res.render('home', {products})
})

app.get('/product/:id', (req, res) => {
    const product = products[parseInt(req.params.id)]
    
    res.render('product', {product})
})

app.listen(3000, () => {
    console.log(`App na porta 3000`)
})