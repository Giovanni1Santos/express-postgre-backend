require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');
const syncDatabase = require('./database/syncDatabase');

const isVercel = process.env.VERCEL === '1';

if (!isVercel) {
  // Rodando localmente -> sincroniza banco
  syncDatabase().then(() => {
    console.log('✅ Banco sincronizado');

    if (require.main === module) {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
      });
    }
  });
}

module.exports = serverless(app); // usado pela Vercel
