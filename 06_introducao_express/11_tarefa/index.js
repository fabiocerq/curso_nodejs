const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const setores = require('./setor')

const basePath = path.join(__dirname, 'templates')


app.use('/setor', setores)

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next)  {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App aberto na Porta ${port}`)
})