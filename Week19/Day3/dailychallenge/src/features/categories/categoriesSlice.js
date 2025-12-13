import { createSlice , createSelector } from '@reduxjs/toolkit'

const initialState = 
[
    {
        id: 1,
        name: 'Work'
    },
    {
        id: 2,
        name: 'Personal'
    }
];

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        addCategory: (state, action) => {
            state.push(action.payload)
        },
        deleteCategory: (state, action) => {
            return state.filter(cat => cat.id !== action.payload)
        },
        editCategory: (state, action) => {
            const nameCategory = state.find(cat => cat.id === action.payload.id)
            if(nameCategory){
                nameCategory.name = action.payload.name
            }
        }
    }
});

export const selectAllCategories = (state) => state.categories

export const { addCategory , deleteCategory , editCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;