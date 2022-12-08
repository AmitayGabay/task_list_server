const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.delete("/", taskController.deleteTask);
router.put("/done", taskController.changeToDone);
router.put("/undone", taskController.changeToUndone);
router.delete("/todo-list", taskController.deleteTodoList);
router.delete("/done-list", taskController.deleteDoneList);

module.exports = router;