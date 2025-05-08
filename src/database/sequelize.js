const { Sequelize } = require('sequelize');

//criando a instância do Sequelize com a connection string do .env
const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: 'postgres', //TIpo de banco de dados
    logging: false, //Desativa o log de SQL
});

module.exports = sequelize;