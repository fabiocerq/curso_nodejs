const {DataTypes} = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Address = db.define('Address', {

    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }

});

User.hasMany(Address); //para assincronicidade, tem que ter método de ida pra banco e volta tbm
Address.belongsTo(User);

module.exports = Address