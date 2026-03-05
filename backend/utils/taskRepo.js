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
        color : data.color ?? "#3b82f6",
        priority: 'low' | 'medium' | 'high'
    }

    tasks.push(newTask)
    return newTask
}

// update task (toggle)
function updateTask(id, task) {
    const index = tasks.findIndex( t => t.id === id)
    if (index === -1) {
        return null
    }
    curTask = tasks[index]
    const updatedTask = {
        ...curTask,
        ...task
    }

    tasks[index] = updatedTask
    return TheUpdatedTask
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
