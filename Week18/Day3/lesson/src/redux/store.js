import { counterReducer } from "./reducers.js";
//import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        counterReducer
    }
});

export default store;