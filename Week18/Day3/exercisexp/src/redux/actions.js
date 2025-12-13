export const addTask = (text) => {

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    }

    return {
        type: 'ADD_TASK',
        payload: newTask
    }
}

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export const completeTask = (id) => {
    return {
        type: 'COMPLETE_TASK',
        payload: id
    }
}