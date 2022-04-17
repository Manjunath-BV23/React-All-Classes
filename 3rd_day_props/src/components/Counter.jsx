import { useState } from "react";

export function Counter(props) {
    const [counter, setCounter] = useState(props.value);

    const handleChange = (value) => {
        setCounter(counter + value)
    }

    
    
    return <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={() => handleChange(1)}>
            Increment
        </button> <br/>
        <button onClick={() => {
            if (counter >= 1){
                handleChange(-1)
            }
        }}>
            Decrement
        </button> <br/>
        <button onClick={() => {
            handleChange(counter)
        }}>Double</button>
    </div>
}