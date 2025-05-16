// api/database/sync.js
const sequelize = require('./sequelize');
const chalk = require('chalk');

module.exports = async () => {
  try {
    console.log(chalk.yellow('\n🔄 Iniciando sincronização manual...'));
    console.log(chalk.gray('⚠️  Use apenas em desenvolvimento!\n'));

    const options = {
      alter: true,          // Altera o schema
      force: false,         // ⚠️ NUNCA use 'true' em produção!
      logging: console.log  // Mostra SQL gerado
    };

    await sequelize.sync(options);
    console.log(chalk.green('\n✅ Sincronização concluída! Schema atualizado.\n'));

  } catch (error) {
    console.error(chalk.red('\n❌ ERRO na sincronização:'));
    console.error(chalk.red(error.stack));
    process.exit(1);
  }
};