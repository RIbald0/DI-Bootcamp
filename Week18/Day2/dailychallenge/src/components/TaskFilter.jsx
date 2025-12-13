import { useContext } from "react";
import { TaskContext } from "./TaskContext.jsx";    

export const FilterTask = () => {
    const { dispatch } = useContext(TaskContext);

    return (
        <div style={{ marginBottom: "20px" }}>
            <button onClick={() => dispatch({type: 'FILTER_TASK', payload: 'ALL'})}>All</button>
            <button onClick={() => dispatch({type: 'FILTER_TASK', payload: 'COMPLETED'})}>Completed</button>
            <button onClick={() => dispatch({type: 'FILTER_TASK', payload: 'ACTIVE'})}>Active</button>
        </div>
    )
}
