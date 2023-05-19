const express = require('express')
const router = express.Router()

const {
    getPendingTodo,
    getDoneTodo,
    postCreateTodo,
    updateTodo,
    deleteAllTodos,
} = require("../controllers/todo")

router.get('/pending_todo', getPendingTodo)

router.get('/done_todo', getDoneTodo)

router.post('/', postCreateTodo)

router.put('/:id', updateTodo)

router.delete('/', deleteAllTodos)

module.exports = router