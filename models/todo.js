const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    content:{
        type: String, 
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo;