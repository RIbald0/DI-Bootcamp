import './App.css'
import AddTask from './features/todo/AddTodo'
import ToDoList from './features/todo/ToDoList'

function App() {

  return (
    <div>
      <h1>Redux To Do List</h1>
    <AddTask />
    <ToDoList />
    </div>
  )
}

export default App
