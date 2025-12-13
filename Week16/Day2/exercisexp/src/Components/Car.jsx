import React from "react";
import { useState } from 'react'
import Garage from './Garage.jsx'


const Car = (props) => {

    let [color, setColor] = useState('red')

    return (
        <>
        <header>This car is a {color} {props.carModel}</header>
        <Garage size="small" />
        </>
    )
}


export default Car