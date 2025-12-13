import { configureStore } from "@reduxjs/toolkit";
import inventories from '../features/inventory/inventorySlice'

const store = configureStore({
    reducer: {
        inventories
    }
})

export default store;