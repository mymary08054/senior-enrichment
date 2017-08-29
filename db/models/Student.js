'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const DataTypes = db.Sequelize;

module.exports = db.define('student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true,
        }
    }
})
