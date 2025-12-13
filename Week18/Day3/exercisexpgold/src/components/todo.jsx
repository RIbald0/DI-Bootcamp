import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux'
import { addTask , deleteTask , completeTask } from "../redux/actions";

const Task = () => {
    const tasks = useSelector((state) => state.taskReducer)

    const dispatch = useDispatch()

    const [text, setText] = useState('');
    const [category, setCategory] = useState('General')

    const handleAdd = () => {
        if(text.trim()) {
            dispatch(addTask(category, text));
            setText('');
        }
    }


    return (
  <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            
            {/* INPUT SECTION */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category (e.g. Work)"
                    style={{ width: '150px', padding: '5px' }}
                />
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a new task..."
                    style={{ flexGrow: 1, padding: '5px' }}
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            {/* LIST SECTION */}
            {/* We map over the Keys (Category Names) first */}
            {Object.keys(tasks).map((catName) => (
                <div key={catName} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                    
                    {/* Category Title */}
                    <h3 style={{ marginTop: 0, borderBottom: '2px solid #eee', paddingBottom: '5px' }}>
                        {catName}
                    </h3>

                    {/* Task List for THIS Category */}
                    <ul style={{ paddingLeft: '20px' }}>
                        {tasks[catName].length === 0 ? <p>No tasks.</p> : null}
                        
                        {tasks[catName].map((task) => (
                            <li key={task.id} style={{ marginBottom: '10px' }}>
                                
                                <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginRight: '10px' }}>
                                    {task.text}
                                </span>

                                <button onClick={() => dispatch(completeTask(catName, task.id))}>
                                    {task.completed ? 'Undo' : 'Done'}
                                </button>
                                
                                <button onClick={() => dispatch(deleteTask(catName, task.id))} style={{ marginLeft: '5px' }}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Task