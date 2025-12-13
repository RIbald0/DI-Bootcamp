import React from "react";
import { useState } from "react";
import { useRef } from "react";


const CharacterCounter = () => {

    const inputRef = useRef();

    const [counter, setCounter] = useState(0)

    const handleInput = () => {
        const finalInput = inputRef.current.value.length
        setCounter(finalInput)
    }



    return (
        <>
        <input onChange={handleInput} type="text" ref={inputRef} placeholder="Type something here..." />
        <p>Character Count: {counter}</p>
        </>
    )

}

export default CharacterCounter
