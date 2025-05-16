// api/config/syncDatabase.js
const sequelize = require('./sequelize');
require('../models/User');
require('../models/To_do');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // ou force: false
    console.log('✅ Banco de dados sincronizado');
  } catch (error) {
    console.error('❌ Erro ao sincronizar o banco de dados:', error);
    throw error;
  }
};

module.exports = syncDatabase;
