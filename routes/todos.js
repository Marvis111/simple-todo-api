const { Router } = require('express')
const todoController = require('../controllers/todoController')

const todoRoutes = Router()

todoRoutes.get('/',todoController.getAllTodos);

module.exports = todoRoutes