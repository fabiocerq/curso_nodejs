const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User',{
    name: {
        type: DataTypes.STRING,
        allowNull: false //n aceita nada null
    },
    occupation: {
        type: DataTypes.STRING,
        required: true //n aceita nada vazio
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = User