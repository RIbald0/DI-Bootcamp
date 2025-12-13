import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { addTask, deleteTask, editTask } from "../redux/actions";

const Planner = () => {

    const  [date, setDate] = useState('2025-12-01')
    const [text, setText] = useState('');

    const tasks = useSelector((state) => state.taskPlannerReducer[date] || []);

    const dispatch = useDispatch();


    const handleAddTask = () => {
        if (text.trim() !== "") {
            dispatch(addTask(date, text)); 
            setText("");
        }
    };

    const handleEdit = (id, oldText) => {
        const newText = prompt("Update your task:", oldText);
        if (newText) {
            dispatch(editTask(date, id, newText));
        }
    }; 


    return (
        <div style={{ padding: "20px" }}>
            <div style={{ marginBottom: "20px" }}>
            <h1>Daily Planner</h1>
            <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add task for this day..."
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul>
                {tasks.length === 0 ? <p>No tasks for this day.</p> : null}
                
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: "10px" }}>
                        {task.text} 
                        
                        <button onClick={() => handleEdit(task.id, task.text)} style={{ marginLeft: "10px" }}>
                            Edit
                        </button>

                        <button onClick={() => dispatch(deleteTask(date, task.id))} style={{ marginLeft: "5px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Planner  