// api/index.js
require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');
const syncDatabase = require('./database/sync'); // ✅ importa

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  syncDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor local rodando na porta ${PORT}`);
    });
  }).catch(err => {
    console.error('❌ Erro ao sincronizar o banco:', err);
  });
}

module.exports = serverless(app);
