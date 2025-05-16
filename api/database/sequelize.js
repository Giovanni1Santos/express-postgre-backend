require('dotenv').config();
const { Sequelize } = require('sequelize');

const connectionString = process.env.DATABASE_URL;

let sequelize;

if (connectionString) {
  // Se existir DATABASE_URL, conecta via ela (Neon ou qualquer outro serviço com URL)
  sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      // Tenta ativar SSL só se for preciso (evita erro no local)
      ssl: connectionString.includes('sslmode=require') ? {
        require: true,
        rejectUnauthorized: false,
      } : false,
    },
  });
} else {
  // Se não tiver DATABASE_URL, conecta local via variáveis separadas
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
