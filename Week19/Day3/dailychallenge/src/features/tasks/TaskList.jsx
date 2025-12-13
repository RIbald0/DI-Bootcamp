import { selectAllTasks , selectCompletedTasks , selectTasksByCategory } from "./tasksSlice";
import { useSelector } from "react-redux";
import { addTask , deleteTask , toggleTask , editTask } from "./tasksSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useState } from "react";

const TaskList = ({ categoryId }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const dispatch = useDispatch();

    const tasks = useSelector((state) => selectTasksByCategory(state, categoryId));

    const completedCount = useSelector(selectCompletedTasks);


    const handleAddTask = (e) => {
        e.preventDefault();
        if(!newTaskTitle.trim()) return;

        dispatch(addTask({
            id: Date.now(),
            title: newTaskTitle,
            categoryId: categoryId,
            completed: false
        }));

        setNewTaskTitle('');
    }

    
    const handleToggle = useCallback((id) => {
        dispatch(toggleTask(id));
    }, [dispatch]);

    const handleDelete = useCallback((id) => {
        dispatch(deleteTask(id));
    }, [dispatch]);

    return (
            <div>
                <div
                style={{ 
                padding: '10px', 
                background: 'black', 
                marginBottom: '20px', 
                borderRadius: '5px' 
            }}>
                <h3 style={{ margin: 0 }}>
                    Total Completed Tasks: {completedCount}
                </h3>

                </div>
                <form onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
                    <input 
                    type="text"
                    placeholder="New Task..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    style={{ padding: '5px' }}
                    />
                    <button type="submit" style={{ marginLeft: '5px'}}>Add</button>

                </form>
            <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ marginBottom: '10px' }}>
                    <span 
                    onClick={() => handleToggle(task.id)}
                    style={{ 
                        textDecoration: task.completed ? 'line-through' : 'none',
                        marginRight: '10px'
                    }}>
                    {task.title}
                    </span>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))}
            </ul>
            </div>
    )    
};

export default TaskList;