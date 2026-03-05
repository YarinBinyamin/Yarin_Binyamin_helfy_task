
const service = require('../services/taskservice');
const getAllTasks = (req, res) => {
    try {
        const tasks = service.getAllTasks();
        res.json(tasks)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getTaskById = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const task = service.getTaskById(id)

        if (!task) {    
            return res.status(404).json({ message: 'Task not found' })
        }   
        res.json(task)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}



 const createTask = (req, res) => {
    try {
        const task = req.body
        const newTask = service.createTask(task)
        res.status(201).json(newTask)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}   

 const updateTask = (req,res) => {
    try{
        const id = parseInt(req.params.id)
        const task = req.body
        const theUpdatedTask = service.updateTask(id, task)
        res.json(theUpdatedTask)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

 const deleteTask = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        service.deleteTask(id)
        res.status(204).send()
    }

    catch (err) {
        res.status(400).json({ message: err.message })
    }   
}

 const toggleTask = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const updatedTask = service.toggleTask(id)
        res.json(updatedTask)
    }catch (err) {
        res.status(400).json({message: err.message})
    }           
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask, toggleTask }