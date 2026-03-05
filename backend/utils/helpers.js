function sortByDate(tasks) {
    return tasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
}



function isValidationTask(task) {
    if (!task.title || typeof task.title !== 'string') {
        return false
    }   
    if (task.description && typeof task.description !== 'string') {
        return false
    }                                   
    if (task.completed && typeof task.completed !== 'boolean') {
        return false
    }   
    if (task.color && typeof task.color !== 'string') {
        return false
    }                                                               
    if (task.priority && !['low', 'medium', 'high'].includes(task.priority)) {
        return false
    }
    return true
}
module.exports = {sortByDate, isValidationTask}