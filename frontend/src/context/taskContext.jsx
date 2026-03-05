import { createContext, useContext, useReducer, useEffect } from 'react';
import { getAllTasks , createTask, updateTask, deleteTask, toggleTask } from '../services/taskServices.js';
const initialState = { tasks: [], loading: false, error: null , filter: 'all', editingTask: null };


function reducer(state, action) {
  switch (action.type) {
    case 'setLoading':
      return { ...state, loading: action.payload };
    case 'setError':
      return { ...state, error: action.payload, loading: false };
    case 'setTasks':
      return { ...state, tasks: action.payload, loading: false, error: null };
    case 'addTask':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'updateTask':
      return { ...state, tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload : t) };
    case 'deleteTask':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
    case 'setFilter':
      return { ...state, filter: action.payload };
    case 'setEditing':
        return { ...state, editingTask: action.payload };
    default:
      return state;
  }
}

const TaskContext = createContext();
 
export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // first - fectch
    useEffect(() => {
        getAllTasks().then(tasks => dispatch({ type: 'setTasks', payload: tasks }))
            .catch(err => dispatch({ type: 'setError', payload: err.message }));
    }, []);


const addTask = async (task) => {
    try {
        const newTask = await createTask(task);
        dispatch({ type: 'addTask', payload: newTask });
    } catch (err) {
        dispatch({ type: 'setError', payload: err.message });
    }
}
const editTask = async (id, task) => {
    try {
        const updatedTask = await updateTask(id, task);
        dispatch({ type: 'updateTask', payload: updatedTask });
    }
    catch (err) {
        dispatch({ type: 'setError', payload: err.message });
    }
}
const removeTask = async (id) => {  
    try {
        await deleteTask(id);
        dispatch({ type: 'deleteTask', payload: id });
    }
    catch (err) {
        dispatch({ type: 'setError', payload: err.message });
    }
}
const toggleTaskById = async (id) => {
    try {
        const updatedTask = await toggleTask (id);
        dispatch({ type: 'updateTask', payload: updatedTask });
    }
    catch (err) {
        dispatch({ type: 'setError', payload: err.message });
    }
}
const setFilter = (filter) => {
    dispatch({ type: 'setFilter', payload: filter });
}
const setEditingTask = (task) => {
    dispatch({ type: 'setEditing', payload: task });
}

const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'pending') return !task.completed;
    return true;
});

return (
    <TaskContext.Provider value={{
      ...state,filteredTasks,addTask, editTask, removeTask, toggleTaskById,setFilter, setEditingTask,
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTasks() {return useContext(TaskContext);}
