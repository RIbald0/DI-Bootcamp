import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "./todoSlice";


const AddTask = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!text.trim()) return;
        dispatch(addTodo({ 
            id: Date.now(), 
            text: text, 
            completed: false 
        }))
        setText('')
    }

    return (
        <div style={{ marginBottom: '20px' }}>
        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        />
        <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
}


export default AddTask