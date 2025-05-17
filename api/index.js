require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./app');

const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  const syncDatabase = require('./database/syncDatabase');
  syncDatabase().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  });
}

module.exports = serverless(app);
