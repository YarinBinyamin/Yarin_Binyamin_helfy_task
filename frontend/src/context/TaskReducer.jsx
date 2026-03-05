export const initialState = {
    tasks: [],
    loading: false,
    error: null
}

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
    default:
      return state;
  }
}