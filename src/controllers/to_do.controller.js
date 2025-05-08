//controller de tarefas 



const Todo = require('../models/To_do');

// Criar uma nova tarefa
module.exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;  // Garantir que o usuário esteja autenticado

  try {
    const todo = await Todo.create({ title, description, userId });
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar tarefa' });
  }
};

// Listar todas as tarefas do usuário autenticado
module.exports.getTodos = async (req, res) => {
  const userId = req.userId;

  try {
    const todos = await Todo.findAll({
      where: { userId },
    });
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar tarefas' });
  }
};

// Atualizar uma tarefa
module.exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, done } = req.body;
  const userId = req.userId;

  try {
    const todo = await Todo.findOne({ where: { id, userId } });

    if (!todo) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.done = done !== undefined ? done : todo.done;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar tarefa' });
  }
};

// Deletar uma tarefa
module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const todo = await Todo.findOne({ where: { id, userId } });

    if (!todo) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    await todo.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar tarefa' });
  }
};
