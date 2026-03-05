const express = require('express');
const rounter = express.Router();
// services task 

// get all tasks
rounter.get('/tasks', (req, res) => {
    try {
        const tasks = service.getAllTasks();
        res.json(tasks)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }   
})  

// create task
rounter.post('/tasks', (req, res) => {
    try {
        const task = req.body
        const newTask = service.createTask(task)
        res.status(201).json(newTask)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }   
})  
// update task
rounter.put('/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const task = req.body
        const TheUpdatedTask = service.updateTask(id, task)
        res.json(TheUpdatedTask)
    } catch (err) {
        res.status(400).json({ message: err.message })
    } }          
)  

// delete task
rounter.delete('/tasks/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)      
        service.deleteTask(id)
        res.status(204).send()
    } catch (err) {         
        res.status(400).json({ message: err.message })
    }}
)  
// toggle task
rounter.post('/tasks/:id/toggle', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const updatedTask = service.toggleTask(id)
        res.json(updatedTask)
    }catch (err){
        res.status(400).json({message: err.message
        })
    }}
    )