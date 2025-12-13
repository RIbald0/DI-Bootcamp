import { useSelector } from "react-redux";
import ToDoItem from "./TodoItem";



const ToDoList = () => {

    const todos = useSelector(state => state.todos)

    return (
     <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
        ))}
     </ul>
    )

}

export default ToDoList
