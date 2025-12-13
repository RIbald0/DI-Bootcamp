import { configureStore } from "@reduxjs/toolkit";
import tasks from '../features/tasks/tasksSlice';
import categories from '../features/categories/categoriesSlice';

const store = configureStore({
    reducer: {
        tasks,
        categories
    }
});

export default store;