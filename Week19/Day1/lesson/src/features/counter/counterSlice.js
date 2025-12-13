import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            setTimeout(() => {
            state.count ++;
            },5 * 1000)
//        return {...state, count: state.count + 1}
        },
        decrement: (state) => {
            state.count --
        },
        reset: (state) => {
            state.count = 0
        },
        addByVal: (state, action) => {
            console.log(action)
            state.count += Number(action.payload[0]) + Number(action.payload[1])
            //state.count += Number(action.payload.a) + Number(action.payload.b)
        },
        addByValPrepare: {
            reducer(state,action){
                state.count += action.payload
            },
            prepare(a, b){
                return {payload: a + b}
            }
        }
    },
    //extraReducers(builder){}
})






export const { increment , decrement , reset , addByVal , addByValPrepare} = counterSlice.actions
export default counterSlice.reducer