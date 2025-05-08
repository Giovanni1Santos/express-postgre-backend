
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/to_do.controller');
const authenticateToken = require('../middlewares/authMiddleware');

// Todas as rotas abaixo exigem token JWT válido

// Criar tarefa
router.post('/', authenticateToken, todoController.createTodo);

// Listar todas as tarefas do usuário autenticado
router.get('/', authenticateToken, todoController.getTodos);

// Atualizar tarefa por ID
router.put('/:id', authenticateToken, todoController.updateTodo);

// Deletar tarefa por ID
router.delete('/:id', authenticateToken, todoController.deleteTodo);

module.exports = router;
