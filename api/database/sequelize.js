require('dotenv').config();
const { Sequelize } = require('sequelize');
const pg = require('pg');

const connectionString = process.env.DATABASE_URL;

let sequelize;

if (connectionString) {
  // Conexão otimizada para Neon no Vercel
  sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    dialectModule: pg,
    logging: false, // Desativa logs em produção
    pool: { // Configurações de pool otimizadas
      max: 5,     // Número máximo de conexões
      min: 0,     // Número mínimo de conexões
      acquire: 30000, // Tempo máximo (ms) para adquirir conexão
      idle: 10000 // Tempo máximo (ms) que uma conexão pode ficar idle
    },
    dialectOptions: {
      ssl: { // Configurações SSL para Neon
        require: true,
        rejectUnauthorized: false
      },
      // Configuração específica para Neon (opcional)
      connection: {
        application_name: 'vercel-application' // Identifica sua app nos logs
      }
    },
    retry: { // Configuração de retentativas
      match: [/SequelizeConnectionError/, /SequelizeConnectionRefusedError/],
      max: 3 // Número máximo de tentativas
    }
  });
} else {
  // Configuração para desenvolvimento local
  sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE || 'postgres',
    process.env.POSTGRES_USER || 'postgres',
    process.env.POSTGRES_PASSWORD || 'postgres',
    {
      host: process.env.POSTGRES_HOST || 'localhost',
      port: process.env.POSTGRES_PORT || 5432,
      dialect: 'postgres',
      dialectModule: pg,
      logging: console.log, // Mostra logs em desenvolvimento
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      dialectOptions: {
        ssl: false // SSL desativado localmente
      }
    }
  );
}

// Adicionando eventos para monitoramento (opcional)
sequelize.addHook('afterConnect', (connection) => {
  console.log('✅ Conexão com o banco de dados estabelecida');
});

sequelize.addHook('afterDisconnect', () => {
  console.log('❌ Conexão com o banco de dados encerrada');
});

module.exports = sequelize;