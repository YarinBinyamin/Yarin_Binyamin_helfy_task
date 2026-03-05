import { Router } from "express";
import * as service from '../services/taskService.js'
import { get } from "../app";
const router = Router ();

router.get('/', getAllTasks)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
router.post('/:id/toggle', toggleTask)

export default router