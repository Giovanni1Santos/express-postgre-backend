require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');

const PORT = process.env.PORT || 3000;

// Executa o servidor localmente apenas se chamado diretamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor local rodando na porta ${PORT}`);
  });
}

module.exports = serverless(app);
