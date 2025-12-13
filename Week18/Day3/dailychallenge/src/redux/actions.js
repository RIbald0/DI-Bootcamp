export const addTask = (date, text) => {

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    }

    return {
        type: 'ADD_TASK',
        payload: {
            date: date,
            task: newTask
        }
}
} 

export const deleteTask = (date, id) => {
    return {
        type: 'DELETE_TASK',
        payload: {
            date: date,
            id: id
        }
    }
}

export const editTask = (date , id , text) => {
    return {
        type: 'EDIT_TASK',
        payload: {
            date: date,
            id: id,
            text: text
        }
    }
}