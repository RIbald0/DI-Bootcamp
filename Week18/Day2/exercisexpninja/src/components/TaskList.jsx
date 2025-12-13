import React, { useContext } from "react";
import { TaskContext } from "./TaskProvider.jsx"; // Make sure this matches your file name

const TaskList = () => {
    // 1. Grab the list of tasks AND the dispatch function
    const { tasks, dispatch } = useContext(TaskContext);

    return (
        <ul>
            {/* 2. Loop through every task in the list */}
            {tasks.map((task) => (
                <li key={task.id} style={{ marginBottom: "10px" }}>
                    
                    {/* 3. Logic: If completed, cross out the text */}
                    <span 
                        style={{ 
                            textDecoration: task.completed ? "line-through" : "none",
                            marginRight: "10px"
                        }}
                    >
                        {task.text}
                    </span>

                    {/* Button 1: Toggle Complete */}
                    {/* We send the ID so the reducer knows WHICH task to flip */}
                    <button onClick={() => dispatch({ type: "COMPLETE_TASK", payload: task.id })}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>

                    {/* Button 2: Delete */}
                    {/* We send the ID so the reducer knows WHICH task to filter out */}
                    <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
                        Delete
                    </button>

                </li>
            ))}
        </ul>
    );
};

export default TaskList;