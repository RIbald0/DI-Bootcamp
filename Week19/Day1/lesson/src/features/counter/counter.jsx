import React from "react";
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , reset , addByVal , addByValPrepare} from "./counterSlice";
import { useRef } from "react";

export default function Counter() {
    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()
    const numRef = useRef()
    const numRef2 = useRef()

    const increment5Sec = () => {
        setTimeout(() => {
        dispatch(increment())
        }, 5 * 1000)
    }



    return (
        <>
        <h2>Counter</h2>
        <h3>Count: {count}</h3>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(reset())}>RESET</button>
        <div>
            <input 
            type="number"
            ref={numRef} 
            />
            <input 
            type="number"
            ref={numRef2} 
            />
            <button onClick={() => dispatch(addByVal([numRef.current.value, numRef2.current.value]))}>ADD BY INPUT VALUE</button>
            <button onClick={() => dispatch(addByValPrepare(3, 5))}>ADD BY INPUT PREPARE</button>
        </div>
        </>
    )
}