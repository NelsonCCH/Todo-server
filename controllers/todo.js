const Todo = require('../models/todo')

exports.getPendingTodo = async (req, res) => {
    try {
        const todos = await Todo.find({complete:false}).sort({ content: 1 });
        res.json(todos);
    } catch (err) {
        res.status(400).json({ message: 'Failed to get todos', error: err.message });
    }
}

exports.getDoneTodo = async (req, res) => {
    try {
        const todos = await Todo.find({complete:true}).sort({ content: 1 });
        res.json(todos);
    } catch (err) {
        res.status(400).json({ message: 'Failed to get todos', error: err.message });
    }
}

exports.postCreateTodo = async (req, res) => {
    try {
        const data = await Todo.create(req.body);
        res.json({ message: "Todo added successfully", data });
    } catch (err) {
        res.status(400).json({ message: "Failed to add todo", error: err.message });
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        todo.complete = !todo.complete
        await todo.save()
        res.json({message: 'Updated successfully!', todo});
    } catch (err) {
        res.status(400).json({message: 'Update Failed', error: err.message});
    }
}

exports.deleteAllTodos = async (req, res) => {
    try {
        await Todo.deleteMany({});
        res.json({ message: 'All todos deleted successfully!' });
    } catch (err) {
        res.status(400).json({ message: 'Delete failed.', error: err.message });
    }
}

