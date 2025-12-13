import { createSlice , createSelector } from '@reduxjs/toolkit';

const initialState = 
[
    {
        id: 101,
        title: 'Buy Milk',
        categoryId: 2,
        completed: false
    }
]

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        toggleTask: (state, action) => {
            const taskStatus = state.find(task => task.id === action.payload)
            if(taskStatus){
                taskStatus.completed = !taskStatus.completed
            }
        },
        editTask: (state, action) => {
            const nameTask = state.find(task => task.id === action.payload.id)
            if(nameTask){
                nameTask.title = action.payload.title,
                nameTask.categoryId = action.payload.categoryId
            }
        }
    }
});

export const selectAllTasks = (state) => state.tasks;

export const selectCompletedTasks = createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter((task) => task.completed === true).length
);

export const selectTasksByCategory = createSelector(
    [
        selectAllTasks,
        (state, categoryId) => categoryId
    ],
    (tasks, categoryId) => {
        if(!categoryId || categoryId === 'All'){
            return tasks;
        }
       return tasks.filter(task => task.categoryId === categoryId); 
    }
)

export const { addTask , deleteTask , toggleTask , editTask } = tasksSlice.actions;

export default tasksSlice.reducer;