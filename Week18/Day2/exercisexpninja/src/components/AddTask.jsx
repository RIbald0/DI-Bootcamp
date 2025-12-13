import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskProvider.jsx";

const AddTask = () => {
    const { dispatch } = useContext(TaskContext);

    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        dispatch({ type: "ADD_TASK", payload: newTask});
        
        setText("");
    };

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..." 
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default AddTask;