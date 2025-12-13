import { useDispatch } from "react-redux";
import { removeTodo , toggleTodo } from "./todoSlice";

const ToDoItem = (props) => {
    const dispatch = useDispatch()

    const deleteTask = (id) => {
        dispatch(removeTodo(id))
    }

    const completeTask = (id) => {
        dispatch(toggleTodo(id))
    }

    return (
        <li style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
        <input
        type="checkbox"
        checked={props.todo.completed}
        onClick={() => completeTask(props.todo.id)}
        />
        <span style={{ 
                textDecoration: props.todo.completed ? "line-through" : "none",
                flexGrow: 1 
            }}>
                {props.todo.text}
        </span>
        <button onClick={() => deleteTask(props.todo.id)}>Delete</button>
        </li>
    )
}

export default ToDoItem