const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
    index: true,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
