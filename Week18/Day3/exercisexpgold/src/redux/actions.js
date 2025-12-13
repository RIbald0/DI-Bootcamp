export const addTask = (category , text) => {

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    }

    return {
        type: 'ADD_TASK',
        payload: {
            category: category,
            task: newTask
    }
  }
}

export const deleteTask = (category, id) => {
    return {
        type: 'DELETE_TASK',
        payload: { 
            category: category, 
            id: id 
        }
    }
}



export const completeTask = (category , id) => {
    return {
        type: 'COMPLETE_TASK',
        payload: {
            category: category,
            id: id
        }
    }
}