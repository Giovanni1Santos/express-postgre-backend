const sequelize = require('./sequelize');
const User = require('../models/User');
const Todo = require('../models/Todo');

//sincroniza todos os modelos com o banco de dados
const syncDatabase = async ()=> {
    try{
        await sequelize.sync({ force:false }); //'force:false' impede que as tabelas sejam recriadas todas as vzs
        console.log('Banco de dados sincronizado');
    }catch(error){
        console.error("Erro ao sincronizar o banco de dados", error);
    }
};

syncDatabase();