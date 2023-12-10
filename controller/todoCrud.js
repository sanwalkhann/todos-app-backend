const Todo = require("../models/todo");

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { text, done } = req.body;
    const newTodo = new Todo({ text, done });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, done } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { text, done },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.params)

    await Todo.findByIdAndDelete(id);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
