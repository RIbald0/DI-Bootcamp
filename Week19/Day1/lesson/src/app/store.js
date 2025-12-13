import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
//import { combineReducers } from '@reduxjs/toolkit'

//const appReducer = combineReducers({
//    counterReducer
//})

const store = configureStore({
    reducer: {
        counterReducer
    }
})

export default store;