const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const User = require('./User');

//Definindo o modelo To do
const Todo = sequelize.define('Todo', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    done:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Todo.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Todo, { foreignKey: 'userId' });

//Exportando o modelo Todo
module.exports = Todo