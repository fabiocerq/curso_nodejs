const e = require('connect-flash')
const express = require('express')
const flash = require('express-flash')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

//criando aplicação
const app = express()

//conectando ao banco
const conn = require('./db/conn')

//Models
const Tought = require('./models/Tought')
const User = require('./models/User')

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//recebimento de resposta do body
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//session
app.use(
    session({
        name:"session",
        secret:"nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000, //1 dia de duração de validade
            expires: new Date(Date.now() + 360000), //expira automaticamente em 1 dia
            httpOnly: true
        }
    })
)

//flash messages
app.use(flash())

//public path
app.use(express.static('public'))

//set session to res
app.use((req, res, next) => {
    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

//execução do app
conn
    //.sync({force: true}) => criação da ligação entre tabelas
    .sync()
    .then(() => {
        app.listen(3000)
        console.log('Porta 3000 aberta.')
    })
    .catch((err) => console.log(err))
