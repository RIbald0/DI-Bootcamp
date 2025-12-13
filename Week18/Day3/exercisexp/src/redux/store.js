import { taskReducer } from "./reducers";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        taskReducer
    }
});

export default store;