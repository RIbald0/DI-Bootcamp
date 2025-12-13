import { useState } from 'react'
import './App.css'
import Todo from './ToDo'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    setTodos(todos=>[...todos, "new task+>" + todos.length])
  }

  return (
    <>
      <h1>React memo / useCallback / useMemo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={() => addTask()}>Add Task</button>
        <Todo todos={todos}/>
      </div>
    </>
  )
}

export default App
