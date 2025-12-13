const initialState = {
    count: 0
}


export const counterReducer = ( state=initialState , action ) => {
    switch (action.type) {
        case 'increment':
        return {...state, count: state.count +1}
        case 'decrement':
        return {...state, count: state.count - 1};
        case 'incrementByVal':
        return {...state, count: state.count + Number(action.payload)}
        default:
            return state
    }

    //if(action.type === 'increment'){
    //    return {...state, count: state.count + 1}
    //} else if(action.type === 'decrement'){
    //    return {...state, count: state.count - 1}
    //} else
    //return state;
};