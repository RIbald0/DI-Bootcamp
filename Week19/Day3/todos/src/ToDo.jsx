import { memo } from "react"

const Todo = ({todos}) => {
    console.log('render: ToDo component')
    return (
        <>
        <h3>ToDo</h3>
        {todos && todos.map((item,index) => {
            return <div key={index}>{item}</div>
        })}
        </>
    )
}

export default memo(Todo);