import React, { useState } from 'react';

const CounterApp = () => {

    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter + 1)
    const handleRess = () => setCounter(counter - 1)
    const reset = () => setCounter(0)



    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleRess}>-1</button>
        </>
    )
}


export default CounterApp;