const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get("/crf", (req, res) => {
    res.sendFile(`${basePath}/manutencao.html`)
})

router.get("/cof", (req, res) => {
    res.sendFile(`${basePath}/obras.html`)
})

module.exports = router;