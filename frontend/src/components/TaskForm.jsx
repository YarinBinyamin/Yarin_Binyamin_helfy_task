import {  useEffect, useState } from "react";
import { useTasks } from "../context/taskContext";
 
const EMPTY = {
    title:'',
    description:'',
    priority:'medium',
    color:'#6d6d6d',
};
 const optionalCOLORS = ['#6d6d6d','#314097','#ef4444','#6d6309','#316338'];

export default function TaskForm() {
  const { addTask, editTask, editingTask, setEditingTask } = useTasks();
  const [open,setOpen]=useState(false);
  const [form,setForm]=useState(EMPTY);
  const [loading,setLoading]=useState(false);
  const [error, setError]=useState('');

  useEffect(() => {
    if (editingTask) {
      setForm({
        title:       editingTask.title,
        description: editingTask.description || '',
        priority:    editingTask.priority    || 'medium',
        color:       editingTask.color       || optionalCOLORS[0],
      });
      setOpen(true);
    }
  }, [editingTask]);

    const isEditing = Boolean(editingTask);

    const handleClose = () => {
      setOpen(false);
      setForm(EMPTY);
      setEditingTask(null);
      setError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title.trim()) {
            setError('title is needed');
            return;
        }
        setLoading(true);
        try {
          if (isEditing) {
            await editTask(editingTask.id, form);
          }
          else {
            await addTask(form);
          }   
          handleClose();
        } catch (err) {
          setError(err.message || 'An error occurred');
        } finally {
          setLoading(false);
        }
      };

 return (
    <div className="task-form-container">
      <button onClick={() => setOpen(true)}>Add Task</button>
      {open && (
        <div className="task-form">
          <h2>{isEditing ? 'Edit Task' : 'Add New Task'}</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value })}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <div className="color-options">
              {optionalCOLORS.map((color) => (
                <div
                  key={color}
                  className={`color-option ${form.color === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setForm({ ...form, color })}
                />
              ))}
            </div>
            <div className="form-actions">
              <button type="submit" disabled={loading}>{isEditing ? 'Update' : 'Create'}</button>
              <button type="button" onClick={handleClose}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );

}