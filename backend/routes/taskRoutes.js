const { Router } = require('express');
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask, toggleTask } = require('../controller/taskController');

const router = Router ();

router.get('/', getAllTasks)
router.get('/:id', getTaskById)

router.post('/', createTask)
router.post('/:id/toggle', toggleTask)

router.put('/:id', updateTask)
router.delete('/:id', deleteTask)


module.exports = router;