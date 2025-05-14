// api/index.js
require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const app = express();

// --- Middlewares, CORS, JSON, etc
app.use(express.json());
// ... suas rotas (user.routes, to_do.routes, etc)

// Se for invocado diretamente (node api/index.js), sobe o servidor na porta:
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor local rodando na porta ${PORT}`);
  });
}

// Exporta para Vercel (serverless handler)
module.exports = app;
module.exports.handler = serverless(app);
