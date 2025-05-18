require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');

if (!process.env.VERCEL) {
  const syncDatabase = require('./database/syncDatabase');
  syncDatabase().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  });
}

// Na Vercel, não executa o syncDatabase
module.exports = serverless(app);
