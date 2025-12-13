import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const todoListreducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return[...state, action.payload];
        case "DELETE_ITEM":
            return state.filter(item => item.id !== action.payload)
        default:
            return state;
    }
}

const TodoList = () => {
    const [todo, dispatch] = useReducer(todoListreducer, [])

    const [input, setInput] = useState('')

    const handleAdd = () => {
        if(input.trim() === '') return

        const newItem = {
            id: Date.now(),
            text: input
        };

        dispatch({ type: 'ADD_ITEM', payload: newItem});

        setInput('');
    }

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
            
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add an item..."
                    style={{ flexGrow: 1, padding: '8px' }} 
                />
                <button 
                    onClick={handleAdd}
                    style={{ padding: '8px 16px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Add
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todo.map((item) => (
                    <li key={item.id} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        padding: '10px', 
                        borderBottom: '1px solid #ccc',
                        alignItems: 'center'
                    }}>
                        {item.text}
                        
                        <button 
                            onClick={() => dispatch({type: 'DELETE_ITEM', payload: item.id})}
                            style={{ 
                                backgroundColor: 'red', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '4px',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default TodoList;