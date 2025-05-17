// scripts/syncDatabase.js
require('dotenv').config();
const syncDatabase = require('../api/database/syncDatabase');

syncDatabase()
  .then(() => {
    console.log('✅ Banco sincronizado com sucesso');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Erro ao sincronizar banco:', err);
    process.exit(1);
  });
