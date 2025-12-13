import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inventory : []
};

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: initialState,
    reducers: {
        addProduct: (state , action) => {
            state.inventory.push(action.payload)
        },
        removeProduct: (state , action) => {
            state.inventory = state.inventory.filter(item => item.id !== action.payload)
        },
        updateQuantity: (state , action) => {
            const prodUpdate = state.inventory.find(item => item.id === action.payload.id)
            if(prodUpdate){
                prodUpdate.quantity = action.payload.quantity
            }
        }
    }
})

export const { addProduct , removeProduct , updateQuantity } = inventorySlice.actions;
export default inventorySlice.reducer