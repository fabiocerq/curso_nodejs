const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao Banco.')
} catch (err) {
    console.log(`Erro: ${err}`)
}

module.exports = sequelize