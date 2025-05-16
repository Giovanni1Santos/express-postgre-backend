// api/index.js
require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');
const sequelize = require('./database/sequelize');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Apenas verifica a conexão (não altera schema)
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco verificada');

    if (require.main === module) {
      app.listen(PORT, () => {
        console.log(`🚀 Servidor local na porta ${PORT}`);
      });
    }
  } catch (error) {
    console.error('❌ Falha na inicialização:', error);
    process.exit(1);
  }
};

startServer();

// Export para Vercel
module.exports.handler = serverless(app);