const repo = require('../utils/taskrepository');
const {sortByDate , isValidationTask} = require('../utils/helpers');

export const getAllTasks = async function() {
    const Alltasks = repo.getAllTasks();
    return sortByDate(Alltasks);

}

export const getTaskById = async function(id) {
    const tasks = repo.getAllTasks();
    return tasks.find( t => t.id === id) || null
}

export const createTask = async function(task) {
    const ToCheckTask = repo.createTask(task)
    const checkTask = isValidationTask(ToCheckTask)
    if (!checkTask) {
        throw new Error('invalid task data for creation')
    }
    return ToCheckTask
}

export const updateTask = async function(id, task) {
    const updatedTask = repo.updateTask(id, task)
    if (!updatedTask) {
          throw new Error('task not found for update')
    }  
    return updatedTask
}

function deleteTask(id) {
    const isDeleted = repo.deleteTask(id)
    if (!isDeleted) {
        throw new Error('task not found for deletion')
    }

    return isDeleted
}

function toggleTask(id) {
    const task = getTaskById(id)
    if (!task) {
        throw new Error('task not found for toggle')
    }   
    const updatedTask = repo.updateTask(id, { completed: !task.completed })
    return updatedTask
}   




