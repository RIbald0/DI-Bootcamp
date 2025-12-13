import React, { createContext, useReducer } from "react";

export const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload){
                        return {...task, completed: !task.completed}
                    } else {
                        return task
                    }
                })
            };

        case "EDIT_TASK":
            // Payload expects: { id: 123, text: "New Value" }
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id){
                        return {...task, text: action.payload.text}
                    } else {
                        return task
                    }
                })
            };

        case "FILTER_TASK":
            return {
                ...state,
                filter: action.payload
            };

        default:
            return state;
    }
}

export const TaskProvider = ({children}) => {
    // Initial State: An object with an empty array AND a filter string
    const [state, dispatch] = useReducer(taskReducer, { tasks: [], filter: 'ALL' });

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}