'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const DataTypes = db.Sequelize;

module.exports = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})
