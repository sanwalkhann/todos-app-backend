// routes.js
const express = require('express');
const getCurrentDate = require('../controller/getDate.js'); // Adjust the path based on your project structure


const controllers = require('../controller/todoCrud.js');


const router = express.Router();

router.get('/', (req, res) => {
  const currentDate = getCurrentDate();
  res.send(`${currentDate}`);
});


router.post('/crud' , controllers.createTodo )
router.get('/getalltodos' , controllers.getAllTodos )
router.put('/updatetodo/:id', controllers.updateTodo)
router.delete('/deletetodo/:id', controllers.deleteTodo)




module.exports = router;

