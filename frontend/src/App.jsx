import { useTasks } from "./context/taskContext";
import TaskList   from './components/TaskList';
import TaskForm   from './components/TaskForm';
import TaskFilter from './components/taskFilter';



export default function App() {
  const { tasks, loading } = useTasks();
  const done = tasks.filter(t => t.completed).length;
    return (
        
        <div className="app">
            <h1>Task Manager</h1>
            <TaskForm />
            <TaskFilter />
            <TaskList />
            <footer>{done} / {tasks.length} completed</footer>
        </div>
    );
}   

