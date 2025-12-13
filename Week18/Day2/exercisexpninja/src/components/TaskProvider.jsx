import React, { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";

export const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch(action.type){
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    case "COMPLETE_TASK":
        return state.map(task => {
    if (task.id === action.payload) {
        return { ...task, completed: !task.completed }; 
    } else {
        return task;
    }
})
    default:
      return state;
  }
}

export const TaskProvider = ({children}) => {

    const [tasks, dispatch] = useReducer(taskReducer, [])



    return (
        <>
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
        </>
    )
}


export default TaskProvider