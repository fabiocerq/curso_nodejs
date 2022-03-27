const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.engine('handlebars', exphbs())
app.use('viewengine', 'handlebars')

app.use(express.static('public'))

app.listen(3000)

