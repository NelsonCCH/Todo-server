const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  // the actual content of the todo task
  content: {
    type: String,
    required: true,
  },

  // indicate that todo is Done or not yet Done
  complete: {
    type: Boolean,
    default: false,
  },

  // record the creation time, in case we need to sort by this
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
