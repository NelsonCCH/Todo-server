const express = require("express");
const router = express.Router();

const {
  getPendingTodo,
  getDoneTodo,
  postCreateTodo,
  updateTodo,
  deleteAllTodos,
} = require("../controllers/todo");

// get incomplete todos
router.get("/pending_todo", getPendingTodo);

// get completed todos
router.get("/done_todo", getDoneTodo);

// create new todo
router.post("/", postCreateTodo);

// toggle todo between complete and incomplete
router.put("/:id", updateTodo);

// delete all todos in db, both completed and incomplete ones
router.delete("/", deleteAllTodos);

module.exports = router;
