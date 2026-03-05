import { useTasks } from '../context/taskContext';

export default function TaskFilter() {
  const { filter, setFilter, tasks } = useTasks();

  // basic filter
  const counts = {
    all:tasks.length,
    pending:tasks.filter(t => !t.completed).length,
    completed:tasks.filter(t =>  t.completed).length,
  };

  return (
    <div className="task-filter">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            All ({counts.all})
        </button>
        <button className={filter === 'pending' ? 'active' : ''} onClick={() => setFilter('pending')}>
            Pending ({counts.pending})
        </button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
            Completed ({counts.completed})
        </button>
    </div>
  );    
}