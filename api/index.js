// api/index.js
require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Middlewares
app.use(express.json());

// Suas rotas aqui
// ex: app.use('/api/users', require('./routes/user.routes'));

const PORT = process.env.PORT || 3000;

// Executar localmente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor local rodando na porta ${PORT}`);
  });
}

// Exportar handler para Vercel
module.exports = serverless(app);
