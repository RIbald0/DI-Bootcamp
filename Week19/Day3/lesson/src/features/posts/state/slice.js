import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: ''
};

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const res = await axios(POST_URL);
    return res.data;
})


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {
        addLike: (state, action) => {
            const { id, name }= action.payload
            const post = state.posts.find(post => post.id == id)
            if(post) {
                post.reactions[name]++
            }
        }
    },
    extraReducers(builder){
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'success';
            state.posts = action.payload.map( post => {
            return {...post, reactions: {like: 0}}
            })
        });
            //const reactions = {
            //    like: 0
            //}

            //const postWithReactions = action.payload.map(post => {
            //    return {...post, reactions}
            //})
            //state.posts = postWithReactions;       
        builder.addCase(fetchPosts.rejected, (state) => {
            state.status = 'error'
        })      
    }
});


export default postsSlice.reducer
export const { addLike } = postsSlice.actions;