export const increment = () => {
    return {
        type: "increment"
    }
}

export const decrement = () => {
    return {
        type: "decrement"
    }
}

export const incrementByVal = (val) => {
    return {
        type: 'incrementByVal',
        payload: val
    }
}