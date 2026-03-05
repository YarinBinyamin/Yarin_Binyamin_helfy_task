import { Request, Response } from 'express';
import * as service from '../services/taskService.js'

export const getAllTasks = async(req, res) => {
    try {
        const tasks = service.getAllTasks();
        res.json(tasks)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getTaskById = async(req, res) => {
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

export const createTask = async(req, res) => {
    try {
        const task = req.body
        const newTask = service.createTask(task)
        res.status(201).json(newTask)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}   

export const updateTask = async(req,res) => {
    try{
        const id = parseInt(req.params.id)
        const task = req.body
        const theUpdatedTask = service.updateTask(id, task)
        res.json(theUpdatedTask)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const deleteTask = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        service.deleteTask(id)
        res.status(204).send()
    }

    catch (err) {
        res.status(400).json({ message: err.message })
    }   
}

export const toggleTask = async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const updatedTask = service.toggleTask(id)
        res.json(updatedTask)
    }catch (err) {
        res.status(400).json({message: err.message})
    }           
}

