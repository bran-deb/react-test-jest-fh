import React, { useState } from 'react';
import { PropTypes } from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => setCounter(counter + 1)
    const handleRess = () => setCounter(counter - 1)
    const reset = () => setCounter(value)

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

CounterApp.prototype = {
    value: PropTypes.number
}

export default CounterApp;