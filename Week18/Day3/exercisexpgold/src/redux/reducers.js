const initialState = {};

export const taskReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TASK': {
            const { category, task } = action.payload;

            const currentTasks = state[category] || [];

            return {
                ...state,
                [category]: [...currentTasks, task]
            }
        }
        case 'DELETE_TASK': {
            const {category , id} = action.payload;
            const currentTasks = state[category] || [];

            return {
                ...state,
                [category]: currentTasks.filter(task => task.id !== id)
            }
        }
        case 'COMPLETE_TASK': {
            const {category, id} = action.payload

            const currentTasks = state[category] || [];

            return {
                ...state,
                [category]: currentTasks.map(task => {
                    if(task.id === id){
                        return {...task, completed: !task.completed}
                    } else {
                        return task;
                    }
                })
            }
        }
            
        default: 
        return state
    }
} 