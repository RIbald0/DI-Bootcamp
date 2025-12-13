import { configureStore , combineReducers } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/state/slice';

const appReducer = combineReducers({
    postsReducer
});

const store = configureStore({
    reducer: appReducer
})

export default store;