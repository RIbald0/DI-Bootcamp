import React, { useState, type FC } from "react";

const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);
    const [lastAction, setLastAction] = useState<string>("");

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => {setCount(count + 1); setLastAction(`The count incremented. Now it's ${count + 1}`)}}>Increment</button>
            <button onClick={() => {setCount(count - 1); setLastAction(`The count decremented. Now it's ${count - 1}`)}}>Decrement</button>
            <p>Last Action: {lastAction}</p>
        </div>
    )
}

export default Counter;