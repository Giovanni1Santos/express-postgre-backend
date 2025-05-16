require('dotenv').config();
const { Sequelize } = require('sequelize');

const connectionString = process.env.DATABASE_URL;

let sequelize;

if (connectionString) {
  // Conexão via URL (Neon, Vercel, etc)
  sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // Conexão local via variáveis separadas
  sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        ssl: false,
      },
    }
  );
}

module.exports = sequelize;
