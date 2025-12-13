const initialState = [];

export const taskReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'COMPLETE_TASK':
            return state.map(task => {
                if(task.id === action.payload){
                    return {...task, completed: !task.completed}
                } else {
                    return task
                }
            })
        default: 
        return state
    }
} 