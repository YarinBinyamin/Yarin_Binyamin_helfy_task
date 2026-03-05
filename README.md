# Task Manager App

A full-stack task management application with a Node.js + Express backend (in-memory storage) and a React frontend featuring an endless animated carousel.

---

## Project Structure

```
root/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── controller/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── services/
│   │   └── taskService.js
│   └── utils/
│       ├── taskRepo.js
│       └── helpers.js
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── context/
        │   └── taskContext.jsx
        ├── services/
        │   └── taskService.js
        └── components/
            ├── TaskList.jsx
            ├── TaskItem.jsx
            ├── TaskForm.jsx
            └── taskFilter.jsx
```

---

## Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <repo-folder>
```

---

## Running the Backend

```bash
cd backend
npm install
npm start
```

The backend runs on **http://localhost:4000**

---

## Running the Frontend

Open a **second terminal**:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on **http://localhost:3000**

Open your browser at **http://localhost:3000**

> Make sure the backend is running first before opening the frontend.

### Production Build (optional)

If you need an optimized production bundle of the frontend:

```bash
cd frontend
npm run build
```

This outputs static assets under `frontend/dist/`.

---

## API Documentation

Base URL: `http://localhost:4000`

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a single task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |
| POST | `/tasks/:id/toggle` | Toggle task completion status |

### Task Object

```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk and eggs",
  "completed": false,
  "priority": "high",
  "color": "#3b82f6",
  "createdAt": "2026-03-05T10:00:00.000Z"
}
```

### POST /tasks — Request Body

```json
{
  "title": "Task title",
  "description": "Optional description",
  "priority": "low | medium | high",
  "color": "#hex"
}
```

---
---
### My pov
It took me 4.5 hours, more than required.
i had troubles with the carousel scrolling which make the app do not working perfectly and wate time of fixing it . hopefully you'll find good implementations in this project.  