import './App.css'
import CategorySelector from './features/categories/CategorySelector';
import { useState } from 'react';
import TaskList from './features/tasks/TaskList';

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
   <div>
    <h1>Productivity Tracker</h1>
    <CategorySelector setSelectedCategory={setSelectedCategory}/>
    <TaskList categoryId={selectedCategory}/>
   </div>
  )
}

export default App
