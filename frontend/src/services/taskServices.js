const BASE = 'http://localhost:4000/tasks';
const handle = async (res) => { if (!res.ok) throw new Error(`API error ${res.status}`); if (res.status === 204) return null; return res.json(); };
export const getAllTasks = ()=> fetch(BASE).then(handle);
export const createTask  = (data)     => fetch(BASE, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(handle);
export const updateTask  = (id, data) => fetch(`${BASE}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(handle);
export const deleteTask  = (id)       => fetch(`${BASE}/${id}`, { method: 'DELETE' }).then(handle);
export const toggleTask  = (id)       => fetch(`${BASE}/${id}/toggle`, { method: 'POST' }).then(handle);