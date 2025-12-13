import { configureStore } from "@reduxjs/toolkit";
import todos from '../features/todo/todoSlice'

const store = configureStore({
    reducer: {
        todos
    }
})

export default store