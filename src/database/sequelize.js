require('dotenv').config();
const { Sequelize } = require('sequelize');

// Montando manualmente a connection string a partir das variáveis
const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
  {
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
