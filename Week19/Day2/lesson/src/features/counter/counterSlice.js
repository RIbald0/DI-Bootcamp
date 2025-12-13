import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    count: 0,
    status: ''
}

export const delayIncrementAsync = createAsyncThunk('counter/delay', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
           res(1)
        }, 5 * 1000)
    })
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
           state.count ++;
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
    extraReducers(builder){
        builder.addCase(delayIncrementAsync.pending, (state, action) => {
            console.log('pending=>', action)
            state.status = 'loading';

        })
        builder.addCase(delayIncrementAsync.fulfilled, (state, action) => {
            console.log('fullfilled=>', action)
            state.status = ''
            state.count += action.payload

        })
        builder.addCase(delayIncrementAsync.rejected, (state, action) => {
            console.log('rejected=>', action)
            

        })
    }
})






export const { increment , decrement , reset , addByVal , addByValPrepare} = counterSlice.actions
export default counterSlice.reducer