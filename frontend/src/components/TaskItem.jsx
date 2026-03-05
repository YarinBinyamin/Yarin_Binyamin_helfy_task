import { useState } from 'react';
import { useTasks } from '../context/taskContext';


const PRIORITY_COLORS = { low: '#22c55e', medium: '#f59e0b', high: '#ef4444' };
const PRIORITY_LABEL = { low: 'Low', medium: 'Med', high: 'High' };
const PRIORITY_CLASS = { low: 'priority-low', medium: 'priority-med', high: 'priority-high' };


export default function TaskItem({ task }) {
  const { toggleTaskById, removeTask, setEditingTask  } = useTasks();
  const [done, setDone] = useState(false);

  const handleDelete = () => {
    if (done) {
      removeTask(task.id);
    } else {
      setDone(true);
      setTimeout(() => setDone(false), 7000);
    }
  };
 
    return (
        <div className={`task-item ${done ? 'task-deleting' : ''}`} style={{ backgroundColor: task.color || '#fff' }}>
            <div className="task-header">
                <h3>{task.title}</h3>
                <div className={`priority ${PRIORITY_CLASS[task.priority]}`} title={PRIORITY_LABEL[task.priority]}></div>
            </div>
            {task.description && <p>{task.description}</p>}
            <div className="task-actions">
                <button onClick={() => toggleTaskById(task.id)}>{task.completed ? 'mark Incomplete' : 'mark complete'}</button>
                <button onClick={() => setEditingTask(task)}>Edit</button>
                <button onClick={handleDelete}>{done ? 'confirm delete' : 'delete'}</button>
            </div>
        </div>
    );

}

