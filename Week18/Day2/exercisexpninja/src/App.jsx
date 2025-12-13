import { TaskProvider } from './components/TaskProvider.jsx';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import './App.css';

function App() {
  return (
    // 1. The Provider wraps everything
    <TaskProvider>
      
      <div className="App">
        <h1>Task Manager</h1>
        
        {/* 2. The Form to add tasks */}
        <AddTask />
        
        <hr />
        
        {/* 3. The List to show tasks */}
        <TaskList />
      </div>

    </TaskProvider>
  );
}

export default App;
