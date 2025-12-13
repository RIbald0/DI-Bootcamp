import React, { useEffect, useState } from "react";

const Color = () => {
    const [favoriteColor, setColor] = useState('red');
    useEffect(() => {
        alert('useEffect reached')
        setColor('yellow')
    })

    const changeColor = () => {
        setColor('blue')
    }

 


    return (
        <>
            <h1>My Favorite color is {favoriteColor}</h1>
            <button onClick={() => changeColor()}>Change Color</button>
        </>
    )
}

export default Color