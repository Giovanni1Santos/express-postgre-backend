require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');
const syncDatabase = require('./database/syncDatabase');

// Faz a sincronização antes de exportar (só 1 vez)
syncDatabase().then(() => {
  console.log('✅ Banco sincronizado com sucesso');

  // Se estiver rodando localmente (com nodemon ou node diretamente)
  if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando localmente na porta ${PORT}`);
    });
  }
});

module.exports = serverless(app);
