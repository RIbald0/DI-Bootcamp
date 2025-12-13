import React from "react";
import { useState } from 'react'


const Events = () => {

    
    let [isToggleOn, setIsToggleOn] = useState(true)

    const changeButton = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn)

    }


    const clickMe = () => {
        alert('I was clicked')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            alert(e.target.value)
        }
    }


    return (
        <>
            <button onClick={() => clickMe()}>Click Me</button>
            <input type="text" onKeyDown={(e) => handleKeyDown(e)}/>
            <button onClick={() => changeButton()}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </>
    )
}

export default Events