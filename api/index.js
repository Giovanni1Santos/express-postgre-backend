require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');

console.log("🔥 INDEX.JS CARREGADO 🔥");

// Só executa localmente
if (!process.env.VERCEL) {
  const syncDatabase = require('./database/syncDatabase');
  syncDatabase().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  });
}

// Exporta para Vercel
module.exports = serverless(app);
