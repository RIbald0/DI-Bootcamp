import React, { useState } from "react";

const Phone = () => {
    const [brand, setBrand] = useState('Samsung');
    const [model, setModel] = useState('Galaxy S20');
    const [color, setColor] = useState('black');
    const [year, setYear] = useState('2020');


    const changeColor = () => {
        setColor('blue')
    }


return (
    <>
    <header>My phone is a {brand}</header>
    <p>It is a {color} {model} from {year}</p>
    <button onClick={() => changeColor()}>Change Color</button>
    </>
)

}

export default Phone;
