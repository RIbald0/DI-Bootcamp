import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux'
import { addTask , deleteTask , completeTask } from "../redux/actions";

const Task = () => {
    const tasks = useSelector((state) => state.taskReducer)

    const dispatch = useDispatch()

    const [text, setText] = useState('');


    return (
  <div>
            
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={() => {dispatch(addTask(text)); setText('')}}>Add Task</button>
            </div>
                    <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}                  
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                    <button onClick={() => dispatch(completeTask(task.id))}>{task.completed ? 'Undo' : 'Complete'}</button>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default Task