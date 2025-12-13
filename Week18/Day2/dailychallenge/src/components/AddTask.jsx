import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext.jsx";

export const AddTask = () => {
    const { dispatch } = useContext(TaskContext);
    const [text, setText] = useState('');

    const handleAdd = () => {
        if(text.trim() === '') return;

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        dispatch({ type: 'ADD_TASK', payload: newTask});
        setText('');
    }

    return (
        <div style={{ marginBottom: "20px" }}>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                style={{ padding: "8px", width: "70%" }}
            />
            <button onClick={handleAdd} style={{ padding: "8px 16px", marginLeft: "10px" }}>
                Add Task
            </button>
        </div>
    )
}