let tasks = []
let idCounter = 1


function cloneTasks() {
    return tasks.map( task => ({ ...task }))
}
// return clone of them - saftey
function getAllTasks() {
    return cloneTasks()
}

// create task
function createTask(data) {
    const newTask = {
        id: idCounter++,
        title: data.title,
        description: data.description ?? "",
        completed: data.completed ?? false,
        createdAt: data.createdAt ?? new Date().toISOString(),
        color : data.color ?? "#f59e0b",
        priority: data.priority ?? "medium"
    }

    tasks.push(newTask)
    return newTask
}

// update task (toggle)
function updateTask(id, task) {
    const index = tasks.findIndex(t => t.id === id)
    if (index === -1) {
        return null
    }

    const currentTask = tasks[index]
    const updatedTask = {
        ...currentTask,
        ...task
    }

    tasks[index] = updatedTask
    return updatedTask
}

// delete task
function deleteTask(id) {
    const index = tasks.findIndex( t => t.id === id)
    if (index === -1) {
        return false
    }   
    tasks.splice(index, 1)
    return true
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask }