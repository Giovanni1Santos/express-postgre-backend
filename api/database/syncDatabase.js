const sequelize = require('./sequelize');
require('../models/User');
require('../models/To_do');

const syncDatabase = async () => {
  try {
    await sequelize.sync(); // ou { alter: true } em dev local
    console.log('✅ Banco de dados sincronizado');
  } catch (error) {
    console.error('❌ Erro ao sincronizar o banco de dados:', error);
    throw error;
  }
};

module.exports = syncDatabase;
