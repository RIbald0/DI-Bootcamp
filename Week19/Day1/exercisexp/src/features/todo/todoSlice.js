import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        removeTodo: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload);
            if (todo) {
            todo.completed = !todo.completed; // We modify it directly!
            }
        }
    }
})

export const { addTodo , removeTodo , toggleTodo } = todoSlice.actions
export default todoSlice.reducer 