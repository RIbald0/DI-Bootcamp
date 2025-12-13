import { configureStore } from '@reduxjs/toolkit'
import { taskPlannerReducer } from './reducers'

const store = configureStore({
    reducer: {
        taskPlannerReducer
    }
});

export default store;