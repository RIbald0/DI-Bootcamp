import { TaskProvider } from './components/TaskContext.jsx'
import { AddTask } from './components/AddTask.jsx'
import { TaskList } from './components/TaskList.jsx'
import { FilterTask } from './components/TaskFilter.jsx'
import './App.css'

function App() {
  return (
    <TaskProvider>      
      <div className="App" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <h1>Task Manager</h1>
        <AddTask />       
        <FilterTask />
        <hr />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App
