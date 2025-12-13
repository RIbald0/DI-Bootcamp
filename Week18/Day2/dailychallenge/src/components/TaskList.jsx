import { useContext, useState, useRef } from "react"; 
import { TaskContext } from "./TaskContext.jsx";

export const TaskList = () => {
    const { state, dispatch } = useContext(TaskContext);

    // Track which ID is being edited
    const [editingId, setEditingId] = useState(null); 
    
    // Ref to grab value from input
    const editInputRef = useRef(null); 

    // Function to Save Edits
    const handleSave = (id) => {
        const newText = editInputRef.current.value;
        dispatch({ type: "EDIT_TASK", payload: { id: id, text: newText } });
        setEditingId(null); // Stop editing
    };

    // Filter Logic
    const filteredTasks = state.tasks.filter((task) => {
        if (state.filter === 'COMPLETED') return task.completed === true;
        if (state.filter === 'ACTIVE') return task.completed === false;
        return true;
    });

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredTasks.map((task) => (
                <li key={task.id} style={{ marginBottom: "10px", padding: "10px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: "10px" }}>
                    
                    {/* --- LOGIC: Are we editing THIS task? --- */}
                    {editingId === task.id ? (
                        /* YES: Show Input + Save */
                        <>
                            <input 
                                type="text" 
                                defaultValue={task.text} 
                                ref={editInputRef} 
                                style={{ padding: "5px", flexGrow: 1 }}
                            />
                            <button onClick={() => handleSave(task.id)}>Save</button>
                            <button onClick={() => setEditingId(null)}>Cancel</button>
                        </>
                    ) : (
                        /* NO: Show Text + Edit Button */
                        <>
                            <span style={{ 
                                textDecoration: task.completed ? "line-through" : "none",
                                flexGrow: 1,
                                color: task.completed ? "gray" : "black"
                            }}>
                                {task.text}
                            </span>
                            <button onClick={() => setEditingId(task.id)}>Edit</button>
                        </>
                    )}
                    {/* -------------------------------------- */}

                    <button onClick={() => dispatch({type: "TOGGLE_TASK", payload: task.id})}>
                        {task.completed ? "Undo" : "Done"}
                    </button>
                    
                    <button onClick={() => dispatch({type: "DELETE_TASK", payload: task.id})} style={{ backgroundColor: "#ffcccc", border: "1px solid red" }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}