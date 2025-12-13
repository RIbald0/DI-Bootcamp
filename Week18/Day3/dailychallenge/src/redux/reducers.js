const initialState = {}

export const taskPlannerReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TASK': {

            const { date , task } = action.payload;

            const currentTasks = state[date] || [];

            return {
                ...state,
                [date]: [...currentTasks, task]
            };
        }

        case 'DELETE_TASK': {
            const { date , id } = action.payload;

            const currentTasks = state[date] || [];

            return {
                ...state,
                [date]: currentTasks.filter(task => task.id !== id)
            }
        }

        case 'EDIT_TASK': {
            const { date , id , text } = action.payload

            const currentTasks = state[date] || [];

            return {
                ...state,
                [date]: currentTasks.map(task => {
                    if(task.id === id){
                        return {...task, text
                        };} else {return task

                    }
                })
            }
        }

         default:
            return state;
    }
}