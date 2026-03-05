const repo = require('../utils/taskRepo');
const {sortByDate , isValidationTask} = require('../utils/helpers');

function getAllTasks() {
    const Alltasks = repo.getAllTasks();
    return sortByDate(Alltasks);

}

function getTaskById(id) {
    const tasks = repo.getAllTasks();
    return tasks.find( t => t.id === id) || null
}

function createTask(task) {
    const checkedTask = isValidationTask(task)
    if (!checkedTask) {
        throw new Error('invalid task data for creation')
    }
    return repo.createTask(task)
}

function updateTask(id, task) {
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

module.exports = {getAllTasks, getTaskById, createTask, updateTask, deleteTask, toggleTask}



