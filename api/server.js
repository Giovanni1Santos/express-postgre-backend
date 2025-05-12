//Inicia o servidor Express 

// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Importa o app configurado
const app = require("./app");

// Define a porta (usa do .env ou padrão 3000)
const PORT = process.env.PORT || 3000;

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});