require('dotenv').config();
const { Sequelize } = require('sequelize');

// Usa a DATABASE_URL diretamente
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao Neon com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Falha na conexão com o Neon:', error.message);
    process.exit(1);
  }
})();
