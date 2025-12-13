import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../Users/usersSlice'
//import { combineReducers } from '@reduxjs/toolkit'

//const appReducer = combineReducers({
//    counterReducer
//})

const store = configureStore({
    reducer: {
        counterReducer,
        usersReducer
    }
})

export default store;