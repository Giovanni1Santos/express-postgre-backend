// api/index.js
require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  // Se rodar localmente, sobe o servidor normalmente, sem sincronizar banco aqui
  app.listen(PORT, () => {
    console.log(`🚀 Servidor local rodando na porta ${PORT}`);
  });
}

// Exporta a app para Vercel funcionar com serverless
module.exports = serverless(app);
